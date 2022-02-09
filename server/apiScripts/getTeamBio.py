import sys
import json

from nba_api.stats.endpoints import teamestimatedmetrics
teamID = sys.argv[1]
teamData = teamestimatedmetrics.TeamEstimatedMetrics().team_estimated_metrics.get_dict()
print(teamData)
