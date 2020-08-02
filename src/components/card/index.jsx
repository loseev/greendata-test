import React from 'react';
import {
  Card as CardUI,
  CardActions,
  CardContent,
  Checkbox,
  Typography,
  Button,
  CardMedia,
  TextField,
  InputAdornment,
  ListItemText,
  Input,
  InputLabel,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Select,
  Radio,
  RadioGroup,
  makeStyles,
} from '@material-ui/core';
import clsx from 'clsx';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import style from './style';

const useStyles = makeStyles(style);

const Card = () => {
  const classes = useStyles();

  return (
    <CardUI className={classes.root}>

      <CardContent>

        <div className={clsx(classes.second_block)}>
          <div>
            <TextField
              className={clsx(classes.margin, classes.textField)}
              id="standard-surname-input"
              label="Фамилия"
              type="surname"
              autoComplete="current-surname"
            />
          </div>

          <div>
            <TextField
              className={clsx(classes.margin, classes.textField)}
              id="standard-name-input"
              label="Имя"
              type="name"
              autoComplete="current-name"
            />
          </div>

          <div>
            <TextField
              className={clsx(classes.margin, classes.textField)}
              id="standard-patronymic-input"
              label="Отчество"
              type="patronymic"
              autoComplete="current-patronymic"
            />
          </div>
        </div>

        <div className={clsx(classes.third_block)}>
          <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                className={clsx(classes.margin)}
                margin="normal"
                id="date-picker-dialog"
                label="Дата рождения"
                format="MM/dd/yyyy"
                // value={selectedDate}
                // onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </div>

          <div>
            <FormControl className={clsx(classes.formControl, classes.margin)}>
              <InputLabel id="demo-simple-select-label">Должность</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem position={10}>Работяга</MenuItem>
                <MenuItem position={20}>Директор</MenuItem>
                <MenuItem position={30}>Владелец</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div>
            <FormControl
              component="fieldset"
              className={clsx(classes.margin_radio)}
            >
              <FormLabel component="legend">Пол</FormLabel>
              <RadioGroup aria-label="Пол" name="gender1">
                <FormControlLabel value="female" control={<Radio />} label="Женский" />
                <FormControlLabel value="male" control={<Radio />} label="Мужской" />
              </RadioGroup>
            </FormControl>
          </div>

          <div>
            <FormControlLabel
              control={(
                <Checkbox
                  className={clsx(classes.margin_check)}
                // checked={state.checkedB}
                // onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
            )}
              label="Уволен"
            />
          </div>
        </div>

      </CardContent>

      <CardActions>

        <Button
          size="large"
          className={clsx(classes.button)}
        >
          Удалить
        </Button>

      </CardActions>

    </CardUI>
  );
};
export default Card;
