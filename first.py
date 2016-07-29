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
    includefile = open("map/Table_Auto.js", "w")
    for f in fileList:
        # 如果文件后缀为json，则写进txt
        if f.endswith(".json"):
            f = f[0].upper() + f[1:]
            outfileName = "Table_" + f[:-5] + "_Auto.js"
            writefile = open(writePath + outfileName, "w")
            if not writefile:
                print "can't open the file"
            else:
                print "正在处理" + outfileName

            includefile.write(getIncludeContent(outfileName))

            changeContent = ""
            with open(serchPath + f, "r") as readfile:
                data = json.load(readfile)
                keysArr = data[0].keys()
                for key in keysArr:
                    if key == u'id':
                        continue
                    content = getChangeContent(key, data[0][key])
                    changeContent += content
                    #changeContent = getChangeContent(item[])
            #print '--' * (int(dirList[0])),"文件", f
            writefile.write(getFuntionContent(outfileName[:-8], writePath + outfileName, changeContent))
            allFileNum = allFileNum + 1
            readfile.close()
            writefile.close()

"""判断一个unicode是否是汉字"""
def is_chinese(uchar):
    if uchar >= u'\u4e00' and uchar <= u'\u9fa5':
        return True
    else:
        return False

"""获取根据属性而变化的函数内容"""
def getChangeContent(arrName, arrValue):
    if (is_chinese(arrValue)):
        content = "\tget" + arrName[0].upper() + arrName[1:] + ": function(id, translate) {\n" \
                + "\t\tvar info = this.info(id);\n" \
                + "\t\tif (!info)\n" \
                + "\t\t\treturn;\n" \
                + "\t\treturn translate ? _V(info[\"" + arrName +"\"]) : info[\"" + arrName + "\"];\n" \
                + "\t},\n\n"
    else:
        content = "\tget" + arrName[0].upper() + arrName[1:] + ": function(id) {\n" \
                + "\t\tvar info = this.info(id);\n" \
                + "\t\treturn info ? info[\"" + arrName + "\"] : null;\n" \
                + "\t},\n\n"
    return content

"""获取固定函数内容"""
def getFuntionContent(tableName, filePath, data):
    content = "var Table" + tableName \
              + " = {\n" \
              +"\tmap: function() {\n" \
              +"\t\tif (!this._map)\n" \
              + "\t\t\tthis._map = pi.JsonLoader.getInstance().load_dict(\"" + filePath + "\")\n" \
              + "\t\tif (!this._map)\n" \
              + "\t\t\tPILogE(\"" + tableName + ": load map fail\");\n" \
              + "\t\treturn this._map;\n" \
              + "\t},\n\n" \
              + "\tinfo: function(id) {\n" \
              + "\t\tvar map = this.map();\n" \
              + "\t\tif (!map)\n" \
              + "\t\t\treturn null;\n" \
              + "\t\tvar val = map[id];\n" \
              + "\t\tif (!val)\n" \
              + "\t\t\tPILogE(\"" + tableName + ": id not found\");\n" \
              + "\t\treturn val;\n" \
              + "\t},\n\n" \
              + data \
              + "\t_map : null,\n" \
              + "\t_cache_sign : null,\n" \
              + "\t_cache_mark : null,\n" \
              + "\t_cache_name : null\n" \
              + "}"
    return content

"""获取include内容"""
def getIncludeContent(fileName):
    content = "import(\"" + fileName + "\")"
    return content

if __name__ == '__main__':
    ReadPathFile(1, "res/", "map/")
    print "文件总数为：", allFileNum, "个"


