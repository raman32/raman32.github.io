import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardContent from '@mui/material/CardContent';

export default function ProjectCard(props){
return (
    <Card sx={{margin:"1em"}} >
        <CardContent>
            <Typography color="text.primary" align='left'>
                {props.title}
            </Typography> 
            <Typography color="text.secondary" align='left' sx={{fontStyle:"italic"}}>
                {props.description}
            </Typography> 
            <div>
            {
                props.tasks.map((ele,idx)=>(
                    <Typography key={idx} color="text.second" align='left'>
                        {"-"} {ele}
                    </Typography>
                ))
            }
            </div>
            <div style={{margin:"1em"}}>
            {
                props.stacksUsed.map((ele,idx)=>(
                <Chip key={idx} label={ele} variant="filled" sx={{marginRight:"1em"}}/> 
                ))
            }
            </div>
        </CardContent>
    </Card>
)
}