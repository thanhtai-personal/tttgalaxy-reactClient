import { 
  ADD_ARTICLE,
  DATA_REQUESTED,
  TITLE_FORBIDDEN
} from "../constants/action-types";

export function getData() {
  return { type: DATA_REQUESTED };
}


export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function titleForbidden(payload) {
  return { type: TITLE_FORBIDDEN, payload };
}