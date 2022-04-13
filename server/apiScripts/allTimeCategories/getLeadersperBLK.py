import sys
import json

from nba_api.stats.endpoints import alltimeleadersgrids

type = sys.argv[1]

data = alltimeleadersgrids.AllTimeLeadersGrids(
    per_mode_simple='PerGame', season_type=type, topx=250).blk_leaders.get_json()
print(data)
