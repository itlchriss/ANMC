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

//structure
import Diver from "./structures/Diver";

//components
import DiverForm from "./components/DiverForm";
import MatchAssembly from "./components/MatchAssembly";

const steps = [
  "Match Assembly Confirmation",
  "Diver Information",
  "Match Setting",
  "Match Miscellaneous",
  "Review",
  "Completed"
];

const getStepContent = (
  step,
  { handleAddDiver, handleRemoveDiver, handleDiverOnChange },
  { divers }
) => {
  console.log("called getStepContent: state => " + divers);
  switch (step) {
    case 0:
      return <MatchAssembly />;
    case 1:
      return (
        <DiverForm
          handleAddDiver={handleAddDiver}
          handleRemoveDiver={handleRemoveDiver}
          handleDiverOnChange={handleDiverOnChange}
          divers={divers}
        />
      );
    default:
      return <div />;
  }
};

const App = () => {
  let [state, setState] = React.useState({
    activeStep: 1,
    divers: [new Diver()]
  });
  const handleAddDiver = () => {
    console.log("called parent");
    setState({ ...state, divers: state.divers.push(new Diver()) });
    console.log("finish calling parent");
  };
  const handleRemoveDiver = index => {
    setState({ ...state, divers: state.divers.splice(index) });
  };
  const handleDiverOnChange = (id, value, index) => {
    let tmp = state.divers;
    tmp[index][id] = value;
    setState({ ...state, divers: tmp });
  };
  const handleStepNext = () => {
    let step = state.activeStep;
    step = step < steps.length - 1 ? ++step : steps.length - 1;
    setState({ ...state, activeStep: step });
  };
  const handleStepBack = () => {
    let step = state.activeStep;
    step = step > 0 ? --step : 0;
    setState({ ...state, activeStep: step });
  };
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
      <div style={{ padding: 20 }}>
        <Paper height="100%" minheight={"1000px"}>
          <Stepper activeStep={state.activeStep}>
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
                <Grid item xs={2}>
                  {state.activeStep !== 0 && (
                    <Button
                      onClick={handleStepBack}
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
                    {steps[state.activeStep]}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Button
                    onClick={handleStepNext}
                    color={"primary"}
                    variant={"contained"}
                  >
                    {state.activeStep === steps.length - 1 ? "Submit" : "Next"}
                    {state.activeStep === steps.length - 1 ? (
                      <Done />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          {getStepContent(
            state.activeStep,
            {
              handleAddDiver,
              handleRemoveDiver,
              handleDiverOnChange
            },
            state
          )}
        </Paper>
      </div>
    </React.Fragment>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
