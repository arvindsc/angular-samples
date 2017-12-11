import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewsComponent } from './news.component';
import { HNResolver } from './hn.resolver';
import { HNService } from './hn.service';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: AppComponent
}, {
  path: 'news',
  component: NewsComponent,
  resolve: { news: HNResolver }
}];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes), HttpClientModule],
  declarations: [AppComponent, NewsComponent],
  bootstrap: [AppComponent],
  providers: [HNResolver, HNService]
})
export class AppModule { }
