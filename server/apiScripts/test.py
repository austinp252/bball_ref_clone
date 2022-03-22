import json
import sys

from nba_api.stats.endpoints import commonallplayers

data = commonallplayers.CommonAllPlayers().common_all_players.get_json()
print(data)
