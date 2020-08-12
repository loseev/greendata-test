import React, { useState } from 'react';
import moment from 'moment';
import {
  Card as CardUI,
  CardActions,
  CardContent,
  Checkbox,
  Button,
  TextField,
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

const Card = ({
  employer, positions, del, change,
}) => {
  const classes = useStyles();
  const [surname, setSurname] = useState(employer?.surname || '');
  const [name, setName] = useState(employer?.name || '');
  const [patronymic, setPatronymic] = useState(employer?.patronymic || '');
  const [date, setDate] = useState(employer?.date || '');
  const [sex, setSex] = useState(employer?.sex || '');
  const [positionID, setPositionID] = useState(employer?.position?.id || '');
  const [fired, setFired] = useState(employer?.fired || '');

  return (
    <CardUI className={classes.root}>
      <CardContent>
        <div className={clsx(classes.second_block)}>
          <TextField
            className={clsx(classes.margin, classes.textField)}
            label="Фамилия"
            type="text"
            value={surname}
            onChange={({ target: { value } }) => setSurname(value)}
            required
          />
          <TextField
            className={clsx(classes.margin, classes.textField)}
            label="Имя"
            type="text"
            defaultValue={name}
            onChange={({ target: { value } }) => setName(value)}
            required
          />
          <TextField
            className={clsx(classes.margin, classes.textField)}
            label="Отчество"
            type="text"
            defaultValue={patronymic}
            onChange={({ target: { value } }) => setPatronymic(value)}
          />
        </div>
        <div className={clsx(classes.third_block)}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={clsx(classes.margin, classes.date)}
              margin="normal"
              id="date-picker-dialog"
              label="Дата рождения"
              format="yyyy/MM/dd"
              value={date}
              onChange={(value) => setDate(value)}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
          <FormControl className={clsx(classes.formControl, classes.margin)}>
            <InputLabel id="demo-simple-select-label">Должность</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={positionID}
              onChange={({ target: { value } }) => setPositionID(value)}
            >
              {positions?.map((position) => (<MenuItem value={position.id}>{position.name}</MenuItem>))}
            </Select>
          </FormControl>
          <FormControl
            component="fieldset"
            className={clsx(classes.margin_radio)}
          >
            <FormLabel component="legend">Пол</FormLabel>
            <RadioGroup
              aria-label="Пол"
              name="gender1"
              defaultValue={employer?.sex === 'мужской' ? 'мужской' : 'женский'}
              onChange={({ target: { value } }) => setSex(value)}
            >
              <FormControlLabel value="женский" control={<Radio />} label="Женский" />
              <FormControlLabel value="мужской" control={<Radio />} label="Мужской" />
            </RadioGroup>
          </FormControl>
          <div>
            <FormControlLabel
              control={(
                <Checkbox
                  className={clsx(classes.margin_check)}
                  checked={fired}
                  name="checkedB"
                  color="primary"
                  onChange={({ target: { checked } }) => setFired(checked)}
                />
            )}
              label="Уволен"
            />
          </div>
        </div>
      </CardContent>
      <CardActions className={clsx(classes.buttom)}>
        <Button
          className={clsx(classes.button)}
          variant="contained"
          color="primary"
          onClick={() => change({
            id: employer?.id,
            surname,
            name,
            patronymic,
            position: { id: positionID },
            sex,
            date: moment(date),
            fired,
          })}
        >
          Сохранить
        </Button>
        <Button
          className={clsx(classes.button)}
          variant="contained"
          color="secondary"
          onClick={() => del(employer?.id)}
        >
          Удалить
        </Button>
      </CardActions>
    </CardUI>
  );
};

export default Card;
