import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SpyDirective } from './spy.directive';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { AfterViewComponent } from './after-view/after-view.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    SpyDirective,
    OnChangesComponent,
    AfterViewComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
