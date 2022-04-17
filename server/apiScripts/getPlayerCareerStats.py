import sys
import json

from nba_api.stats.endpoints import playercareerstats
playerID = sys.argv[1]
perMode = sys.argv[2]
#playerID = 203081

playerData = playercareerstats.PlayerCareerStats(
    player_id=playerID, per_mode36=perMode).get_json()

print(playerData, end='')

# 203081
