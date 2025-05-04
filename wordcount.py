# Thx Grok https://grok.com/chat/a07be4d5-da41-4257-8409-9ccb8bc86777

import os
import re
import csv
import sys
from pathlib import Path
from io import StringIO

def extract_front_matter_and_content(file_path):
    """Extract front matter, title, and main content from a Markdown file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Split front matter and content
        front_matter_end = content.find('---', 3)  # Find second '---' (first is at start)
        if front_matter_end == -1:
            return None, None, content  # No front matter found
        
        front_matter = content[:front_matter_end].strip()
        remaining_content = content[front_matter_end + 3:].strip()

        # Check for <head> tag and skip if present
        head_end = remaining_content.find('</head>')
        if head_end != -1:
            remaining_content = remaining_content[head_end + 7:].strip()

        # Extract the title from the front matter
        title_match = re.search(r'^title:\s*"(.*?)"', front_matter, re.MULTILINE)
        title = title_match.group(1) if title_match else "Unknown Title"

        return front_matter, title, remaining_content
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return None, None, None

def count_words_in_content(content):
    """Count words in the Markdown content, excluding syntax."""
    if not content:
        return 0

    # Remove Markdown syntax
    content = re.sub(r'^#{1,6}\s.*$', '', content, flags=re.MULTILINE)
    content = re.sub(r'```[\s\S]*?```', '', content)
    content = re.sub(r'`[^`]*`', '', content)
    content = re.sub(r'\[([^\]]*)\]\([^\)]*\)', r'\1', content)
    content = re.sub(r'!\[([^\]]*)\]\([^\)]*\)', '', content)
    content = re.sub(r'\*\*([^\*]*)\*\*', r'\1', content)
    content = re.sub(r'\*([^\*]*)\*', r'\1', content)
    content = re.sub(r'__([^_]*)__', r'\1', content)
    content = re.sub(r'_([^_]*)_', r'\1', content)
    content = re.sub(r'^\s*[-*+]\s', '', content, flags=re.MULTILINE)
    content = re.sub(r'^\s*\d+\.\s', '', content, flags=re.MULTILINE)
    content = re.sub(r'^\s*>\s', '', content, flags=re.MULTILINE)
    content = re.sub(r'^-{3,}$', '', content, flags=re.MULTILINE)
    content = re.sub(r'^\*{3,}$', '', content, flags=re.MULTILINE)
    content = re.sub(r'<[^>]+>', '', content)

    # Split into words and count non-empty ones
    words = [word.strip() for word in content.split() if word.strip()]
    return len(words)

def extract_date_from_filename(filename):
    """Extract date from filename in format YYYY-MM-DD-title.md."""
    date_part = filename[:10]  # Extract YYYY-MM-DD
    return date_part

def scan_directory_for_md_files(directory):
    """Scan the directory for .md files and return data in CSV format."""
    directory = Path(directory)
    if not directory.is_dir():
        print(f"Error: {directory} is not a valid directory.")
        return ""
    
    md_files = list(directory.glob("*.md"))
    if not md_files:
        print("No .md files found in the directory.")
        return ""
    
    # Prepare CSV output
    output = StringIO()
    writer = csv.writer(output, lineterminator='\n')
    writer.writerow(['Date', 'Words', 'Title'])  # CSV header

    # Sort files by date (extracted from filename)
    md_files.sort(key=lambda x: x.name[:10])  # Sort by YYYY-MM-DD
    for md_file in md_files:
        front_matter, title, content = extract_front_matter_and_content(md_file)
        if title and content:
            word_count = count_words_in_content(content)
            date = extract_date_from_filename(md_file.name)
            writer.writerow([date, word_count, title])
    
    return output.getvalue()

if __name__ == "__main__":
    # Specify the directory to scan
    target_directory = r"C:\_Dev\ckalitin.github.io\_posts"
    csv_output = scan_directory_for_md_files(target_directory)
    print(csv_output)

    # Optionally save to a file
    with open('word_counts.csv', 'w', encoding='utf-8') as f:
        f.write(csv_output)