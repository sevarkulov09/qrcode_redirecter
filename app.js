const express = require("express");
const app = express();
const qr = require("qrcode");

const PORT = 7500;

app.get("/processQRCode", (req, res) => {
  const deviceType = req.headers["user-agent"].includes("Android")
    ? "android"
    : req.headers["user-agent"].includes("iPhone")
    ? "ios"
    : "unknown";

  if (deviceType === "android") {
    res.redirect(
      "https://play.google.com/store/apps/details?id=com.tune.milliy&pcampaignid=web_share"
    );
  } else if (deviceType === "ios") {
    res.redirect("https://apps.apple.com/uz/app/milliy/id1297283006");
  } else {
    res.send("https://nbu.uz/uz/");
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
