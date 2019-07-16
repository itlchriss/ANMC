import React from "react";
import ReactDOM from "react-dom";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import AddIcon from "@material-ui/icons/Add";

//structures
import Diver from "./structures/Diver";

//components
import DiverForm from "./components/DiverForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    let divers = [];
    divers.push(new Diver());
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
      <Container maxWidth="lg">
        <Card>
          <Grid container alignItems={"center"} direction={"column"}>
            <Grid item sm={12} md={12} lg={12} xs={12} alignContent={"center"}>
              <h1>Registration Form</h1>
            </Grid>
            <div>
              {this.state.divers.map((v, i) => {
                return (
                  <DiverForm key={i} name={v.name} age={v.age} sex={v.sex} />
                );
              })}
            </div>
            <Fab
              size="medium"
              color="secondary"
              aria-label="Add"
              onClick={this.handleAddDiver}
            >
              <AddIcon />
            </Fab>
          </Grid>
        </Card>
      </Container>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
