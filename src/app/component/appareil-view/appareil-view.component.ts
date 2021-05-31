import { Component, OnInit } from '@angular/core';
import {Appareil} from "../../model/appareil";
import {AppareilService} from "../../services/appareil.service";

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {

  appareils: Appareil[]= [];

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;
  }

  onSwitchOnAll() {
    this.appareilService.switchOnAll();
  }

  onSwitchOffAll() {
    this.appareilService.switchOffAll();
  }

}
