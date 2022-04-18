import sys
import json

from nba_api.stats.endpoints import playerdashboardbyshootingsplits

playerID = sys.argv[1]
seasonID = sys.argv[2]
#split = sys.argv[3]
divisions = ["East", "West"]

totalData = playerdashboardbyshootingsplits.PlayerDashboardByShootingSplits(
    player_id=playerID, season=seasonID, per_mode_detailed="Totals", measure_type_detailed="Base", rank="N").overall_player_dashboard.get_dict()

areaData = playerdashboardbyshootingsplits.PlayerDashboardByShootingSplits(
    player_id=playerID, season=seasonID, per_mode_detailed="Totals", measure_type_detailed="Base", rank="N").shot_area_player_dashboard.get_dict()

typeData = playerdashboardbyshootingsplits.PlayerDashboardByShootingSplits(
    player_id=playerID, season=seasonID, per_mode_detailed="Totals", measure_type_detailed="Base", rank="N").shot_type_player_dashboard.get_dict()

shot5Data = playerdashboardbyshootingsplits.PlayerDashboardByShootingSplits(
    player_id=playerID, season=seasonID, per_mode_detailed="Totals", measure_type_detailed="Base", rank="N").shot5_ft_player_dashboard.get_dict()

summaryData = playerdashboardbyshootingsplits.PlayerDashboardByShootingSplits(
    player_id=playerID, season=seasonID, per_mode_detailed="Totals", measure_type_detailed="Base", rank="N").shot_type_summary_player_dashboard.get_dict()

data = {"data": [{"data": totalData, "title": "Total"}, {"data": areaData, "title": "Shot Location"}, {"data": shot5Data, "title": "Shot Distance"}, {
    "data": summaryData, "title": "Shot Type"}]}

print(json.dumps(data), end="")
