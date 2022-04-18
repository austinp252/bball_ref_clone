import sys
import json

from nba_api.stats.endpoints import playerdashboardbyshootingsplits

playerID = sys.argv[1]
seasonID = sys.argv[2]
split = sys.argv[3]

data = playerdashboardbyshootingsplits.PlayerDashboardByShootingSplits(
    player_id=playerID, season=seasonID, )
