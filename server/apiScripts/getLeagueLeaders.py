import sys
import json

from nba_api.stats.endpoints import homepageleaders

pointLeader = homepageleaders.HomePageLeaders(
    player_or_team='Player', season='2020-21', stat_category='Points').home_page_leaders.get_dict()

assistLeader = homepageleaders.HomePageLeaders(
    player_or_team='Player', season='2020-21', stat_category='Assists').home_page_leaders.get_dict()

reboundLeader = homepageleaders.HomePageLeaders(
    player_or_team='Player', season='2020-21', stat_category='Rebounds').home_page_leaders.get_dict()


print(pointLeader)
