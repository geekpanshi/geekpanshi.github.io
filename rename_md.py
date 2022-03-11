#!/usr/bin/env python3

import glob
import shutil
import dateutil.parser
import frontmatter

import os

def main():
    files = glob.glob('*.md')
    print(files)
    if files and  "_index.md" in files:
        files.remove('_index.md')
    for f in files:
        old_file = os.path.join("./", f)
        prefix_date = getDate(f).isoformat()
        file_new_name = prefix_date + "-" + f[f.find("_")+1:]
        new_file = os.path.join("./", file_new_name)
        print(new_file)
        os.rename(old_file, new_file)

def getDate(md_file, attr = "date"):
    with open(md_file) as f:
        md = frontmatter.load(f)
        dt = md.metadata[attr]
        if type(dt) != str:
            # toml 格式下date被识别为字符串
            #return dateutil.parser.parse(dt).date()
            return dt.date()
        else:
            # yaml 格式下date被识别为datetime，直接返回
            return str(dt)

if __name__ == '__main__':
    main()
