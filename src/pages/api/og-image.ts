import { NextApiRequest, NextApiResponse } from 'next';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as playwright from 'playwright-aws-lambda';
import OgImage from '../../components/og-image';

const baseCSS = `*{box-sizing:border-box}body{margin:0;font-family:system-ui,sans-serif}`;

const getHtmlData = ({ body, baseCSS }: { body: string; baseCSS: string }) => {
  const html = `<!DOCTYPE html>
    <head>
    <meta charset="utf-8"><style>${baseCSS}</style>
    </head>
    <body style="display:inline-block">
    ${body}`;
  return html;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { title, slug, rt, date },
  } = req;

  const el = createElement(OgImage, {
    title: title as string,
    slug: slug as string,
    rt: rt as string,
    date: date as string,
  });
  const body = renderToStaticMarkup(el);

  const html = getHtmlData({
    body,
    baseCSS,
  });

  const width = 1200;
  const height = 630;

  const browser = await playwright.launchChromium({ headless: true });
  const page = await browser.newPage({
    viewport: {
      width,
      height,
    },
  });
  await page.setContent(html);

  const data = await page.screenshot({
    type: 'jpeg',
    clip: {
      x: 0,
      y: 0,
      width,
      height,
    },
    omitBackground: true,
  });

  await browser.close();

  // Set the s-maxage property which caches the images then on the Vercel edge
  res.setHeader('Cache-Control', 's-maxage=31536000, stale-while-revalidate');
  res.setHeader('Content-Type', 'image/jpeg');

  // write the image to the response with the specified Content-Type
  res.end(data);
};
