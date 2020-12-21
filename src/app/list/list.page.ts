import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  users = [];

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

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

  // Permet d'ouvrir la page utilisateur
  openUser(user) {
    // console.log(user);

    // J'ouvre une nouvelle fenêtre sur la route user-detail
    // En 2ème paramètre, on passe le user dont on veut voir les informations
    this.router.navigate(['/user-detail'], {state: { keyUser: user }});
  }

}
