# TweetMe 🐦

TweetMe is a simple clone of Twitter (now X) built with vanilla JavaScript on the frontend and Node.js/Express on the backend. It allows users to post short messages and view a feed of recent tweets.

## 🚀 Features

- **Post Tweets:** Users can submit their name and a message.
- **Live Feed:** View all submitted tweets in reverse chronological order.
- **Profanity Filter:** Automatically filters out bad words using the `bad-words` library.
- **Rate Limiting:** Prevents spam by limiting users to one tweet every 30 seconds.
- **Persistent Storage:** Tweets are stored in a MongoDB database.

## 🛠 Tech Stack

### Client

- **HTML5 & CSS3:** For structure and styling.
- **Vanilla JavaScript:** For DOM manipulation and API interaction.
- **Serve:** A static file server to host the client application.

### Server

- **Node.js & Express:** For the REST API.
- **MongoDB & Monk:** For the database.
- **Cors:** To handle Cross-Origin Resource Sharing.
- **Bad-Words:** For filtering profane content.
- **Express-Rate-Limit:** For API rate limiting.

## 📦 Installation & Usage

### Prerequisites

- [Node.js](https://nodejs.org/) installed.
- [MongoDB](https://www.mongodb.com/) installed and running locally, or a cloud MongoDB instance.

### 1. Backend Setup (Server)

Navigate to the server directory and install dependencies:

```bash
cd server
npm install
```

Start the server:

```bash
npm start
# OR for development with auto-restart
npm run dev
```

The server will start on `http://localhost:5000` (or `process.env.PORT`).
Ensure your MongoDB is running at `localhost/tweetme` or set the `MONGO_URI` environment variable.

### 2. Frontend Setup (Client)

Navigate to the client directory and install dependencies:

```bash
cd client
npm install
```

Start the client:

```bash
npm start
```

This will serve the client interactively. Open the provided URL (usually `http://localhost:5000` if serving via `serve`, but check the output) to view the app.

**Note:** You might need to adjust the `API_URL` in `client/client.js` if your server is running on a different port or host. Currently it points to:
THE APP IS NO LONGER HOSTED ON HEROKU. SORRY.
Change it to:
`http://localhost:5000/tweets`
for local development.

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License.
