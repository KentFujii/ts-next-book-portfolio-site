import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import { Path } from 'utils/constant'
import styles from 'styles/common.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footerWrapper}>
            <div className={styles.insideContainer}>
                <a href="https://www.google.com/">
                    <Image src="/images/github.svg" alt="logo" width={50} height={50} />
                </a>
                <a href="https://www.google.com/">
                    <Image src="/images/linkedin.svg" alt="logo" width={50} height={50} />
                </a>
                <a href="https://www.google.com/">
                    <Image src="/images/twitter.svg" alt="logo" width={50} height={50} />
                </a>
                <a href="https://www.google.com/">
                    <Image src="/images/facebook.svg" alt="logo"  width={50} height={50} />
                </a>
                <hr/>
                <Link href={Path.BLOG}><a>Blog</a></Link>
                <Link href={Path.CONTACT}><a>Contact</a></Link>
                <p>©{new Date().getFullYear()} Abe Hiroki</p>
            </div>
        </footer>

    )
}

export default Footer