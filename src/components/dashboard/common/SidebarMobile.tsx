"use client"
import { SidebarMobileStyled, HomeButtonMobile } from "@/styles/pages/components/dashboard/SidebarMobile.styled"
import FooterNavItem from "./FooterNavItem"
import { CONTENT as content } from '@/content/content'
import Link from "next/link"
import React from "react"


interface SidebarMobileProps {
    activeLink: string
}

const SidebarMobile: React.FC<SidebarMobileProps> = ({ activeLink }) => {
    return (
        <SidebarMobileStyled id="sidebarMobile">
            <ul>
                {/* <div>
                    <img src="/assets/images/dashboard/header/dashboard.svg" alt="..." />
                    <FooterNavItem text={'DASHBOARD'} link="/dashboard/personalstats" />
                </div> */}
                <div className={activeLink === "currentStats" ? "active" : ""}>
                    <img src="/assets/images/dashboard/sidebar/currentStats.svg" alt="..." />
                    <FooterNavItem text={'PERSONAL STATS'} link="/dashboard/personalstats" isSidebar={true} />
                </div>
                <div className={activeLink === "deposit" ? "active" : ""}>
                    <img src="/assets/images/dashboard/sidebar/deposit.svg" alt="..." />
                    <FooterNavItem text={'DEPOSIT'} link="/dashboard/deposit" isSidebar={true} />
                </div>
                <div className={activeLink === "withdrawal" ? "active" : ""}>
                    <img src="/assets/images/dashboard/sidebar/withdrawl.svg" alt="..." />
                    <FooterNavItem text={'WITHDRAWAL'} link="/dashboard/withdrawal" isSidebar={true} />
                </div>
                <div className={activeLink === "tree" ? "active" : ""}>
                    <img src="/assets/images/dashboard/sidebar/tree.svg" alt="..." />
                    <FooterNavItem text={'TREE'} link="/dashboard/tree" isSidebar={true} />
                </div>
                <div className={activeLink === "contractStats" ? "active" : ""}>
                    <img src="/assets/images/dashboard/sidebar/currentStats.svg" alt="..." />
                    <FooterNavItem text={'CONTRACT STATS'} link="/dashboard/contractstats" isSidebar={true} />
                </div>
            </ul>
            <HomeButtonMobile>
                <button type="button">
                    <img src="/assets/images/dashboard/header/home.svg" />
                    <Link href="/">
                        {content.dashboard.header.homeButton}
                    </Link>
                </button>
            </HomeButtonMobile>
        </SidebarMobileStyled>
    )
}

export default SidebarMobile