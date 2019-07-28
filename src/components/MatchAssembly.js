import React from "react";
import ReactDOM from "react-dom";

const assemblyDocUrl =
  "https://drive.google.com/file/d/1tJrMPpkekbl25XFYuZLlAzIWRnyIkgXa/preview";

export default class MatchAssembly extends React.Component {
  adjustIframeHeight = () => {
    setTimeout(() => {
      const iframeDOMNode = ReactDOM.findDOMNode(this.iframeRef);

      if (
        iframeDOMNode &&
        iframeDOMNode.contentWindow &&
        iframeDOMNode.contentWindow.document &&
        iframeDOMNode.contentWindow.document.body &&
        iframeDOMNode.height !==
          iframeDOMNode.contentWindow.document.body.scrollHeight
      ) {
        iframeDOMNode.height = iframeDOMNode.contentWindow.document.body
          .scrollHeight
          ? iframeDOMNode.contentWindow.document.body.scrollHeight + "px"
          : "auto";
      }

      this.timeoutToken = setTimeout(this.adjustIframeHeight, 500);
    }, 200);
  };

  componentDidMount() {
    this.timeoutToken = setTimeout(this.adjustIframeHeight, 500);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutToken);
  }
  render() {
    return (
      <React.Fragment>
        <iframe
          src={assemblyDocUrl}
          width={this.props.width}
          height={this.props.height}
          title={this.props.title}
          style={{
            width: "100%",
            height: "760px"
          }}
        />
      </React.Fragment>
    );
  }
}
