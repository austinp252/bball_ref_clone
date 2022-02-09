import sys
import json

from nba_api.stats.endpoints import playercareerstats
playerID = sys.argv[1]
#playerID = 203081

playerData = playercareerstats.PlayerCareerStats(
    player_id=playerID, per_mode36="PerGame").get_json()

print(playerData)

# 203081
