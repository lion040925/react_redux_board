import React, { Component } from "react";
import { connect } from "react-redux";

import BoardForm from "./BoardForm";
import BoardItem from "./BoardItem";

class App extends Component {
  render() {
    const boards = this.props.boards;

    return (
      <div>
        <h2> Redux Study </h2>

        <table border="1">
          <tbody>
            <tr align="center">
              <td width="50">게시물번호</td>
              <td width="300">제목</td>
              <td width="100">저자</td>
              <td width="100">작성일</td>
              <td width="100"> 비고 </td>
            </tr>
            {boards.map(row => (
              <BoardItem key={row.boardSeq} row={row} />
            ))}
          </tbody>
        </table>
        <br />
        <BoardForm />
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    boards: state.boards,
    selectedBoard: state.selectedBoard
  };
};

export default connect(mapStateToProps)(App);
