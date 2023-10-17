import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { UpdateUsersComponent } from './screens/update-users/update-users.component';
import { UsersComponent } from './screens/users/users.component';
import { UserProfileComponent } from './screens/user-profile/user-profile.component';
import { HomescreenComponent } from './screens/homescreen/homescreen.component';
import { ChangePasswordComponent } from './screens/change-password/change-password.component';
import { NewUserComponent } from './screens/new-user/new-user.component';


const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'kullanicilar',
        component: UsersComponent
      },
      {
        path: 'update/:id',
        component: UpdateUsersComponent
      },
      {
        path: 'home',
        component: HomescreenComponent
      },
      {
        path: 'profile',
        component: UserProfileComponent
      },
      {
        path: 'changepassword',
        component: ChangePasswordComponent

      },
      {
        path: 'newuser',
        component: NewUserComponent
      }

    
    ]}
     
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
