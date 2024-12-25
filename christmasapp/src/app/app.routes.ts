import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent},
    { path: '', component: HomeComponent },
    { path: "page2", component: Page2Component},
    { path: "page3", component: Page3Component},
    { path: "page4", component: Page4Component},
    { path: "page5", component: Page5Component},

];
