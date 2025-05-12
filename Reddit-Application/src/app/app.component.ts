import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormComponent, PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
  return false;
  }
}
//Per fare il simbolo ` premere ALT + 96 del tastierino numerico

