import React, { useEffect, useState } from 'react';
import "./Experience.css";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import { Avatar, Card } from '@mui/material';

const Section = () => {
  return (
    <div className='section-container'>
      <section className='experienceSection'>
        <Timeline className='timeLineListElement' position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              2024
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
                  <Avatar alt="Engie" src="/assets/engie-logo.png" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography gutterBottom variant="h5">
                Engie (Acensi)
              </Typography>
              <p className='xpText'>Travail à l'évolution de leur plateforme B2C sur laquelle on retrouve les informations clients et les services et équipement proposé par l'entreprise.</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.secondary"
            >
              2021
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
                    <Avatar alt="SFR" src="/assets/sfr-logo.svg" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                SFR (Acensi)
              </Typography>
              <p className='xpText'>Développement d'un Saas ayant pour but de géréer les produits, remises et plans de financement. Le coeur de métier de l'application réside dans l'édition d'étiquettes produits en fonction du point de vente.</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
          <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.secondary"
            >
              2021
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
                <Avatar alt="Engie" src="/assets/epitech-logo.jpeg" />
              <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Epitech
              </Typography>
              <p className='xpText'>Diplôme d’Expert en technologies de l’information visé par le ministère de l’Enseignement supérieur et de la Recherche Titre d’Expert en ingénierie logicielle enregistré au RNCP niveau 7.</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
          <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              2020
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector/>
                <Avatar alt="Engie" src="/assets/atixis-logo.jpeg" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Atixis
              </Typography>
              <p className='xpText'>Stage de fin d'étude dans une entreprise ayant piloté la construction du centre de formation du PSG. Création d'un CRM custom pour répondre aux besoins métier de l'entreprise.</p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </section>
    </div> 
  );
};

export default Section;
