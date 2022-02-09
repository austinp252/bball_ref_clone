import json
import sys

from nba_api.stats.static import players, teams

playerData = players.get_players()
teamData = teams.get_teams()

data = {"playerData": playerData, "teamData": teamData}
# print(len(playerData))
print(json.dumps(playerData[0:200]))
