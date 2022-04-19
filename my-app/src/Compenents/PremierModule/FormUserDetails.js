import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          {/* <Dialog
            open
            fullWidth
            maxWidth='sm'
          > */}
            <TextField
              placeholder="Entrer l'intitule du poste"
              label="L'intitule"
              onChange={handleChange('Intitule')}
              defaultValue={values.Intitule}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Entrer les activités du postes "
              label="activités"
              onChange={handleChange('activités_Poste')}
              defaultValue={values.activités_Poste}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Entrer Benifiques"
              label="Benifique"
              onChange={handleChange('Benifique')}
              defaultValue={values.Benifique}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="Entrer Pays"
              label="Pays"
              onChange={handleChange('Pays')}
              defaultValue={values.Pays}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="Entrer lieu,ville"
              label="ville"
              onChange={handleChange('ville')}
              defaultValue={values.ville}
              margin="normal"
              fullWidth
            />
            <br />
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Teletravaille"
              name="radio-buttons-group"
              onChange={handleChange('Mode')}
            >
              <FormControlLabel value="Teletravaille" control={<Radio />} label="Teletravaille" />
              <FormControlLabel value="presentiel" control={<Radio />} label="presentiel" />
              <FormControlLabel value="Hybride" control={<Radio />} label="Hybride" />
              <FormControlLabel value="Nonspecifie" control={<Radio />} label="Non Specifie" />
            </RadioGroup>
            <br/>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="oui"
              name="radio-buttons-group"
              onChange={handleChange('Mobilite_exigence')}
            >
              <FormControlLabel value="oui" control={<Radio />} label="Oui" />
              <FormControlLabel value="non" control={<Radio />} label="Non" />
            </RadioGroup>
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          {/* </Dialog> */}
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
