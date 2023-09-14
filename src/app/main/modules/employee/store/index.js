import { combineReducers } from '@reduxjs/toolkit';
import employee from './EmployeeSlice';

const reducer = combineReducers({
  employee
});

export default reducer;
