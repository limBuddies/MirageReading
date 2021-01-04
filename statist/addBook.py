"""
向数据库添加Epub书籍
"""

import ebooklib
from ebooklib import epub
import zipfile
from PIL import Image
import os
import shutil
import time
import hashlib
import random
import json


def get_book_info(epub_file):
    """
    获取Epub文件书名、作者、ISBN、封面信息
    :param epub_file: Epub文件路径
    """
    book = epub.read_epub(epub_file)

    book_info = {
        'title': '',
        'subtitle': '',
        'intro': '',
        'creator': '',
        'isbn': '',
        'hash': '',
    }

    md5 = hashlib.md5()
    md5.update(
        (book_info['title'] + str(time.time() + random.randint(256, 512))).encode(encoding='utf-8'))
    book_hash = md5.hexdigest()
    book_info['hash'] = book_hash

    # 获取书名
    try:
        book_info['title'] = book.get_metadata('DC', 'title')[0][0]
    except IndexError:
        book_info['title'] = '无名书籍'

    # 获取作者
    try:
        book_info['creator'] = book.get_metadata('DC', 'creator')[0][0]
    except IndexError:
        book_info['creator'] = '佚名'

    # 获取 ISBN
    book_info['isbn'] = '无记录'
    for identifier in book.get_metadata('DC', 'identifier'):
        if identifier[1]['{http://www.idpf.org/2007/opf}scheme'] == 'ISBN':
            book_info['isbn'] = identifier[0]

    # 获取封面
    has_cover = False
    for img in book.get_items_of_type(ebooklib.ITEM_IMAGE):
        if img.id == 'cover':
            epub_zip = zipfile.ZipFile(epub_file)
            for file_name in epub_zip.namelist():
                if file_name == img.file_name:
                    with epub_zip.open(file_name) as cover_file:
                        if not os.path.exists('tmp'):
                            os.mkdir('tmp')
                        open('tmp/' + book_hash, mode='wb').write(cover_file.read())
                        Image.open('tmp/' + book_hash).save(book_hash + '.webp')
                        os.remove('tmp/' + book_hash)
                        has_cover = True
            epub_zip.close()
    if not has_cover:
        print("No cover")

    # 复制文件
    shutil.copy(epub_file, book_hash + '.epub')

    # 其他信息
    book_info['subtitle'] = input("Subtitle: ")
    book_info['intro'] = input("Intro: ")

    # 创建 JSON
    with open(book_hash + '.json', 'w') as info:
        info.write(json.dumps(book_info))

    return book_hash


if __name__ == '__main__':
    print(get_book_info(input("Epub: ")))
