import json
import sys

from nba_api.stats.endpoints import leaguestandingsv3
season = '2019-20'
data = leaguestandingsv3.LeagueStandingsV3(
    season=season, season_type='Regular Season').standings.get_json()
print(data)
