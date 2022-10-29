import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardContent from '@mui/material/CardContent';
import moment from 'moment';

export default function ExperienceCard(props) {
    return (
        <Card sx={{ margin: "1em" }} >
            <CardContent>
                <Typography color="text.primary" align='left'>
                    {props.title}
                </Typography>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography color="text.secondary" align='left' sx={{ fontStyle: "italic" }}>
                        {props.company} {","} {props.companyLocation}
                    </Typography>
                    <Typography color="text.secondary" sx={{ fontStyle: "italic" }}>
                        {moment(props.startDate).format('MMM YYYY')} {"-"} {moment(props.endDate).format('MMM YYYY')}
                    </Typography>
                </div>
                <div>
                    {
                        props.tasks.map((ele, idx) => (
                            <Typography key={idx} color="text.second" align='left'>
                                {"-"} {ele}
                            </Typography>
                        ))
                    }
                </div>
                <div style={{ margin: "1em" }}>
                    {
                        props.stacksUsed.map((ele, idx) => (
                            <Chip key={idx} label={ele} variant="filled" sx={{ marginRight: "1em" }} />
                        ))
                    }
                </div>
            </CardContent>
        </Card>
    )
}