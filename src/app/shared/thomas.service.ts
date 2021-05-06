import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThomasService {

  public state : boolean = false

  stateSubject = new Subject<boolean>()

  emitState()
  {
    this.stateSubject.next(this.state)
  }

  constructor() { }

  login()
  {
    this.state = true
    this.emitState()
  }


}
