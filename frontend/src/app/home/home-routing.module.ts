import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePage } from '../pages/profile/profile.page';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }
];
//     children: [
//       {
//         path: 'schedule',
//         children: [
//           {
//             path: '',
//             loadChildren: () => import('../pages/schedule/schedule.module').then(m => m.SchedulePageModule)
//           }
//         ]
//       },
//       {
//         path: 'profile',
//         children: [
//           {
//             path: '',
//             loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
//           }
//         ]
//       },
//       {
//         path: '',
//         redirectTo: '/tabs/profile'
//       }
//     ]
//   }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
