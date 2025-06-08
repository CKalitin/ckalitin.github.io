from pathlib import Path

dir = Path(__file__).parent / "assets" / "space-industry-charts"

charts = {} # title: (title, path, beautified title)

pngs = list(dir.glob("*.png"))
for png in pngs:
    charts[png.stem] = (png.stem.replace("-", " ").title(), png, png.stem.replace("_", " ").title())

for title, path, beautified_title in charts.values():
    print(f"[{beautified_title}]({path})  ")