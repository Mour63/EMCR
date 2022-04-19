import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


export class FormPersonalDetails extends Component {
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
          {/* <Dialog
            open
            fullWidth
            maxWidth='sm'
          > */}
            <Select
                placeholder='formation'
                defaultValue={values.formation}
                label="Ecole/University"
                onChange={handleChange('formation')}
              >
                <MenuItem value="emi">inginieur</MenuItem>
                <MenuItem value="enim">master</MenuItem>
              </Select>
            <br />
              <Select
                  placeholder='Ecole'
                  defaultValue={values.ecole}
                  label="Ecole/University"
                  onChange={handleChange('ecole')}
                >
                  <MenuItem value="emi">Emi</MenuItem>
                  <MenuItem value="enim">enim</MenuItem>
                
                </Select>
                <br/>
                <Select
                  placeholder='specialite'
                  defaultValue={values.specialite}
                  label="Ecole/University"
                  onChange={handleChange('specialite')}
                >
                  <MenuItem value="emi">Emi</MenuItem>
                  <MenuItem value="enim">enim</MenuItem>

                </Select>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="oui"
                  name="radio-buttons-group"
                  onChange={handleChange('niveau')}
                >
                  <FormControlLabel value="+2" control={<Radio />} label="+2" />
                  <FormControlLabel value="+3" control={<Radio />} label="+3" />
                  <FormControlLabel value="+5" control={<Radio />} label="+5" />
                </RadioGroup>
                <TextField
                  select
                  name="QualiteT"
                  id="QualiteT"
                  variant="outlined"
                  label="Qualites Techniques"
                  SelectProps={{
                    multiple: true,
                    value: values.Qualite_Technique,
                    onChange: handleChange('Qualite_Technique')
                  }}
                >
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="user1">User1</MenuItem>
                  <MenuItem value="user2">User2</MenuItem>
                </TextField>

                <TextField
                  select
                  name="QualiteP"
                  id="QualiteP"
                  variant="outlined"
                  label="Qualites Relationelle"
                  SelectProps={{
                    multiple: true,
                    value: values.Qualite_Technique,
                    onChange: handleChange('Qualite_Relationelle')
                  }}
                >
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="user1">User1</MenuItem>
                  <MenuItem value="user2">User2</MenuItem>
                </TextField>
                <TextField
                  placeholder="Entrer autres exigences"
                  label=" autres exigences"
                  onChange={handleChange('Autres_exigence')}
                  defaultValue={values.lastName}
                  margin="normal"
                  fullWidth
                />
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
          {/* </Dialog> */}
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
