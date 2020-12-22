import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  images = [];

  constructor(
    private camera: Camera,
    private alert: AlertController
  ) {}

  // Faire appel au service camera pour utiliser l'appareil photo
  // du téléphone
  takePicture() {
    // On dit que l'on veut l'image au format base64 au lieu d'un fichier
    let options = {
      destinationType: this.camera.DestinationType.DATA_URL
    };

    this.camera.getPicture(options).then(image => {
      // On récupère la photo dans image
      this.images.push('data:image/png;base64,'+image);

      // On va créer une alerte pour débuguer l'image
      this.alert.create({
        message: 'Salut '+image
      }).then(alert => alert.present()); // .present() affiche l'alerte
    });
  }

}
