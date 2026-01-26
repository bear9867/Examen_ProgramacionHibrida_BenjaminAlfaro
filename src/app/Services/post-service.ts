import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from 'src/app/Modelo/Post';
import { BD } from 'src/app/Services/bd'; // tu BD (Preferences)

@Injectable({ providedIn: 'root' })
export class PostService {
  private postsSubject = new BehaviorSubject<Post[]>([]);
  posts$ = this.postsSubject.asObservable();

  constructor(private bd: BD) {}

  async cargarPosts(): Promise<void> {
    const posts = await this.bd.obtenerPost();
    this.postsSubject.next(posts);
    
  }
  async agregarPost(titulo: string, imagen: string, descripcion: string): Promise<void> {
    const nuevo: Post = {
      id: Date.now(),       
      Titulo: titulo,
      Imagen: imagen || '',
      Descripcion: descripcion,
      Fecha: new Date() as any 
    };
    await this.bd.guardarPost(nuevo);
    this.postsSubject.next([...this.postsSubject.value, nuevo]);
  }

  async eliminarPost(id: number): Promise<void> {
    await this.bd.eliminarPost(id);
    this.postsSubject.next(this.postsSubject.value.filter(p => p.id !== id));
  }
}
