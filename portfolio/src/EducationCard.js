import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SchoolIcon from '@mui/icons-material/School';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import moment from 'moment'
import { Accordion, AccordionDetails } from '@mui/material';
import { AccordionSummary } from '@mui/material';


const educations = [
    {
        program: "Masters of Science",
        major: "Computer Science",
        minors: [],
        instituiton: "Univeristy at Buffalo, The State University of New York",
        location: "US",
        GPA: "4.0/4.0",
        link: "https://engineering.buffalo.edu/computer-science-engineering/graduate/degrees-and-programs/ms-in-computer-science-and-engineering.html",
        courseworks: ["Modern Network Concepts", "Algorithm Analysis and Design", "Computer Vision", "Pattern Recognition", "Operating Systems", "Database System", "Distribution Systems", "Parallel and Distributed Processing", "Deep Learning", "Advancement in Database Systems"],
        startDate: Date.parse("28 October 2021"),
        endDate: Date.parse("06 Feb 2022"),
        rank: null,
        awards: []
    },
    {
        program: "Bachelors of Engineering",
        major: "Mechanical Engineering",
        minors: [],
        instituiton: "Tribhuvan University",
        location: "Nepal",
        GPA: "80/100",
        link: "https://ioe.edu.np/",
        courseworks: ["Computer Programming"],
        startDate: Date.parse("1 September 2018"),
        endDate: Date.parse("1 August 2018"),
        rank: 7,
        awards: ["Merit Based Scholarship for 4 years"]
    },
]

export default function EducationCard() {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant='h4' color="text.primary" align='left'>
                    <SchoolIcon /> Education
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <List>
                    {
                        educations.map((ele, idx) => (
                            <div key={idx}>
                                <ListItem sx={{ cursor: "pointer", display: "block" }} onClick={() => { window.open(ele.link, "_blank") }}>
                                    <Typography color="text.primary">
                                        {ele.program} {","} {ele.instituiton} {","} {ele.location}
                                    </Typography>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography color="text.secondary">
                                            {ele.major} {"GPA:"} {ele.GPA} {ele.rank && "Rank: " + ele.rank}
                                        </Typography>
                                        <Typography color="text.secondary" sx={{ fontStyle: "italic" }}>
                                            {moment(ele.startDate).format('MMM YYYY')} {"-"} {moment(ele.endDate).format('MMM YYYY')}
                                        </Typography>
                                    </div>
                                    <Typography color="text.primary">
                                        Relevant Coursework
                                    </Typography>
                                    <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "40em" }}>
                                        {
                                            ele.courseworks.map((course, courseId) => <Typography sx={{ width: "20em" }} key={courseId} color="text.secondary">
                                                {course}
                                            </Typography>)
                                        }
                                    </div>
                                </ListItem>
                                {idx < educations.length - 1 && <Divider variant="fullWidth" component="li" />}
                            </div>
                        ))
                    }
                </List>
            </AccordionDetails>
        </Accordion>
    )
}