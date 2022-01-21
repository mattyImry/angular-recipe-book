import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { AuthGuard } from "./auth-guard.service"
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolver } from "./servers/server/server-resolver.service";

//create an array Routes to hold the routing. Path = name of routing displayed in url ,component = which component
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UserComponent, children: [//by adding id and name that are dynamic parts you can retrive it in the component users in this case
        { path: ':id/:name', component: UserComponent } 
    ] },

    { path: 'servers', 
    
    //canActivate: [AuthGuard], // by using canActivate: [AuthGuard] yuo will be guarding the access with your code in this url and its child
    canActivateChild:[AuthGuard], // this will allow you to activate the guard on a child route
    component: ServersComponent,
    children: [                                    // adding chidlren: [] you nest all url using servers 
        { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
        { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] } // redirecting with can deactivate
    ] },
    //{ path: 'not-found', component: PageNotFoundComponent },
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
    { path: '**', redirectTo: '/not-found' } //by using the ** wild card for route will catch all the url not known in the app has to be the last one in the list of routes
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}