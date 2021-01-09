import { NextSeo, BlogJsonLd, BreadcrumbJsonLd } from 'next-seo';
import { websiteUrl } from '../utils/consts';

const BlogSeo = ({ title, summary, publishedAt, url, slug }: any) => {
  const date = new Date(publishedAt).toISOString();
  const featuredImage = {
    url: `${websiteUrl}api/og-image?title=${encodeURIComponent(title)}&slug=/blog/${slug}`,
    alt: title,
    width: 1200,
    height: 630,
  };

  return (
    <>
      <NextSeo
        title={`${title} - Dominik Sumer`}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: date,
          },
          url,
          title,
          description: summary,
          images: [featuredImage],
        }}
        twitter={{
          handle: '@dominiksumer',
          cardType: 'summary_large_image',
        }}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Blog',
            item: `${websiteUrl}blog`,
          },
          {
            position: 2,
            name: title,
            item: url,
          },
        ]}
      />
      <BlogJsonLd
        authorName="Dominik Sumer"
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[featuredImage.url]}
        title={title}
        url={url}
      />
    </>
  );
};

export default BlogSeo;
