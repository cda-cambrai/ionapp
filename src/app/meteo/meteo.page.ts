import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MeteoService } from '../services/meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage implements OnInit {
  settings: any = {};
  meteo: any = {}; // Objet où on va stocker la météo de la ville choisie

  constructor(
    private storage: Storage,
    private meteoService: MeteoService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    // On récupère les settings définis auparavant dans le téléphone
    this.storage.get('settings').then(settings => {
      if (settings === null || !settings.city) {
        // Ville par défaut si jamais il n'a pas fait ses réglages
        this.settings.city = 'Hulluch';
      } else {
        // Si on a bien des settings dans le phone, on les récupère
        this.settings = settings;
      }

      // Ok, on a la ville, on peut aller chercher sa météo...
      this.meteoService.getMeteo(this.settings.city).then(meteo => {
        console.log(meteo);
        this.meteo = meteo;
      });
    });
  }

}
