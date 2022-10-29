import ProjectCard from "./ProjectCard"

const projects = [
    {
        title:"Good Karma Coin (GKC)",
        link:"https://github.com/UBHSpring2022/ub-hacking-spring-2022-teams-good-karma",
        github:"https://github.com/UBHSpring2022/ub-hacking-spring-2022-teams-good-karma",
        description:"A blockchain technology which ensures that your charity reaches the people who actually need it.",
        associatedWith:"UB Hackathon 2022",
        company:"University at Buffalo",
        category:"Blockchain",
        tags:["Blockchain","Software","Frontend","Solidity","Daaps"],
        stacksUsed:["Ethereum","Solidity","Web3.js","React","MUI","JavaScript"],
        tasks:["Engineered a blockchain application based in Ethereum Network",
                "Writen smart contracts in solidity", 
                "Won Best blockchain hack in UB hackathon 2022",
                "Interfaced Ethereum network in web3.js",
                "Developed UI using MUI(React)"],
    },
    {
        title:"Good Karma Coin (GKC)",
        link:"https://github.com/UBHSpring2022/ub-hacking-spring-2022-teams-good-karma",
        github:"https://github.com/UBHSpring2022/ub-hacking-spring-2022-teams-good-karma",
        description:"A blockchain technology which ensures that your charity reaches the people who actually need it.",
        associatedWith:"UB Hackathon 2022",
        company:"University at Buffalo",
        category:"Blockchain",
        tags:["Blockchain","Software","Frontend","Solidity","Daaps"],
        stacksUsed:["Ethereum","Solidity","Web3.js","React","MUI","JavaScript"],
        tasks:["Engineered a blockchain application based in Ethereum Network",
                "Writen smart contracts in solidity", 
                "Won Best blockchain hack in UB hackathon 2022",
                "Interfaced Ethereum network in web3.js",
                "Developed UI using MUI(React)"],
    },

]

export default function ProjectSection(){
    return (
        <div>
        {
            projects.map((ele,idx)=><ProjectCard key={idx} {...ele}/>)
        }
        </div>
    )
}