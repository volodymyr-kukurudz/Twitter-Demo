import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { AuthGuard} from './services/auth-guard.service';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase';
firebase.initializeApp(environment.firebase);

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { StartPageComponent } from './start-page/start-page.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { MyWallComponent } from './my-wall/my-wall.component';
import { BriefUserInfoComponent } from './my-wall/brief-user-info/brief-user-info.component';
import { PostNewsFormComponent } from './my-wall/post-news-form/post-news-form.component';
import { WallComponent } from './my-wall/wall/wall.component';
import { PostComponent } from './my-wall/wall/post/post.component';
import { FollowInfoComponent } from './my-wall/follow-info/follow-info.component';
import { UsersListComponent } from './users-list/users-list.component';
import { SearchFieldComponent } from './users-list/search-field/search-field.component';
import { FoundListComponent } from './users-list/found-list/found-list.component';
import { SbElseWallComponent } from './sb-else-wall/sb-else-wall.component';
import { HeaderComponent } from './header/header.component';
import {AuthService} from './services/auth.service';
import {DisplayService} from './services/display.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterFormComponent},
  { path: 'me', component: MyWallComponent, canActivate: [AuthGuard]},
  { path: 'users', component: UsersListComponent, canActivate: [AuthGuard]},
  { path: 'user/userid', component: SbElseWallComponent, canActivateChild: [AuthGuard]}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    StartPageComponent,
    RegisterFormComponent,
    MyWallComponent,
    BriefUserInfoComponent,
    PostNewsFormComponent,
    WallComponent,
    PostComponent,
    FollowInfoComponent,
    UsersListComponent,
    SearchFieldComponent,
    FoundListComponent,
    SbElseWallComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule
  ],
  providers: [AuthGuard, AuthService, DisplayService],
  bootstrap: [AppComponent]

})
export class AppModule { }
