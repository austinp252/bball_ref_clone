const express = require("express");
const {spawn} = require("child_process");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.get('/test/:letter', (req, res) => {
    var dataToSend;
    // spawn new child process to call the python script
    const python = spawn('python', ['server/apiScripts/getPlayersByLastInitial.py', req.params.letter]);
    // collect data from script
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        dataToSend = JSON.parse(dataToSend);
    });
    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    console.log(dataToSend[0]);
    res.send(dataToSend);

    });
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
