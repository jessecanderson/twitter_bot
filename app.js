import express from "express";
import Twit from "twit";
import "dotenv/config";

const app = express();
const port = 3000;

const twitter = Twit({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_SECRET,
});

// start stream and track tweets
const stream = twitter.stream("statuses/filter", { track: "#JavaScript" });

stream.on("tweet", (tweet) => {
  console.log(tweet);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("Server has started");
});
