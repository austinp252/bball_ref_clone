import json
import sys

from nba_api.stats.static import players, teams

args = sys.argv
if(len(args) < 2):
    searchTerm = 'xxx'
else:
    searchTerm = sys.argv[1]
    page = int(sys.argv[2])

playerDataTotal = players.find_players_by_full_name(
    regex_pattern=searchTerm)
teamDataTotal = teams.find_teams_by_full_name(
    regex_pattern=searchTerm)

overflow = (len(playerDataTotal) - (page*100))
# print(overflow)
if(overflow > 100):  # more pages, limit results
    index = 0
    playerDataShow = []
    teamDataShow = []
    while(index < 100):
        for player in playerDataTotal[page*100:]:
            playerDataShow.append(player)
            index += 1
            if(index >= 100):
                break
        for team in teamDataTotal[:]:
            teamDataShow.append(team)
    dataShow = {"playerData": playerDataShow, "teamData": teamDataShow,
                "dataSize": [len(playerDataTotal), len(teamDataTotal)]}
elif(overflow > 0 and overflow <= 100):  # last page of content
    playerDataShow = []
    teamDataShow = []
    for player in playerDataTotal[page*100:]:
        playerDataShow.append(player)
    # print(teamDataTotal)
    for team in teamDataTotal[:]:
        teamDataShow.append(team)
    dataShow = {"playerData": playerDataShow, "teamData": teamDataShow,
                "dataSize": [len(playerDataTotal), len(teamDataTotal)]}
else:
    dataShow = {"playerData": [], "teamData": [], "dataSize": []}
print(json.dumps(dataShow))
