"use client"
import {
    TreeCardStyled,
    HierarchyButton,
    HierarchyTreeStyled
} from "@/styles/pages/components/dashboard/tree/TreeCard.styled"
import dynamic from "next/dynamic"


const TreeCard = () => {
    const HierarchyTreeDesktop = dynamic(() => import('./HierarchyTreeDesktop'), { ssr: false });

    return (
        <TreeCardStyled>
            <HierarchyButton>Your Hierarchy</HierarchyButton>
            <HierarchyTreeStyled>
                <HierarchyTreeDesktop />
            </HierarchyTreeStyled>
        </TreeCardStyled>
    )
}

export default TreeCard