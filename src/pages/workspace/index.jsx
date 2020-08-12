import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import Card from '../../components/card';
import styles from './style.css';
import List from '../../components/list';
import Modal from '../../components/modal';
import FabButton from '../../components/fab-button';
import {
  open, close, setEditableEmployer, del, change,
} from '../../actions/employers';

const cx = classNames.bind(styles);

const Workspace = ({
  cardOpen, employers, employer, positions, open, close, setEditableEmployer, del, change,
}) => (
  <div className={cx('workspace')}>
    <div className={cx('workspace__list')}>
      <List
        employers={employers}
        changeOpen={(id) => {
          open();
          setEditableEmployer(id);
        }}
      />
    </div>
    <FabButton
      changeOpen={() => open()}
    />
    <Modal openMode={cardOpen} close={close}>
      <Card
        employer={employer}
        positions={positions}
        del={(id) => {
          del(id);
          close();
        }}
        change={(employer) => {
          change(employer);
          close();
        }}
      />
    </Modal>
  </div>
);

const mapStateToProps = (state) => ({
  cardOpen: state.cardOpen,
  employers: state.employers,
  employer: state.cardEmployer,
  positions: state.positions,
});

const mapDispatchToProps = {
  open,
  close,
  setEditableEmployer,
  del,
  change,
};

export default connect(mapStateToProps, mapDispatchToProps)(Workspace);
