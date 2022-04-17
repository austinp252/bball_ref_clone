import sys
import json

from nba_api.stats.endpoints import playerawards

playerID = sys.argv[1]

data = playerawards.PlayerAwards(player_id=playerID).player_awards.get_dict()


def filterAwards(data):
    awards = {"allStar": [], "allNBA": [], "mvp": [], "fmvp": [],
              "allRookie": [], "roty": [], "mostImproved": []}
    for dataItem in data["data"]:
        if(dataItem[4] == "All-NBA"):
            awards["allNBA"].append(dataItem)
        elif(dataItem[4] == "All-Rookie Team"):
            awards["allRookie"].append(dataItem)
        elif(dataItem[4] == "NBA Most Valuable Player"):
            awards["mvp"].append(dataItem)
        elif(dataItem[4] == "NBA Finals Most Valuable Player"):
            awards["fmvp"].append(dataItem)
        elif(dataItem[4] == "NBA Rookie of the Year"):
            awards["roty"].append(dataItem)
        elif(dataItem[4] == "NBA Most Improved Player"):
            awards["mostImproved"].append(dataItem)
    return awards


awards = filterAwards(data)
print(data)

# all star appearances
# all defense
# dpoy
# as-mvp
# scoring champ
# stl champ
# blk champ
# hof
