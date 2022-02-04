import sys
import json

from nba_api.stats.endpoints import playercareerstats, commonplayerinfo
playerID = sys.argv[1]
playerInfoData = commonplayerinfo.CommonPlayerInfo(
    player_id=playerID).common_player_info.get_json()
playerCareerStatsData = playercareerstats.PlayerCareerStats(
    per_mode36='PerGame', player_id=playerID).career_totals_regular_season.get_json()
print('{ "playerInfo": ' + playerInfoData +
      ', "careerStats": ' + playerCareerStatsData+'}')
