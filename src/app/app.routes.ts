import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'loans',
        loadChildren: () => loadRemoteModule('remoteApp1','./Routes').then(m => m.routes)
    },
    {
        path: 'insurance',
        loadChildren: () => loadRemoteModule('remoteApp2','./Routes').then(m => m.routes)
    }
];
