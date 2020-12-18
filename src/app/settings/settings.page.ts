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
  // Booléen pour savoir si on affiche une icône de chargement
  saving = false;
  // Booléen pour savoir si on doit afficher un message
  success = false;

  constructor(private storage: Storage) { }

  // Quand on arrive sur la page settings, on va récupèrer les données
  // du téléphone
  ngOnInit() {
    this.storage.get('settings').then(settings => {
      // On vérifie bien qu'il y a des settings dans le storage
      if (settings !== null) {
        this.settings = settings;
      }
    });
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
    this.saving = true; // Chargement en cours...
    this.storage.set('settings', this.settings).then(() => {
      setTimeout(() => this.saving = false, 2000); // Chargement terminé, promesse tenue
      setTimeout(() => this.success = true, 2000);
      setTimeout(() => this.success = false, 10000); // On cache le texte au bout de 10 secondes
    });
  }

  // Suppression des données sur le téléphone
  removeData() {
    this.storage.remove('settings');
    // On doit faire un reset de l'objet settings
    this.settings = {
      username: '',
      city: '',
      darkMode: false,
    };
  }

}
