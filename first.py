#!/usr/bin/python
# -*- coding:utf8 -*-

import os
import json
allFileNum = 0

'''打印目录下的所有文件夹和文件'''
def ReadPathFile (level, serchPath, writePath) :
    # 全局变量
    global allFileNum
    # 所有文件数组
    fileList = []
    # 所有文件夹，第一个字段是次目录的级别
    dirList = []
    # 返回一个列表，其中包含在目录条目的名称
    files = os.listdir(serchPath)
    # 先添加目录级别
    dirList.append(str(level))
    for f in files:
        if (os.path.isdir(serchPath + '/' + f)):
            # 排除隐藏文件夹
            if (f[0] == '.'):
                pass
            else:
                dirList.append(f)
        if (os.path.isfile(serchPath + '/' + f)):
            fileList.append(f)
    # 当一个标志使用，文件夹列表第一个级别不打印
    i_dl = 0
    for dl in dirList:
        if (i_dl == 0):
            i_dl = i_dl + 1
        else:
            # 打印到控制台，不是第一个的目录
            print '-' * (int(dirList[0])), "文件夹", dl
            ReadPathFile((int(dirList[0]) + 1), serchPath + '/' + dl, writePath)
    for f in fileList:
        # 如果文件后缀为json，则写进txt
        if f.endswith(".json"):
            with open(serchPath + f, "r") as readfile:
                #strJson = json.load(readfile)
                data = json.load(readfile)
                for item in data:
                    print(item)
                    print "数据", item.keys


            #print '--' * (int(dirList[0])),"文件", f

            outfileName = "Table_" + f[:5] + "_Auto.js"
            writefile = open(writePath + outfileName, "w")
            if not writefile:
                print "can't open the file"


            allFileNum = allFileNum + 1
            readfile.close()
            writefile.close()

if __name__ == '__main__':
    ReadPathFile(1, "res/", "map/")
    print "文件总数为：", allFileNum, "个"


