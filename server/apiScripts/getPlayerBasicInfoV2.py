from contextlib import nullcontext
import sys
import json


from nba_api.stats.endpoints import commonplayerinfo, playerawards, playerprofilev2, playerdashboardbyyearoveryear, teamplayerdashboard

playerID = sys.argv[1]
currentSeason = '2021-22'


def formatSeasons(seasons):
    newSeasonData = []
    for item in seasons:
        season = item[0]
        if season[0] == '2':
            season = season[1:]+'-' + str(int(season[1:])+1)[2:]
            newSeasonData.append(season)
    return newSeasonData


def getSeasonsInRange(seasons, lower=None):
    newSeasons = seasons.copy()
    if(lower):
        for season in seasons:
            if(int(season[0:4]) <= lower):
                newSeasons.remove(season)
    return newSeasons


def filterAwards(data):
    awards = {"data": [{"award": [], "title": "All Star"}, {"award": [], "title": "All NBA"}, {"award": [], "title": "All-Rookie"}, {"award": [], "title": "MVP"}, {"award": [], "title": "Finals MVP"},
                       {"award": [], "title": "ROY"}, {"award": [], "title": "Most Improved"}, {"award": [], "title": "AS MVP"}, {"award": [], "title": "All-Defensive"}, {"award": [], "title": "Def. POY"}]}
    for dataItem in data["data"]:
        if(dataItem[4] == "All-Star"):
            awards["data"][0]["award"].append(dataItem)
        elif(dataItem[4] == "All-NBA"):
            awards["data"][1]["award"].append(dataItem)
        elif(dataItem[4] == "All-Rookie Team"):
            awards["data"][2]["award"].append(dataItem)
        elif(dataItem[4] == "NBA Most Valuable Player"):
            awards["data"][3]["award"].append(dataItem)
        elif(dataItem[4] == "NBA Finals Most Valuable Player"):
            awards["data"][4]["award"].append(dataItem)
        elif(dataItem[4] == "NBA Rookie of the Year"):
            awards["data"][5]["award"].append(dataItem)
        elif(dataItem[4] == "NBA Most Improved Player"):
            awards["data"][6]["award"].append(dataItem)
        elif(dataItem[4] == "NBA All-Star Most Valuable Player"):
            awards["data"][7]["award"].append(dataItem)
        elif(dataItem[4] == "All-Defensive Team"):
            awards["data"][8]["award"].append(dataItem)
        elif(dataItem[4] == "NBA Defensive Player of the Year"):
            awards["data"][9]["award"].append(dataItem)
    return awards


playerBasics = commonplayerinfo.CommonPlayerInfo(
    player_id=playerID).common_player_info.get_dict()

playerAwards = playerawards.PlayerAwards(
    player_id=playerID).player_awards.get_dict()

playerSeasons = commonplayerinfo.CommonPlayerInfo(
    player_id=playerID).available_seasons.get_dict()

playerCurrentTeam = None
seasonData = None
if(playerBasics["data"][0][16] == 'Active'):
    playerCurrentTeam = teamplayerdashboard.TeamPlayerDashboard(
        team_id=playerBasics["data"][0][18], season=currentSeason, per_mode_detailed="PerGame", rank="Y", pace_adjust="Y").get_dict()
    seasonData = playerdashboardbyyearoveryear.PlayerDashboardByYearOverYear(
        player_id=playerID, per_mode_detailed='PerGame').overall_player_dashboard.get_dict()

careerData = playerprofilev2.PlayerProfileV2(
    player_id=playerID, per_mode36='PerGame').career_totals_regular_season.get_dict()

awards = filterAwards(playerAwards)
newSeasonData = formatSeasons(playerSeasons["data"])

data = {"basic": playerBasics, "awards": awards, "summary": [
    {"career": careerData}, {"season": seasonData}], "seasons": [{"data": newSeasonData, "title": "gamelogs"}, {"data": getSeasonsInRange(newSeasonData, lower=1995), "title": "generalSplits"}], "team": {"data": playerCurrentTeam, "title": "team"}}

print(json.dumps(data), end='')
