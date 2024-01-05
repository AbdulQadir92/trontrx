import type { Metadata } from "next"
import Main from "@/components/dashboard/common/Main"


export const metadata: Metadata = {
    title: 'TRON TRX dashboard'
}

const layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div>
            <Main>{children}</Main>
        </div>
    )
}

export default layout