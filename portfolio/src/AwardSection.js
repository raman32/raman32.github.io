import { Box, Button, ButtonGroup, Paper, Switch, Tab, Tabs, Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useState } from "react"
import ProjectCard from "./ProjectCard"
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const awards = [
    {
        title: "Software Engineer",
        company: "Clamphook Pvt. Ltd",
        companyLocation: "Kathmandu, Nepal",
        comapnyUrl: "https://clamphook.com/",
        startDate: Date.parse("2 April 2021"),
        endDate: Date.parse("28 August 2021"),
        tags: ["Software", "Frontend", "Ed Tech", "Visualization"],
        stacksUsed: ["React", "Next JS", "Flask", "Tailwind css", "JavaScript"],
        tasks: ["Engineered a blockchain application based in Ethereum Network",
            "Writen smart contracts in solidity",
            "Won Best blockchain hack in UB hackathon 2022",
            "Interfaced Ethereum network in web3.js",
            "Developed UI using MUI(React)"],
    },
    {
        title: "Software Engineering Intern",
        company: "Meta Platforms, Inc (Facebook)",
        companyLocation: "Menlo Park, CA",
        comapnyUrl: "https://facebook.com/",
        startDate: Date.parse("31 May 2021"),
        endDate: Date.parse("19 August 2022"),
        tags: ["Software", "Frontend", "Privacy", "Visualization","Big Data","Machine Learning Models","Validation Framework","Android Development"],
        stacksUsed: ["React", "Android", "Java", "GraphQL", "SQL"],
        tasks: ["Engineered a blockchain application based in Ethereum Network",
            "Writen smart contracts in solidity",
            "Won Best blockchain hack in UB hackathon 2022",
            "Interfaced Ethereum network in web3.js",
            "Developed UI using MUI(React)"],
    },
    
]

export default function AwardSection() {
    const [showRelevant, setShowRelevant] = useState(true);
    return (
        <Paper>
            <Box sx={{marginLeft:"1em", marginRight:"1em", paddingTop:"1em"}}>
             <Typography variant='h4' fontSize={30} color="text.primary" align='left' margin={1}>
                    <EmojiEventsIcon /> Awards
            </Typography>
            </Box>
            
        </Paper>
    )
}