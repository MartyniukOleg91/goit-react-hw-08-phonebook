import React from 'react';

import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { changeValue } from '../../store/contacts/filterSlice';
import { getFilterValue } from '../../store/contacts/selectors';

const Filter = () => {
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  return (
    <div>
      <label className={css.filterLabel}>Find contacts by Name </label>
      <input
        className={css.filterName}
        type="text"
        name="filter"
        placeholder="Enter filter"
        value={filterValue}
        onChange={e => dispatch(changeValue(e.target.value))}
      />
    </div>
  );
};

export default Filter;
