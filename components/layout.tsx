import React from "react";
import { ReactNode } from "react";
import Header from './header'
import Footer from './footer'

type Props = {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />
                <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout