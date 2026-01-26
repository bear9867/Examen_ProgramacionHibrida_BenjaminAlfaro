import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { NuevoPostComponentComponent } from "src/app/Components/nuevo-post-component/nuevo-post-component.component";

@Component({
  selector: 'app-nuevo-post',
  templateUrl: './nuevo-post.page.html',
  styleUrls: ['./nuevo-post.page.scss'],
  standalone: true,
  imports: [IonButtons, IonIcon, IonButton, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, NuevoPostComponentComponent]
})
export class NuevoPostPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
