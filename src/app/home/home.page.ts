import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton, IonButtons, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { ListaPostComponentComponent } from "../Components/lista-post-component/lista-post-component.component";
import { RouterLink } from '@angular/router';
import { BD } from '../Services/bd';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonFabButton, IonFab, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, ListaPostComponentComponent,RouterLink],
})
export class HomePage {
  constructor() {}
  async ngOnInit() {
  }
}
