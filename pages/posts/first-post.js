import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/Layout'
import styles from './first-post.module.scss'

function FirstPost(props) {
    // console.log(JSON.stringify(props, null, 2))
    // console.log('FirstPost -> rendered:', props.["data-jdb"])
    return (
        <Layout>
            <Head>
                <title>First post page!</title>
            </Head>
            <h1 className={styles.container}>There's nothing here 😂</h1>
        </Layout>
    )
}

// FirstPost.displayName = "Joooo"

export default FirstPost