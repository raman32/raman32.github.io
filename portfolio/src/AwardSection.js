import { Box, Paper, Typography } from "@mui/material";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const awards = [
    {
        title: "Merit Based Scholarship",
        year: "2014-2018",
        organization: "Institute of Engineering, Tribhuvan University"
    },
    {
        title: "SOMES Engineering Design Champion",
        year: "2015",
        organization: "SOMES, Tribhuvan University"
    }
]

export default function AwardSection() {
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