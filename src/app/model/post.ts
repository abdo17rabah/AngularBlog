export class Post {
  title: string;
  content: string;
  loveIts: number | 0;
  created_at: Date;

  constructor( title: string,  content: string, loveIts: number) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.created_at = new Date();
  }
}
