import json
import sys

from nba_api.stats.endpoints import leaguestandingsv3
season = sys.argv[1]
data = leaguestandingsv3.LeagueStandingsV3(
    season=season, season_type='Regular Season').standings.get_dict()

newData = {"east": [], "west": [], "divisions": {"east": {"atlantic": [], "central": [
], "southeast": []}, "west": {"northwest": [], "pacific": [], "southwest": []}}}

for team in data["data"]:
    if team[6] == 'East':
        newData["east"].append(team)
        if team[10] == 'Atlantic':
            newData["divisions"]["east"]["atlantic"].append(team[8]-1)
        elif team[10] == "Central":
            newData["divisions"]["east"]["central"].append(team[8]-1)
        else:
            newData["divisions"]["east"]["southeast"].append(team[8]-1)
    elif team[6] == "West":
        newData["west"].append(team)
        if team[10] == "Northwest":
            newData["divisions"]["west"]["northwest"].append(team[8]-1)
        elif team[10] == "Pacific":
            newData["divisions"]["west"]["pacific"].append(team[8]-1)
        else:
            newData["divisions"]["west"]["southwest"].append(team[8]-1)

print(json.dumps(newData))
#east, west
#atlantic, central, southeast
#northwest, pacific, southwest
