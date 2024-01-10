"use client"
import { CurrentStatsStyled, MainStyled, Page } from "@/styles/pages/components/dashboard/Layout.styled"
import Header from "@/components/dashboard/common/Header"
import SidebarDesktop from "@/components/dashboard/common/SidebarDesktop"
import SidebarMobile from "@/components/dashboard/common/SidebarMobile"
import { useEffect } from "react"


const Main = ({ children }: { children: React.ReactNode }) => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        })
    }, [])

    return (
        <CurrentStatsStyled>
            <Header />
            <SidebarMobile activeLink="currentStats" />
            <MainStyled>
                <SidebarDesktop activeLink="currentStats" />
                <Page>
                    {children}
                </Page>
            </MainStyled>
        </CurrentStatsStyled>
    )
}

export default Main