const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/',(req, res) =>{
    res.json({
        message: "Hello Laxsan"
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
            content: req.body.content.toString()
           

        }
        console.console.log(tweet);
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