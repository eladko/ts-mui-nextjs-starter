import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import Section from '../molecules/Section';
import { AboutSectionProps } from '../../types';
import Markdown from '../molecules/Markdown';
import NextImage from '../atoms/NextImage';

const AboutSection: React.FC<AboutSectionProps> = (props) => {
  const { title, text, image } = props;

  return (
    <Section>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
              {title && (
                <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
                  {title}
                </Typography>
              )}
              {text && (
                <Box sx={{ lineHeight: 1.8 }}>
                  <Markdown>{text}</Markdown>
                </Box>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mb: { xs: 4, md: 0 }
              }}
            >
              {image?.url && (
                <Box
                  sx={{
                    position: 'relative',
                    maxWidth: '100%',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                  }}
                >
                  <NextImage
                    src={image.url}
                    alt={image.altText || ''}
                    width={500}
                    height={600}
                    objectFit="cover"
                  />
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default AboutSection;
