import { MenuBar } from '../interfaces/menubar.interface';

export const MENU_BAR: MenuBar = {
  items: [
    {
      icon: 'dashboard',
      label: 'Dashboard',
      path: 'dashboard',
    },
    {
      icon: 'person_add',
      label: 'Colaboradores',
      path: 'colaboradores',
    },
    {
      icon: 'library_books',
      label: 'Folha de pagamento',
      path: 'folha-pagamento',
    },
    {
      icon: 'account_balance',
      label: 'Dados da empresa',
      path: 'dados-empresa',
    },
  ],
};
