import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {ComputersPageComponent} from './pages/computers-page/computers-page.component';
import {JobsPageComponent} from './pages/jobs-page/jobs-page.component';
import {NewJobPageComponent} from './pages/new-job-page/new-job-page.component';
import {PcEditPageComponent} from './pages/computers-page/pc-edit-page/pc-edit-page.component';
import {PcNewPageComponent} from './pages/computers-page/pc-new-page/pc-new-page.component';
import {AuthGuard} from './service/auth.guard';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {TimePageComponent} from './pages/new-job-page/time-page/time-page.component';
import {StoragePageComponent} from './pages/new-job-page/storage-page/storage-page.component';
import {JobEditComponent} from './pages/jobs-page/job-edit/job-edit.component';
import {TimeEditComponent} from './pages/jobs-page/time-edit/time-edit.component';
import {StorageEditComponent} from './pages/jobs-page/storage-edit/storage-edit.component';


const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]},
  {path: 'computers', component: ComputersPageComponent, canActivate: [AuthGuard]},
  {path: 'jobs', component: JobsPageComponent, canActivate: [AuthGuard]},
  {path: 'jobs/:id', component: JobEditComponent, canActivate: [AuthGuard]},
  {path: 'jobs/time/:id', component: TimeEditComponent, canActivate: [AuthGuard]},
  {path: 'jobs/storage/:id', component: StorageEditComponent, canActivate: [AuthGuard]},
  {path: 'new_job', component: NewJobPageComponent, canActivate: [AuthGuard]},
  {path: 'new_job/time', component: TimePageComponent, canActivate: [AuthGuard]},
  {path: 'new_job/storage', component: StoragePageComponent, canActivate: [AuthGuard]},
  {path: '', component: LoginPageComponent},
  {path: 'computers/new', component: PcNewPageComponent, canActivate: [AuthGuard]},
  {path: 'computers/:id', component: PcEditPageComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
