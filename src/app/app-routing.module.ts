import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './pages/user/user-list/user-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/user' },
  { path: '/user', pathMatch: 'full', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
