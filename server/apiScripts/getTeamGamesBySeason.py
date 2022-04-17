import sys
import json

from nba_api.stats.endpoints import teamgamelog

teamID = sys.argv[1]
season = sys.argv[2]
gameDataRegular = teamgamelog.TeamGameLog(
    season=season, team_id=teamID, season_type_all_star="Regular Season").team_game_log.get_dict()
gameDataPlayoffs = teamgamelog.TeamGameLog(
    season=season, team_id=teamID, season_type_all_star="Playoffs").team_game_log.get_dict()

data = {"regular": gameDataRegular, "playoffs": gameDataPlayoffs}
print(json.dumps(data), end='')
