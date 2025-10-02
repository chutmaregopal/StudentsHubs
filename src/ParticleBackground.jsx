import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = {
    background: {
      color: {
        value: '#0f0524', 
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse', 
        },
        resize: true,
      },
      modes: {
        connect: {
          distance: 100, 
          links: {
            opacity: 0.8,
          },
          radius: 150,
        },
      },
    },
    particles: {
      color: {
        value: ['#be29ec', '#5f27cd', '#a29bfe', '#ffffff'], 
      },
      links: {
        color: '#8e44ad', 
        distance: 120,
        enable: true,
        opacity: 0.4, // Line ki visibility badha di
        width: 2,     // YAHAN LINE KO MOTA KIYA HAI
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: true, 
        speed: 2, 
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 150, // Particles badha diye hain taaki screen bhari lage
      },
      opacity: {
        value: {min: 0.2, max: 0.6}, // Opacity thodi badha di
        anim: {
            enable: true,
            speed: 1,
            sync: false
        }
      },
      shape: {
        type: 'star', 
      },
      size: {
        value: { min: 2, max: 5 }, // YAHAN PARTICLES KO MOTA KIYA HAI
        anim: {
            enable: true,
            speed: 2,
            sync: false
        }
      },
    },
    detectRetina: true,
  };

  return <Particles id="tsparticles" init={particlesInit} options={options} />;
};

export default ParticleBackground;