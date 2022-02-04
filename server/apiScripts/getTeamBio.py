import sys
import json

from nba_api.stats.endpoints import teaminfocommon
leagueID = '00'
teamID = sys.argv[1]
teamdata = teaminfocommon.TeamInfoCommon(
    league_id=leagueID, team_id=teamID).team_info_common.get_json()
print(teamdata)
