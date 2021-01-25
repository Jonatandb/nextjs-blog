import React from 'react'
import utilStyles from '../styles/utils.module.scss'

const Blogs = ({ allPostsData }) => {
    return (
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Blog &#129083;</h2>
            <ul className={utilStyles.list}>
                {allPostsData.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                        {title}
                        <br />
                        {id}
                        <br />
                        {date}
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Blogs
