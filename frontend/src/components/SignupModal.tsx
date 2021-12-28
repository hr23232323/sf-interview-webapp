import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const SignupModal = ({
  isOpen,
  onClose,
  onSubmit,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (name: string, emai: string) => void;
}) => {
  const theme = useTheme();

  // Store user data
  const [userName, setUserName] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");

  return (
    <div>
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle>Sign up</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Hello. Please enter your name and email to export results, save your
            search history/results and stay in touch.
          </DialogContentText>
          <TextField
            autoFocus
            margin="normal"
            id="name"
            label="Name"
            type="text"
            variant="standard"
            sx={{ m: theme.spacing(2, 2) }}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <TextField
            margin="normal"
            id="email"
            label="Email Address"
            type="email"
            variant="standard"
            sx={{ m: theme.spacing(2, 2) }}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button
            onClick={() => {
              onSubmit(userName, userEmail);
            }}
          >
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
