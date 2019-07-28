import React from "react";
import Typography from "@material-ui/core/Typography";

export default class Title extends React.Component {
  render() {
    return (
      <Typography
        variant={this.props.variant || "h6"}
        color={this.props.color || "inherit"}
        noWrap
        gutterBottom={this.props.gutterBottom}
        align={this.props.align}
      >
        {this.props.text}
      </Typography>
    );
  }
}
