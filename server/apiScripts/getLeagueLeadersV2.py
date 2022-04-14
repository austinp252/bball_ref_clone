from contextlib import nullcontext
import sys
import json
from tkinter.tix import MAX

from nba_api.stats.endpoints import leagueleaders
season = sys.argv[1]
data = leagueleaders.LeagueLeaders(
    per_mode48="Totals", season=season, stat_category_abbreviation="PTS").league_leaders.get_dict()


def insertIntoMax(array, player, stat):
    newObject = [player[0], player[2], player[3], stat]
    for arrayIndex, item in enumerate(array):
        if newObject[3] > item[3]:
            array.insert(arrayIndex, newObject)
            break
    if(len(array) < 5):
        array.append(newObject)
    elif(len(array) > 5):
        array.pop()
    return array


def initData(data):
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
            maxGP = insertIntoMax([], player, player[4])
            maxMIN = insertIntoMax([], player, player[5])
            maxFGA = insertIntoMax([], player, player[7])
            maxFGM = insertIntoMax([], player, player[6])
            maxFGP = insertIntoMax([], player, player[8])
            max3PA = insertIntoMax([], player, player[10])
            max3PM = insertIntoMax([], player, player[9])
            max3PP = insertIntoMax([], player, player[11])
            maxFTA = insertIntoMax([], player, player[13])
            maxFTM = insertIntoMax([], player, player[12])
            maxFTP = insertIntoMax([], player, player[14])
            maxOREB = insertIntoMax([], player, player[15])
            maxDREB = insertIntoMax([], player, player[16])
            maxREB = insertIntoMax([], player, player[17])
            maxAST = insertIntoMax([], player, player[18])
            maxSTL = insertIntoMax([], player, player[19])
            maxBLK = insertIntoMax([], player, player[20])
            maxTOV = insertIntoMax([], player, player[21])
            maxPF = insertIntoMax([], player, player[22])
            maxPTS = insertIntoMax([], player, player[23])

            perPTS = insertIntoMax([], player, round(player[23]/player[4], 2))
            perMIN = insertIntoMax([], player, round(player[5]/player[4], 2))
            perREB = insertIntoMax([], player, round(player[17]/player[4], 2))
            perAST = insertIntoMax([], player, round(player[18]/player[4], 2))
            perSTL = insertIntoMax([], player, round(player[19]/player[4], 2))
            perBLK = insertIntoMax([], player, round(player[20]/player[4], 2))
            perTOV = insertIntoMax([], player, round(player[21]/player[4], 2))
            perPF = insertIntoMax([], player, round(player[22]/player[4], 2))
            perEFF = insertIntoMax([], player, round(player[23]/player[4], 2))
        else:
            maxGP = insertIntoMax(maxGP, player, player[4])
            # cond for ties?
            maxMIN = insertIntoMax(maxMIN, player, player[5])
            maxFGM = insertIntoMax(maxFGM, player, player[6])
            maxFGA = insertIntoMax(maxFGA, player, player[7])
            maxFGP = insertIntoMax(maxFGP, player, player[8])
            max3PM = insertIntoMax(max3PM, player, player[9])
            max3PA = insertIntoMax(max3PA, player, player[10])
            max3PP = insertIntoMax(max3PP, player, player[11])
            maxFTM = insertIntoMax(maxFTM, player, player[12])
            maxFTA = insertIntoMax(maxFTA, player, player[13])
            maxFTP = insertIntoMax(maxFTP, player, player[14])
            maxOREB = insertIntoMax(maxOREB, player, player[15])
            maxDREB = insertIntoMax(maxDREB, player, player[16])
            maxREB = insertIntoMax(maxREB, player, player[17])
            maxAST = insertIntoMax(maxAST, player, player[18])
            maxSTL = insertIntoMax(maxSTL, player, player[19])
            maxBLK = insertIntoMax(maxBLK, player, player[20])
            maxTOV = insertIntoMax(maxTOV, player, player[21])
            maxPF = insertIntoMax(maxPF, player, player[22])
            maxPTS = insertIntoMax(maxPTS, player, player[23])

            perPTS = insertIntoMax(
                perPTS, player, round(player[23]/player[4], 2))
            perMIN = insertIntoMax(
                perMIN, player, round(player[5]/player[4], 2))
            perREB = insertIntoMax(
                perREB, player, round(player[17]/player[4], 2))
            perAST = insertIntoMax(
                perAST, player, round(player[18]/player[4], 2))
            perSTL = insertIntoMax(
                perSTL, player, round(player[19]/player[4], 2))
            perBLK = insertIntoMax(
                perBLK, player, round(player[20]/player[4], 2))
            perTOV = insertIntoMax(
                perTOV, player, round(player[21]/player[4], 2))
            perPF = insertIntoMax(
                perPF, player, round(player[22]/player[4], 2))
            perEFF = insertIntoMax(
                perEFF, player, round(player[24]/player[4], 2))

    newData = {"data": [{"title": "Games Played", "dataTable": maxGP}, {"title": "Total Minutes", "dataTable": maxMIN}, {"title": "Field Goals", "dataTable": maxFGM}, {"title": "Field Goals Attempted", "dataTable": maxFGA}, {"title": "3-Pt Field Goals", "dataTable": max3PM}, {"title": "3-Pt Field Goal Attempts", "dataTable": max3PA}, {"title": "Free Throws", "dataTable": maxFTM}, {"title": "Free Throw Attempts", "dataTable": maxFTA}, {"title": "Offensive Rebounds", "dataTable": maxOREB}, {"title": "Defensive Rebounds", "dataTable": maxDREB}, {"title": "Total Rebounds", "dataTable": maxREB}, {"title": "Assists", "dataTable": maxAST}, {"title": "Steals", "dataTable": maxSTL}, {"title": "Blocks",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            "dataTable": maxBLK}, {"title": "Turnovers", "dataTable": maxTOV}, {"title": "Personal Fouls", "dataTable": maxPF}, {"title": "Points", "dataTable": maxPTS}, {"title": "Field Goal Pct", "dataTable": maxFGP}, {"title": "3-Pt Field Goal Pct", "dataTable": max3PP}, {"title": "Free Throw Pct", "dataTable": maxFTP}, {"title": "Points Per Game", "dataTable": perPTS}, {"title": "Rebounds Per Game", "dataTable": perREB}, {"title": "Assists Per Game", "dataTable": perAST}, {"title": "Steals Per Game", "dataTable": perSTL},  {"title": "Blocks Per Game", "dataTable": perBLK},  {"title": "Turnovers Per Game", "dataTable": perTOV},  {"title": "Player Efficiency Rating", "dataTable": perEFF}]}
    return newData
