import sys
import json


from nba_api.stats.endpoints import commonplayerinfo, playerawards

playerID = sys.argv[1]
playerBasics = commonplayerinfo.CommonPlayerInfo(
    player_id=playerID).common_player_info.get_dict()

playerAwards = playerawards.PlayerAwards(
    player_id=playerID).player_awards.get_dict()


def filterAwards(data):
    awards = {"data": [{"award": [], "title": "All Star"}, {"award": [], "title": "All NBA"}, {"award": [], "title": "All-Rookie"}, {"award": [], "title": "MVP"}, {"award": [], "title": "Finals MVP"},
              {"award": [], "title": "ROY"}, {"award": [], "title": "Most Improved"}, {"award": [], "title": "AS MVP"}, {"award": [], "title": "All-Defensive"}, {"award": [], "title": "Def. POY"}]}
    for dataItem in data["data"]:
        if(dataItem[4] == "All-Star"):
            awards["data"][0]["award"].append(dataItem)
        elif(dataItem[4] == "All-NBA"):
            awards["data"][1]["award"].append(dataItem)
        elif(dataItem[4] == "All-Rookie Team"):
            awards["data"][2]["award"].append(dataItem)
        elif(dataItem[4] == "NBA Most Valuable Player"):
            awards["data"][3]["award"].append(dataItem)
        elif(dataItem[4] == "NBA Finals Most Valuable Player"):
            awards["data"][4]["award"].append(dataItem)
        elif(dataItem[4] == "NBA Rookie of the Year"):
            awards["data"][5]["award"].append(dataItem)
        elif(dataItem[4] == "NBA Most Improved Player"):
            awards["data"][6]["award"].append(dataItem)
        elif(dataItem[4] == "NBA All-Star Most Valuable Player"):
            awards["data"][7]["award"].append(dataItem)
        elif(dataItem[4] == "All-Defensive Team"):
            awards["data"][8]["award"].append(dataItem)
        elif(dataItem[4] == "NBA Defensive Player of the Year"):
            awards["data"][9]["award"].append(dataItem)
    return awards


awards = filterAwards(playerAwards)

data = {"basic": playerBasics, "awards": awards}

print(json.dumps(data), end='')
