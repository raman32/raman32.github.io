export const downloadResume = () => {
    const link = document.createElement("a");
    link.download = `raman_ghimire_resume.pdf`;
    link.href = "./raman_ghimire_resume.pdf";
    link.click();
  };
  export const contactRaman = () => {
    const link = document.createElement("a");
    link.href = "mailto:rg.raman.ghimire@gmail.com";
    link.click();
  };