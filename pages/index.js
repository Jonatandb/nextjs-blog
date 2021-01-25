import Head from 'next/head'
import MainLayout, { siteTitle } from '../components/MainLayout'
import utilStyles from '../styles/utils.module.scss'
import { getFreeAPIList, getSortedPostsData } from '../lib/posts'
import Blogs from '../components/Blogs'
import Apis from '../components/Apis'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const freeAPIList = await getFreeAPIList()
  return {
    props: {
      allPostsData,
      freeAPIList
    }
  }
}

export default function Home({ allPostsData, freeAPIList }) {
  return (
    <MainLayout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I spend my time programming web applications 💻, reading books 📚 and admiring the cosmos through my telescope 🔭</p>
      </section>
      <Blogs allPostsData={allPostsData} />
      <Apis freeAPIList={freeAPIList} />
    </MainLayout>
  )
}