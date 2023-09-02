export interface MenuBar {
  items: MenuBarItem[];
}

export interface MenuBarItem {
  /**
   * Nome do ícone de acordo com angular material
   */
  icon?: string;
  /**
   * Nome da rota
   *
   * @example Dashboard
   * @example Colaboradores
   */
  label: string;
  /**
   * Caminho da rota para navegar até o menu
   */
  path: string;
  /**
   * Lista de submenus
   */
  subItems?: MenuBarItem[];
  /**
   * Lista de permissões que o usuário deve ter para visualizar o menu
   *
   * TODO: ver se vai de fato ficar assim
   **/
  allowedRoles?: string[];
}
