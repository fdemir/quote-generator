import styles from "../styles/Home.module.scss";

import Quote from "../components/Quote";
import Author from "../components/Author";

import Head from "next/head";

export default function Home({ data }) {
  const { quoteAuthor, quoteGenre, quoteText } = data.data[0];

  return (
    <>
      <Head>
        <title>{quoteAuthor}</title>
      </Head>
      <div className={styles.wrapper}>
        <div className="container">
          <Quote text={quoteText} />
          <Author category={quoteGenre} author={quoteAuthor} />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://quote-garden.herokuapp.com/api/v3/quotes/random`
  );
  const data = await res.json();

  return { props: { data } };
}
