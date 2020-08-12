import moment from 'moment';
import {
  SAVE_CHANGES, CHANGE_OPEN_MODE, SET_CARD_DATA,
} from '../actions/employers';

const initialState = {
  cardOpen: false,
  cardEmployer: {},
  positions: [
    {
      id: 1,
      name: 'должность 1',
    },
    {
      id: 2,
      name: 'должность 2',
    },
    {
      id: 3,
      name: 'должность 3',
    },
    {
      id: 4,
      name: 'должность 4',
    },
  ],
  employers: [
    {
      id: 1,
      name: 'Вася',
      surname: 'Пупкин',
      patronymic: 'Иванов',
      date: moment('1995-12-17', 'YYYY-MM-DD'),
      sex: 'мужской',
      position: { id: 1, name: 'должность 1' },
      fired: false,
    },
    {
      id: 2,
      name: 'Васильев',
      surname: 'Иван',
      patronymic: 'Петрович',
      date: moment('1997-04-13', 'YYYY-MM-DD'),
      sex: 'мужской',
      position: { id: 2, name: 'должность 2' },
      fired: false,
    },
    {
      id: 3,
      name: 'Шукшина',
      surname: 'Мария',
      patronymic: 'Вячеславвовна',
      date: moment('2000-10-30', 'YYYY-MM-DD'),
      sex: 'женский',
      position: { id: 3, name: 'должность 3' },
      fired: false,
    },
    {
      id: 4,
      name: 'Дураков',
      surname: 'Дурак',
      patronymic: 'Дураковович',
      date: moment('1999-02-14', 'YYYY-MM-DD'),
      sex: 'мужской',
      position: { id: 4, name: 'должность 4' },
      fired: true,
    },
    {
      id: 5,
      name: 'Зорин',
      surname: 'Гений',
      patronymic: null,
      date: moment('1996-06-06', 'YYYY-MM-DD'),
      sex: 'мужской',
      position: { id: 1, name: 'должность 1' },
      fired: false,
    },
    {
      id: 5,
      name: 'Зорин',
      surname: 'Гений',
      patronymic: null,
      date: moment('1996-06-06', 'YYYY-MM-DD'),
      sex: 'мужской',
      position: { id: 1, name: 'должность 1' },
      fired: false,
    },
    {
      id: 5,
      name: 'Зорин',
      surname: 'Гений',
      patronymic: null,
      date: moment('1996-06-06', 'YYYY-MM-DD'),
      sex: 'мужской',
      position: { id: 1, name: 'должность 1' },
      fired: false,
    },
    {
      id: 5,
      name: 'Зорин',
      surname: 'Гений',
      patronymic: null,
      date: moment('1996-06-06', 'YYYY-MM-DD'),
      sex: 'мужской',
      position: { id: 1, name: 'должность 1' },
      fired: false,
    },
    {
      id: 5,
      name: 'Зорин',
      surname: 'Гений',
      patronymic: null,
      date: moment('1996-06-06', 'YYYY-MM-DD'),
      sex: 'мужской',
      position: { id: 1, name: 'должность 1' },
      fired: false,
    },
    {
      id: 5,
      name: 'Зорин',
      surname: 'Гений',
      patronymic: null,
      date: moment('1996-06-06', 'YYYY-MM-DD'),
      sex: 'мужской',
      position: { id: 1, name: 'должность 1' },
      fired: false,
    },
    {
      id: 5,
      name: 'Зорин',
      surname: 'Гений',
      patronymic: null,
      date: moment('1996-06-06', 'YYYY-MM-DD'),
      sex: 'мужской',
      position: { id: 1, name: 'должность 1' },
      fired: false,
    },
    {
      id: 5,
      name: 'Зорин',
      surname: 'Гений',
      patronymic: null,
      date: moment('1996-06-06', 'YYYY-MM-DD'),
      sex: 'мужской',
      position: { id: 1, name: 'должность 1' },
      fired: false,
    },
    {
      id: 5,
      name: 'Зорин',
      surname: 'Гений',
      patronymic: null,
      date: moment('1996-06-06', 'YYYY-MM-DD'),
      sex: 'мужской',
      position: { id: 1, name: 'должность 1' },
      fired: false,
    },
    {
      id: 5,
      name: 'Зорин',
      surname: 'Гений',
      patronymic: null,
      date: moment('1996-06-06', 'YYYY-MM-DD'),
      sex: 'мужской',
      position: { id: 1, name: 'должность 1' },
      fired: false,
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CHANGES:
      return {
        ...state,
        employers: action.employers,
      };
    case CHANGE_OPEN_MODE:
      return {
        ...state,
        cardOpen: action.mode,
      };
    case SET_CARD_DATA:
      return {
        ...state,
        cardEmployer: action.employer,
      };
    default:
      return state;
  }
};
