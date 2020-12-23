# Projet Ionic

## Démarrage

Instructions pour récupèrer le projet (la première fois) :

```
git clone https://github.com/cda-cambrai/ionapp
cd ionapp
npm install
ionic serve --lab
```

Pour les autres fois :

```
git pull
```

Pour la compilation :

- On compile le code Angular/Ionic :

```
ionic build --prod
```

- On envoie code dans l'application Android :

```
npx cap sync
```

- On ouvre Android Studio pour compiler l'application Android :

```
npx cap open android
```

## Soucis avec Cordova

Attention, avec Cordova, il faut remplacer la ligne :

```android.support.v4.content.FileProvider``` par ```androidx.core.content.FileProvider```

Idéalement, on pourrait tester le plugin cordova https://github.com/apache/cordova-plugin-camera/pull/688

On pourrait également utiliser Capacitor https://capacitorjs.com/docs/apis/camera

## Exercice WE 18/12

On va créer une page afin de présenter une liste d'utilisateur :

- Créer une page list
- Ajouter une tab list dans les tabs
- Dans cette page, on affichera une liste avec ion-list
- Cette liste pourra d'abord être statique (HTML)
- Optionellement, la liste pourra être définie dans un tableau et affichée grâce à un *ngFor
