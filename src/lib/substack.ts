export interface Post {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
  image: string;
  categories: string[];
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'").replace(/\s+/g, ' ').trim();
}

function extractExcerpt(desc: string, max = 140): string {
  const text = stripHtml(desc);
  if (text.length <= max) return text;
  return text.substring(0, max).replace(/\s+\S*$/, '') + '…';
}

function extractFirstImage(html: string): string {
  const m = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (m) return m[1];
  return '';
}

function parseXmlTag(xml: string, tag: string): string {
  const cdata = xml.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`, 'i'));
  if (cdata) return cdata[1].trim();
  const m = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i'));
  return m ? m[1].trim() : '';
}

function extractEnclosure(xml: string): string {
  const m = xml.match(/<enclosure[^>]+url=["']([^"']+)["']/i);
  return m ? m[1] : '';
}

function parseItems(xml: string): Post[] {
  const items: Post[] = [];
  const re = /<item>([\s\S]*?)<\/item>/gi;
  let m;
  while ((m = re.exec(xml)) !== null) {
    const x = m[1];
    const content = parseXmlTag(x, 'content:encoded') || parseXmlTag(x, 'description');
    items.push({
      title: parseXmlTag(x, 'title'),
      link: parseXmlTag(x, 'link'),
      pubDate: parseXmlTag(x, 'pubDate'),
      excerpt: extractExcerpt(content),
      image: extractEnclosure(x) || extractFirstImage(content),
      categories: [],
    });
  }
  return items;
}

export async function fetchSubstackPosts(limit = 12): Promise<Post[]> {
  try {
    const res = await fetch('https://zuvielejojos.substack.com/feed', {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; AstroBot/1.0)' },
    });
    if (!res.ok) return [];
    return parseItems(await res.text()).slice(0, limit);
  } catch { return []; }
}
