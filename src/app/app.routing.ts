import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    }, {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'myads',
                loadChildren: './my-ads/my-ads.module#MyAdsModule'
            },
            {
                path: 'favads',
                loadChildren: './favoriated-ads/favoriated-ads.module#FavoriatedAdsModule'
            },
            {
                path: 'limitedoffers',
                loadChildren: './limited-offers/limited-offers.module#LimitedOffersModule'
            },
            {
                path: 'winners',
                loadChildren: './winners/winners.module#WinnersModule'
            },
            {
                path: 'clients',
                loadChildren: './fav-clients/fav-clients.module#FavClientsModule'
            },
            {
                path: 'newsletter',
                loadChildren: './newsletter/newsletter.module#NewsletterModule'
            },
            {
                path: 'settings',
                loadChildren: './settings/settings.module#SettingsModule'
            },
            {
                path: 'components',
                loadChildren: './components/components.module#ComponentsModule'
            }, {
                path: 'forms',
                loadChildren: './forms/forms.module#Forms'
            }, {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
            }, {
                path: 'maps',
                loadChildren: './maps/maps.module#MapsModule'
            }, {
                path: 'widgets',
                loadChildren: './widgets/widgets.module#WidgetsModule'
            }, {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule'
            }, {
                path: 'calendar',
                loadChildren: './calendar/calendar.module#CalendarModule'
            }, {
                path: '',
                loadChildren: './userpage/user.module#UserModule'
            }, {
                path: '',
                loadChildren: './timeline/timeline.module#TimelineModule'
            }
        ]
    }, {
        path: '',
        component: AuthLayoutComponent,
        children: [{
            path: 'pages',
            loadChildren: './pages/pages.module#PagesModule'
        }]
    }
];
