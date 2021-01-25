import React, { useState } from 'react'
import utilStyles from '../styles/utils.module.scss'

const Apis = ({ freeAPIList }) => {
    const [showList, setShowList] = useState(false)

    const arrow = showList ? '🠻' : '🠺'

    return (
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg} style={{ cursor: 'pointer', userSelect: 'none' }} onClick={() => setShowList(!showList)}>Free API's {arrow}</h2>
            {
                showList &&
                <ul className={utilStyles.list}>
                    {freeAPIList
                        .filter(freeAPIData => freeAPIData.Auth === '')
                        .sort((a, b) => a.API.localeCompare(b.API))
                        .map(({ Link, API }) => (
                            <li className={utilStyles.listItem} key={Link}>
                                {API} - <a href={Link} target="_blank" rel="noopener nofollow noreferrer">{Link}</a>
                            </li>
                        ))}
                </ul>
            }
        </section>
    )
}

export default Apis
