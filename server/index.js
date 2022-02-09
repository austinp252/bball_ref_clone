const express = require("express");
const {spawn} = require("child_process");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.get('/search/:term/:page', (req, res) => {
  var dataToSend;
  // spawn new child process to call the python script
  const python = spawn('python', ['server/apiScripts/getSearchResults.py', req.params.term, req.params.page]);
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
  //console.log(dataToSend[0]);
  res.send(dataToSend);

  });
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
  const python = spawn('python', ['server/apiScripts/getPlayerBasicInfo.py', req.params.id]);
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

app.get('/players/:letter/:id/stats', (req, res) => {
  var dataToSend;
  const python = spawn('python', ['server/apiScripts/getPlayerCareerStats.py', req.params.id]);
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

app.get('/players/:letter/:id/gamelog/:season', (req, res) => {
  var dataToSend;
  const python = spawn('python', ['server/apiScripts/getPlayerGamesBySeason.py', req.params.id, req.params.season]);
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
  const python = spawn('python', ['server/apiScripts/getTeamStats.py', req.params.id]);
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

app.get('/teams/:id/basic', (req, res) => {
  var dataToSend;
  const python = spawn('python', ['server/apiScripts/getTeamBasicInfo.py', req.params.id]);
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

app.get('/teams/:id/stats', (req, res) => {
  var dataToSend;
  const python = spawn('python', ['server/apiScripts/getTeamSeasonBasicInfo.py', req.params.id]);
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

app.get('/teams/:id/:season/basic', (req, res) => {
  var dataToSend;
  const python = spawn('python', ['server/apiScripts/getTeamSeasonBasicInfo.py', req.params.id, req.params.season]);
  python.stdout.on('data', (data) => {
    console.log('Pipe data from python script ...');
    dataToSend = data.toString();
    dataToSend = JSON.parse(dataToSend);
  });

  python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    console.log('season data');
    res.send(dataToSend);
  })
});

app.get('/teams/:id/:season/stats', (req, res) => {
  var dataToSend;
  const python = spawn('python', ['server/apiScripts/getPlayerStatsBySeason.py', req.params.id, req.params.season]);
  python.stdout.on('data', (data) => {
    console.log('Pipe data from python script ...');
    dataToSend = data.toString();
    dataToSend = JSON.parse(dataToSend);
  });

  python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    console.log('season data');
    res.send(dataToSend);
  })
});

//rename to /players?

app.get('/teams/:id/:season/games', (req, res) => {
  var dataToSend;
  const python = spawn('python', ['server/apiScripts/getTeamGamesBySeason.py', req.params.id, req.params.season]);
  python.stdout.on('data', (data) => {
    console.log('Pipe data from python script ...');
    dataToSend = data.toString();
    dataToSend = JSON.parse(dataToSend);
  });

  python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    console.log('season data');
    res.send(dataToSend);
  })
});



app.get('/scores/:date', (req, res) => {
  var dataToSend;
  const python = spawn('python', ['server/apiScripts/getScoresByDate.py', req.params.date]);
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

app.get('/scores/boxscore/:gameid', (req, res) => {
  var dataToSend;
  const python = spawn('python', ['server/apiScripts/getBoxScore.py', req.params.gameid]);
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

//testing
app.get('/test', (req, res) => {
  var dataToSend;
  const python = spawn('python', ['server/apiScripts/getTeamBio.py', '1610612737']);
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
})