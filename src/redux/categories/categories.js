const STATUS_CHECKED = 'STATUS_CHECKED';
const initialStatus = [];

const statusChecker = () => ({
  type: STATUS_CHECKED,
});

const categoriesReducer = (state = initialStatus, action) => {
  switch (action.type) {
    case STATUS_CHECKED:
      return 'Under construction';
    default:
      return state;
  }
};

export default categoriesReducer;
export { statusChecker };
