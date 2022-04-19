import sys
import json

from nba_api.stats.endpoints import teamdashboardbyyearoveryear

teamID = sys.argv[1]
per = sys.argv[2]
mode = sys.argv[3]

data = teamdashboardbyyearoveryear.TeamDashboardByYearOverYear(
    team_id=teamID, rank='N', per_mode_detailed=per, measure_type_detailed_defense=mode).by_year_team_dashboard.get_dict()

print(json.dumps(data), end='')
