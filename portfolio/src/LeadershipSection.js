import { Box, Paper, Typography } from "@mui/material";
import GroupsIcon from '@mui/icons-material/Groups';
import moment from 'moment';


const leaderships = [
    {
        position: "President",
        organization: "Society of Mechanical Engineering Student, Tribhuvan University, Nepal",
        startDate: Date.parse("1 August 2017"),
        enDate: Date.parse("1 June 2018"),
    },
    {
        position: "Volunteeer",
        organization: "Earthquake Relief Program for April 2015 Earthquake Nepal",
        startDate: Date.parse("30 April 2015"),
        enDate: Date.parse("30 May 2015"),
    },
]

export default function LeadershipSection() {
    return (
        <Paper sx={{ padding: "1em" }}>
            <Box>
                <Typography variant='h4' color="text.primary" align='left' margin={1}>
                    <GroupsIcon /> Leadership
                </Typography>
                <Box sx={{ marginLeft: "1em" }}>
                    {
                        leaderships.map((leadershipsContent, idx) => (<Box key={idx} style={{ marginBottom: "1em" }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography>{leadershipsContent.position}</Typography>
                                <Typography sx={{ fontStyle: "italic" }} color="text.secondary">{moment(leadershipsContent.startDate).format("MMM YYYY")}{"-"}{moment(leadershipsContent.enDate).format("MMM YYYY")}</Typography>
                            </Box>
                            <Typography sx={{ fontStyle: "italic" }} color="text.secondary" >
                                {leadershipsContent.organization}
                            </Typography>
                        </Box>
                        ))
                    }
                </Box>
            </Box>
        </Paper>
    )
}