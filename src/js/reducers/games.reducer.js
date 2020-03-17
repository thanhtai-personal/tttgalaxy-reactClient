// import {
//   GET_GAME_DATA,
//   GET_GAME_DATA_SUCCESS,
//   GET_GAME_DATA_FAILED,
//   RESET_ALL_STATE
// } from "../constants/action-types";

// import { gameType, gameName } from './../components/games/enum'

// const initialState = {
//   games: [
//     {
//       id: 'canvas-1',
//       name: 'game 1',
//       imageUrl: 'https://sc01.alicdn.com/kf/HTB13.GwIFXXXXcYXXXXq6xXFXXXT/223361048/HTB13.GwIFXXXXcYXXXXq6xXFXXXT.jpg',
//       description: 'game description 1',
//       gameType: gameType.CANVAS,
//       importedName: gameName.helloCanvas
//     },
//     {
//       id: 'helloWorld',
//       name: 'game 2',
//       imageUrl: 'https://sc01.alicdn.com/kf/HTB13.GwIFXXXXcYXXXXq6xXFXXXT/223361048/HTB13.GwIFXXXXcYXXXXq6xXFXXXT.jpg',
//       description: 'game description 2',
//       gameType: gameType.PHASER
//     },
//     {
//       id: 'helloWorld',
//       name: 'game 3',
//       imageUrl: 'https://sc01.alicdn.com/kf/HTB13.GwIFXXXXcYXXXXq6xXFXXXT/223361048/HTB13.GwIFXXXXcYXXXXq6xXFXXXT.jpg',
//       description: 'game description 3',
//       gameType: gameType.PHASER
//     },
//     {
//       id: 'helloWorld',
//       name: 'game 4',
//       imageUrl: 'https://sc01.alicdn.com/kf/HTB13.GwIFXXXXcYXXXXq6xXFXXXT/223361048/HTB13.GwIFXXXXcYXXXXq6xXFXXXT.jpg',
//       description: 'game description 4',
//       gameType: gameType.PHASER
//     },
//     {
//       id: 'helloWorld',
//       name: 'game 5',
//       imageUrl: 'https://sc01.alicdn.com/kf/HTB13.GwIFXXXXcYXXXXq6xXFXXXT/223361048/HTB13.GwIFXXXXcYXXXXq6xXFXXXT.jpg',
//       description: 'game description 5',
//       gameType: gameType.PHASER
//     },
//     {
//       id: 'helloWorld',
//       name: 'game 6',
//       imageUrl: 'https://sc01.alicdn.com/kf/HTB13.GwIFXXXXcYXXXXq6xXFXXXT/223361048/HTB13.GwIFXXXXcYXXXXq6xXFXXXT.jpg',
//       description: 'game description 6',
//       gameType: gameType.PHASER
//     },
//     {
//       id: 'helloWorld',
//       name: 'game 10',
//       imageUrl: 'https://sc01.alicdn.com/kf/HTB13.GwIFXXXXcYXXXXq6xXFXXXT/223361048/HTB13.GwIFXXXXcYXXXXq6xXFXXXT.jpg',
//       description: 'game description 10',
//       gameType: gameType.PHASER
//     },
//     {
//       id: 'helloWorld',
//       name: 'game 7',
//       imageUrl: 'https://sc01.alicdn.com/kf/HTB13.GwIFXXXXcYXXXXq6xXFXXXT/223361048/HTB13.GwIFXXXXcYXXXXq6xXFXXXT.jpg',
//       description: 'game description 7',
//       gameType: gameType.PHASER
//     },
//     {
//       id: 'helloWorld',
//       name: 'game 8',
//       imageUrl: 'https://sc01.alicdn.com/kf/HTB13.GwIFXXXXcYXXXXq6xXFXXXT/223361048/HTB13.GwIFXXXXcYXXXXq6xXFXXXT.jpg',
//       description: 'game description 8',
//       gameType: gameType.PHASER
//     },
//     {
//       id: 'helloWorld',
//       name: 'game 9',
//       imageUrl: 'https://sc01.alicdn.com/kf/HTB13.GwIFXXXXcYXXXXq6xXFXXXT/223361048/HTB13.GwIFXXXXcYXXXXq6xXFXXXT.jpg',
//       description: 'game description 9',
//       gameType: gameType.PHASER
//     }
//   ],
//   gameDetail: {}
// };

// function GamesReducer (state = initialState, action) {
//   switch (action.type) {
//     case GET_GAME_DATA:
//       return { ...state, gameDetail: { ...state.gameDetail, id: action.payload.gameId } }
//     case GET_GAME_DATA_SUCCESS:
//       return { ...state, gameDetail: { ...state.gameDetail, ...action.payload.data } };
//     case GET_GAME_DATA_FAILED:
//       return state
//     case RESET_ALL_STATE:
//       return initialState
//     default:
//       return state
//   }
// }

// export default GamesReducer;