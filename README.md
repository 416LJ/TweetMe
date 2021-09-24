# TweetMe
## App to demonstrate a FULL STACK 🥞 (Client, Server, DBs).
### App to demonstrate System Design also.

#### Features :
* Anyone can send me a message 📩
* All tweets sent are visible by everyone 🗣.

![My picture](mypic.jpeg)


## Objectives

* [ ] 📝 System Design Diagram of Stack
* [ ] 🔎 Explain between Client and Server
* [ ] ⌨️ Get user input from Client
* [ ] ➡ Send input to to Server from Client with fetch to Server
* [ ] 📀 Store data in DB
* [ ] 🔎 Retrieve data from DB on Server 
* [ ] ⬅️ Retrieve data from Server on Client using fetch
* [ ] 🙈 Hide/Show element (UI client side)
* [ ] ➕ Add element to client side
* [ ] 🚀 Deploy Client online
* [ ] 🚀 Deploy DB online
* [ ] 🚀 Deploy Server online

## Front-end

* [ ] Create client folder
* [ ] Setup index.html
* [ ] Bring in external CSS :
  * url: http://getskeleton.com/
  * url: https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css
* [ ] Create header
* [ ] Create form
  * [ ] Name
  * [ ] Content
  * [ ] u-full-width to both inputs
* [ ] Get the form submit
* [ ] Hide the form
* [ ] Show loading GIF
* [ ] Get data from form
* [ ] Get user input from client
* [ ] Hide/Show elements (UI client side)

## Back-end

* [ ] Create server folder
* [ ] npm init -y
* [ ] npm install express morgan
* [ ] setup index.js
* [ ] add GET / route
* [ ] add POST / tweet route
  * [ ] log out

## Front-end

* [ ] fetch POST / tweet with form data
* [ ] diagnose potential issues
* [ ] send user input from client to server VIA fetch

## Back-end

* [ ] npm install cors
* [ ] make sure server is receiving data
* [ ] add JSON parser MWare
* [ ] validate input name and content
  * [ ] must be string
  * [ ] field cannot be empty
* [ ] if not valid
  * [ ] error code 422
  * [ ] invalid tweet (fields cannot be empty)
* [ ] setup DB connection
  * [ ] npm install monk
  * [ ] connect to db
  * [ ] created tweet collection
* [ ] if valid
  * [ ] create new tweet object with
    * [ ] name, content, timestamp
  * [ ] insert into DB
  * [ ] respond with newly created tweet
* [ ] store tweet in DB

## Front-end

* [ ] logout created tweet after POST
* [ ] show the form
* [ ] hide loading GIF

## Back-end

* [ ] GET / tweets
  * [ ] repsond with tweets
* [ ] retrieve tweets from DB on server

## Front-end

* [ ] fetch GET / tweets
  * [ ] iterate over tweets array
  * [ ] append each tweet to page
  * [ ] reverse order of tweets
  * [ ] show the form
  * [ ] hide loading GIF
* [ ] fetch GET / tweets after creating new tweet
* [ ] retrieve data from server on client using fetch
* [ ] Hide/Show elements (UI client side)
* [ ] add elements to client page

## Back-end

* [ ]
  * [ ]
* [ ]
  * [ ]

## Deployment stage

* [ ] deploy server with NOW
  * [ ] setup env variables
    * [ ] DB connection
      * [ ] process.env.MONGO_URI 
  * [ ] show mlab
  * [ ] deploy with env variables
    * [ ] now -e MONGO_URI=@meower-db
  * [ ] add alias  
* [ ] deploy client folder with NOW
  * [ ] set API_URL based on hostname


## Future iterations

* add comments/replies to tweets
* user accounts
  * signup/login
* user profiles
  * show tweets from only following users
* search tweets
* implement hashtags
* implement user tags
realtime feed of tweets with auto-load
