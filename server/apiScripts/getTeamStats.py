import json
import sys

from nba_api.stats.endpoints import teamdashboardbyyearoveryear
teamID = sys.argv[1]
teamData = teamdashboardbyyearoveryear.TeamDashboardByYearOverYear(
    team_id=teamID).by_year_team_dashboard.get_json()
print(teamData)
# 1610612737
