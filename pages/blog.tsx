import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import Layout from 'components/layout'
import SEO from 'components/seo'
import Pagination from 'components/pagination'
import { getAllBlogs, blogsPerPage } from 'utils/mdQueries'
import styles from 'styles/blog.module.scss'

const Blog = ({ blogs, numberPages }: BlogPropsType) => {
    return (
        <Layout>
            <SEO title="ブログ" description="これはブログページです" />
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <h1>Blog</h1>
                    <p>エンジニアの日常生活をお届けします</p>
                    {blogs.map((blog: BlogType, index: number) => {
                        const { title, excerpt, date, image } = blog.frontMatter
                        return (
                            <div key={index} className={styles.blogCard}>
                                <div className={styles.textContainer}>
                                    <h3>{title}</h3>
                                    <p>{excerpt}</p>
                                    <p>{date}</p>
                                    <Link href={`/blog/${blog.slug}`}><a>Read More</a></Link>
                                </div>
                                <div className={styles.cardImg}>
                                    <Image src={image} alt="card-image" height={300} width={1000} quality={90} />
                                </div>
                            </div>
                        )}
                    )}
                </div>
                <Pagination numberPages={numberPages} />
            </div>
        </Layout>
    )
}

export default Blog

type FrontMatterType = {
    title: string,
    excerpt: string,
    date: string,
    image: string,
}

type BlogType = {
    frontMatter: FrontMatterType,
    slug: string,
}

type BlogPropsType = {
    blogs: Array<BlogType>,
    numberPages: number
}

export async function getStaticProps() {
    const { orderedBlogs, numberPages } = await getAllBlogs()
    const limitedBlogs = orderedBlogs.slice(0, blogsPerPage)
    return {
        props: {
            blogs: limitedBlogs,
            numberPages: numberPages
        }
    }
}
