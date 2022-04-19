import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export class Details extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
            <input  type="date" id="start" name="trip-start"
                    value={values.date_debut}
                    onChange={handleChange('date_debut')}
                    ></input>
            <input  type="date" id="start" name="trip-start"
                    value={values.date_fin}
                    onChange={handleChange('date_fin')}
                   ></input>
            <TextField
                  select
                  name="typedecontrat"
                  id="typedecontrat"
                  variant="outlined"
                  label="Type de  Contrat"
                  SelectProps={{
                    onChange: handleChange('type_contrat')
                  }}
                >
                  <MenuItem value="admin">CDI</MenuItem>
                  <MenuItem value="user1">CDD</MenuItem>
                  <MenuItem value="user2">Autres</MenuItem>
                </TextField>
            <TextField
                  select
                  name="Nombre profile"
                  id="nombreeProfile"
                  variant="outlined"
                  label="Nombre de  Profile"
                  SelectProps={{
                    onChange: handleChange('Nbr_prfile')
                  }}
                >
                  <MenuItem value="admin">CDI</MenuItem>
                  <MenuItem value="user1">CDD</MenuItem>
                  <MenuItem value="user2">Autres</MenuItem>
                </TextField>
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Details;
