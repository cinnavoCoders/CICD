import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'apps.ecommerce',
    title: 'ECommerce',
    type: 'collapse',
    icon: 'heroicons-outline:shopping-cart',
    translate: 'ECOMMERCE',
    children: [
      {
        id: 'e-commerce-products',
        title: 'Products',
        type: 'item',
        url: 'apps/e-commerce/products',
        end: true,
      }
    ],
  },
  {
    id: 'apps.employee',
    title: 'Employee',
    type: 'item',
    url: 'apps/employee',
    translate: 'Employee',
  }
];

export default navigationConfig;
