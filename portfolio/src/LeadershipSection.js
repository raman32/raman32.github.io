import { Box, Paper, Typography } from "@mui/material";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const awards = [
    {
        position: "President",
        organization: "Society of Mechanical Engineering Student, Tribhuvan University, Nepal",
        startDate: Date.parse(""),
        enDate: Date.parse(""),
    },
    {
        position: "Volunteeer",
        organization: "Earthquake Relief Program for April 2015 Earthquake Nepal",
        startDate: Date.parse(""),
        enDate: Date.parse(""),
    },
]

export default function LeadershipSection() {
    return (
        <Paper sx={{ padding: "1em" }}>
            <Box>
                <Typography variant='h4' color="text.primary" align='left' margin={1}>
                    <EmojiEventsIcon /> Awards
                </Typography>
                <Box sx={{ marginLeft: "1em" }}>
                    {
                        awards.map((awardContent, idx) => (<Box key={idx} style={{ marginBottom: "1em" }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography>{awardContent.title}</Typography>
                                <Typography sx={{ fontStyle: "italic" }} color="text.secondary">{awardContent.year}</Typography>
                            </Box>
                            <Typography sx={{ fontStyle: "italic" }} color="text.secondary" >
                                {awardContent.organization}
                            </Typography>
                        </Box>
                        ))
                    }
                </Box>
            </Box>
        </Paper>
    )
}