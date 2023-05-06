const OpenAI = require("openai");
const { Configuration, OpenAIApi } = OpenAI;

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;

const configuration = new Configuration({
  organization: "org-FgsjoI9q5ZNlLHXDrPixCj05",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/", async (req, res) => {
  let { message } = req.body;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${message}`,
    max_tokens: 4000,
    temperature: 0,
  });
  if (response.data) {
    if (response.data.choices) {
      res.json({
        message: response.data.choices[0].text,
      });
    }
  }
});

app.listen(port, () => {
  console.log("Node.js server port: " + port);
});
