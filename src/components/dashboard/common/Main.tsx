"use client"
import { CurrentStatsStyled, MainStyled, Page } from "@/styles/pages/components/dashboard/Layout.styled"
import Header from "@/components/dashboard/common/Header"
import SidebarDesktop from "@/components/dashboard/common/SidebarDesktop"
import SidebarMobile from "@/components/dashboard/common/SidebarMobile"


const Main = ({ children }: { children: React.ReactNode }) => {

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