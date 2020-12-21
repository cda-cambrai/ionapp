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
  skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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
    this.users = []; // On remet à 0 la liste à chaque fois qu'on vient sur la page

    this.userService.getUsers().then(users => {
      console.log('test');
      // Le setTimeout va nous permettre de tester le skeleton
      setTimeout(() => this.users = users['results'], 2000);
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
