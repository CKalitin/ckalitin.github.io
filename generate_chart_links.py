from pathlib import Path

dir = Path(__file__).parent / "assets" / "space-industry-charts"

charts = [] # title: (title, path, beautified title)

pngs_dir = list(dir.glob("*.png"))
for png_dir in pngs_dir:
    charts.append(("https://" + "\\".join(str(png_dir).split("\\")[2:]), png_dir.stem.replace("_", " ").title()))

for path, beautified_title in charts:
    print(f"[{beautified_title}]({path})  ")