import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexComponent } from './index/index.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserViewComponent } from './user/user-view/user-view.component';
import { WechatComponent } from './wechat/wechat.component';

@NgModule({
  declarations: [
    IndexComponent,
    UserListComponent,
    UserViewComponent,
    WechatComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ViewModule { }
