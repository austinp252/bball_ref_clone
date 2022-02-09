import sys
import json

from nba_api.stats.endpoints import boxscoretraditionalv2, boxscoreadvancedv2, boxscorefourfactorsv2, boxscoresummaryv2

gameID = sys.argv[1]
statsTrad = boxscoretraditionalv2.BoxScoreTraditionalV2(
    game_id=gameID).player_stats.get_dict()
statsAdvanced = boxscoreadvancedv2.BoxScoreAdvancedV2(
    game_id=gameID).player_stats.get_dict()
statsSummary = boxscoresummaryv2.BoxScoreSummaryV2(
    game_id=gameID).line_score.get_dict()
statsFourFactors = boxscorefourfactorsv2.BoxScoreFourFactorsV2(
    game_id=gameID).sql_teams_four_factors.get_dict()

team1 = statsSummary["data"][0][3]

team1Trad = []
team2Trad = []
for player in statsTrad["data"]:
    if(player[1] == team1):
        team1Trad.append(player)
    else:
        team2Trad.append(player)

team1Advanced = []
team2Advanced = []
for player in statsAdvanced["data"]:
    if(player[1] == team1):
        team1Advanced.append(player)
    else:
        team2Advanced.append(player)

data = {"lineScore": statsSummary,
        "fourFactors": statsFourFactors,
        "data": [
            [
                team1Trad,
                team1Advanced
            ],
            [
                team2Trad,
                team2Advanced
            ]
        ]
        }

print(json.dumps(data))

# 0022100773
# lineScore: statsSummary
# fourfactors: statsFourFactors
# data:
#   team1:
#       trad:
#       advanced:
