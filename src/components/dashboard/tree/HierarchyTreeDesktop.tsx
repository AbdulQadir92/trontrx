"use client"
import { Tree, TreeNode } from 'react-organizational-chart'
import CustomNodeDesktop from "./CustomNodeDesktop"


const treeData = [
    {
        images: {
            profileBg: "/assets/images/dashboard/tree/profile-bg.png",
            profile: "/assets/images/dashboard/tree/profile.svg"
        },
        address: "TRX",
        amount: 100
    },
    {
        images: {
            profileBg: "/assets/images/dashboard/tree/profile-bg.png",
            profile: "/assets/images/dashboard/tree/profile.svg"
        },
        address: "TRX",
        amount: 600
    },
    {
        images: {
            profileBg: "/assets/images/dashboard/tree/profile-bg.png",
            profile: "/assets/images/dashboard/tree/profile.svg"
        },
        address: "TRX",
        amount: 500
    }
]

const HierarchyTreeDesktop = () => {
    return (

        <Tree
            lineWidth={'5px'}
            lineHeight={'50px'}
            lineColor={'#FBBD18'}
            lineBorderRadius={'10px'}
            nodePadding={'20px'}
            label={
                <CustomNodeDesktop
                    profileBg={treeData[0].images.profileBg}
                    profileImg={treeData[0].images.profile}
                    address={treeData[0].address}
                    amount={treeData[0].amount}
                />
            }>

            {/* child 1 */}
            <TreeNode label={
                <CustomNodeDesktop
                    profileBg={treeData[0].images.profileBg}
                    profileImg={treeData[0].images.profile}
                    address={treeData[0].address}
                    amount={treeData[0].amount}
                />
            }>
                {/* grandchildren */}
                {treeData.map((item, index) => (
                    <TreeNode key={index} label={
                        <CustomNodeDesktop
                            profileBg={item.images.profileBg}
                            profileImg={item.images.profile}
                            address={item.address}
                            amount={item.amount}
                        />}>
                    </TreeNode>
                ))}
            </TreeNode>

            {/* child 2 */}
            <TreeNode label={
                <CustomNodeDesktop
                    profileBg={treeData[0].images.profileBg}
                    profileImg={treeData[0].images.profile}
                    address={treeData[0].address}
                    amount={treeData[0].amount}
                />
            }>
                {/* grandchildren */}
                {treeData.map((item, index) => (
                    <TreeNode key={index} label={
                        <CustomNodeDesktop
                            profileBg={item.images.profileBg}
                            profileImg={item.images.profile}
                            address={item.address}
                            amount={item.amount}
                        />}>
                    </TreeNode>
                ))}
            </TreeNode>

            {/* child 3 */}
            <TreeNode label={
                <CustomNodeDesktop
                    profileBg={treeData[0].images.profileBg}
                    profileImg={treeData[0].images.profile}
                    address={treeData[0].address}
                    amount={treeData[0].amount}
                />
            }>
                {/* grandchildren */}
                {treeData.map((item, index) => (
                    <TreeNode key={index} label={
                        <CustomNodeDesktop
                            profileBg={item.images.profileBg}
                            profileImg={item.images.profile}
                            address={item.address}
                            amount={item.amount}
                        />}>
                    </TreeNode>
                ))}
            </TreeNode>

        </Tree>
    )
}

export default HierarchyTreeDesktop