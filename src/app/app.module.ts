import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { Demo5Component } from './components/demo/demo5/demo5.component';
import { Demo6Component } from './components/demo/demo6/demo6.component';
import { Demo7Component } from './components/demo/demo7/demo7.component';
import { Demo8Component } from './components/demo/demo8/demo8.component';
import { Demo9Component } from './components/demo/demo9/demo9.component';
import { Demo10Component } from './components/demo/demo10/demo10.component';
import { Demo11Component } from './components/demo/demo11/demo11.component';
import { Demo12Component } from './components/demo/demo12/demo12.component';
import { Demo13Component } from './components/demo/demo13/demo13.component';
import { Demo14Component } from './components/demo/demo14/demo14.component';
import { Demo15Component } from './components/demo/demo15/demo15.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomPipePipe } from './components/demo/demo6/custom-pipe.pipe';
import { Exos1AfterDemo7Component } from './exos/exos1-after-demo7/exos1-after-demo7.component';
import { HighlightDirective } from './components/demo/demo8/highlight.directive';
import { PrepareRenderDirective } from './components/demo/demo8/prepare-render.directive';
import { ChildrenInputComponent } from './components/demo/demo10/children-input/children-input.component';
import { CustomPipe2Pipe } from './components/demo/demo6/custom-pipe2.pipe';
import { ChildrenOutputComponent } from './components/demo/demo10/children-output/children-output.component';
import { FakeAuthService } from './components/demo/demo11/services/fake-auth.service';
import { FakePromiseService } from './components/demo/demo12/services/fake-promise.service';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    NavbarComponent,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    Demo5Component,
    Demo6Component,
    CustomPipePipe,
    Demo7Component,
    Demo8Component,
    Demo9Component,
    Demo10Component,
    Demo11Component,
    Demo12Component,
    Demo13Component,
    Demo14Component,
    Demo15Component,
    Exos1AfterDemo7Component,
    HighlightDirective,
    PrepareRenderDirective,
    CustomPipe2Pipe,
    ChildrenInputComponent,
    ChildrenOutputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //demo 2 two way binding (input)
    ReactiveFormsModule
  ],
  providers: [
    FakeAuthService,
    FakePromiseService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
