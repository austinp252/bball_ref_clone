from contextlib import nullcontext
import sys
import json

from nba_api.stats.endpoints import leagueleaders
season = sys.argv[1]
data = leagueleaders.LeagueLeaders(
    per_mode48="Totals", season=season, stat_category_abbreviation="PTS").league_leaders.get_dict()

maxGP = None
maxMIN = None
maxFGA = None
maxFGM = None
maxFGP = None
max3PA = None
max3PM = None
max3PP = None
maxFTA = None
maxFTM = None
maxFTP = None
maxOREB = None
maxDREB = None
maxREB = None
maxAST = None
maxSTL = None
maxBLK = None
maxTOV = None
maxPF = None
maxPTS = None

perPTS = None
perMIN = None
perREB = None
perAST = None
perSTL = None
perBLK = None
perTOV = None
perPF = None
perEFF = None

for player in data["data"]:
    if(not maxGP):
        maxGP = player
        maxMIN = player
        maxFGA = player
        maxFGM = player
        maxFGP = player
        max3PA = player
        max3PM = player
        max3PP = player
        maxFTA = player
        maxFTM = player
        maxFTP = player
        maxOREB = player
        maxDREB = player
        maxREB = player
        maxAST = player
        maxSTL = player
        maxBLK = player
        maxTOV = player
        maxPF = player
        maxPTS = player

        perPTS = player
        perMIN = player
        perREB = player
        perAST = player
        perSTL = player
        perBLK = player
        perTOV = player
        perPF = player
        perEFF = player
    else:
        if(player[4] > maxGP[4]):
            maxGP = player
        # cond for ties?
        if(player[5] > maxMIN[5]):
            maxMIN = player
        if(player[6] > maxFGM[6]):
            maxFGM = player
        if(player[7] > maxFGA[7]):
            maxFGA = player
        if(player[8] > maxFGP[8]):
            maxFGP = player
        if(player[9] > max3PM[9]):
            max3PM = player
        if(player[10] > max3PA[10]):
            max3PA = player
        if(player[11] > max3PP[11]):
            max3PP = player
        if(player[12] > maxFTM[12]):
            maxFTM = player
        if(player[13] > maxFTA[13]):
            maxFTA = player
        if(player[14] > maxFTP[14]):
            maxFTP = player
        if(player[15] > maxOREB[15]):
            maxOREB = player
        if(player[16] > maxDREB[16]):
            maxDREB = player
        if(player[17] > maxREB[17]):
            maxREB = player
        if(player[18] > maxAST[18]):
            maxAST = player
        if(player[19] > maxSTL[19]):
            maxSTL = player
        if(player[20] > maxBLK[20]):
            maxBLK = player
        if(player[21] > maxTOV[21]):
            maxTOV = player
        if(player[22] > maxPF[22]):
            maxPF = player
        if(player[23] > maxPTS[23]):
            maxPTS = player

        if((player[23]/player[4]) > (perPTS[23]/perPTS[4])):
            perPTS = player
        if((player[5]/player[4]) > (perMIN[5]/perMIN[4])):
            perMIN = player
        if((player[17]/player[4]) > (perREB[17]/perREB[4])):
            perREB = player
        if((player[18]/player[4]) > (perAST[18]/perAST[4])):
            perAST = player
        if((player[19]/player[4]) > (perSTL[19]/perSTL[4])):
            perSTL = player
        if((player[20]/player[4]) > (perBLK[20]/perBLK[4])):
            perBLK = player
        if((player[21]/player[4]) > (perTOV[21]/perTOV[4])):
            perTOV = player
        if((player[22]/player[4]) > (perPF[22]/perPF[4])):
            perPF = player
        if((player[24]/player[4]) > (perEFF[24]/perEFF[4])):
            perEFF = player
newData = {"HEADERS": ['PLAYER_ID', 'RANK', 'PLAYER', 'TEAM', 'GP', 'MIN', 'FGM', 'FGA', 'FG_PCT', 'FG3M', 'FG3A', 'FG3_PCT', 'FTM', 'FTA', 'FT_PCT', 'OREB', 'DREB', 'REB', 'AST', 'STL', 'BLK', 'TOV', 'PF', 'PTS', 'EFF', 'AST_TOV', 'STL_TOV'], "CATEGORIES": ['GP', 'MIN', 'FGM', 'FGA', '3PM', '3PA', 'FTM', 'FTA',
                                                                                                                                                                                                                                                                   'OREB', 'DREB', 'REB', 'AST', 'STL', 'BLK', 'TO', 'PF', 'PTS', 'FGP', '3PP', 'FTP' 'perMIN', 'perPTS', 'perREB', 'perAST', 'perSTL', 'perBLK', 'perTOV', 'EFF'], 'data': [maxGP, maxMIN, maxFGM, maxFGA, max3PM, max3PA, maxFTM, maxFTA, maxOREB, maxDREB, maxREB, maxAST, maxSTL, maxBLK, maxTOV, maxPF, maxPTS, maxFGP, max3PP, maxFTP, perMIN, perPTS, perREB, perAST, perSTL, perBLK, perTOV, perEFF]}
print(json.dumps(newData))
# print("GP: ", maxGP[2], " ", maxGP[4])
# print("MIN: ", maxMIN[2], " ", maxMIN[5])
# print("FGM: ", maxFGM[2], " ", maxFGM[6])
# print("FGA: ", maxFGA[2], " ", maxFGA[7])
# print("3PM: ", max3PM[2], " ", max3PM[9])
# print("3PA: ", max3PA[2], " ", max3PA[10])
# print("FTM: ", maxFTM[2], " ", maxFTM[12])
# print("FTA: ", maxFTA[2], " ", maxFTA[13])
# print("OREB: ", maxOREB[2], " ", maxOREB[15])
# print("DREB: ", maxDREB[2], " ", maxDREB[16])
# print("REB: ", maxREB[2], " ", maxREB[17])
# print("AST: ", maxAST[2], " ", maxAST[18])
# print("STL: ", maxSTL[2], " ", maxSTL[19])

# print("BLK: ", maxBLK[2], " ", maxBLK[20])
# print("TO: ", maxTOV[2], " ", maxTOV[21])
# print("PF: ", maxPF[2], " ", maxPF[22])
# print("PTS: ", maxPTS[2], " ", maxPTS[23])
# print("FGP: ", maxFGP[2], " ", maxFGP[8])
# print("3PP: ", max3PP[2], " ", max3PP[11])
# print("FTP: ", maxFTP[2], " ", maxFTP[14])
# print("perMIN: ", perMIN[2], " ", perMIN[5]/perMIN[4])
# print("perPTS: ", perPTS[2], " ", perPTS[23]/perPTS[4])
# print("perREB: ", perREB[2], " ", perREB[17]/perREB[4])
# print("perAST: ", perAST[2], " ", perAST[18]/perAST[4])
# print("perSTL: ", perSTL[2], " ", perSTL[19]/perSTL[4])
# print("perBLK: ", perBLK[2], " ", perBLK[20]/perBLK[4])
# print("EFF: ", perEFF[2], " ", perEFF[24]/perEFF[4])

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
