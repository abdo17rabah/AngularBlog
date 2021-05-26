import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() postTitle: string | undefined;
  @Input() postContent: string | undefined;
  @Input() postCreatedAt: string | undefined;
  @Input() postLoveIts: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onLike() {
    this.postLoveIts++;
  }

  onDislike() {
    this.postLoveIts--;
  }

}
