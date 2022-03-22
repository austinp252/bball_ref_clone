import json
import sys

from nba_api.stats.endpoints import leaguedashplayerstats

data = leaguedashplayerstats.LeagueDashPlayerStats(
).league_dash_player_stats.get_dict()

playerData = []
initial = 'A'
for player in data["data"]:
    if(player[1].split()[1][0] == initial):
        print(player[1])
        playerData.append(player)


print(data["data"][0])
