import { Box, Modal } from "@mui/material";
import React from "react";
import "./popUpModal.scss"


const Popup = ({ open, handleClose = () => {}, children, styles = {} }) => {
  return (
    <Modal
      open={open}
      classes={{ root: { padding: "2rem, 0" } }}
      // sx={{ zIndex: 2500 }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`popUp`} style={styles}>
        {children}
      </Box>
    </Modal>
  );
};

export default Popup;
