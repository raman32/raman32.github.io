import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import Typography from '@mui/material/Typography';
import AwardSection from './AwardSection';
import ContactCard from './ContactCard';
import EducationCard from './EducationCard';
import ExperienceSection from './ExperienceSection';
import ProjectSection from './ProjectSection';
import EmailIcon from '@mui/icons-material/Email';
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';
import LeadershipSection from './LeadershipSection';

const actions = [
  {
    name:"Share my portfolio",
    icon:<ShareIcon/>
  },
  {
    name:"Download Resume",
    icon:<DownloadIcon/>
  },
  {
    name:"Contact Me",
    icon:<EmailIcon/>
  }
]


function App() {
  return (
    <div style={{ backgroundColor: "#fcead1" }}>
      <Typography variant="h2" gutterBottom align="center" >
        Raman Ghimire
      </Typography>
      <div style={{ marginLeft: "1em", marginRight: "1em", marginTop: "1em", justifyContent: "center", }}>
        <EducationCard />
      </div>
      <div style={{ marginLeft: "1em", marginRight: "1em", marginTop: "1em", justifyContent: "center", }}>
        <ProjectSection />
      </div>
      <div style={{ marginLeft: "1em", marginRight: "1em", marginTop: "1em", justifyContent: "center", }}>
        <ExperienceSection />
      </div>
      <div style={{ marginLeft: "1em", marginRight: "1em", marginTop: "1em", justifyContent: "center", }}>
        <AwardSection />
      </div>
      <div style={{ marginLeft: "1em", marginRight: "1em", marginTop: "1em", justifyContent: "center", }}>
        <LeadershipSection/>
      </div>
      
      <div style={{ marginTop: "1em", justifyContent: "center", }}>
        <ContactCard />
      </div>
      <SpeedDial  
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed' , bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </div>
  );
}


export default App;
