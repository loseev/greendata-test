import React from 'react';
import classNames from 'classnames/bind';
import Card from '../../components/card';
import styles from './style.css';
import List from '../../components/list';

const cx = classNames.bind(styles);

const Workspace = () => (
  <div className={cx('workspace')}>
    <List />
  </div>
);

export default Workspace;
