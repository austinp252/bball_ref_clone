import sys
import json

from nba_api.stats.endpoints import playergamelogs

playerID = sys.argv[1]
season = sys.argv[2]
gameDataRegular = playergamelogs.PlayerGameLogs(
    season_nullable=season, player_id_nullable=playerID, season_type_nullable="Regular Season")
gameDataRegular = gameDataRegular.player_game_logs.get_dict()
gameDataPlayoffs = playergamelogs.PlayerGameLogs(
    season_nullable=season, player_id_nullable=playerID, season_type_nullable="Playoffs")
gameDataPlayoffs = gameDataPlayoffs.player_game_logs.get_dict()
data = {"regular": gameDataRegular, "playoffs": gameDataPlayoffs}
print(json.dumps(data))

#rk (index)
# date
