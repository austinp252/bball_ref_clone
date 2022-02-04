import sys
import json

from nba_api.stats.endpoints import commonplayerinfo
playerID = sys.argv[1]
playerInfo = commonplayerinfo.CommonPlayerInfo(player_id=playerID)
data = playerInfo.common_player_info.get_json()
print(data)
