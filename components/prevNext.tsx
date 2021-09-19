import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import style from 'styles/singleBlog.module.scss'
import { Path } from 'utils/constant'

const PrevNext =({ prev, next }: PrevNextPropsType) => {
    return (
        <div className={style.pnWrapper}>
            {0 < prev.length &&
                <Link href={`/blog/${prev[0].slug}`}>
                    <a className={style.linkCard}>
                        <Image src={Path.ARROW_LEFT} alt="arrow-left" className="arrow-left" height={30} width={30} />
                        <h3> {prev[0].frontMatter.title}</h3>
                    </a>
                </Link>
            }
            {0 < next.length &&
                <Link href={`/blog/${next[0].slug}`}>
                    <a className={style.linkCard}>
                        <h3>{next[0].frontMatter.title}</h3>
                        <Image src={Path.ARROW_RIGHT} alt="arrow-right" className="arrow-right" height={30} width={30} />
                    </a>
                </Link>
            }
        </div>
    )
}

type PrevNextPropsType = {
    prev: BlogType[],
    next: BlogType[],
}

type BlogType = {
    frontMatter: FrontMatterType,
    markdownBody: string,
    slug: string,
}

type FrontMatterType = {
    title: string,
    image: string,
    excerpt: string,
    date: string,
}

export default PrevNext