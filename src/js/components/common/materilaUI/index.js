import {
  //layout
  Box,
  Container,
  Grid,
  GridList,
  Hidden,
  //input
  Button,
  ButtonGroup,
  Checkbox,
  Fab, // float action button
  TextField,
  Radio,
  RadioGroup,
  InputLabel,
  Select,
  Menu,
  MenuItem,
  Slider,
  Switch,
  Transfer,
  Switch,
  //form
  FormControlLabel,
  FormLabel,
  FormControl,
  //navigation



} from '@material-ui/core'

export const DateTime = (type = "datetime", props) => {
  const { inputProps = { step: 300 }, InputLabelProps = { shrink: true }, ...nestedProps } = props
  return (<TextField
    id="time"
    label="Alarm clock"
    type={type}// time, datetime, datetime-local
    defaultValue="07:30"
    // className={classes.textField}
    InputLabelProps={InputLabelProps}
    inputProps={inputProps}
    {...nestedProps}
  />)
}

