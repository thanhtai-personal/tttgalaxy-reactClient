import {
  RESET_ALL_STATE
} from "../constants/action-types";

const initialState = {
  games: [
    {
      id: 'helloWorld',
      name: 'game 1',
      imageUrl: 'https://sc01.alicdn.com/kf/HTB13.GwIFXXXXcYXXXXq6xXFXXXT/223361048/HTB13.GwIFXXXXcYXXXXq6xXFXXXT.jpg',
      description: 'game description 1'
    },
    {
      id: 'helloWorld',
      name: 'game 2',
      imageUrl: 'https://sc01.alicdn.com/kf/HTB13.GwIFXXXXcYXXXXq6xXFXXXT/223361048/HTB13.GwIFXXXXcYXXXXq6xXFXXXT.jpg',
      description: 'game description 2'
    },
    {
      id: 'helloWorld',
      name: 'game 3',
      imageUrl: 'https://sc01.alicdn.com/kf/HTB13.GwIFXXXXcYXXXXq6xXFXXXT/223361048/HTB13.GwIFXXXXcYXXXXq6xXFXXXT.jpg',
      description: 'game description 3'
    },
    {
      id: 'helloWorld',
      name: 'game 4',
      imageUrl: 'https://sc01.alicdn.com/kf/HTB13.GwIFXXXXcYXXXXq6xXFXXXT/223361048/HTB13.GwIFXXXXcYXXXXq6xXFXXXT.jpg',
      description: 'game description 4'
    },
    {
      id: 'helloWorld',
      name: 'game 5',
      imageUrl: 'https://sc01.alicdn.com/kf/HTB13.GwIFXXXXcYXXXXq6xXFXXXT/223361048/HTB13.GwIFXXXXcYXXXXq6xXFXXXT.jpg',
      description: 'game description 5'
    },
    {
      id: 'helloWorld',
      name: 'game 6',
      imageUrl: 'https://sc01.alicdn.com/kf/HTB13.GwIFXXXXcYXXXXq6xXFXXXT/223361048/HTB13.GwIFXXXXcYXXXXq6xXFXXXT.jpg',
      description: 'game description 6'
    },
    {
      id: 'helloWorld',
      name: 'game 10',
      imageUrl: 'https://sc01.alicdn.com/kf/HTB13.GwIFXXXXcYXXXXq6xXFXXXT/223361048/HTB13.GwIFXXXXcYXXXXq6xXFXXXT.jpg',
      description: 'game description 10'
    },
    {
      id: 'helloWorld',
      name: 'game 7',
      imageUrl: 'https://sc01.alicdn.com/kf/HTB13.GwIFXXXXcYXXXXq6xXFXXXT/223361048/HTB13.GwIFXXXXcYXXXXq6xXFXXXT.jpg',
      description: 'game description 7'
    },
    {
      id: 'helloWorld',
      name: 'game 8',
      imageUrl: 'https://sc01.alicdn.com/kf/HTB13.GwIFXXXXcYXXXXq6xXFXXXT/223361048/HTB13.GwIFXXXXcYXXXXq6xXFXXXT.jpg',
      description: 'game description 8'
    },
    {
      id: 'helloWorld',
      name: 'game 9',
      imageUrl: 'https://sc01.alicdn.com/kf/HTB13.GwIFXXXXcYXXXXq6xXFXXXT/223361048/HTB13.GwIFXXXXcYXXXXq6xXFXXXT.jpg',
      description: 'game description 9'
    }

  ]
};

function GamesReducer (state = initialState, action) {
  switch (action.type) {
    case RESET_ALL_STATE:
      return initialState
    default:
      return state
  }
}

export default GamesReducer;