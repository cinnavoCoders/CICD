import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Products = lazy(() => import('./products/Products'));

const ECommerceModuleConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: 'apps/e-commerce/products',
      element: <Products />,
    }
  ],
};

export default ECommerceModuleConfig;
