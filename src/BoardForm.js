import React, { Component } from "react";
import { connect } from "react-redux";

import { board_save } from "./App_reducer";

class BoardForm extends Component {
  state = {};

  initialSelectedBoard = {
    boardSeq: "",
    boardTitle: "",
    boardAuthor: "",
    boardRgstDate: ""
  };

  onFormInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onInsertOrUpdate = () => {
    console.log("BoardForm :" + this.state);
    this.props.dispatch(board_save(this.state));
    this.setState(this.initialSelectedBoard);
  };

  componentWillReceiveProps(nextProps) {
    console.log("BoardForm componentWillReceiveProps : 2222 ");
    this.setState(nextProps.selectedBoard);
  }

  render() {
    console.log("BoardForm render : 3333 ");
    return (
      <div>
        제목 :{" "}
        <input
          name="boardTitle"
          value={this.state.boardTitle}
          onChange={this.onFormInputChange}
        />
        <br />
        저자 :{" "}
        <input
          name="boardAuthor"
          value={this.state.boardAuthor}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <button onClick={this.onInsertOrUpdate}> 게시물저장 </button>
      </div>
    );
  }
}

let mapStateToProps = state => {
  console.log("BoardForm mapStateToProps : 1111 ");
  return {
    selectedBoard: state.selectedBoard
  };
};
export default connect(mapStateToProps)(BoardForm);
