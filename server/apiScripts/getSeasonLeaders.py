import sys
import json
import numpy as np

from nba_api.stats.endpoints import leagueleaders
seasonID = '2020-2021'  # make param
leaderData = leagueleaders.LeagueLeaders(per_mode48='Totals')
data = leaderData.league_leaders.get_dict()


# leaderGP, leaderMP, leaderFGM, leaderFGA, leaderFGP, leaderFG3M, leaderFG3A, leaderFTM, leaderFTA, leaderFTP, leaderOREB, leaderDREB, leaderREB, leaderAST, leaderSTL, leaderBLK, leaderTOV, leaderPF, leaderPTS, leaderEFF =
#leaderMP = -1
# for player in data["data"]:


print()


# print(data)

# league_id='00', per_mode48='Totals', scope='S', season=seasonID, season_type_all_star='Regular Season', stat_category_abbreviation='PTS')

# "GP",
# "MIN",
# "FGM",
# "FGA",
# "FG_PCT",
# "FG3M",
# "FG3A",
# "FG3_PCT",
# "FTM",
# "FTA",
# "FT_PCT",
# "OREB",
# "DREB",
# "REB",
# "AST",
# "STL",
# "BLK",
# "TOV",
# "PF",
# "PTS",
# "EFF",
