import { Injectable } from '@angular/core';
import { promise } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class FakePromiseService {
  
  public status : boolean = false

  public messageSimple : string = ""
  public messageSimple2 : string = ""
  public messageAll : string = ""
  public messageAllSettled : string = ""
  public messageRace : string = ""
  public messageAny : string = ""


  constructor() { }

  simple()
  {

  }

  simple2()
  {
    const promise1 = new Promise((resolve, reject) => {
      setTimeout(() => {

        resolve('Yeah je suis resolved !');
      }, 1500);

      setTimeout(() => {
        reject('Yeah je suis reject... !');
      }, 4000)
    });
    
    promise1.then((value : string) => {
      this.messageSimple2 = value
    });

    promise1.catch((error : string) => {
      this.messageSimple2 = error
    })
    
  }


  all()
  {

  }

  allSettled()
  {

  }

  race()
  {

  }

  any()
  {

  }
}
