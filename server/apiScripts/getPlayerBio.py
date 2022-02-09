import sys
import json

from nba_api.stats.endpoints import playercareerstats
playerID = sys.argv[1]
playerCareerStatsData = playercareerstats.PlayerCareerStats(
    per_mode36='PerGame', player_id=playerID).get_json()
print(playerCareerStatsData)
