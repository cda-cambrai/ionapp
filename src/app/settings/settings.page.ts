import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  // Objet qui va stocker toutes les informations
  settings = {
    username: '',
    city: '',
    darkMode: false,
  };

  constructor(private storage: Storage) { }

  // Quand on arrive sur la page settings, on va récupèrer les données
  // du téléphone
  ngOnInit() {
    this.storage.get('settings').then(settings => this.settings = settings);
  }

  // Active ou non le dark mode sur l'application
  toggleDarkMode() {
    console.log('dark mode');
    // On ajoute ou on supprime la classe dark de body
    document.body.classList.toggle('dark');
  }

  // Enregistrer les données du formulaire dans le téléphone
  save() {
    // On va utiliser le service storage pour stocker les settings sur
    // le téléphone
    console.log(this.settings);
    this.storage.set('settings', this.settings);
  }

}
