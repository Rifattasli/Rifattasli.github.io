import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { UsersComponent } from './screens/users/users.component';
import { UserProfileComponent } from './screens/user-profile/user-profile.component';
import { UpdateUsersComponent } from './screens/update-users/update-users.component';
import { HomescreenComponent } from './screens/homescreen/homescreen.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChangePasswordComponent } from './screens/change-password/change-password.component';
import { NewUserComponent } from './screens/new-user/new-user.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
const materialModules = [
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
];





@NgModule({
  declarations: [
    LayoutComponent,
    UsersComponent,
    UserProfileComponent,
    UpdateUsersComponent,
    HomescreenComponent,
    ChangePasswordComponent,
    NewUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    materialModules,

  ],
  exports: [
    materialModules
  ],
})
export class LayoutModule { }
