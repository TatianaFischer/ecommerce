import React from 'react';
import {useHistory} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';



function getModalStyle() {
  const top = 50 
  const left = 50 

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 200,
    height: 250,
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
    
     
  },
}));

export default function CartModal() {
  const classes = useStyles();
  
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
   const history = useHistory();
   const backToHome = () => {
     history.push("/");  
   }
  const body = (
    <div style={modalStyle} className={classes.paper}>
        <CheckCircleRoundedIcon fontSize="large"/>
      <h2 id="simple-modal-title">Pedido realizado com sucesso!</h2>
     <Button variant="contained" size="small" onClick={backToHome}>Voltar para a Loja</Button>

    </div>
  );

  return (
    <div>
      
      <Button variant="contained" onClick={handleOpen}>Finalizar compra</Button>    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
