import {
} from "../constants/action-types";

const initialState = {
  games: [
    {
      id: 1,
      name: 'game 1',
      imageUrl: 'https://sc01.alicdn.com/kf/HTB13.GwIFXXXXcYXXXXq6xXFXXXT/223361048/HTB13.GwIFXXXXcYXXXXq6xXFXXXT.jpg',
      description: 'game description 1'
    },
    {
      id: 2,
      name: 'game 2',
      imageUrl: 'https://sc01.alicdn.com/kf/HTB13.GwIFXXXXcYXXXXq6xXFXXXT/223361048/HTB13.GwIFXXXXcYXXXXq6xXFXXXT.jpg',
      description: 'game description 2'
    },
    {
      id: 3,
      name: 'game 3',
      imageUrl: 'https://sc01.alicdn.com/kf/HTB13.GwIFXXXXcYXXXXq6xXFXXXT/223361048/HTB13.GwIFXXXXcYXXXXq6xXFXXXT.jpg',
      description: 'game description 3'
    },
    {
      id: 4,
      name: 'game 4',
      imageUrl: 'https://sc01.alicdn.com/kf/HTB13.GwIFXXXXcYXXXXq6xXFXXXT/223361048/HTB13.GwIFXXXXcYXXXXq6xXFXXXT.jpg',
      description: 'game description 4'
    },
    {
      id: 5,
      name: 'game 5',
      imageUrl: 'https://sc01.alicdn.com/kf/HTB13.GwIFXXXXcYXXXXq6xXFXXXT/223361048/HTB13.GwIFXXXXcYXXXXq6xXFXXXT.jpg',
      description: 'game description 5'
    },
    {
      id: 6,
      name: 'game 6',
      imageUrl: 'https://sc01.alicdn.com/kf/HTB13.GwIFXXXXcYXXXXq6xXFXXXT/223361048/HTB13.GwIFXXXXcYXXXXq6xXFXXXT.jpg',
      description: 'game description 6'
    },
    {
      id: 10,
      name: 'game 10',
      imageUrl: 'https://sc01.alicdn.com/kf/HTB13.GwIFXXXXcYXXXXq6xXFXXXT/223361048/HTB13.GwIFXXXXcYXXXXq6xXFXXXT.jpg',
      description: 'game description 10'
    },
    {
      id: 7,
      name: 'game 7',
      imageUrl: 'https://sc01.alicdn.com/kf/HTB13.GwIFXXXXcYXXXXq6xXFXXXT/223361048/HTB13.GwIFXXXXcYXXXXq6xXFXXXT.jpg',
      description: 'game description 7'
    },
    {
      id: 8,
      name: 'game 8',
      imageUrl: 'https://sc01.alicdn.com/kf/HTB13.GwIFXXXXcYXXXXq6xXFXXXT/223361048/HTB13.GwIFXXXXcYXXXXq6xXFXXXT.jpg',
      description: 'game description 8'
    },
    {
      id: 9,
      name: 'game 9',
      imageUrl: 'https://sc01.alicdn.com/kf/HTB13.GwIFXXXXcYXXXXq6xXFXXXT/223361048/HTB13.GwIFXXXXcYXXXXq6xXFXXXT.jpg',
      description: 'game description 9'
    }

  ]
};

function GamesReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

export default GamesReducer;