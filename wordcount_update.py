import pandas as pd
import os
import re

def read_front_matter(file_path):
    """Read the front matter from a Markdown file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            # Match front matter between --- delimiters
            front_matter_match = re.match(r'^---\s*\n(.*?)\n---\s*\n', content, re.DOTALL)
            if front_matter_match:
                return front_matter_match.group(1), content
            else:
                return None, content
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return None, None

def update_front_matter(front_matter, word_count):
    """Update or add word_count in the front matter."""
    
    # Check if word_count already exists
    if re.search(r'^word_count:\s*\d+', front_matter, re.MULTILINE):
        # Update existing word_count
        updated_front_matter = re.sub(
            r'^word_count:\s*\d+',
            f'word_count: {word_count}',
            front_matter,
            flags=re.MULTILINE
        )
        return updated_front_matter
    else:
        # Append word_count to existing front matter
        return f"{front_matter}\nword_count: {word_count}"

def write_updated_file(file_path, front_matter, content):
    """Write the updated content back to the file."""
    try:
        # Extract the body content (after front matter)
        body = re.sub(r'^---\s*\n.*?\n---\s*\n', '', content, 1, re.DOTALL)
        # Write updated file with new front matter
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(f"---\n{front_matter}\n---\n{body}")
        print(f"Updated {file_path}")
    except Exception as e:
        print(f"Error writing to {file_path}: {e}")

def main():
    # Read the CSV file
    csv_file = 'word_counts.csv'
    try:
        df = pd.read_csv(csv_file)
    except Exception as e:
        print(f"Error reading CSV file {csv_file}: {e}")
        return

    # Process each row in the CSV
    for _, row in df.iterrows():
        date = row['Date']
        word_count = row['Words']
        file_path = row['Path']

        # Check if the file exists
        if not os.path.exists(file_path):
            print(f"File not found: {file_path}")
            continue

        # Read the front matter and content
        front_matter, content = read_front_matter(file_path)
        if content is None:
            print(f"Skipping {file_path}: Could not read content")
            continue

        # Update or add word_count in front matter
        updated_front_matter = update_front_matter(front_matter, word_count)

        # Write the updated content back to the file
        write_updated_file(file_path, updated_front_matter, content)

if __name__ == "__main__":
    main()