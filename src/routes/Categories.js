import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { statusChecker } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const { categoriesReducer } = useSelector((state) => state);

  const checkStatus = () => {
    dispatch(statusChecker());
  };
  return (
    <div>
      <p>{categoriesReducer}</p>
      <button type="button" className="statusBtn" onClick={checkStatus}>
        Check Status
      </button>
    </div>
  );
};

export default Categories;
