import React, { Component } from 'react';
// import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { Intitule,activités_Poste,Benifique,Pays,ville,Mode,Mobilite_exigence,
        diplome,ecole,specialite,niveau,Qualite_Technique,Qualite_Relationelle,
        Autres_exigence,date_debut,date_fin,type_contrat, Nbr_prfile }
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          {/* <Dialog
            open
            fullWidth
            maxWidth='sm'
          > */}
            <form>
               <TextareaAutosize 
                aria-label="empty textarea"
                defaultValue={Intitule}
                style={{ width: 200 }}>

               </TextareaAutosize>
            </form>
            <br />
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm & Continue</Button>
          {/* </Dialog> */}
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
