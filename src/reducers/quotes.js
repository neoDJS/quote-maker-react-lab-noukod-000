export default (state = [], action) => {
  let idx;
  switch (action.type) {
    case "ADD_QUOTE":
      return state.concat(action.quote);

    case "REMOVE_QUOTE":
      return state.filter(quote=> quote.id !== action.quoteId);

    case "UP_VOTE_QUOTE":
      return state.map(quote => quote.id == action.quoteId ? {...quote, votes: quote.votes+1} : quote);

    case "DOWN_VOTE_QUOTE":
      return state.map(quote => quote.id == action.quoteId ? {...quote, votes: quote.votes-1} : quote);

    default:
      return state;
  }
}
