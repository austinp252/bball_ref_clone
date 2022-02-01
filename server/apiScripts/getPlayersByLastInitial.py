import sys
import json

from nba_api.stats.static import players
letter = sys.argv[1]
regex = '^[' + letter.lower() + letter.upper() + ']'
playersList = players.find_players_by_last_name(regex)
# first letter last name
# ('^[aA]') where the letter is replaced by the specified letter
# print(playersList)
print(json.dumps(playersList))
sys.stdout.flush()
