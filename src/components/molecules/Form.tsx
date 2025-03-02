import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Grid, 
  MenuItem,
  Snackbar,
  Alert
} from '@mui/material';
import { FormProps, FormFieldProps } from '../../types';

const Form: React.FC<FormProps> = (props) => {
  const { fields, submitLabel = 'שלח', action = '/api/contact', method = 'POST' } = props;
  const [formState, setFormState] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{open: boolean, message: string, severity: 'success' | 'error'}>({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    try {
      // In a real application, you would actually send this data to your API
      // For demo purposes, we'll simulate a successful submission after a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setNotification({
        open: true,
        message: 'הטופס נשלח בהצלחה! נחזור אליך בהקדם.',
        severity: 'success'
      });
      
      // Reset form
      setFormState({});
    } catch (error) {
      setNotification({
        open: true,
        message: 'אירעה שגיאה בשליחת הטופס. אנא נסו שנית מאוחר יותר.',
        severity: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseNotification = () => {
    setNotification(prev => ({ ...prev, open: false }));
  };

  const renderField = (field: FormFieldProps) => {
    const { type, name, label, required = false, width = 'full' } = field;
    const gridWidth = width === 'full' ? 12 : 6;
    
    if (type === 'TextFormField') {
      return (
        <Grid item xs={12} md={gridWidth} key={name}>
          <TextField
            fullWidth
            name={name}
            label={label}
            variant="outlined"
            required={required}
            value={formState[name] || ''}
            onChange={handleChange}
            multiline={field.multiline}
            rows={field.rows}
            dir="rtl"
            InputProps={{
              sx: { textAlign: 'right' }
            }}
          />
        </Grid>
      );
    }
    
    if (type === 'SelectFormField') {
      return (
        <Grid item xs={12} md={gridWidth} key={name}>
          <TextField
            fullWidth
            select
            name={name}
            label={label}
            variant="outlined"
            required={required}
            value={formState[name] || ''}
            onChange={handleChange}
            dir="rtl"
            InputProps={{
              sx: { textAlign: 'right' }
            }}
          >
            {field.options.map((option) => (
              <MenuItem key={option} value={option} dir="rtl">
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      );
    }
    
    return null;
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} dir="rtl">
      <Grid container spacing={3}>
        {fields?.map(renderField)}
        
        <Grid item xs={12}>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            disabled={isSubmitting}
            sx={{ mt: 2, py: 1.5, fontSize: '1.1rem' }}
          >
            {isSubmitting ? 'שולח...' : submitLabel}
          </Button>
        </Grid>
      </Grid>
      
      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseNotification} 
          severity={notification.severity}
          sx={{ width: '100%' }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Form;
