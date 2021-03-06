import express, { Application } from "express";
import Twit from "twit";
import "dotenv/config";

const app: Application = express();
const port = process.env.PORT || 8000;

const twitter = new Twit({
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

stream.on("tweet", (tweet: any) => {
  console.log(tweet);
});

app.get("/", (req: any, res: { send: (arg0: string) => void; }) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("Server has started");
  firstRun();
});
