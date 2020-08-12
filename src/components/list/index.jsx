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

function List({ employers, changeOpen }) {
  const classes = useStyles();

  return (
    <Paper className={clsx(classes.list)}>
      <TableContainer className={clsx(classes.table)}>
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Фамилия</TableCell>
              <TableCell>Имя</TableCell>
              <TableCell>Отчество</TableCell>
              <TableCell align="center">Дата рождения</TableCell>
              <TableCell align="center">Пол</TableCell>
              <TableCell align="center">Должность</TableCell>
              <TableCell align="center">Статус</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employers?.map((row) => (
              <TableRow key={row.id} onClick={() => changeOpen(row.id)}>
                <TableCell component="th" scope="row">{row.surname}</TableCell>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell component="th" scope="row">{row.patronymic}</TableCell>
                <TableCell align="center">{row.date.format('YYYY/MM/DD')}</TableCell>
                <TableCell align="center">{row.sex}</TableCell>
                <TableCell align="center">{row.position?.name}</TableCell>
                <TableCell align="center">{row.fired ? 'уволен' : 'работает'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default List;
