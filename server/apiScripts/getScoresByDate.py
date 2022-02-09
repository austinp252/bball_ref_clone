import sys
import json

from nba_api.stats.endpoints import scoreboardv2
date = sys.argv[1]
#date = "2022-02-02"
scoreData = scoreboardv2.ScoreboardV2(game_date=date)
rawData = scoreData.line_score.get_dict()

scores = rawData["data"]
games = []
for x in range(0, int(len(scores)/2)):
    games.append({'homeTeam': scores[x*2], 'awayTeam': scores[x*2+1]})

data = {'data': games}
data = json.dumps(data)
print(data)
