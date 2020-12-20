import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      maxChars: 0
    };
  }

  handleType = () => {
    let newcount = this.state.maxChars + 1
    this.setState({
      maxChars: newcount
    })
  }

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
        value={this.state.message}
        onKeyDown={this.handleType}
        onChange={this.handleMessageChange}
        />
        <br></br>{this.props.maxChars}
      </div>
    );
  }
}

export default TwitterMessage;
