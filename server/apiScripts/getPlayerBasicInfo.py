import sys
import json


from nba_api.stats.endpoints import commonplayerinfo, playerawards

playerID = sys.argv[1]
playerBasics = commonplayerinfo.CommonPlayerInfo(
    player_id=playerID).common_player_info.get_dict()

playerAwards = playerawards.PlayerAwards(
    player_id=playerID).player_awards.get_dict()

data = {"basic": playerBasics, "awards": playerAwards}

print(json.dumps(playerBasics), end='')
