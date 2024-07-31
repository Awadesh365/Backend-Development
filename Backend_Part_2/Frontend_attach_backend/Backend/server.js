import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("server is ready");
});

app.get("/api/jokes", (req, res) => {
    const jocks = [
        { id: 1, title: "A Joke", content: "Thhis is the first Joke" },
        { id: 2, title: "B Joke", content: "Thhis is the second Joke" },
        { id: 3, title: "C Joke", content: "Thhis is the third Joke" },
        { id: 4, title: "D Joke", content: "Thhis is the fourth Joke" },
        { id: 5, title: "E Joke", content: "Thhis is the fifth Joke" }
    ];
    res.send(jocks);
});


const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`serv at http://localhost:${port}`);
})