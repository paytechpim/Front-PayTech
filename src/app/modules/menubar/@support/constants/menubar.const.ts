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
      label: 'Cadastro de colaboradores',
      path: 'colaboradores',
    },
    {
      icon: 'assignment_ind',
      label: 'Lista de colaboradores',
      path: 'listar-colaboradores',
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
