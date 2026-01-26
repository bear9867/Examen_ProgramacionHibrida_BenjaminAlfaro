import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Post } from '../Modelo/Post';

@Injectable({
  providedIn: 'root'
})
export class BD {

  private readonly KEY = 'posts';

  async obtenerPost(): Promise<Post[]> {
    const { value } = await Preferences.get({ key: this.KEY });
    return value ? JSON.parse(value) : [];
  }

  async guardarPost(post: Post): Promise<void> {
    const posts = await this.obtenerPost();
    posts.push(post);

    await Preferences.set({
      key: this.KEY,
      value: JSON.stringify(posts)
    });
  }

  async eliminarPost(id: number): Promise<void> {
    const posts = await this.obtenerPost();
    const filtrados = posts.filter(p => p.id !== id);

    await Preferences.set({
      key: this.KEY,
      value: JSON.stringify(filtrados)
    });
  }
}
