import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.page.html',
  styleUrls: ['./creator.page.scss'],
})
export class CreatorPage implements OnInit {
  creators = [
    { name: 'John Doe', job: 'Designer', avatar: 'john-doe.jpg' },
    { name: 'Matthieu Mota', job: 'Développeur', avatar: 'matthieu-mota.jpg' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
