# Run this script after updating the charts, then copy and past from chart_links_output.txt
# This txt file is required to retain the double space line breaks, copying from the terminal doesn't do this (But copying from the output window in VS Code does)

import re
from pathlib import Path

dir = Path(__file__).parent / "assets" / "space-industry-charts"

# Folder name to beautified title mapping
subtitle_dict = {
    "antares": "Antares",
    "ariane": "Ariane",
    "atlas": "Atlas",
    "canada": "Canada",
    "constellation_payloads": "Constellations",
    "delta": "Delta",
    "electron": "Electron",
    "f9": "Falcon 9",
    "f9_matplotlib": "Falcon 9 (Matplotlib Charts)",
    "f9h": "Falcon Heavy",
    "global": "Global",
    "kuiper": "Kuiper",
    "observation": "Observation Satellites",
    "planet_labs": "Planet Labs",
    "soyuz": "Soyuz",
    "starlink": "Starlink",
    "test": "Test",
    "titan": "Titan",
    "v2": "V2",
}

extra_text = {
    "ariane": "This covers Ariane 1, 2, 3, 4, and 5.",
    "atlas": "This covers Atlas 1, 2, 3, and 5. Remember Atlas 4 doesn't exist.",
    "delta": "This covers Delta 1, 2, 3, and 4.",
    "v2": "[Jonathan McDowell pointed out](https://x.com/planet4589/status/1997942839096095176) his dataset of suborbital launches is \"certainly incomplete.\""
}

charts = [] # (path, beautified_title, folder_name)

# Get all subfolders
subfolders = [f for f in dir.iterdir() if f.is_dir()]

for subfolder in subfolders:
    folder_name = subfolder.name
        
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
output_lines = []
for path, beautified_title, folder_name in charts:
    # Check if we need to print a new section header
    if folder_name in subtitle_dict and previous_subtitle != folder_name:
        previous_subtitle = folder_name
        output_lines.append(f"\n<b>{subtitle_dict[folder_name]}</b>\n")
        if folder_name in extra_text:
            output_lines.append(f"{extra_text[folder_name]}\n")
    suffix = "{: target=\"_blank\"}"
    output_lines.append(f'[{beautified_title}]({path}){suffix}  ')

print(f"\nTotal number of charts: {len(charts)}")

# Write output to file
with open("chart_links_output.txt", "w", encoding="utf-8") as f:
    f.write("\n".join(output_lines))

def update_markdown_file(output_lines, total_charts):
    file_path = Path(__file__).parent / "_posts" / "2025-06-08-space-industry-charts.md"
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Update the chart count in the download links
    content = re.sub(r'\[Download All (\d+) Charts\]', f'[Download All {total_charts} Charts]', content)
    
    # Find the position of <b>Antares</b>
    pos = content.find('<b>Antares</b>')
    if pos == -1:
        print("Antares header not found")
        return
    
    # Find the end of that line
    end_line = content.find('\n', pos)
    if end_line == -1:
        end_line = len(content)
    
    # New content is everything before end_line + \n + the joined output_lines[1:]
    new_content = content[:end_line] + '\n' + '\n'.join(output_lines[1:])
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

# Update the markdown file
update_markdown_file(output_lines, len(charts))