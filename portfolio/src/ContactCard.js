import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

const links = [
    {
        heading: "linkedin.com/in/ramanghimire",
        icon: <LinkedInIcon />,
        url: "https://www.linkedin.com/in/ramanghimire/"
    },
    {
        heading: "rg.raman.ghimire@gmail.com",
        icon: <EmailIcon />,
        url: "mailto:rg.raman.ghimire@gmail.com"
    },
    {
        heading: "github.com/raman32",
        icon: <GitHubIcon />,
        url: "https://github.com/raman32/"
    },


]

export default function ContactCard() {
    return (
        <Card>
            <CardContent>
                <Typography variant='h5' color="text.primary" align='center'>
                   Contact me
                </Typography>
                <List>
                    {
                        links.map((ele, idx) => (
                            <div key={idx}>
                                <ListItem sx={{ cursor: "pointer" }} onClick={() => { window.open(ele.url, "_blank") }}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            {ele.icon}
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={<Typography color="text.secondary">
                                        {ele.heading}
                                    </Typography>} />
                                </ListItem>
                                {idx < links.length - 1 && <Divider variant="inset" component="li" />}
                            </div>
                        ))
                    }
                </List>
            </CardContent>
        </Card>
    )
}