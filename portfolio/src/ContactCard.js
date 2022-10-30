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
import { Box, height } from '@mui/system';
import "./App.css"
const links = [
    {
        heading: "linkedin.com/in/ramanghimire",
        icon: <LinkedInIcon />,
        url: "https://www.linkedin.com/in/ramanghimire/",
        color:"blue"
    },
    {
        heading: "rg.raman.ghimire@gmail.com",
        icon: <EmailIcon />,
        url: "mailto:rg.raman.ghimire@gmail.com",
        color:"red"
    },
    {
        heading: "github.com/raman32",
        icon: <GitHubIcon />,
        url: "https://github.com/raman32/",
        color:"black"
    },


]

export default function ContactCard() {
    return (
        <Box sx={{ bottom: 0, width:"100vw"}}>
            <div style={{ display: "flex", justifyContent:"space-evenly" }}>
                {
                    links.map((ele, idx) => (
                        <div key={idx} className="ContactCard"
                         onClick={() => { window.open(ele.url, "_blank") }} > 
                            <div style={{color:ele.color, marginRight:"1em"}}>{ele.icon}</div>
                            <div style={{paddingRight:"1em"}} className="ContactCardText">{ele.heading}</div>
                        </div>
                    ))
                }
            </div>


        </Box>
    )
}