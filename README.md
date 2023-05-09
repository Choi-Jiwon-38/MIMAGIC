# MIMAGIC v1.0
## 프로젝트 소개 (Project Introduction)

MIMAGIC [OpenAI API](https://openai.com/blog/openai-api)를 이용한 Keyword 기반의 웹 서비스 기획을 도와주는 웹 사이트입니다.간단한 키워드 몇 가지를 입력하는 것으로 서비스의 간단한 컨셉, 이름을 추천 받을 수 있습니다.

MIMAGIC 프로젝트는 [Create React App](https://github.com/facebook/create-react-app)을 이용하여 만들어졌습니다.

---

## 프로젝트 실행 방법 (How to run a project)

MIMAGIC에서는 자바스크립트 패키지 매니저로 `yarn`을 사용하였습니다.

1. terminal을 이용하여 프로젝트가 설치되길 원하는 경로로 이동 후, 다음 명령어를 통하여 프로젝트를 clone 합니다. <br> `git clone https://github.com/Choi-Jiwon-38/MIMAGIC.git`

2. 다음 명렁어를 통하여 프로젝트의 root 디렉토리로 이동합니다. <br> `cd MIMAGIC`

3. 프로젝트의 root 디렉토리에서 `yarn install` 명령어를 통하여 실행에 필요한 자바스크립트 패키지를 설치합니다. 

4. 프로젝트의 root 디렉토리에서 `node index.js` 명령어를 통하여 client 전송하는 HTTP 요청을 받기 위한 server를 실행합니다. <br> 기본적으로 3001번의 port를 사용하도록 되어있으며, 정상적으로 실행되어 listen 상태로 변경되면 <b>Node.js server port: 3001</b>라는 문구를 출력합니다.

5. 프로젝트의 root 디렉토리에서 `yarn start` 명령어를 통하여 React App(client)을 실행할 수 있습니다. <br> [http://localhost:3000](http://localhost:3000)에 접속하여 본인의 브라우저에서 확인할 수 있습니다.

---

## 기술 스택 (How to run a project)
### Environment
<div>
    <img src="https://img.shields.io/badge/visual studio code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
    <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
    <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
    <img src="https://img.shields.io/badge/github desktop-8338A5?style=for-the-badge&logo=github&logoColor=white">
</div>

### Config
<div>
    <img src="https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">
</div>

### Development
<div>
    <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
    <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
    <img src="https://img.shields.io/badge/tailwind css-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
    <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">
    <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
    <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
    <img src="https://img.shields.io/badge/recoil-ffffff?style=for-the-badge&logo=recoil&logoColor=white">
</div>

---

## 실행 가능 브라우저 (Broswer Supports)
|Safari|Firefox|Chrome|Edge|
|:---:|:---:|:---:|:---:|
|<img width="50" alt="Safari" src="https://user-images.githubusercontent.com/81795729/212740681-db8f927d-bada-42f2-ab38-68c49daab5e5.png">|<img width="50" alt="Firefox" src="https://user-images.githubusercontent.com/81795729/212741016-c6427bc2-3505-4b5c-a038-a86f310ceb34.png">|<img width="50" alt="Chrome" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/800px-Google_Chrome_icon_%28February_2022%29.svg.png">|<img width="50" alt="Edge" src="https://user-images.githubusercontent.com/81795729/212741188-7d9fa734-2ab6-4c76-9c5c-757f8e2ec0f6.png">|
|Latest ✔|Latest ✔|Latest ✔|Latest ✔|

---

## 프로젝트 아키텍처 (Project Architecture)

<img width="800" alt="프론트엔드 아키텍처" src="https://user-images.githubusercontent.com/81795729/236994399-1e147cdb-791c-4e56-9070-5c6d3346656a.png">

---

## 주요 기능 (Key Features)

### 1. 로그인 / 회원가입 (Sign In / Sign Up)
- 로그인, 회원가입 등, 사용자 관리를 위한 기능들은 [Firebase](https://firebase.google.com/?hl=ko)를 이용하여 구현 되었으며 `/src/firebase.js` 파일에서 초기 설정과 관련된 내용을 확인할 수 있습니다.
- API와 관련된 외부 노출에 민감한 정보들은 환경 변수로 선언해두었기 때문에 원활한 기능 실행을 위하여 root 디렉토리에 `.env` 파일을 추가해주어야 합니다.
```js
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FB_API_ID,
  measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID,
};
```
- firebase는 Admin Authentication API를 통하여 오류 코드를 쉽게 확인 및 관리할 수 있으며, 사용자를 위한 DB 구축이 자동적으로 이루어지기 때문에 사용하였습니다(오류 코드를 통한 예외 처리 예시는 아래 코드와 같습니다).
```js
// src/pages/Login.js 코드의 일부
...

 catch (err) {
    switch (err.code) {             // Admin Authentication API 오류 처리
    case "auth/user-not-found":     // 제공된 식별자에 해당하는 기존 사용자 레코드가 존재하지 않은 경우
        setErrorMsg("⚠ user not found");
        break;
    case "auth/wrong-password":     // 비밀번호가 일치하지 않는 경우
        setErrorMsg("⚠ wrong password");
        break;
    default:                        // 위 두 가지 경우를 제외한 나머지 API 오류에 해당하는 경우
        setErrorMsg("⚠ login failed");
        break;
    }
}
```
- 회원가입 단계에서 기입하는 username에서는 <b>'반드시'</b> email 형식의 value를 전달해주어야 합니다.
- 회원가입 및 로그인이 정상적으로 이루어진 경우, `localhost:3000/`으로 redirect 됩니다.
- 로그인 및 로그아웃은 React의 상태관리 라이브러리 recoil을 이용하여 회원의 로그인 정보(상태)를 담고 있는 userState의 값을 초기화, 할당해줍니다.

### 2. Keyword 기반 추천 시스템 (Keyword-based recommendation system)
- Keyword 기반 추천 기능은 [OpenAI API](https://openai.com/blog/openai-api)를 이용하여 제공하고 있습니다. `text-davinchi-003` 모델을 사용하고 있으며, 자세한 설정은 `/index.js` 파일의 OpenAIApi 관련 코드를 통하여 알 수 있습니다.
- Keyword는 단어, 문장 어떤 형태로 입력을 주어도 기대하는 결과값이 나오게끔 질문을 OpenAI API의 `createCompletion`을 통하여 message를 전달하는 과정에서 정해진 포맷에 맞추어 변환됩니다.
- node.js 서버의 연결이 끊겨있거나 port 번호가 다르게 설정되어 연결이 불가능한 경우에는 `localhost:3000/loading` 페이지에서 경고창이 출력되며 `localhost:3000/`으로 redirect 됩니다.
- server에서 요청한 응답이 정상적으로 return 된 경우에는 `localhost:3000/result` 페이지를 통하여 사용자에게 출력됩니다.

---

## 시연 연상 (Demo video)

[![2023-1 Web Client computing - MIMAGIC 시연 연상](https://img.youtube.com/vi/_mjNaBYIirk/0.jpg)](https://youtu.be/_mjNaBYIirk)
- 영상에 대한 설명은 유튜브의 자막 설정을 활성화하면 볼 수 있습니다.