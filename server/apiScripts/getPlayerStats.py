#id = 76001

import sys
import json
import re

# from nba_api.stats.endpoints import playercareerstats
# playerID = sys.argv[1]
# player_career_stats = playercareerstats.PlayerCareerStats(
#     per_mode36='PerGame', player_id=playerID)
# data = player_career_stats.career_totals_regular_season.get_json()
# print(data)

from nba_api.stats.endpoints import leaguedashplayerbiostats
letter = sys.argv[1]
player_stats = leaguedashplayerbiostats.LeagueDashPlayerBioStats(league_id='00', date_from_nullable="1-1-1960"
                                                                 ).league_dash_player_bio_stats.get_dict()

player_stats = player_stats['data']
regex = '^[' + letter.lower() + letter.upper() + ']'

list = []
for player in player_stats:
    lastname = player[1].split()[1]

    if(re.search(regex, lastname)):
        list.append(player)

print(list)

# use for player index page
