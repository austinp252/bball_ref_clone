import sys
import json

from nba_api.stats.endpoints import teamyearbyyearstats
teamID = sys.argv[1]

stats = teamyearbyyearstats.TeamYearByYearStats(
    team_id=teamID).team_stats.get_dict()

if(len(sys.argv) > 2):
    yearData = []
    for season in stats["data"]:
        if season[3] == sys.argv[2]:
            yearData = season
            break
else:
    yearData = []

data = {"stats": stats, "yearData": yearData}

print(json.dumps(data))
