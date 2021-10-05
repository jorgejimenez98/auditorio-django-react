import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function WarningAdminDeletionModal({
  showModal,
  closeModal,
  confirmDelete,
}) {
  return (
    <div>
      <Dialog
        open={showModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeModal}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Advertencia</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Tenga en cuenta que se ha seleccionado a usted mismo para{" "}
            <strong>eliminarse</strong>, en cuando presione el botón de{" "}
            <strong> confirmación</strong> será <strong>eliminado</strong> del
            sistema y por tanto automáticamente saldrá del mismo
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Cancelar</Button>
          <Button onClick={confirmDelete}>Sí, estoy seguro</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
