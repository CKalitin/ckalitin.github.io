# Run this script after updating the charts, then copy and past from chart_links_output.txt
# This txt file is required to retain the double space line breaks, copying from the terminal doesn't do this (But copying from the output window in VS Code does)

from pathlib import Path

dir = Path(__file__).parent / "assets" / "space-industry-charts"

# Folder name to beautified title mapping
subtitle_dict = {
    "antares": "Antares",
    "ariane": "Ariane",
    "atlas": "Atlas",
    "canada": "Canada",
    "delta": "Delta",
    "electron": "Electron",
    "f9": "Falcon 9",
    "f9h": "Falcon Heavy",
    "global": "Global",
    "planet_labs": "Planet Labs",
    "soyuz": "Soyuz",
    "starlink": "Starlink",
    "titan": "Titan",
}

extra_text = {
    "ariane": "This covers Ariane 1, 2, 3, 4, and 5.",
    "atlas": "This covers Atlas 1, 2, 3, and 5. Remember Atlas 4 doesn't exist.",
    "delta": "This covers Delta 1, 2, 3, and 4."
}

charts = [] # (path, beautified_title, folder_name)

# Get all subfolders
subfolders = [f for f in dir.iterdir() if f.is_dir()]

for subfolder in subfolders:
    folder_name = subfolder.name
    # Skip test folder or other non-chart folders
    if folder_name == "test":
        continue
        
    # Get all PNG files in this subfolder
    png_files = list(subfolder.glob("*.png"))
    for png_file in png_files:
        # Generate relative path for Jekyll
        relative_path = "{{site.url}}\\" + "\\".join(str(png_file).split("\\")[3:])
        # Create beautified title from filename
        beautified_title = png_file.stem.replace("_", " ").title()
        charts.append((relative_path, beautified_title, folder_name))

# Sort charts by folder name to group them together
charts.sort(key=lambda x: x[2])

previous_subtitle = ""
for path, beautified_title, folder_name in charts:
    # Check if we need to print a new section header
    if folder_name in subtitle_dict and previous_subtitle != folder_name:
        previous_subtitle = folder_name
        print(f"\n<b>{subtitle_dict[folder_name]}</b>\n")
        if folder_name in extra_text:
            print(f"{extra_text[folder_name]}\n")
        
    suffix = "{: target=\"_blank\"}"
    print(f'[{beautified_title}]({path}){suffix}  ')

print(f"\nTotal number of charts: {len(charts)}")