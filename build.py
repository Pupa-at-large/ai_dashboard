#!/usr/bin/env python3
"""把 index.html + data.js + config.js 合并为单个可直接分发的 HTML 文件。

用法：python3 build.py [输出文件名]
默认输出到 dist/看板.html（文件名取 data.js 中的 meta.title）。
单文件版功能与三文件版完全一致；文件跳转链接仍指向相对路径 projects/，
把输出文件放到与 projects/ 同级的目录即可点击打开本地文件。
"""
import re
import sys
import pathlib

root = pathlib.Path(__file__).parent
html = (root / "index.html").read_text(encoding="utf-8")
data = (root / "data.js").read_text(encoding="utf-8")
config = (root / "config.js").read_text(encoding="utf-8")

html = html.replace(
    '<script src="data.js"></script>\n<script src="config.js"></script>',
    "<script>\n" + data + "\n</script>\n<script>\n" + config + "\n</script>",
)
assert 'src="data.js"' not in html and 'src="config.js"' not in html, \
    "内联失败：index.html 中的 data.js/config.js 引用格式发生变化"

m = re.search(r'title:\s*"([^"]+)"', data)
name = (sys.argv[1] if len(sys.argv) > 1 else (m.group(1) if m else "看板") + ".html")
out = root / "dist" / name
out.parent.mkdir(exist_ok=True)
out.write_text(html, encoding="utf-8")
print(f"已生成 {out}（{out.stat().st_size // 1024} KB）")
