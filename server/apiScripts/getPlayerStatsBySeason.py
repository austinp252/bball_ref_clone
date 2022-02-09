import sys
import json

from nba_api.stats.endpoints import teamplayerdashboard
teamID = sys.argv[1]
seasonID = sys.argv[2]

playerStats = teamplayerdashboard.TeamPlayerDashboard(
    team_id=teamID, season=seasonID, per_mode_detailed="PerGame", rank="Y", pace_adjust="Y").get_json()
print(playerStats)
