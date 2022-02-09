import sys
import json


from nba_api.stats.endpoints import commonplayerinfo
playerID = sys.argv[1]
playerInfoData = commonplayerinfo.CommonPlayerInfo(
    player_id=playerID).common_player_info.get_json()
print(playerInfoData)
