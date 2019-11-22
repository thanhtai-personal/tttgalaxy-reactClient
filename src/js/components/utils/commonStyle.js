const color = {
  red: '#f44336',
  green: '#4CAF50',
  blue: '#008CBA',
  white: 'white',
  gray: '#e7e7e7',
  black: '#555555',
}

const button = `
  border: none;
  color: ${color.white};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`
const buttonGreen = `
  background-color: ${color.green};
  color: ${color.white};
`
const buttonBlue = `
  background-color: ${color.blue};
  color: ${color.white};
`
const buttonRed = `
  background-color: ${color.red};
  color: ${color.white};
`
const buttonGray = `
  background-color: ${color.gray};
  color: ${color.black};
`
const buttonBlack = `
  background-color: ${color.black};
  color: ${color.white};
`
const size10 = `
  font-size: 10px;
`
const size12 = `
  font-size: 10px;
`
const size16 = `
  font-size: 10px;
`
const size20 = `
  font-size: 10px;
`
const size24 = `
  font-size: 10px;
`

const rounded2 = `
  border-radius: 2px;
`
const rounded4 = `
  border-radius: 4px;
`
const rounded8 = `
  border-radius: 8px;
`
const rounded12 = `
  border-radius: 12px;
`
const rounded50 = `
  border-radius: 50%;
`
const buttonColoredBoderGreen = `
  background-color: ${color.white};
  color: black;
  border: 2px solid ${color.green}; 
`
const buttonColoredBoderBlue = `
  background-color: ${color.white};
  color: black;
  border: 2px solid ${color.blue}; 
`
const buttonColoredBoderRed = `
  background-color: ${color.white};
  color: black;
  border: 2px solid ${color.red}; 
`
const buttonColoredBoderGray = `
  background-color: ${color.white};
  color: black;
  border: 2px solid ${color.gray}; 
`
const buttonColoredBoderBlack = `
  background-color: ${color.white};
  color: black;
  border: 2px solid ${color.black}; 
`
export default {
  buttonColoredBoderBlack,
  buttonColoredBoderGray,
  buttonColoredBoderRed,
  buttonColoredBoderBlue,
  buttonColoredBoderGreen,
  rounded50,
  rounded12,
  rounded8,
  rounded4,
  rounded2,
  size24,
  size20,
  size16,
  size12,
  size10,
  buttonGreen,
  buttonBlue,
  buttonRed,
  buttonGray,
  buttonBlack,
  button,
  color
}