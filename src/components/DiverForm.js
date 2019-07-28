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

class FormRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      efname: this.props.efname || "",
      elname: this.props.elname || "",
      cfname: this.props.cfname || "",
      clname: this.props.clname || "",
      sex: this.props.sex || "",
      age: this.props.age || ""
    };
    this.handleSexOnChange = this.handleSexOnChange.bind(this);
  }
  handleSexOnChange(event) {
    this.setState({ sex: event.target.checked ? "M" : "Female" });
  }
  handleTextOnChange(event) {
    let id = event.target.id;
    let value = event.target.value;
  }
  render() {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          {"Diver " + this.props.diverNumber + " Info"}
        </Typography>
        <div style={{ padding: 20 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName-eng"
                name="firstName-eng"
                label="First name (English)"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName-eng"
                name="lastName-eng"
                label="Last name (English)"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="firstName-chi"
                name="firstName-chi"
                label="First name (Chinese. If applicable)"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="lastName-chi"
                name="lastName-chi"
                label="Last name (Chinese. If applicable)"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField id="age" name="age" label="Age" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Sex</FormLabel>
                <FormControlLabel
                  control={<Switch checked={this.state.sex === 'M'} onChange={this.handleSexOnChange} />}
                  label={this.state.sex === "M" ? "Male" : "Female"}
                />
              </FormControl>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default class DiverForm extends React.Component {
  constructor(props) {
    super(props);
    let divers = this.props.divers;
    if (!divers) {
      divers = [];
      divers.push(new Diver());
    }
    this.state = { divers: divers };
    this.handleAddDiver = this.handleAddDiver.bind(this);
  }
  handleAddDiver() {
    let divers = this.state.divers;
    divers.push(new Diver());
    this.setState({ divers: divers });
  }
  render() {
    return (
      <React.Fragment>
        {this.state.divers.map((v, i) => {
          return (
            <FormRow
              key={i}
              diverNumber={i + 1}
              efname={v.efname}
              elname={v.elname}
              cfname={v.cfname}
              clname={v.clname}
              age={v.age}
              sex={v.sex}
            />
          );
        })}
        <div style={{ textAlign: "center" }}>
          <Fab
            size="medium"
            color="secondary"
            aria-label="Add"
            onClick={this.handleAddDiver}
          >
            <AddIcon />
          </Fab>
        </div>
      </React.Fragment>
    );
  }
}
