export class Appareil {

  id: number;
  appareilName: string;
  appareilStatus: boolean;
  date: Date;

  constructor( id: number,  appareilName: string, appareilStatus: boolean) {
    this.id = id;
    this.appareilName = appareilName;
    this.appareilStatus = appareilStatus;
    this.date = new Date();
  }
}
