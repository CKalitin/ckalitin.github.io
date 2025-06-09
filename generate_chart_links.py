from pathlib import Path

dir = Path(__file__).parent / "assets" / "space-industry-charts"

# Start of beautified title: Subtitle
subtitle_dict = {
    "Ariane": "Ariane",
    "Atlas": "Atlas",
    "Delta": "Delta",
    "Electron": "Electron",
    "F9": "Falcon 9",
    "Fh": "Falcon Heavy",
    "Global Launches": "Global Launches",
    "Global Payloads": "Global Payloads",
    "Planet Labs": "Planet Labs",
    "Soyuz": "Soyuz",
    "Starlink": "Starlink",
    "Titan": "Titan",
}

extra_text = {
    "Ariane": "This covers Ariane 1, 2, 3, 4, and 5.",
    "Atlas": "This covers Atlas 1, 2, 3, and 5. Remember Atlas 4 doesn't exist.",
    "Delta": "This covers Delta 1, 2, 3, and 4."
}

charts = [] # title: (title, path, beautified title)

pngs_dir = list(dir.glob("*.png"))
for png_dir in pngs_dir:
    charts.append(("{{site.url}}\\" + "\\".join(str(png_dir).split("\\")[3:]), png_dir.stem.replace("_", " ").title()))

previous_subtitle = ""
for path, beautified_title in charts:
    for subtitle_key in subtitle_dict.keys():
        subtitle_len = len(subtitle_key)
        if beautified_title[:subtitle_len] == subtitle_key:
            if previous_subtitle != subtitle_key:
                previous_subtitle = subtitle_key
                print(f"\n<b>{subtitle_dict[subtitle_key]}</b>\n")
                if subtitle_key in extra_text:
                    print(f"{extra_text[subtitle_key]}\n")
        
    suffix = "{: target=\"_blank\"}"
    print(f'[{beautified_title}]({path}){suffix}  ')