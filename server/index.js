const express = require("express");
const {spawn} = require("child_process");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

//get list of all players with last names starting with given letter
app.get('/players/:letter', (req, res) => {
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
});

//get info for specific player by id
app.get('/players/:letter/:id', (req, res) => {
  var dataToSend;
  const python = spawn('python', ['server/apiScripts/getPlayerBio.py', req.params.id]);
  python.stdout.on('data', (data) => {
    console.log('Pipe data from python script ...');
    dataToSend = data.toString();
    dataToSend = JSON.parse(dataToSend);
  });

  python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    //console.log(dataToSend);
    res.send(dataToSend);
  })
});

//get basic info for all franchises (currently active)
app.get('/teams', (req, res) => {
  var dataToSend;
  const python = spawn('python', ['server/apiScripts/getFranchises.py']);
  python.stdout.on('data', (data) => {
    console.log('Pipe data from python script ...');
    dataToSend = data.toString();
    dataToSend = JSON.parse(dataToSend);
  });

  python.stdout.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    res.send(dataToSend);
  });
});

//get info for specific team by id
app.get('/teams/:id', (req, res) => {
  var dataToSend;
  const python = spawn('python', ['server/apiScripts/getTeamBio.py', req.params.id]);
  python.stdout.on('data', (data) => {
    console.log('Pipe data from python script ...');
    dataToSend = data.toString();
    dataToSend = JSON.parse(dataToSend);
  });

  python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    //console.log(dataToSend);
    res.send(dataToSend);
  })
});

app.get('/boxscores', (req, res) => {
  var dataToSend;
  const python = spawn('python', ['server/apiScripts/getScoresByDate.py']);
  python.stdout.on('data', (data) => {
    console.log('Pipe data from python script ...');
    dataToSend = data.toString();
    dataToSend = JSON.parse(dataToSend);
  });

  python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    //console.log(dataToSend);
    res.send(dataToSend);
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
