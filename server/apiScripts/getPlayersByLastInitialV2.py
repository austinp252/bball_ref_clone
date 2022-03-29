import sys
import json

from nba_api.stats.static import players
from nba_api.stats.endpoints import commonplayerinfo
letter = sys.argv[1]
regex = '^[' + letter.lower() + letter.upper() + ']'
playersList = players.find_players_by_last_name(regex)
# first letter last name
# ('^[aA]') where the letter is replaced by the specified letter
# print(playersList)
# print(json.dumps(playersList))
# sys.stdout.flush()
playersData = []
for player in playersList:
    playerData = commonplayerinfo.CommonPlayerInfo(
        player_id=player["id"]).common_player_info.get_dict()["data"][0]
    playersData.append(playerData)

print(playersData)
