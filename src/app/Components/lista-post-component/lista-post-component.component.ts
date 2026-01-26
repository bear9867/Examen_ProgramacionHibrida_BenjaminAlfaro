import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonList,IonItem,IonLabel,IonImg,IonButton,IonModal,IonHeader,IonToolbar,IonTitle,IonContent,IonIcon} from '@ionic/angular/standalone';
import { Observable } from 'rxjs';
import { PostService } from 'src/app/Services/post-service';
import { Post } from 'src/app/Modelo/Post';

@Component({
  selector: 'app-lista-post-component',
  templateUrl: './lista-post-component.component.html',
  styleUrls: ['./lista-post-component.component.scss'],
  standalone: true,
  imports: [CommonModule,IonList,IonItem,IonLabel,IonImg,IonButton,IonModal,IonHeader,IonToolbar,IonTitle,IonContent,IonIcon],
})
export class ListaPostComponentComponent implements OnInit {

  posts$!: Observable<Post[]>;
  modalAbierto = false;
  postSeleccionado: Post | null = null;

  constructor(private postService: PostService) {}
  async ngOnInit() {
    this.posts$ = this.postService.posts$;
    await this.postService.cargarPosts();
  }

  abrirModal(post: Post ) {
    this.postSeleccionado = post;
    this.modalAbierto = true;
  }

  cancelar() {
    this.modalAbierto = false;
  }

  async confirmarEliminar() {
    if (this.postSeleccionado?.id) {
      await this.postService.eliminarPost(this.postSeleccionado.id);
    }
    this.modalAbierto = false;
  }
}
