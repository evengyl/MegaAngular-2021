import { Component, OnInit } from '@angular/core';
import { ThomasService } from 'src/app/shared/thomas.service';
import { FakePromiseService } from './services/fake-promise.service';

@Component({
  selector: 'app-demo12',
  templateUrl: './demo12.component.html'
})
export class Demo12Component implements OnInit {

  constructor(public fakePromise : FakePromiseService, public thom : ThomasService) {
  }

  ngOnInit(): void {
  }

  changeStatus()
  {
    this.fakePromise.status = !this.fakePromise.status
  }

  
  simple()
  {
    this.fakePromise.simple()
  }

  simple2()
  {
    this.fakePromise.simple2()
  }


  all()
  {
    this.fakePromise.all()
  }

  allSettled()
  {
    this.fakePromise.allSettled()
  }

  race()
  {
    this.fakePromise.race()
  }

  any()
  {
    this.fakePromise.any()
  }



  login()
  {
    this.thom.login()
  }
}
