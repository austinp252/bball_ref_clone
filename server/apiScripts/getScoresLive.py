import sys
import json

from nba_api.live.nba.endpoints import scoreboard
date = ""
scoreData = scoreboard.ScoreBoard().games.get_json()
print(scoreData)
