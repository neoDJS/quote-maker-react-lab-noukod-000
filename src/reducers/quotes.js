import uuid from 'uuid';

export default (state = [], action) => {
  let idx;
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.author];

    case "REMOVE_QUOTE":
      idx = state.indexOf(action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case "UP_VOTE_QUOTE":
      let existingAuthor = state.filter(
        author => author.authorName === action.book.authorName
      );
      if (existingAuthor.length > 0) {
        return state;
      } else {
        return [...state, { authorName: action.book.authorName, id: uuid() }];
      }

    case "DOWN_VOTE_QUOTE":
      let existingAuthor = state.filter(
        author => author.authorName === action.book.authorName
      );
      if (existingAuthor.length > 0) {
        return state;
      } else {
        return [...state, { authorName: action.book.authorName, id: uuid() }];
      }

    default:
      return state;
  }
}
