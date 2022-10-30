import { Switch, Typography } from "@mui/material";
import { useState } from "react"
import BadgeIcon from '@mui/icons-material/Badge';
import ExperienceCard from "./ExperienceCard";
import { Accordion, AccordionDetails } from '@mui/material';
import { AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const experiences = [
    {
        title: "Software Engineering Intern",
        company: "Meta Platforms, Inc (Facebook)",
        companyLocation: "Menlo Park, CA",
        comapnyUrl: "https://facebook.com/",
        startDate: Date.parse("31 May 2021"),
        endDate: Date.parse("19 August 2022"),
        tags: ["Software", "Frontend", "Privacy", "Visualization", "Big Data", "Machine Learning Models", "Validation Framework", "Android Development"],
        stacksUsed: ["React", "Android", "Java", "GraphQL", "SQL"],
        tasks: ["Developed an end-to-end framework for testing a next generation privacy tool for Meta Products",
            "Tested in Facebook Android app with 2B+ users",
            "Pipelined aggregated metrics, reducing storage from 2 TB to 69 GB and speeding hive and scuba queries",
            "Automated validation of results/errors during sampling and aggregations using machine learning tools",
            "Created UI and charts for comparing result with theoretical models in React and GraphQL",],
    },
    {
        title: "Teaching Assistant",
        company: "The State University of New York at Buffalo",
        companyLocation: "Buffalo, NY",
        comapnyUrl: "https://facebook.com/",
        startDate: Date.parse("31 January 2021"),
        endDate: Math.min(Date.now(), Date.parse("30 December 2022")),
        tags: ["Software", "Frontend", "Privacy", "Visualization", "Big Data", "Machine Learning Models", "Validation Framework", "Android Development"],
        stacksUsed: ["C", "C++", "Sockets", "Python", "Bash"],
        tasks: ["Teaching Assistant and Grader for the course Modern Network Concepts",
            "Worked on grading scripts and project assisgnments",
            "Helped 200+ students on bugs and problems on their code",]
    },
    {
        title: "Software Engineer",
        company: "Clamphook Pvt. Ltd",
        companyLocation: "Kathmandu, Nepal",
        comapnyUrl: "https://clamphook.com/",
        startDate: Date.parse("2 April 2021"),
        endDate: Date.parse("28 August 2021"),
        tags: ["Software", "Frontend", "Ed Tech", "Visualization"],
        stacksUsed: ["React", "Next JS", "Flask", "Tailwind css", "JavaScript"],
        tasks: ["Architected an e-learning web application ( www.clamphook.com ) currently having 50000+ users.",
            "Improved loading time by 40% and users’ retention by 25% by generating static pages for onboarding",
            "Revamped support for Latex, Markdown, and Smiles Components and decreased render time by 50%",
            "Mentored and led a team of 5 for frontend development",
            "Designed and programmed subscriptions and a customized dashboard for students"],
    },
    {
        title: "Software Engineer",
        company: "E&T Pvt. Ltd.",
        companyLocation: "Kathmandu, Nepal",
        comapnyUrl: "https://clamphook.com/",
        startDate: Date.parse("2 October 2018"),
        endDate: Date.parse("2 April 2020"),
        tags: ["Software", "Windows Programming", "High Performance Computing", "Visualization"],
        stacksUsed: ["C++", "openGL", "CUDA", "Boost", "C#", "Windows Application", "Visualization"],
        tasks: ["Coded a program for physics simulation using 1000000 particles  ",
            "Implemented CUDA for parallel processing, decreasing calculation time by 20 folds.",
        ],
    },

]

export default function ExperienceSection() {
    const [showRelevant, setShowRelevant] = useState(true);
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant='h4' color="text.primary" align='left'>
                    <BadgeIcon /> Experience
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Switch checked={showRelevant} onChange={(_, value) => setShowRelevant(value)} /> Show Only Relevant Experience
                {experiences.map((ele, idx) => <ExperienceCard key={idx} {...ele} />)}
            </AccordionDetails>
        </Accordion>
    )
}