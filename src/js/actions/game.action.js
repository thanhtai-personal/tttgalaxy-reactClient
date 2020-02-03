import _ from 'lodash'


import { 
  GET_GAME_DATA
} from "../constants/action-types";

// import store from './../store'

export const getGameData = (gameId) => {
  return { type: GET_GAME_DATA, payload: { gameId } };
}
