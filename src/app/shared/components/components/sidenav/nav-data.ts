import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
        routeLink: 'cadastro',
        icon: 'fal fa-file-plus',
        label: 'Cadastros',
        items: [
            {
                routeLink: 'c-usuario',
                label: 'Colaboradores'
            },
            {
                routeLink: 'c-produto',
                label: 'Produto'
            },
            {
                routeLink: 'products/level1.2',
                label: 'Estoque',
            }
        ]
    },
    {
        routeLink: 'Relatórios',
        icon: 'fal fa-chart-line',
        label: 'Relatórios',
        items: [
            {
                routeLink: 'coupens/list',
                label: 'Funcionário'
            },
            {
                routeLink: 'coupens/create',
                label: 'Produto'
            },
            {
                routeLink: 'coupens/create',
                label: 'Estoque'
            },
            {
                routeLink: 'coupens/create',
                label: 'Balanço'
            },
        ]
    },
    {
        routeLink: 'estoque',
        icon: 'fal fa-box-full',
        label: 'Estoque',
        items: [
            {
                routeLink: 'e-estoque',
                label: 'Entrada'
            },
            {
                routeLink: 'coupens/create',
                label: 'Teste'
            }
        ]
    },
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Configurações',
        expanded: true,
        items: [
            {
                routeLink: 'settings/profile',
                label: 'Perfil'
            },
            {
                routeLink: 'settings/customize',
                label: 'Plano'
            }
        ]
    },
];
