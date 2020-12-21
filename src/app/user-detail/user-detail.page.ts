import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {
  user: any = {}; // On initialise le user en tant qu'objet vide

  constructor(private router: Router) { }

  ngOnInit() {
    // On récupère le user que le list.page.ts nous a "passé" dans son state...
    this.user = this.router.getCurrentNavigation().extras.state.keyUser;
    console.log(this.user);
  }

}
