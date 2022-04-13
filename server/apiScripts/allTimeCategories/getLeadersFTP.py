import sys
import json

from nba_api.stats.endpoints import alltimeleadersgrids

type = sys.argv[1]

data = alltimeleadersgrids.AllTimeLeadersGrids(
    per_mode_simple='Totals', season_type=type, topx=250).fg_pct_leaders.get_json()
print(data)
