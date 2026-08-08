import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { postUrl, sortByDateDesc } from '../lib/posts';

export async function GET(context) {
  const posts = (await getCollection('posts')).sort(sortByDateDesc);
  return rss({
    title: 'Christopher Kalitin Blog',
    description: 'Space industry analysis, techno-economic modelling, and engineering projects.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: postUrl(post.id),
      categories: post.data.tags,
    })),
    customData: '<language>en-us</language>',
  });
}
