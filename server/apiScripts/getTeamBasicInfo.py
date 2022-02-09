import sys
import json

from nba_api.stats.endpoints import franchisehistory
leagueID = '00'
teamID = int(sys.argv[1])
franchiseData = franchisehistory.FranchiseHistory(
    league_id=leagueID).franchise_history.get_dict()
teamData = []
for team in franchiseData["data"]:
    if(team[1] == teamID):
        teamData.append(team)
print(json.dumps(teamData))
