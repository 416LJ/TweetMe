const express = require('express');
const cors = require('cors');
const monk = require('monk');
const app = express();
const db = monk('localhost/tweetme');
//tweets is a collection in our db
const tweets = db.get('tweets');

app.use(cors());
app.use(express.json());

app.get('/',(req, res) =>{
    res.json({
        message: "Hello Laxsan yooo"
    })
});


function isValidTweet(tweet){
    return tweet.name && tweet.name.toString().trim() !== '' &&
    tweet.content && tweet.content.toString().trim() !== '';
}

app.post('/tweet',(req, res) => {
    if(isValidTweet(req.body)){
        //insert into DB

        const tweet = {
            name: req.body.name.toString(),
            content: req.body.content.toString(),
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