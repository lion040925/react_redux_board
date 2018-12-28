import React, { Component } from "react";
import { connect } from "react-redux";

import { board_read, board_remove } from "./App_reducer";

class BoardItem extends Component {
  handleUpdateForm = boardSeq => {
    this.props.dispatch(board_read(boardSeq));
  };

  render() {
    const row = this.props.row;

    return (
      <tr onClick={() => this.handleUpdateForm(row.boardSeq)}>
        <td>{row.boardSeq}</td>
        <td>{row.boardTitle}</td>
        <td>{row.boardAuthor}</td>
        <td>{row.boardRgstDate.toLocaleDateString("ko-KR")}</td>
        <td align="center">
          <button
            onClick={() => {
              this.props.dispatch(board_remove(row.boardSeq));
            }}
          >
            {" "}
            삭제
          </button>
        </td>
      </tr>
    );
  }
}

export default connect()(BoardItem);
