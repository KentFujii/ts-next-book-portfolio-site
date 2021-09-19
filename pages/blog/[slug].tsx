import React from "react";
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import Layout from 'components/layout'
import PrevNext from "components/prevNext"
import SEO from 'components/seo'
import {getAllBlogs, getSingleBlog} from 'utils/mdQueries'
import styles from 'styles/singleBlog.module.scss'

const SingleBlog = ({ frontMatter, markdownBody, prev, next }: SingleBlogPropsType) => {
    const { title, image, excerpt, date } = frontMatter
    return (
        <Layout>
            <SEO title={title} description={excerpt} />
            <div className={styles.hero}>
                <Image src={image} alt="blog-image" height="500" width="1000" />
            </div>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <h1>{title}</h1>
                    <p>{date}</p>
                    <ReactMarkdown>{markdownBody}</ReactMarkdown>
                </div>
                <PrevNext prev={prev} next={next} />
            </div>
        </Layout>
    )
}

type SingleBlogPropsType = {
    frontMatter: FrontMatterType,
    markdownBody: string,
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

export default SingleBlog

export async function getStaticPaths() {
    const { orderedBlogs } = await getAllBlogs()
    const paths = orderedBlogs.map((orderedBlog) => `/blog/${orderedBlog.slug}`)
    return {
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps(context: Context) {
    const { slug } = context.params
    const { singleDocument } = await getSingleBlog(slug)
    const { orderedBlogs } = await getAllBlogs()
    const prev = orderedBlogs.filter(orderedBlog => orderedBlog.frontMatter.id === singleDocument.data.id - 1)
    const next = orderedBlogs.filter(orderedBlog => orderedBlog.frontMatter.id === singleDocument.data.id + 1)
    return {
        props: {
            frontMatter: singleDocument.data,
            markdownBody: singleDocument.content,
            prev: prev,
            next: next,
        }
    }
}

type Context = {
    params: Params
}

type Params = {
    slug: string
}
