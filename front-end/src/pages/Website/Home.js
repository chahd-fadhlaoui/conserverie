  import React from 'react';

  import heroimg from '../../assests/hero2.PNG';
  import service from '../../assests/hero.jpg'
  import Header from '../../components/Header';
import Footer from '../../components/Footer';

  export default function Home() {
    // Styles en ligne
    const heroSectionStyle = {
      backgroundImage: `url(${heroimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '400px',

      width:'1000px',
      marginLeft:"250px",
      marginTop:'30px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      textAlign: 'center',
      padding: '2rem',
    };

    const heroHeadingStyle = {
      fontSize: '3rem',
      color:"white",
      marginBottom: '1rem',
    };

    const ctaButtonStyle = {
      backgroundColor: '#E76726',
      color: '#fff',
      border: 'none',
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    };

    const ctaButtonHoverStyle = {
      backgroundColor: '#E76726',
    };
    
    //service section css 
   
    const conserverieDesRepasStyle = {
      color: '#fff',
      padding: '3rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    };
  
    const conserverieContainerStyle = {
      maxWidth: '1200px',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };
  
    const conserverieImageContainerStyle = {
      flex: 1,
      marginRight: '2rem',
    };
  
    const conserverieImageStyle = {
      width: '100%',
      maxHeight: '400px',
      objectFit: 'cover',
      borderRadius: '8px',
    };
  
    const conserverieContentStyle = {
      flex: 1,
      textAlign: 'left',
    };
  
    const conserverieTitleStyle = {
      fontSize: '2.5rem',
      color: 'black',
      marginBottom: '1.5rem',
    };
  
    const conserverieDescriptionStyle = {
      fontSize: '1.2rem',
      lineHeight: '1.6',
      color: 'black'

    };
  

    
    
    
    

    return (
      <div>
        {/* Header Component */}
        <Header />

        {/* Hero Section */}
        <section style={heroSectionStyle}>
          <h1 style={heroHeadingStyle}>La Conserverie des repas, le goût à votre portée</h1>
          <button style={{ ...ctaButtonStyle, ...ctaButtonHoverStyle }}>Prendre rendez-vous</button>
        </section>
        {/* service  Section */}

        <section style={conserverieDesRepasStyle}>
        <div style={conserverieContainerStyle}>
          <div style={conserverieImageContainerStyle}>
            <img
              src={service}
              alt="Tunisian dishes"
              style={conserverieImageStyle}
            />
          </div>
          <div style={conserverieContentStyle}>
            <h2 style={conserverieTitleStyle}>
              Nous proposons un service de conserverie des repas tunisiens
            </h2>
            <p style={conserverieDescriptionStyle}>
              permettant à votre famille de savourer des plats traditionnels
              préparés avec soin et passion. Notre concept repose sur l'idée de
              préserver la richesse et l'authenticité de la cuisine tunisienne
              tout en offrant une solution pratique pour ceux qui veulent en
              profiter chez eux. Chaque repas est conçu pour être à la fois
              savoureux et pratique, en utilisant des techniques de conservation
              modernes qui préservent la fraîcheur et les saveurs.
            </p>
          </div>
        </div>
      </section>

      {/* footer */ }

      <Footer/>

      </div>
    );
  }
