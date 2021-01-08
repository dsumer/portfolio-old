import fs from 'fs';
import path from 'path';
import repng from './repng';
import OgImage from '../components/og-image';

export async function generateOgImage(fileName: string, title: string, slug: string) {
  if (process.env.NODE_ENV === 'development') {
    return 'dev';
  }

  const outputFileName = fileName + '.png';
  const outDir = './public/images/og';
  const file = await repng(OgImage, {
    type: 'png',
    width: 1200,
    height: 630,
    props: { title, slug },
  });
  const finalPath = path.join(outDir, outputFileName);

  //create the needed directories
  await fs.promises.mkdir(outDir, { recursive: true });

  //write the image file
  await fs.promises.writeFile(finalPath, file);

  return '/images/og/' + outputFileName;
}
