import React from 'react';
import { Container, Grid, Typography, Box, Paper, Avatar } from '@mui/material';
import Section from '../molecules/Section';
import { TestimonialsSectionProps } from '../../types';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import NextImage from '../atoms/NextImage';

const TestimonialsSection: React.FC<TestimonialsSectionProps> = (props) => {
  const { title, subtitle, testimonials } = props;

  return (
    <Section sx={{ backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          {title && (
            <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography variant="h5" color="text.secondary">
              {subtitle}
            </Typography>
          )}
        </Box>
        
        <Grid container spacing={4}>
          {testimonials?.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 4, 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  borderRadius: 2,
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: 'primary.main',
                    opacity: 0.1,
                    zIndex: 0
                  }
                }}
              >
                <FormatQuoteIcon 
                  sx={{ 
                    fontSize: 40, 
                    color: 'primary.main',
                    position: 'absolute',
                    top: 20,
                    right: 20
                  }} 
                />
                
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 3,
                    fontStyle: 'italic',
                    lineHeight: 1.8,
                    direction: 'rtl'
                  }}
                >
                  {testimonial.quote}
                </Typography>
                
                <Box sx={{ mt: 'auto', display: 'flex', alignItems: 'center', direction: 'rtl' }}>
                  {testimonial.image?.url ? (
                    <Avatar sx={{ width: 56, height: 56, mr: 2 }}>
                      <NextImage
                        src={testimonial.image.url}
                        alt={testimonial.image.altText || ''}
                        width={56}
                        height={56}
                        objectFit="cover"
                      />
                    </Avatar>
                  ) : (
                    <Avatar sx={{ width: 56, height: 56, mr: 2 }} />
                  )}
                  <Typography variant="subtitle1" fontWeight="bold">
                    {testimonial.author}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default TestimonialsSection;
