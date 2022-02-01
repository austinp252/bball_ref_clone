
# from nba_api.stats.endpoints import playercareerstats
# # Anthony Davis
# career = playercareerstats.PlayerCareerStats(player_id='203076')
# print(career.get_data_frames()[0])

#playercareerstats -> player page


#commonallplayers

from nba_api.stats.static import players
playersList = players.get_players()
print(playersList[0:3])

