import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getEmployee = createAsyncThunk('eCommerceApp/employee/getEmployee', async () => {
  const response = await axios.get('/api/ecommerce/products');
  const data = await response.data;
  return data;
});

export const removeEmployee = createAsyncThunk(
  'eCommerceApp/employee',
  async (productIds, { dispatch, getState }) => {
    await axios.delete('/api/ecommerce/products', { data: productIds });
    return productIds;
  }
);

const employeeAdapter = createEntityAdapter({});

export const { selectAll: selectEmployee, selectById: selectEmployeeById } =
  employeeAdapter.getSelectors((state) => state.eCommerceApp.employee);

const employeeSlice = createSlice({
  name: 'eCommerceApp/employee',
  initialState: employeeAdapter.getInitialState({
    searchText: '',
  }),
  reducers: {
    setEmployeeSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
  },
  extraReducers: {
    [getEmployee.fulfilled]: employeeAdapter.setAll,
    [removeEmployee.fulfilled]: (state, action) =>
      employeeAdapter.removeMany(state, action.payload),
  },
});

export const { setEmployeeSearchText } = employeeSlice.actions;

export const selectEmployeeSearchText = ({ eCommerceApp }) => eCommerceApp.employee.searchText;

export default employeeSlice.reducer;
