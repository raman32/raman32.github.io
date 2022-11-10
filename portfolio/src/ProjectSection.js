import { Box, Tab, Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useState } from "react"
import ProjectCard from "./ProjectCard"
import TerminalIcon from '@mui/icons-material/Terminal';
import { Accordion } from '@mui/material';
import { AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const projects = [
    {
        title: "Good Karma Coin (GKC)",
        link: "https://github.com/UBHSpring2022/ub-hacking-spring-2022-teams-good-karma",
        github: "https://github.com/UBHSpring2022/ub-hacking-spring-2022-teams-good-karma",
        description: "A blockchain technology which ensures that your charity reaches the people who actually need it.",
        associatedWith: "UB Hackathon 2022",
        company: "University at Buffalo",
        category: ["Software Engineering", "Blockchain"],
        tags: ["Blockchain", "Software", "Frontend", "Solidity", "Daaps"],
        stacksUsed: ["Ethereum", "Solidity", "Web3.js", "React", "MUI", "JavaScript"],
        tasks: ["Engineered a blockchain application based in Ethereum Network",
            "Writen smart contracts in solidity",
            "Won Best blockchain hack in UB hackathon 2022",
            "Interfaced Ethereum network in web3.js",
            "Developed UI using MUI(React)"],
    },
    {
        title: "PySCoOL",
        link: "https://gitlab.com/SCoRe-Group/scool",
        github: "https://gitlab.com/SCoRe-Group/scool",
        description: "A Python based framework for Scalable Common Optimization Library (SCoOL) for ease of implementation for HPC computation",
        associatedWith: "Course Project for Parallel and Distributed Processing",
        company: "University at Buffalo",
        category: ["Software Engineering"],
        tags: ["Software", "High Performance Computing ", "Parallel Computing", "Distributed Systems", "Python Bindings"],
        stacksUsed: ["C++", "Python", "pybind11", "openMP", "MPI", "CUDA"],
        tasks: ["Built a python framework by using pybind11",
            "Created Trampoline classes in SCoOL library for integration with python",
            "Benchmarked the performance tradeoff for using python by solving the TSP problem",
        ],
    },
    {
        title: "CLI Chat Application",
        link: "https://gitlab.com/SCoRe-Group/scool",
        github: "https://gitlab.com/SCoRe-Group/scool",
        description: "A command line based chat application where clients can connect to server and chat and send files.",
        associatedWith: "Course Project for Modern Network Concepts",
        company: "University at Buffalo",
        category: ["Software Engineering"],
        tags: ["Socket Programming", "System Design", "Network programming"],
        stacksUsed: ["C++", "Socket header"],
        tasks: ["Build the complete application using C++ UNIX socket library",
            "Designed the completed System for fault torelance.",
            "Enhanced it with P2P file transfer functionality between clients for already connected clients",
        ],
    },
    {
        title: "Taco-DB",
        link: "https://cse.buffalo.edu/~zzhao35/teaching/cse562_spring22/",
        github: "https://cse.buffalo.edu/~zzhao35/teaching/cse562_spring22/",
        description: "A mini RDBMS",
        associatedWith: "Course Project for Database Systems",
        company: "University at Buffalo",
        category: ["Software Engineering"],
        tags: ["DBMS", "System Design", "B+ Tree", "Query Processing", "Query Optimization"],
        stacksUsed: ["C++", "Taco DB framework"],
        tasks: ["Built a database system in Taco-DB framework",
            "Devised File manager, Buffer manager, Variable length data page, B+ tree",
            "Created interfaces for Heap scan, Index Scan and Internal and External Sorting.",
            "Implemented Selection, Projection, Joins (Index and Sort Merge) and Aggregation queries processing."
        ],
    },
    {
        title: "Pinto-OS",
        link: "https://gitlab.com/SCoRe-Group/scool",
        github: "https://gitlab.com/SCoRe-Group/scool",
        description: "A mini Operating System",
        associatedWith: "Course Project for Operating Systems",
        company: "University at Buffalo",
        category: ["Software Engineering"],
        tags: ["DBMS", "System Design", "B+ Tree", "Query Processing", "Query Optimization"],
        stacksUsed: ["C", "Pinto-OS framework"],
        tasks: ["Created a wait queue, priority scheduler and BSD scheduler in Pintos OS framework.",
            "Implemented user program execution, system calls and virtual memory and memory mapped files."
        ],
    },
    {
        title: "Split It Out",
        link: "https://gitlab.com/SCoRe-Group/scool",
        github: "https://gitlab.com/SCoRe-Group/scool",
        description: "Split the bill with a click from your camera",
        associatedWith: "UB hackathon 2021",
        company: "University at Buffalo",
        category: ["Software Engineering", "Artificial Intelligence"],
        tags: ["Computer Vision", "Optical Character recognition", "Natural language Processing"],
        stacksUsed: ["Tesseract", "Google Natural Language API", "Flask", "Python", "React"],
        tasks: ["Devised a computer vision application for scanning and splitting receipts using Tesseract.",
            "Analyzed each type of expenses with Google Natural Language API and displayed insights with React."],
    },
    {
        title: "Geometric Deep Learning Methods with Deep Chemistry for Drug Pair Interactions",
        link: "https://gitlab.com/SCoRe-Group/scool",
        github: "https://gitlab.com/SCoRe-Group/scool",
        description: "A new model to solve the drug-drug pair interaction task",
        associatedWith: "Course Project for Deep Learning",
        company: "University at Buffalo",
        category: ["Artificial Intelligence"],
        tags: ["Deep Learning", "Encoder Decoder Network", "Attention Network", "Multiclass Classificaiton"],
        stacksUsed: ["PyTorch", "Python", "ChemicalX"],
        tasks: ["Created a encoder deccoder network to decrease the number of feature in the final classification Network",
            "Employed Self Attention Network for capturing the structural infomation in the molecular oreintation of the compounds",
            "Used CNN for final multiclass classificaiton."],
    },
    {
        title: "Blockchain Assets Managent",
        link: "https://gitlab.com/SCoRe-Group/scool",
        github: "https://gitlab.com/SCoRe-Group/scool",
        description: "A smart contract based verification system for authenticity of digital assests that are minted.",
        associatedWith: "Course Project for Deep Learning",
        company: "University at Buffalo",
        category: ["Blockchain"],
        tags: ["Solana", "Solidity", "web3.js", "Crypto","Hashing","NFT"],
        stacksUsed: ["Solana", "Solidity","Web3.js","Crypto.js","NFT"],
        tasks: ["Created smart contracts using Solana and Solidity for miniting digital assest.",
            "Devised a technique to verify the hash of the digital assest before it allowed to be minted."
        ],
    }

]

export default function ProjectSection() {
    const [section, setSection] = useState("1");
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography variant='h4' color="text.primary" align='left'>
                    <TerminalIcon /> Projects
                </Typography>

            </AccordionSummary>

            <TabContext value={section}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={(_, value) => setSection(value)} aria-label="Project Catergory Tab">
                        <Tab label="Software Engineering" value="1" />
                        <Tab label="Artificial Engineering" value="2" />
                        <Tab label="Blockchain" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    {
                        projects.filter((ele) => ele.category.includes("Software Engineering")).map((ele, idx) => <ProjectCard key={idx} {...ele} />)
                    }
                </TabPanel >
                <TabPanel value="2">
                    {
                        projects.filter((ele) => ele.category.includes("Artificial Intelligence")).map((ele, idx) => <ProjectCard key={idx} {...ele} />)
                    }
                </TabPanel >
                <TabPanel value="3">
                    {
                        projects.filter((ele) => ele.category.includes("Blockchain")).map((ele, idx) => <ProjectCard key={idx} {...ele} />)
                    }
                </TabPanel >
            </TabContext>

        </Accordion>
    )
}