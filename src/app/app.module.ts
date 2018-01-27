import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './routes';
import { AppComponent } from './app.component';
import { RoutingModule } from 'app/routing.module';
import { TasksModule } from 'app/tasks/tasks.module';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [AppComponent, HomeComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RoutingModule,
        RouterModule.forRoot(ROUTES),
        TasksModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
