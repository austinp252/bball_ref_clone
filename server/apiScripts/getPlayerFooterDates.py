import sys
import json

from nba_api.stats.endpoints import commonplayerinfo

playerID = sys.argv[1]

playerBasics = commonplayerinfo.CommonPlayerInfo(
    player_id=playerID).common_player_info.get_dict()

playerBasicsSeasons = commonplayerinfo.CommonPlayerInfo(
    player_id=playerID).available_seasons.get_dict()


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


playerBasicsSeasons["data"] = formatSeasons(playerBasicsSeasons["data"])
data = {"basic": playerBasics["data"], "seasons": [{"data": playerBasicsSeasons["data"], "title": "Game Logs", "mode": "gamelog"}, {"data": getSeasonsInRange(playerBasicsSeasons["data"], lower=1995), "title": "Splits", "mode": "generalSplits"}, {
    "data": getSeasonsInRange(playerBasicsSeasons["data"], lower=1995), "title": "Shooting", "mode": "shootingSplits"}]}

print(json.dumps(data), end='')
