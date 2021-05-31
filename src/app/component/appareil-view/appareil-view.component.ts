import {Component, OnDestroy, OnInit} from '@angular/core';
import {Appareil} from "../../model/appareil";
import {AppareilService} from "../../services/appareil.service";

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  appareils: Appareil[]= [];
  appareilsSubscription: any;

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
    this.appareilsSubscription= this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onSwitchOnAll() {
    this.appareilService.switchOnAll();
  }

  onSwitchOffAll() {
    this.appareilService.switchOffAll();
  }

  ngOnDestroy() {
    this.appareilsSubscription.unsubscribe();
  }

}
