import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AppareilService} from "../../services/appareil.service";
import {Appareil} from "../../model/appareil";

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.css']
})
export class SingleAppareilComponent implements OnInit {

  name: string = '';
  status: boolean = false;

  constructor(private router: Router, private appareilService: AppareilService,
  private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.name = this.appareilService.getAppareilById(+id)?.appareilName ?? '';
    this.status = this.appareilService.getAppareilById(+id)?.appareilStatus ?? false;
  }

  goBack() {
    this.router.navigate(['devices']);
  }


}
