import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StatusButton from '../components/StatusButton';
import { statusCheckCreator } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoriesReducer);
  return (
    <div>
      <p>{categories}</p>
      <StatusButton dispatch={dispatch} action={statusCheckCreator} />
    </div>
  );
};

export default Categories;
