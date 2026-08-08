// Mirrors the stripping approach of the old wordcount.py (minus its stale
// "published" detector, which is not needed now that word count is always
// computed fresh at build time).
export function countWords(markdown: string): number {
  let text = markdown;
  text = text.replace(/```[\s\S]*?```/g, ' ');
  text = text.replace(/`[^`]*`/g, ' ');
  text = text.replace(/!\[[^\]]*\]\([^)]*\)/g, ' ');
  text = text.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
  text = text.replace(/(\*\*\*|\*\*|\*|___|__|_)/g, '');
  text = text.replace(/^#{1,6}\s*/gm, '');
  text = text.replace(/^>\s?/gm, '');
  text = text.replace(/^([-*_])\1{2,}\s*$/gm, ' ');
  text = text.replace(/<[^>]+>/g, ' ');
  const words = text.split(/\s+/).filter(Boolean);
  return words.length;
}
