import sys
import json

from nba_api.stats.endpoints import playerprofilev2, playerdashboardbyyearoveryear

playerID = sys.argv[1]
active = sys.argv[2]

careerData = playerprofilev2.PlayerProfileV2(
    player_id=playerID, per_mode36='PerGame').career_totals_regular_season.get_dict()


print(careerData, end='')
