import sys
import json

from nba_api.stats.endpoints import playerdashboardbygeneralsplits

playerID = sys.argv[1]
seasonID = sys.argv[2]
#split = sys.argv[3]

totalData = playerdashboardbygeneralsplits.PlayerDashboardByGeneralSplits(
    player_id=playerID, season=seasonID, per_mode_detailed="Totals", measure_type_detailed="Base", rank="N").overall_player_dashboard.get_dict()

placeData = playerdashboardbygeneralsplits.PlayerDashboardByGeneralSplits(
    player_id=playerID, season=seasonID, per_mode_detailed="Totals", measure_type_detailed="Base", rank="N").location_player_dashboard.get_dict()

allStarData = playerdashboardbygeneralsplits.PlayerDashboardByGeneralSplits(
    player_id=playerID, season=seasonID, per_mode_detailed="Totals", measure_type_detailed="Base", rank="N").pre_post_all_star_player_dashboard.get_dict()

resultData = playerdashboardbygeneralsplits.PlayerDashboardByGeneralSplits(
    player_id=playerID, season=seasonID, per_mode_detailed="Totals", measure_type_detailed="Base", rank="N").wins_losses_player_dashboard.get_dict()

monthData = playerdashboardbygeneralsplits.PlayerDashboardByGeneralSplits(
    player_id=playerID, season=seasonID, per_mode_detailed="Totals", measure_type_detailed="Base", rank="N").month_player_dashboard.get_dict()

positionData = playerdashboardbygeneralsplits.PlayerDashboardByGeneralSplits(
    player_id=playerID, season=seasonID, per_mode_detailed="Totals", measure_type_detailed="Base", rank="N").starting_position.get_dict()

restData = playerdashboardbygeneralsplits.PlayerDashboardByGeneralSplits(
    player_id=playerID, season=seasonID, per_mode_detailed="Totals", measure_type_detailed="Base", rank="N").days_rest_player_dashboard.get_dict()

data = {"data": [{"data": totalData, "title": "Total"}, {"data": placeData, "title": "Place"}, {"data": allStarData, "title": "All-Star"},
                 {"data": resultData, "title": "Result"}, {"data": monthData, "title": "Month"}, {"data": positionData, "title": "Role"}, {"data": restData, "title": "Rest"}]}

print(json.dumps(data), end="")

# total --
# place --
# all-star --
# result --
# month --
# role --
# rest --
# opponent - 1

# day
# minutes
# conf - 2
# division - 6
