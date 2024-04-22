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
  gap: 12px;
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

const Index = () => {
  return (
    <Container id="certifications">
      <Wrapper>
        <Title>Certifications</Title>
        <Desc>
          Through rigorous training at Coding Ninjas in the MERN stack, I gained comprehensive skills in MongoDB, Express.js, React, and Node.js. Leveraging this expertise, I developed several impactful projects, showcasing my proficiency and commitment. These projects spanned diverse domains, demonstrating my ability to create dynamic web applications and efficient database management systems. Throughout this journey, I honed my frontend and backend development skills, solving real-world challenges and fostering a spirit of innovation and continuous learning. My experience at Coding Ninjas has not only equipped me with technical prowess but also instilled in me a passion for pushing boundaries and delivering excellence in every project.
        </Desc>

        <TimelineSection>
          <Timeline>
            {certifications.map((certification, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== certifications.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
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
}

export default Index;
