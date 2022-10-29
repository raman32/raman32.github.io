import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';
import ContactCard from './ContactCard';
import EducationCard from './EducationCard';
import ProjectSection from './ProjectSection';


function App() {
  return (
    <>
      <Typography variant="h2" gutterBottom margin={1} align="center" >
        Raman Ghimire
      </Typography>
      <div style={{display:"flex", justifyContent:"center"}}>
      <EducationCard />
      </div>
      <div style={{display:"flex", justifyContent:"center"}}>
      <ProjectSection />
      </div>
      <div style={{display:"flex", justifyContent:"center"}}>
      <ContactCard />
      </div>
    </>
  );
}


export default App;
