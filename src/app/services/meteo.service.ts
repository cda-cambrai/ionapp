import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http: HttpClient) { }

  // On fait une requête sur l'API qui nous donne la météo d'une ville
  getMeteo(city) {
    return this.http.get('https://prevision-meteo.ch/services/json/'+city).toPromise();
  }
}
