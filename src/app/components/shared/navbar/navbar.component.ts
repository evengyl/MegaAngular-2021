import { Component, OnInit } from '@angular/core';
import { ThomasService } from 'src/app/shared/thomas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  public status : boolean
  constructor(public thom : ThomasService) { }

  ngOnInit(): void {
    this.thom.stateSubject.subscribe(
      (status) => { this.status = status }
    )
  }

}
