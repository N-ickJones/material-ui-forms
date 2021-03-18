import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { CustomTextField, formIsValid, isEmail, onChange, SnackBarComponent } from "material-ui-forms";
import React, { useState } from "react";

export default function ContactForm() {
  const snackbar = SnackBarComponent();
  const [sentMessage, setSentMessage] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  

  const onClick = async () => {
    if (sentMessage) return;
    if (!await formIsValid()) {
      snackbar.setAlert({ ...snackbar.error, message: "A validation error was detected in the form" })
      return;
    }
    //Response Handling
    if (true) {
      setSentMessage(true);
      snackbar.setAlert({ ...snackbar.success, message: "The message has been sent to Nicholas Jones." })
    }
    else {
      snackbar.setAlert({ ...snackbar.error, message: "The application was unable to send the message. You can send emails to nicholas.jones@virtual-codex.com." })
    }
  }
  
  return (
    <Paper style={{ width: "100%", padding: "1rem" }}>
      <snackbar.component />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" align="center">Write a message</Typography>
        </Grid>
        <Grid item xs={12}>
          <CustomTextField label="Firstname" name="firstName" value={form.firstName} onChange={onChange(setForm)} required={true} />
        </Grid>
        <Grid item xs={12}>
          <CustomTextField label="Lastname" name="lastName" value={form.lastName} onChange={onChange(setForm)} required={true} />
        </Grid>
        <Grid item xs={12}>
          <CustomTextField label="Email" name="email" value={form.email} onChange={onChange(setForm)} required={true} validators={[isEmail]} />
        </Grid>
        <Grid item xs={12}>
          <CustomTextField label="Subject" name="subject" value={form.subject} onChange={onChange(setForm)} required={true} />
        </Grid>
        <Grid item xs={12}>
          <CustomTextField label="Message" name="message" value={form.message} onChange={onChange(setForm)} multiline={true} required={true} />
        </Grid>
        <Grid container item xs={12} justify="center">
          <Button onClick={onClick}>Send Message</Button></Grid>
      </Grid>
    </Paper>
  )
}