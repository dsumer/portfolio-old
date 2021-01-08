/* eslint-disable */

const playwright = require('playwright-aws-lambda');
/*const { createElement: h } = require('react');
const { renderToStaticMarkup } = require('react-dom/server');*/

const baseCSS = `*{box-sizing:border-box}body{margin:0;font-family:system-ui,sans-serif}`;

const getHtmlData = ({ body, baseCSS, css, styles, webfont }) => {
  const html = `<!DOCTYPE html>
    <head>
    <meta charset="utf-8"><style>${baseCSS}${css}</style>
    ${styles}
    </head>
    <body style="display:inline-block">
    ${body}`;
  return html;
};

module.exports = async (Component, opts = {}) => {
  const {
    css = '',
    filename,
    outDir,
    webfont,
    type = 'png', // jpeg, png and pdf are allowed
  } = opts;

  const props = Object.assign(
    {
      width: opts.width,
      height: opts.height,
    },
    opts.props,
  );

  let styles = '';
  //const el = h(Component, props);
  /*const body = renderToStaticMarkup(el);

  const html = getHtmlData({
    body,
    baseCSS,
    css,
    styles,
    webfont,
  });*/

  /*const browser = await playwright.launchChromium({ headless: true });
  const page = await browser.newPage();
  await page.setContent(html);

  let rect = {};
  if (!opts.width && !opts.height) {
    const bodyEl = await page.$('body');
    rect = await bodyEl.boxModel();
  }
  const width = parseInt(opts.width || rect.width);
  const height = parseInt(opts.height || rect.height);

  await page.setViewportSize({
    width,
    height,
  });

  let result;
  if (type === 'pdf') {
    result = await page.pdf({
      width,
      height,
    });
  } else {
    result = await page.screenshot({
      type: type,
      clip: {
        x: 0,
        y: 0,
        width,
        height,
      },
      omitBackground: true,
    });
  }

  await browser.close();*/

  return undefined;
};
