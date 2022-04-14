from contextlib import nullcontext
import sys
import json
from tkinter.tix import MAX

from nba_api.stats.endpoints import leagueleaders
season = sys.argv[1]
data = leagueleaders.LeagueLeaders(
    per_mode48="Totals", season=season, stat_category_abbreviation="PTS").league_leaders.get_dict()


def insertIntoMax(array, index, newObject, per):
    if(not per):
        for arrayIndex, item in enumerate(array):
            if newObject[index] > item[index]:
                array.insert(arrayIndex, newObject)
                break
    else:
        for arrayIndex, item in enumerate(array):
            if (newObject[index]/newObject[4]) > (item[index]/item[4]):
                array.insert(arrayIndex, newObject)
                break
    if(len(array) < 10):
        array.append(newObject)
    elif(len(array) > 10):
        array.pop()
    return array


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
        maxGP = [player]
        maxMIN = [player]
        maxFGA = [player]
        maxFGM = [player]
        maxFGP = [player]
        max3PA = [player]
        max3PM = [player]
        max3PP = [player]
        maxFTA = [player]
        maxFTM = [player]
        maxFTP = [player]
        maxOREB = [player]
        maxDREB = [player]
        maxREB = [player]
        maxAST = [player]
        maxSTL = [player]
        maxBLK = [player]
        maxTOV = [player]
        maxPF = [player]
        maxPTS = [player]

        perPTS = [player]
        perMIN = [player]
        perREB = [player]
        perAST = [player]
        perSTL = [player]
        perBLK = [player]
        perTOV = [player]
        perPF = [player]
        perEFF = [player]
    else:
        maxGP = insertIntoMax(maxGP, 4, player, per=False)
        # cond for ties?
        maxMIN = insertIntoMax(maxMIN, 5, player, per=False)
        maxFGM = insertIntoMax(maxFGM, 6, player, per=False)
        maxFGA = insertIntoMax(maxFGA, 7, player, per=False)
        maxFGP = insertIntoMax(maxFGP, 8, player, per=False)
        max3PM = insertIntoMax(max3PM, 9, player, per=False)
        max3PA = insertIntoMax(max3PA, 10, player, per=False)
        max3PP = insertIntoMax(max3PP, 11, player, per=False)
        maxFTM = insertIntoMax(maxFTM, 12, player, per=False)
        maxFTA = insertIntoMax(maxFTA, 13, player, per=False)
        maxFTP = insertIntoMax(maxFTP, 14, player, per=False)
        maxOREB = insertIntoMax(maxOREB, 15, player, per=False)
        maxDREB = insertIntoMax(maxDREB, 16, player, per=False)
        maxREB = insertIntoMax(maxREB, 17, player, per=False)
        maxAST = insertIntoMax(maxAST, 18, player, per=False)
        maxSTL = insertIntoMax(maxSTL, 19, player, per=False)
        maxBLK = insertIntoMax(maxBLK, 20, player, per=False)
        maxTOV = insertIntoMax(maxTOV, 21, player, per=False)
        maxPF = insertIntoMax(maxPF, 22, player, per=False)
        maxPTS = insertIntoMax(maxPTS, 23, player, per=False)

        perPTS = insertIntoMax(perPTS, 23, player, per=True)
        perMIN = insertIntoMax(perMIN, 5, player, per=True)
        perREB = insertIntoMax(perREB, 17, player, per=True)
        perAST = insertIntoMax(perAST, 18, player, per=True)
        perSTL = insertIntoMax(perSTL, 19, player, per=True)
        perBLK = insertIntoMax(perBLK, 20, player, per=True)
        perTOV = insertIntoMax(perTOV, 21, player, per=True)
        perPF = insertIntoMax(perPF, 22, player, per=True)
        perEFF = insertIntoMax(perEFF, 24, player, per=True)

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
