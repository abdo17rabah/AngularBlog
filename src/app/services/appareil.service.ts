import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  appareils = [
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

  constructor() { }

  switchOnAll() {
    this.appareils.map(a => a.appareilStatus = true)
  }

  switchOffAll() {
    if(confirm("Voulez vous tout éteindre?")){
      this.appareils.map(a => a.appareilStatus = false)
    }
  }

}
