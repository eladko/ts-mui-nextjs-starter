import React from 'react';
import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import Form from '../molecules/Form';
import Section from '../molecules/Section';
import { ContactSectionProps } from '../../types';

const ContactSection: React.FC<ContactSectionProps> = (props) => {
  const { title, subtitle, text, form, id } = props;

  return (
    <Section id={id}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ pr: { md: 4 }, textAlign: { xs: 'center', md: 'right' } }}>
              {title && (
                <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
                  {title}
                </Typography>
              )}
              {subtitle && (
                <Typography variant="h5" color="text.secondary" sx={{ mb: 3 }}>
                  {subtitle}
                </Typography>
              )}
              {text && (
                <Typography variant="body1" color="text.secondary">
                  {text}
                </Typography>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, backgroundColor: 'background.paper', borderRadius: 2 }}>
              {form && <Form {...form} />}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default ContactSection;
