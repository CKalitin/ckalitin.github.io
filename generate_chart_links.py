from pathlib import Path

dir = Path(__file__).parent / "assets" / "space-industry-charts"

charts = [] # title: (title, path, beautified title)

pngs_dir = list(dir.glob("*.png"))
for png_dir in pngs_dir:
    charts.append(("{{site.url}}\\" + "\\".join(str(png_dir).split("\\")[3:]), png_dir.stem.replace("_", " ").title()))

for path, beautified_title in charts:
    str = "{: target=\"_blank\"}"
    print(f'[{beautified_title}]({path}){str}  ')