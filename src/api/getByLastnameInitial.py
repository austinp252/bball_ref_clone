from nba_api.stats.static import players
playersList = players.find_players_by_last_name('^[aA]')
#first letter last name
#('^[aA]') where the letter is replaced by the specified letter
print(playersList)