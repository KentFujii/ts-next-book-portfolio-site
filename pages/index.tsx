import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import Layout from 'components/layout'
import SEO from 'components/seo'
import { Path } from 'utils/constant'
import styles from 'styles/index.module.scss'

const Index = () => {
    return (
        <Layout>
            <SEO title="Abe Hiroki" description="Abe Hirokiのポートフォリオサイトです" />
            <div className={styles.hero}>
                <Image src="/images/index-hero.jpg" alt="hero" layout="fill" objectFit="cover" quality={90} />
                <div className={styles.textContainer}>
                    <h1>I am Abe Hiroki!</h1>
                    <Link href={"/contact"}><a>Make It Happen!</a></Link>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.profile}>
                    <div>
                        <h2>JavaScript Nerd</h2>
                        <p>Lorem Ipsum is simply dummy text of the...</p>
                    </div>
                    <Image src="/images/profile.jpg" alt="hero" height={1195} width={1000} quality={90} />
                </div>
                <div className={styles.skills}>
                    <h2>Skills</h2>
                    <div className={styles.skillsContainer}>
                        <div>
                            <Image src="/images/javascript.svg" alt="javascript" width={50} height={50} />
                            <span>JavaScript / 10 years</span>
                        </div>
                        <div>
                            <Image src="/images/react.svg" alt="react" width={50} height={50} />
                            <span>JavaScript / 5 years</span>
                        </div>
                        <div>
                            <Image src="/images/gatsby.svg" alt="gatsby" width={50} height={50} />
                            <span>JavaScript / 3 years</span>
                        </div>
                        <div>
                            <Image src="/images/next.svg" alt="next" width={50} height={50} />
                            <span>JavaScript / 3 years</span>
                        </div>
                    </div>
                </div>
                <div className={styles.ctaButton}>
                    <Link href={Path.CONTACT}><a>Make It Happen!</a></Link>
                </div>
            </div>
        </Layout>
    )
}

export default Index