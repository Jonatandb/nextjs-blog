import React from 'react'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import Date from './Date'

const Blogs = ({ allPostsData }) => {
    return (
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Blog &#129083;</h2>
            <ul className={utilStyles.list}>
                {allPostsData.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                        <Link href={`/posts/${id}`}>
                            {title}
                        </Link>
                        <br />
                        <small className={utilStyles.lightText}>
                            <Date dateString={date} />
                        </small>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Blogs
