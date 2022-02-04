#id = 76001

import sys
import json

from nba_api.stats.endpoints import playercareerstats
playerID = sys.argv[1]
player_career_stats = playercareerstats.PlayerCareerStats(
    per_mode36='PerGame', player_id=playerID)
data = player_career_stats.career_totals_regular_season.get_json()
print(data)
