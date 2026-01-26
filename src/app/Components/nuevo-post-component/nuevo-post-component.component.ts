import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {IonInput,IonItem,IonLabel,IonButton,IonTextarea,IonImg} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { PostService } from 'src/app/Services/post-service';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-nuevo-post-component',
  templateUrl: './nuevo-post-component.component.html',
  styleUrls: ['./nuevo-post-component.component.scss'],
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,IonInput,IonItem,IonLabel,IonButton,IonTextarea,IonImg]
})
export class NuevoPostComponentComponent implements OnInit {

  formulario!: FormGroup;
  imagen: string | null = null;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private router: Router
  ) {}

  ngOnInit() {
    this.formulario = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      descripcion: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64
    });

    this.imagen = image.base64String
      ? `data:image/jpeg;base64,${image.base64String}`
      : null;
  }

  async guardarPost() {
    this.formulario.markAllAsTouched();

    if (this.formulario.invalid) {
      return;
    }

    const { titulo, descripcion } = this.formulario.value;
    if (this.imagen === null) {
      this.imagen = '';
    }
    await this.postService.agregarPost(
      titulo,
      this.imagen, 
      descripcion
    );

    this.router.navigate(['/home']);
  }

  get titulo() {
    return this.formulario.get('titulo');
  }

  get descripcion() {
    return this.formulario.get('descripcion');
  }
}
