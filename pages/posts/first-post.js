import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import styles from './first-post.module.css'

function FirstPost(props) {
    // console.log(JSON.stringify(props, null, 2))
    // console.log('FirstPost -> rendered:', props.["data-jdb"])
    return (
        <Layout>
            <Head>
                <title>First post page</title>
            </Head>
            <h1 className={styles.container}>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}

// FirstPost.displayName = "Joooo"

export default FirstPost