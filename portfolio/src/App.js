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
import { downloadResume } from './helper';
import { contactRaman } from './helper';
import { useState } from 'react';

const actions = [
  {
    name:"Share my portfolio",
    icon:<ShareIcon/>,
    onClick: () => navigator.share(window.location.pathname)
  },
  {
    name:"Download Resume",
    icon:<DownloadIcon/>,
    onClick: () => downloadResume()
  },
  {
    name:"Contact Me",
    icon:<EmailIcon/>,
    onClick: () => contactRaman()
  }
]

function App() {
  const[showBackground,setShowBackground] = useState(true);
  return (
    <div style={{ backgroundImage:"linear-gradient(to right top, #051937, #133660, #1d578d, #1f7abb, #12a0eb)" , minHeight:"100vh", overflow:"clip"}}>
    <div style={{ position:"fixed", top:0, left:0, minHeight:"100vh", minWidth:"100vw", zIndex: showBackground ? "2" : "-1", backgroundImage:"url(background.png)" ,backgroundSize:"50%", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundAttachment:"fixed",}}
    onClick={(event)=>{
      setShowBackground(false);
      setTimeout(()=>document.elementFromPoint(event.pageX, event.pageY).click())
    }}
    >
    </div>
      <div style={{ height:"calc(100vh - 70px)", overflowY:"scroll", overflowX:"clip"}}>
      <div className="twelve">
        <h1 className="MyName">Raman Ghimire</h1>
    </div>
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
      </div>
      <div>
      <div style={{ justifyContent: "center", }}>
        <ContactCard />
      </div>
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
            onClick={action.onClick}
          />
        ))}
      </SpeedDial>
   
    </div>
  );
}


export default App;
