import type { CollectionEntry } from 'astro:content';

export const TAG_ORDER = [
  'Techno-Economic Modelling',
  'Space Industry Analysis',
  'Projects',
  'Ideas',
  'Vibes',
  'Drafts',
];

export function getSlug(id: string): string {
  return id.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '');
}

export function postUrl(id: string): string {
  return `/posts/${getSlug(id)}/`;
}

// A post can carry a topic tag plus "Drafts"; Drafts wins for grid placement
// so the homepage's Drafts column stays exclusive, matching the design's
// standalone "Drafts (Published, Unfinished)" column.
export function primaryTag(tags: string[]): string {
  if (tags.includes('Drafts')) return 'Drafts';
  return tags[0];
}

export function sortByDateDesc(a: CollectionEntry<'posts'>, b: CollectionEntry<'posts'>): number {
  return b.data.date.getTime() - a.data.date.getTime();
}

export function groupByTag(posts: CollectionEntry<'posts'>[]) {
  const sorted = [...posts].sort(sortByDateDesc);
  const groups = new Map<string, CollectionEntry<'posts'>[]>();
  for (const tag of TAG_ORDER) groups.set(tag, []);
  for (const post of sorted) {
    const tag = primaryTag(post.data.tags);
    if (!groups.has(tag)) groups.set(tag, []);
    groups.get(tag)!.push(post);
  }
  return TAG_ORDER.filter((tag) => (groups.get(tag)?.length ?? 0) > 0).map((tag) => ({
    tag,
    posts: groups.get(tag)!,
  }));
}

export function formatDateLines(date: Date): { top: string; year: string } {
  const top = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
  const year = String(date.getUTCFullYear());
  return { top, year };
}

export function formatDateFull(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
}
