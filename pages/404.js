import Head from 'next/head'
import MainLayout from '../components/MainLayout'

export default function Custom404() {
    return (
        <MainLayout>
            <Head>
                <title>404 - Page Not Found</title>
            </Head>
            <h1>404 - Page Not Found 😥</h1>
        </MainLayout>
    )
}