import fs from 'fs';
import path from 'path';
import repng from 'repng';
import OgImage from '../components/og-image';

export async function generateOgImage(fileName: string, title: string, slug: string) {
  if (process.env.NODE_ENV === 'development') {
    return 'dev';
  }

  let chrome = {} as any;

  if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
    // running on the Vercel platform.
    chrome = require('chrome-aws-lambda');
  }

  const outputFileName = fileName + '.jpg';
  const outDir = './public/images/og';
  const file = await repng(OgImage, {
    type: 'jpeg',
    width: 1200,
    height: 630,
    props: { title, slug },
    puppeteer: {
      args: [...chrome.args, '--hide-scrollbars', '--disable-web-security'],
      defaultViewport: chrome.defaultViewport,
      executablePath: await chrome.executablePath,
      headless: true,
      ignoreHTTPSErrors: true,
    },
  });
  const finalPath = path.join(outDir, outputFileName);

  //create the needed directories
  await fs.promises.mkdir(outDir, { recursive: true });

  //write the image file
  await fs.promises.writeFile(finalPath, file);

  return '/images/og/' + outputFileName;
}
