import { NextSeo, BlogJsonLd, BreadcrumbJsonLd } from 'next-seo';
import { websiteUrl } from '../utils/consts';

const BlogSeo = ({ title, summary, publishedAt, url, slug }: any) => {
  const date = new Date(publishedAt).toISOString();
  // TODO: change to website url
  const featuredImage = {
    url: `https://portfolio-git-blog.dsumer.vercel.app/api/og-image?title=${encodeURIComponent(
      title,
    )}&slug=/blog/${slug}`,
    alt: title,
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
