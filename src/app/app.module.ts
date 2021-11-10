import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { DetailComponent } from './pages/user/detail/detail.component';
import { ListComponent } from './pages/user/list/list.component';
import { EditComponent } from './pages/user/edit/edit.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, DetailComponent, ListComponent, EditComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
