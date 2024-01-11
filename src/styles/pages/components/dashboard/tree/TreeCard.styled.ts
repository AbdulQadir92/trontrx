import styled from "styled-components"
import { YellowButton1 } from "../currentStats/InfoCard.styled"


export const TreeCardStyled = styled.div`
    min-height: 1000px;
    background: #FFFFFF;
    border-radius: 24.5px;
    text-align: center;
    border: 5px solid #FBBD18;
    margin-top: 10px;
    margin-bottom: 30px;
    padding-bottom: 30px;


    // large screens
    @media (min-width: 993px) {
        max-width: calc(100% - 233px);
    }

    // small screens
    @media (max-width: 992px) {
        margin-right: 30px;
    }

    @media (max-width: 768px) {
        min-height: 880px;
        margin: 29px 15px 30px 0;
    }

    @media (max-width: 300px) {
        margin: 29px 10px 30px 0;
    }
`

export const HierarchyButton = styled(YellowButton1)`
    animation: none;
    cursor: initial;

    @media (max-width: 300px) {
        font-size: 19px;
    }
`

export const HierarchyTreeStyled = styled.div`
    margin-top: 50px;
    overflow: auto;
    padding-top: 20px;
    padding-bottom: 50px;

    ul::before {
        height: 93px;
        top: -22px;
    }

    li::after, li::before {
        height: 71px
    }

    // mobile
    @media (max-width: 768px) {

        &::-webkit-scrollbar {
            width: 5px;
            height: 6px;
        }
        &::-webkit-scrollbar-track {
            background: #f1f1f1; 
        }
        &::-webkit-scrollbar-thumb {
            background: #888; 
            border-radius: 10px;
        }
        &::-webkit-scrollbar-thumb:hover {
            background: #555; 
        }
    }

    // desktop
    @media (min-width: 769px) {

        &::-webkit-scrollbar {
            height: 12px;
        }
        &::-webkit-scrollbar-track {
            background: #f1f1f1; 
        }
        &::-webkit-scrollbar-thumb {
            background: #888; 
            border-radius:10px;
        }
        &::-webkit-scrollbar-thumb:hover {
            background: #555; 
        }

        /* ul::before {
            height: 93px;
            top: -22px;
        }

        li::after, li::before {
            height: 71px
        } */
    }
`

