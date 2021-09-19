import matter from 'gray-matter'

export const blogsPerPage = 5

export async function getAllBlogs() {
    const blogs = ((context) => {
        const keys = context.keys()
        const values = keys.map(context)
        return keys.map((key: string, index: number) => {
            let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
            let value = values[index] as ValueType
            let document = matter(value.default)
            return {
                frontMatter: document.data,
                slug: slug
            }
        })
    })(require.context('data/', false, /data.+md$/))
    const orderedBlogs = blogs.sort((a, b) => {
        return b.frontMatter.id - a.frontMatter.id
    })

    const numberPages = Math.ceil(orderedBlogs.length / blogsPerPage)

    return {
        orderedBlogs: orderedBlogs,
        numberPages: numberPages
    }
}

type ValueType = {
    default: string,
}

export async function getSingleBlog(slug: string) {
    const data = await import(`data/${slug}.md`)
    const singleDocument = matter(data.default)
    return {
        singleDocument: singleDocument
    }
}
