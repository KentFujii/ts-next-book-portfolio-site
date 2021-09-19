import Link from 'next/link'
import Image from 'next/image'
import Layout from 'components/layout'
import Seo from 'components/seo'
import Pagination from 'components/pagination'
import styles  from 'styles/blog.module.scss'
import { getAllBlogs, blogsPerPage } from 'utils/mdQueries'

const PaginationPage = ({ blogs, numberPages }: PaginationPageType) => {
    return (
        <Layout>
            <Seo title="ブログ" description="これはブログページです" />
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <h1>Blog</h1>
                    <p>エンジニアの日常生活をお届けします</p>
                    {blogs.map((blog, index) => {
                        const { title, date, excerpt, image } = blog.frontMatter
                        return(
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

export default PaginationPage

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

type PaginationPageType = {
    blogs: Array<BlogType>,
    numberPages: number
}


export async function getStaticPaths() {
    const { numberPages } = await getAllBlogs()
    let paths: string[];
    paths = [];
    Array.from({ length: numberPages }).slice(0, 1).forEach((_, i) => paths.push(`/blog/page/${i + 2}`))
    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps(context: Context) {
    const { orderedBlogs, numberPages } = await getAllBlogs()
    const currentPage = context.params.pagination
    const limitedBlogs = orderedBlogs.slice((currentPage -1) * blogsPerPage, currentPage * blogsPerPage)
    return {
        props: {
            blogs: limitedBlogs,
            numberPages: numberPages,
        },
    }
}

type Context = {
    params: Params
}

type Params = {
    pagination: number
}
