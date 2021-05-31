import { Injectable } from '@angular/core';
import {Appareil} from "../model/appareil";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  private appareils = [
    {
      id: 1,
      appareilName: 'Appareil 1',
      appareilStatus: false,
      date: new Date(),
    },
    {
      id: 2,
      appareilName: 'Appareil 2',
      appareilStatus: true,
      date: new Date(),
    },
    {
      id: 3,
      appareilName: 'Appareil 3',
      appareilStatus: true,
      date: new Date(),

    },
    {
      id: 4,
      appareilName: 'Appareil 4',
      appareilStatus: false,
      date: new Date(),
    },
  ];

  appareilsSubject = new Subject<any []>();

  constructor() { }

  switchOnAll() {
    this.appareils.map(a => a.appareilStatus = true);
    this.emitAppareilSubject();
  }

  switchOffAll() {
    if(confirm("Voulez vous tout éteindre?")){
      this.appareils.map(a => a.appareilStatus = false);
      this.emitAppareilSubject();
    }
  }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s: Appareil) => {
        return s.id === id;
      }
    );
    return appareil;
  }

  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }
}
