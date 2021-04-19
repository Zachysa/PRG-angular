import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewJobPageComponent } from './pages/new-job-page/new-job-page.component';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { ComputersPageComponent } from './pages/computers-page/computers-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import {PcService} from './service/pc-service';
import {HttpClientModule} from '@angular/common/http';
import { PcTableComponent } from './component/pc-table/pc-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PcEditPageComponent } from './pages/computers-page/pc-edit-page/pc-edit-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PcNewPageComponent } from './pages/computers-page/pc-new-page/pc-new-page.component';
import { PcFormComponent } from './component/pc-form/pc-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {AuthService} from './service/auth-service';
import { NewConfigComponent } from './component/new-config/new-config.component';
import { UserTableComponent } from './component/user-table/user-table.component';
import {UserService} from './service/User-service';
import { ConfigTableComponent } from './component/config-table/config-table.component';
import {TimeService} from './service/time-service';
import {StorageService} from './service/storage-service';
import { TimeFormComponent } from './component/time-form/time-form.component';
import { TimePageComponent } from './pages/new-job-page/time-page/time-page.component';
import { StoragePageComponent } from './pages/new-job-page/storage-page/storage-page.component';
import { StorageFormComponent } from './component/storage-form/storage-form.component';
import {JobEditComponent} from './pages/jobs-page/job-edit/job-edit.component';
import { TimeEditComponent } from './pages/jobs-page/time-edit/time-edit.component';
import { StorageEditComponent } from './pages/jobs-page/storage-edit/storage-edit.component';
import { SmallPcTableComponent } from './component/pc-table/small-pc-table/small-pc-table.component';
import { ConfigSmallTableComponent } from './component/config-table/config-small-table/config-small-table.component';






@NgModule({
  declarations: [
    AppComponent,
    NewJobPageComponent,
    JobsPageComponent,
    ComputersPageComponent,
    DashboardPageComponent,
    PcTableComponent,
    PcEditPageComponent,
    PcNewPageComponent,
    PcFormComponent,
    LoginPageComponent,
    NewConfigComponent,
    UserTableComponent,
    ConfigTableComponent,
    TimeFormComponent,
    TimePageComponent,
    StoragePageComponent,
    StorageFormComponent,
    JobEditComponent,
    TimeEditComponent,
    StorageEditComponent,
    SmallPcTableComponent,
    ConfigSmallTableComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    PcService,
    AuthService,
    UserService,
    TimeService,
    StorageService,


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
