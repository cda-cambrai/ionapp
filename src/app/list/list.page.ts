import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  users = [];

  constructor(private userService: UserService) { }

  // Cette méthode s'exécute seulement au premier chargement du composant
  // dans l'application
  ngOnInit() {
    console.log('Une seule fois au chargement de la page...');
  }

  // Cette méthode s'exécute à chaque fois qu'on se rend sur la page
  ionViewWillEnter() {
    this.userService.getUsers().then(users => {
      console.log('test');
      this.users = users['results'];
    });
  }

}
