import React from 'react';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CertificationsCard from '../Cards/CertificationsCard';
import { certifications } from '../../data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 80px 0;
  gap: 60px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const ExperienceCard = ({ experience }) => (
  <div>
    <h3 style={{ margin: 0 }}>{experience.role}</h3>
    <p style={{ margin: '4px 0' }}><strong>{experience.company}</strong> — {experience.date}</p>
    <p style={{ margin: 0 }}>{experience.desc}</p>
  </div>
);

const experiences = [
  {
    role: "Data Analyst",
    company: "Lloyd Insulations Limited",
    date: "Feb 2025 – May 2025",
    desc: "Designed Excel dashboards for billing, attendance & material tracking using advanced formulas. Built Power BI visualizations to present KPIs in project reviews. Integrated SAP MM to reduce manual follow-ups by 50%.",
  },
  {
    role: "Data Analyst – Marketing Analytics",
    company: "H-Welore Sales",
    date: "Sep 2024 – Feb 2025",
    desc: "Developed Power BI dashboards to track inquiry-to-order flow. Automated proposal sheets, cutting prep time by 40%. Built client touchpoint database to analyze patterns and improve conversions.",
  },
];

const Index = () => {
  return (
    <Container id="certifications">
      <Wrapper id="Experience">
        <Title>Experience & Certifications</Title>
        <Desc>
          Hands-on experience in data analysis using Excel (VLOOKUP, Pivot Tables, Macros), Power BI, SQL, and SAP MM. Built dashboards, automated reporting, tracked KPIs, and integrated real-time business insights. Certified in multiple tools to deliver data-driven decisions and enhance operational performance.
        </Desc>

        <TimelineSection>
          <Timeline>
            {experiences.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  {index !== experiences.length - 1 && (
                    <TimelineConnector style={{ background: '#854CE6' }} />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <ExperienceCard experience={exp} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>

        <TimelineSection>
          <Timeline>
            {certifications.map((certification, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== certifications.length - 1 && (
                    <TimelineConnector style={{ background: '#854CE6' }} />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <CertificationsCard certification={certification} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Index;
