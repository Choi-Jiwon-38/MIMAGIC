import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";
import axios from "axios";
import { admin } from "firebase-admin";
import { config } from "dotenv";

config();

const app = express();
app.use(cors({ origin: true }));

const getKakaoUser = async (token) => {
  const res = await axios.get("https://kapi.kakao.com/v2/user/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

const getToken = async (code) => {
  const body = {
    grant_type: "authorization_code",
    client_id: process.env.REACT_APP_KAKAO_REST_API_KEY || "",
    redirect_uri: process.env.REACT_APP_KAKAO_REDIRECT_URI || "",
    code,
  };

  const res = await axios.post(
    "https://kauth.kakao.com/oauth/token",
    new URLSearchParams(body)
  );
  return res.data;
};

const getAdminApp = () => {
  const serviceAccountKey = JSON.parse(process.env.SERVICE_ACCOUNT_KEY || "");

  const app = !admin.apps.length
    ? admin.initializeApp({
        credential: admin.credential.cert(serviceAccountKey),
      })
    : admin.app();

  return app;
};

const updateOrCreateUser = async (user) => {
  const app = getAdminApp();
  const auth = admin.auth(app);

  const kakaoAccount = user.kakao_account;
  const properties = {
    uid: `kakao:${user.id}`,
    provider: "KAKAO",
    displayName: kakaoAccount?.profile?.nickname,
    email: kakaoAccount?.email,
  };

  try {
    return await auth.updateUser(properties.uid, properties);
  } catch (error) {
    if (error.code === "auth/user-not-found") {
      return await auth.createUser(properties);
    }
    throw error;
  }
};

app.post("/kakao", async (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({
      code: 400,
      message: "code is a required parameter.",
    });
  }

  const response = await getToken(code);
  const token = response.access_token;
  const kakaoUser = await getKakaoUser(token);
  const authUser = await updateOrCreateUser(kakaoUser);
  const firebaseToken = await admin
    .auth()
    .createCustomToken(authUser.uid, { provider: "KAKAO" });
  return res.status(200).json({ firebaseToken });
});

exports.auth = functions
  .runWith({ secrets: ["SERVICE_ACCOUNT_KEY"] })
  .region("asia-northeast3")
  .https.onRequest(app);
