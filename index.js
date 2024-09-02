const express = require("express");
const app = express();
app.use(express.json());

const db = [];

app.get("/", (_, res) => {
  res.sendFile(__dirname + "/view/index.html");
});

app.get("/api/agency-request", (req, res) => {
  res.status(200).json(db);
});

app.post("/api/agency-request", (req, res) => {
  const { name, stdntNo, classcardId, classcardPw, amount } = req.body;
  if (db.some((e) => e.stdntNo === stdntNo)) {
    res.status(200).json({ success: false, msg: "이미 신청하셨습니다." });
  } else {
    db.push({ name, stdntNo, classcardId, classcardPw, amount });
    res.status(200).json({ success: true, msg: "신청되었습니다." });
  }
});

app.listen(3000, () => {
  console.log("listening in port 3000");
});

김휘영
young018
!follow74
1000