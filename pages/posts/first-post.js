import Link from 'next/link'
import Head from 'next/head'
import MainLayout from '../../components/MainLayout'
import styles from './first-post.module.scss'

function FirstPost(props) {
    // console.log(JSON.stringify(props, null, 2))
    // console.log('FirstPost -> rendered:', props.["data-jdb"])
    return (
        <MainLayout>
            <Head>
                <title>First post page!</title>
            </Head>
            <h1 className={styles.container}>There's nothing here 😂</h1>
        </MainLayout>
    )
}

// FirstPost.displayName = "Joooo"

export default FirstPost