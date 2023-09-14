import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Employees = lazy(() => import('./employee/Employee'));
console.log('EmployeeModuleConfig loaded00');
const EmployeeModuleConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: 'apps/employee',
      element: <Employees />,
    }
  ],
};

export default EmployeeModuleConfig;
