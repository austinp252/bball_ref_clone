import sys
import json

from nba_api.stats.endpoints import alltimeleadersgrids

data = alltimeleadersgrids.AllTimeLeadersGrids(
    per_mode_simple='Totals', season_type='Regular Season', topx=250).oreb_leaders.get_json()
print(data)
