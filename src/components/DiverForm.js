import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

//structures
import Diver from "../structures/Diver";

const FormRow = ({
  efname,
  elname,
  cfname,
  clname,
  sex,
  age,
  diverNumber,
  handleDiverOnChange: parentDiverOnChangeHandler,
  index
}) => {
  const handleSexOnChange = ({ target: { id, checked } }) => {
    let value = checked && checked ? "M" : "F";
    parentDiverOnChangeHandler(id, value, index);
  };
  const localHandleFieldOnChange = ({ target: { id, value } }) => {
    parentDiverOnChangeHandler(id, value, index);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        {"Diver " + diverNumber + " Info"}
      </Typography>
      <div style={{ padding: 20 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="efname"
              name="firstName-eng"
              label="First name (English)"
              value={efname}
              onChange={localHandleFieldOnChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="elanem"
              name="lastName-eng"
              label="Last name (English)"
              value={elname}
              onChange={localHandleFieldOnChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="cfname"
              name="firstName-chi"
              label="First name (Chinese. If applicable)"
              value={cfname}
              onChange={localHandleFieldOnChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="clname"
              name="lastName-chi"
              label="Last name (Chinese. If applicable)"
              value={clname}
              onChange={localHandleFieldOnChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="age"
              name="age"
              label="Age"
              value={age}
              onChange={localHandleFieldOnChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Sex</FormLabel>
              <FormControlLabel
                control={
                  <Switch
                    checked={sex === "M"}
                    id="sex"
                    onChange={handleSexOnChange}
                  />
                }
                label={sex === "M" ? "Male" : "Female"}
              />
            </FormControl>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

const DiverForm = ({
  divers,
  handleAddDiver: parentAddDiverHandler,
  handleRemoveDiver,
  handleDiverOnChange: parentDiverOnChangeHandler
}) => {
  const renderDiverRows = () => {
    console.log(divers);
    return divers.map((v, i) => {
      return (
        <FormRow
          key={i}
          index={i}
          diverNumber={i + 1}
          efname={v.efname}
          elname={v.elname}
          cfname={v.cfname}
          clname={v.clname}
          age={v.age}
          sex={v.sex}
          handleDiverOnChange={parentDiverOnChangeHandler}
        />
      );
    });
  };
  return (
    <React.Fragment>
      {renderDiverRows()}
      <div style={{ textAlign: "center" }}>
        <Fab
          size="medium"
          color="secondary"
          aria-label="Add"
          onClick={parentAddDiverHandler}
        >
          <AddIcon />
        </Fab>
      </div>
    </React.Fragment>
  );
};

export default DiverForm;
