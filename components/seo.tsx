import { useRouter } from "next/router";
import { Helmet } from 'react-helmet'
import { Path } from 'utils/constant'

const SEO = ( {title, description}: SEOProps ) => {
    const router = useRouter()
    const baseUrl = 'http://localhost:3000'
    const currentUrl = baseUrl + router.pathname
    const defaultImage = `${baseUrl}/images/social-card.png`
    return (
        <Helmet>
            <html lang="ja" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta charSet="utf-8" />
            <title>
                {title}
            </title>
            <meta name="description" content={description} key="description" />
            <meta name="image" content={defaultImage} key="image" />
            <link rel="canonical" href={currentUrl} key="canonical" />
            <meta property="og:title" content={title} key="ogtitle" />
            <meta property="og:description" content={description} key="ogdescription" />
            <meta property="og:image" content={defaultImage} key="ogimage" />
            <meta property="og:url" content={currentUrl} key="ogurl" />
            <link rel="shortcut icon" href={Path.FAVICON} />
            <meta />
        </Helmet>
    )
}

type SEOProps = {
    title: string,
    description: string,
}

export default SEO