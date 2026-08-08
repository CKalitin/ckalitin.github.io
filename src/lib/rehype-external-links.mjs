// Every link in a post body opens in a new tab -- reading a post
// shouldn't cost you your place when you follow a link out of it.
export default function rehypeExternalLinks() {
  function visit(node) {
    if (node.type === 'element' && node.tagName === 'a' && node.properties?.href) {
      node.properties.target = '_blank';
      node.properties.rel = ['noopener', 'noreferrer'];
    }
    if (node.children) node.children.forEach(visit);
  }
  return (tree) => {
    tree.children.forEach(visit);
  };
}
