import Head from "next/head";

import PropTypes from "prop-types";
import CustomPropTypes from "propTypes";

import Layout from "../../../components/layout/layout";
import { getAllListPaths, getSortedPostsData } from "../../../lib/posts";
import Preview from "../../../components/preview/preview";
import Pagination from "../../../components/pagination";

const categoryTitles = {
  tech: ["Tech", "Everything that has piqued my interest"],
  folio: ["Folio", "Here is some work I'm proud of"],
  blog: ["Blog", "This is all I've been posting"],
};

export default function PostList({ postsData, category, prevPage, nextPage }) {
  const categoryTitle =
    category?.charAt(0)?.toUpperCase() + category?.slice(1) || "Blog";

  return (
    <Layout>
      <Head>
        <title>Lipe.dev | {categoryTitle}</title>
        <meta
          property="og:image:secure_url"
          content="/images/posts/lipe-dev.svg"
        />
        <meta name="og:title" content={`Lipe.dev's ${category} posts`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Preview
        posts={postsData}
        round={category === "tech"}
        title={
          categoryTitles[category]
            ? categoryTitles[category][0]
            : categoryTitles.blog[0]
        }
        subtitle={
          categoryTitles[category]
            ? categoryTitles[category][1]
            : categoryTitles.blog[1]
        }
      />
      <Pagination
        baseUrl={`/posts/list/${category}/`}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </Layout>
  );
}

PostList.propTypes = {
  postsData: PropTypes.arrayOf(CustomPropTypes.postData).isRequired,
  category: PropTypes.string.isRequired,
  prevPage: PropTypes.number,
  nextPage: PropTypes.number,
};

export async function getStaticPaths() {
  const paths = getAllListPaths();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filters = {};

  params?.args?.forEach((arg) => {
    if (isNaN(arg)) filters.categories = [arg];
    else filters.page = Number(arg);
  });

  const { postsData, nextPage, prevPage } = await getSortedPostsData(filters);

  return {
    props: {
      postsData,
      nextPage,
      prevPage,
      category: filters?.categories ? filters.categories[0] : null,
    },
  };
}
