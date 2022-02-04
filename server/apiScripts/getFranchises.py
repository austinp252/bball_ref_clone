import sys
import json

from nba_api.stats.endpoints import franchisehistory
leagueID = '00'
franchiseData = franchisehistory.FranchiseHistory(
    league_id=leagueID).franchise_history.get_json()
print(franchiseData)
