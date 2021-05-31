import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  title = 'Barca : Mes que Club';

  posts = [
    {
      title: 'Wijnaldum rumors',
      content: 'Both Barcelona and Bayern Munich are targeting Liverpool midfielder Georginio Wijnaldum who will leave Anfield as a free agent in June when his contract expires.Barcelona have not ruled out signing Wijnaldum after meeting with the midfielder’s agents last week. Ronald Koeman likes the Dutchman but Barca would rather sign a younger player.Ronald Koeman and Joan Laporta will meet on Tuesday to discuss the future of the Barcelona coach. The president wants to make a decision in the next seven days.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Koeman',
      content: 'The news that broke on Tuesday lunchtime appears to indicate that Ronald Koeman may still be pulling the managerial strings at Barcelona after all.Though it isn’t 100 percent confirmed at the time of writing, multiple reports suggest that Gini Wijnaldum has agreed a deal with the Catalans until 2024.That’s an awful lot of faith to show in someone if the manager isn’t supportive, and given that we know the former Liverpool star has long been courted by his countryman, we can deduce that, perhaps, Koeman will take the reins again next season.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Luis Suarez',
      content: 'Luis Suarez has taken aim at Barcelona and Ronald Koeman once again after helping Atletico Madrid win the league title in 2020-21. The Uruguay international has already made it clear how hurt he was by the way he left the Camp Nou in the summer and has spoken once again about about his exit. The move has worked out pretty well for Suarez who scored 21 goals to fire Atletico to title glory and finish ahead of both Real Madrid and Barcelona.',
      loveIts: 0,
      created_at: new Date()
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
