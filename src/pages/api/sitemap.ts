import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';
import { websiteUrl } from '../../utils/consts';

const root = process.cwd();

async function getFiles(type: string) {
  return fs.readdirSync(path.join(root, 'data', type));
}

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const blogUrls = (await getFiles('blog')).map((p) => websiteUrl + 'blog/' + p.replace(/\.mdx/, ''));

  res.end([`${websiteUrl}`, `${websiteUrl}blog`].concat(blogUrls).join('\n'));
};
