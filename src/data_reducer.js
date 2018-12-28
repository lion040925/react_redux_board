// action type
const BOARD_SAVE = "SAVE";
const BOARD_REMOVE = "REMOVE";
const BOARD_READ = "ONE";
const BOARD_LIST = "LIST";

export const board_save = data => ({
  type: BOARD_SAVE,
  data
});

export const board_remove = boardSeq => ({
  type: BOARD_REMOVE,
  boardSeq: boardSeq
});

export const board_read = boardSeq => ({
  type: BOARD_READ,
  boardSeq: boardSeq
});

export const board_list = () => ({ type: BOARD_LIST });

const initialState = {
  maxNo: 3,
  boards: [
    {
      boardSeq: 1,
      boardAuthor: "다니엘data",
      boardTitle: "첫번째 게시물 111 ",
      boardRgstDate: new Date()
    },
    {
      boardSeq: 2,
      boardAuthor: "소피아",
      boardTitle: "안녕하세요. 222",
      boardRgstDate: new Date()
    }
  ],
  selectedBoard: {}
};

export default function board_reducer(state = initialState, action) {
  let boards = state.boards;

  switch (action.type) {
    case BOARD_SAVE: // boardSeq존재여부 : Insert or Update
      let data = action.data;
      let maxNo = state.maxNo;
      if (!data.boardSeq) {
        return {
          maxNo: maxNo + 1,
          boards: boards.concat({
            ...data,
            boardSeq: maxNo,
            boardRgstDate: new Date()
          }),
          selectedBoard: {}
        };
      }
      return {
        ...state,
        boards: boards.map(row =>
          data.boardSeq === row.boardSeq ? { ...data } : row
        ),
        selectedBoard: {}
      };
    case BOARD_REMOVE:
      return {
        ...state,
        boards: boards.filter(row => row.boardSeq !== action.boardSeq),
        selectedBoard: {}
      };
    case BOARD_READ:
      return {
        ...state,
        selectedBoard: boards.find(row => row.boardSeq === action.boardSeq)
      };
    default:
      return state;
  }
}
