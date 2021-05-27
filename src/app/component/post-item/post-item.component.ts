import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() content: string | undefined;
  @Input() createdAt!: Date;
  @Input() loveIts: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onLike() {
    this.loveIts++;
  }

  onDislike() {
    this.loveIts--;
  }

}
