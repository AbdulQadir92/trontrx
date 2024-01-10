import type { Metadata } from "next"
import Main from "@/components/dashboard/common/Main"


export const metadata: Metadata = {
    title: 'TRON TRX dashboard'
}

const layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <>
            <Main>{children}</Main>
        </>
    )
}

export default layout