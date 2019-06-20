/**
 * Using concat(), slice(), and …spread for arrays
 * Using Object.assign() and …spread for objects
 */
import { 
  ADD_ARTICLE,
  TITLE_FORBIDDEN
} from "../constants/action-types";

const initialState = {
  articles: [],
  remoteArticles: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) 
  {
    case ADD_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
    case TITLE_FORBIDDEN:
    default:
      return state
  }
}

export default rootReducer;