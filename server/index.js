const express = require('express');
const cors = require('cors');
const Filter = require('bad-words');
const rateLimit = require("express-rate-limit");
    


const monk = require('monk');
const app = express();
const db = monk(process.env.MONGO_URI || 'localhost/tweetme');

const filter = new Filter();
//tweets is a collection in our db
const tweets = db.get('tweets');

app.use(cors());
app.use(express.json());


app.get('/',(req, res) =>{
    res.json({
        message: "Hello Laxsan yooo"
    })
});



app.get('/tweets', (req, res) => {
    tweets.find().then(tweet => {
        res.json(tweet);
    });
});


function isValidTweet(tweet){
    return tweet.name && tweet.name.toString().trim() !== '' &&
    tweet.content && tweet.content.toString().trim() !== '';
}

app.use(rateLimit({
    windowMs: 30 * 1000, // 1 req / 30sec
    max: 1 
  }));

app.post('/tweets',(req, res) => {
    if(isValidTweet(req.body)){
        //insert into DB

        const tweet = {
            name: filter.clean(req.body.name.toString()),
            content: filter.clean(req.body.content.toString()),
            created: new Date()
        };


        tweets.insert(tweet)
            .then(createdTweet => {
            res.json(createdTweet);
            });
       
    }else{
        res.status(422);
        res.json({
            message: 'Sorry! Fields cannot be empty.'
        })
    }
});

app.listen(5000,() => {
    console.log("listening on port");
})