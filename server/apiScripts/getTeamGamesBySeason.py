import sys
import json

from nba_api.stats.endpoints import teamgamelog

#teamID = sys.argv[1]
#season = sys.argv[2]
teamID = "1610612737"
season = "2020-21"
gameData = teamgamelog.TeamGameLog(
    season=season, team_id=teamID)
gameData = gameData.team_game_log.get_json()
print(gameData)
