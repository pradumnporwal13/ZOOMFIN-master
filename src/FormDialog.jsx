// File: FormDialog.jsx

import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';

const FormDialog = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>Google Form</DialogTitle>
      <DialogContent>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdUi_UJBm8wEWtNqWyykpTCbChLWWPDInJIfD73-4AmMNwa1w/viewform?embedded=true" width="640" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog;
