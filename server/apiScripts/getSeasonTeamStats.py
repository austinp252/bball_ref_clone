import sys
import json

from nba_api.stats.endpoints import leaguedashteamstats

season = sys.argv[1]
type = sys.argv[2]
permode = sys.argv[3]
if(type == 'Advanced'):
    data = leaguedashteamstats.LeagueDashTeamStats(
        season=season, measure_type_detailed_defense=type, per_mode_detailed=permode).league_dash_team_stats.get_json()
else:
    teamData = leaguedashteamstats.LeagueDashTeamStats(
        season=season, measure_type_detailed_defense=type, per_mode_detailed=permode).league_dash_team_stats.get_dict()
    oppData = leaguedashteamstats.LeagueDashTeamStats(
        season=season, measure_type_detailed_defense='Opponent', per_mode_detailed=permode).league_dash_team_stats.get_dict()
    data = {"Team": teamData, "Opponent": oppData}

print(json.dumps(data), end='')
