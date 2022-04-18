const express = require("express");
const {spawn} = require("child_process");
const { PassThrough } = require("stream");

const PORT = process.env.PORT || 4000;

const app = express();

app.get("/", (req, res) => {
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
app.get('/players/:letter/:id/', (req, res) => {
  var dataToSend;
  const python = spawn('python', ['server/apiScripts/getPlayerBasicInfoV2.py', req.params.id]);
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

app.get('/players/:letter/:id/footer', (req, res) => {
  var dataToSend;
  const python = spawn('python', ['server/apiScripts/getPlayerFooterDates.py', req.params.id]);
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

app.get('/players/:letter/:id/:perMode/splits', (req, res) => {
  var dataToSend;
  const python = spawn('python', ['server/apiScripts/getPlayerCareerStats.py', req.params.id, req.params.perMode]);
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

app.get('/players/:letter/:id/season/:season/splits', (req, res) => {
  var dataToSend;
  const python = spawn('python', ['server/apiScripts/getPlayerGeneralSplitsBySeason.py', req.params.id, req.params.season]);
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

app.get('/players/:letter/:id/season/:season/shootingSplits', (req, res) => {
  var dataToSend;
  const python = spawn('python', ['server/apiScripts/getPlayerShootingSplitsBySeason.py', req.params.id, req.params.season]);
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

app.get('/seasons/standings/:season', (req, res) => {
  var dataToSend;
  const python = spawn('python', ['server/apiScripts/getSeason.py',req.params.season]);
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

app.get('/seasons/teamstats/:type/:permode/:season', (req, res) => {
  var dataToSend;
  const python = spawn('python', ['server/apiScripts/getSeasonTeamStats.py',req.params.season, req.params.type, req.params.permode]);
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

app.get('/seasons/leaders/:season', (req, res) => {
  console.log('running get')
  var dataToSend;
  const python = spawn('python', ['server/apiScripts/getLeagueLeadersV2.py',req.params.season]);
  python.stdout.on('data', (data) => {
    console.log('running')
    console.log('Pipe data from python script ...');
    dataToSend = data.toString();
    dataToSend = JSON.parse(dataToSend);
    return;
  });

  python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    console.log('season data');
    res.send(dataToSend);
  })
});

app.get('/leaders/:season', (req, res) => {
  var dataToSend;
  const python = spawn('python', ['server/apiScripts/getLeagueLeaders.py',req.params.season]);
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

app.get('/leaders/alltime/:season_type/:category', (req, res) => {
  var dataToSend;
  const python = spawn('python', [`server/apiScripts/allTimeCategories/getLeaders${req.params.category}.py`, req.params.season_type]);
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
  const python = spawn('python', ['server/apiScripts/test.py']);
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