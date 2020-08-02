import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import clsx from 'clsx';
import style from './style';

const useStyles = makeStyles(style);

function createData(name, date, sex, position, status) {
  return {
    name, date, sex, position, status,
  };
}

const rows = [
  createData('Пупкин Вася Иванов', '25.05.1998', 'мужской', 'Заместитель директора по административно – хозяйственной части', 'работает'),
  createData('Васильев Иван Петрович', '13.04.1997', 'мужской', 'Работяга', 'работает'),
  createData('Шукшина Мария Вячеславвовна', '30.10.2000', 'женский', 'Секретарь', 'работает'),
  createData('Дураков Дурак Дураковович', '14.02.1999', 'мужской', 'Лентяй', 'уволен'),
  createData('Зорин Гений', '06.06.1996', 'мужской', 'Директор', 'работает'),
];

export default function List() {
  const classes = useStyles();

  return (
    <div className={clsx(classes.list)}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ФИО</TableCell>
              <TableCell align="center">Дата рождения</TableCell>
              <TableCell align="center">Пол</TableCell>
              <TableCell align="center">Должность</TableCell>
              <TableCell align="center">Статус</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">{row.sex}</TableCell>
                <TableCell align="center">{row.position}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
