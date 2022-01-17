import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { RouterModule, Routes } from '@angular/router';


//create an array Routes to hold the routing. Path = name of routing displayed in url ,component = which component
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UserComponent, children: [//by adding id and name that are dynamic parts you can retrive it in the component users in this case
    { path: ':id/:name', component: UserComponent } 
  ] },
  { path: 'servers', component: ServersComponent, children: [ // adding chidlren: [] you nest all url using servers 
    { path: ':id', component: ServerComponent },
    { path: ':id/edit', component: EditServerComponent }
  ] }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) // add router module to use routing and pass argument in()
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
