import json
import sys

from nba_api.stats.endpoints import leaguestandings

data = leaguestandings.LeagueStandings(season='2020-21').standings.get_json()

print(data)
