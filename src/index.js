import React from "react";
import ReactDOM from "react-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { CssBaseline, Button } from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Done from "@material-ui/icons/Done";

//components
import DiverForm from "./components/DiverForm";
import MatchAssembly from "./components/MatchAssembly";

const steps = [
  "Match Assembly Confirmation",
  "Diver Information",
  "Match Listing",
  "Match Miscellaneous",
  "Review",
  "Completed"
];

class StepContent extends React.Component {
  render() {
    switch (this.props.step) {
      case 0:
        return <MatchAssembly />;
      case 1:
        return <DiverForm />;
      default:
        return <div />;
    }
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { step: 1 };
    this.handleStepNext = this.handleStepNext.bind(this);
    this.handleStepBack = this.handleStepBack.bind(this);
  }
  handleStepNext() {
    let step = this.state.step;
    if (step < steps.length - 1) {
      this.setState({ step: ++step });
    }
  }
  handleStepBack() {
    let step = this.state.step;
    if (step > 0) {
      this.setState({ step: --step });
    }
  }
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative" color="default">
          <Toolbar>
            <Typography variant={"h4"} noWrap>
              Registration Form
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper height="100%" minHeight={"1000px"}>
          <Stepper activeStep={this.state.step}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <AppBar position={"sticky"}>
            <Toolbar>
              <Grid
                container
                justify={"space-between"}
                direction={"row"}
                spacing={2}
              >
                <Grid item xs={1}>
                  {this.state.step !== 0 && (
                    <Button
                      onClick={this.handleStepBack}
                      color={"primary"}
                      variant={"contained"}
                    >
                      <KeyboardArrowLeft />
                      Back
                    </Button>
                  )}
                </Grid>
                <Grid item xs={6}>
                  <Typography variant={"subtitle1"} noWrap align={"center"}>
                    {steps[this.state.step]}
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Button
                    onClick={this.handleStepNext}
                    color={"primary"}
                    variant={"contained"}
                  >
                    {this.state.step === steps.length - 1 ? "Submit" : "Next"}
                    {this.state.step === steps.length - 1 ? (
                      <Done />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <StepContent step={this.state.step} />
        </Paper>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
