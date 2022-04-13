import sys
import json

from nba_api.stats.endpoints import alltimeleadersgrids

league = sys.argv[2]
type = sys.argv[1]

data = alltimeleadersgrids.AllTimeLeadersGrids(
    league_id=league, per_mode_simple='Totals', season_type=type, topx=250).g_p_leaders.get_json()
print(data)
