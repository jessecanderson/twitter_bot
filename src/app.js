import express from "express";
import Twit from "twit";
import "dotenv/config";

const app = express();
const port = 3000;

const twitter = Twit({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_SECRET,
});

const trackFilters = ["#JavaScript", "#100DaysOfCode"];

// start stream and track tweets
const stream = twitter.stream("statuses/filter", { track: trackFilters });

const firstRun = () => {
  twitter.post(
    "statuses/update",
    { status: "Private bot has started up!" },
    function (err, data, response) {
      if (err != null) {
        console.log(err);
      }
      console.log(data);
    }
  );
};

stream.on("tweet", (tweet) => {
  console.log(tweet);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("Server has started");
  firstRun();
});
