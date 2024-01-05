"use client"
import { CurrentStatsStyled, MainStyled, Page } from "@/styles/pages/components/dashboard/Layout.styled"
import Header from "@/components/dashboard/common/Header"
import SidebarDesktop from "@/components/dashboard/common/SidebarDesktop"
import SidebarMobile from "@/components/dashboard/common/SidebarMobile"
import { useEffect, useState } from "react"


const Main = ({ children }: { children: React.ReactNode }) => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        })
    }, [])

    const [sidebarClass, setSidebarClass] = useState(false);
    const toggleSidebar = () => {
        setSidebarClass(!sidebarClass);
    }

    return (
        <CurrentStatsStyled>
            <Header toggleSidebar={toggleSidebar} />
            <SidebarMobile sidebarClass={sidebarClass} activeLink="currentStats" />
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