# newData = {"HEADERS": ['PLAYER_ID', 'RANK', 'PLAYER', 'TEAM', 'GP', 'MIN', 'FGM', 'FGA', 'FG_PCT', 'FG3M', 'FG3A', 'FG3_PCT', 'FTM', 'FTA', 'FT_PCT', 'OREB', 'DREB', 'REB', 'AST', 'STL', 'BLK', 'TOV', 'PF', 'PTS', 'EFF', 'AST_TOV', 'STL_TOV'], "CATEGORIES": ['GP', 'MIN', 'FGM', 'FGA', '3PM', '3PA', 'FTM', 'FTA',
#
# playerid, name, team, stat                                                                                                                                                                                                                                                             'OREB', 'DREB', 'REB', 'AST', 'STL', 'BLK', 'TO', 'PF', 'PTS', 'FGP', '3PP', 'FTP' 'perMIN', 'perPTS', 'perREB', 'perAST', 'perSTL', 'perBLK', 'perTOV', 'EFF'], 'data': [maxGP, maxMIN, maxFGM, maxFGA, max3PM, max3PA, maxFTM, maxFTA, maxOREB, maxDREB, maxREB, maxAST, maxSTL, maxBLK, maxTOV, maxPF, maxPTS, maxFGP, max3PP, maxFTP, perMIN, perPTS, perREB, perAST, perSTL, perBLK, perTOV, perEFF]}


newData = initData(data)

print(json.dumps(newData), end='')
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
