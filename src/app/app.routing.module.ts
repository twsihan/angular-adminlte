import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './views/index/index.component';
import { UserListComponent } from './views/user/user-list/user-list.component';
import { UserViewComponent } from './views/user/user-view/user-view.component';
import { WechatComponent } from './views/wechat/wechat.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: 'user',
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: UserListComponent
      },
      {
        path: 'view?id=:id',
        component: UserViewComponent
      }
    ]
  },
  {
    path: 'wechat',
    component: WechatComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
