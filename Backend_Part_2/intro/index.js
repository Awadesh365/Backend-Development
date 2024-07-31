require('dotenv').config();

const express = require('express')
const app = express()

const port = 4000

const myGithubData = {
    "login": "Awadesh365",
    "id": 76896819,
    "node_id": "MDQ6VXNlcjc2ODk2ODE5",
    "avatar_url": "https://avatars.githubusercontent.com/u/76896819?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Awadesh365",
    "html_url": "https://github.com/Awadesh365",
    "followers_url": "https://api.github.com/users/Awadesh365/followers",
    "following_url": "https://api.github.com/users/Awadesh365/following{/other_user}",
    "gists_url": "https://api.github.com/users/Awadesh365/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Awadesh365/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Awadesh365/subscriptions",
    "organizations_url": "https://api.github.com/users/Awadesh365/orgs",
    "repos_url": "https://api.github.com/users/Awadesh365/repos",
    "events_url": "https://api.github.com/users/Awadesh365/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Awadesh365/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Awadesh Nautiyal",
    "company": null,
    "blog": "https://portfolio-ten-ecru-98.vercel.app/",
    "location": "India",
    "email": null,
    "hireable": true,
    "bio": "Software Engineer| CSE'24",
    "twitter_username": "NautiyalAwadesh",
    "public_repos": 59,
    "public_gists": 1,
    "followers": 4,
    "following": 0,
    "created_at": "2021-01-03T06:48:31Z",
    "updated_at": "2024-07-12T19:16:47Z"
};

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/twitter', (req, res) => {
    res.send("awadesh365");
})

app.get('/login', (req, res) => {
    res.send('<h1> Please login at Awadesh Application </h1>');
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Awadesh Application  </h2>')
})

app.get("/github", (req, res) => {
    res.json(myGithubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})