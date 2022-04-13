import sys
import json

from nba_api.stats.endpoints import alltimeleadersgrids

perMode = sys.argv[1]
seasonType = sys.argv[2]

data = alltimeleadersgrids.AllTimeLeadersGrids(
    per_mode_simple=perMode, season_type='Regular Season', topx=5).get_json()
print(data)

# TOTAL
# gp
# fgm
# fga
# 3pm
# 3pa
# ftm
# fta
# oreb
# dreb
# ast
# stl
# blk
# tov
# pf
# points
# SHOOTING
# fgp
# 3pp
# ftp
# PERGAME
# points
# rebounds
# assists
# steals
# blocks
