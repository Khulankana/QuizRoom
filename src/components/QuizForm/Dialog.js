import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { QuizContext } from "../../contexts/QuizContext";

export default function AlertDialog() {
  const { dispatch } = useContext(QuizContext);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Устгах
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Та устгахдаа итгэлтэй байна уу?
        </DialogTitle>

        <DialogActions>
          <Button color="primary">Тийм</Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Үгүй
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
