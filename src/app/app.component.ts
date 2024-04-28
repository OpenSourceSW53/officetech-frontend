import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "../public/header/header.component";
import {ForumComponent} from "./officetech/views/forum/forum.component";
;
import {CommentComponent} from "./officetech/components/comment/comment.component";
import {ResponsesComponent} from "./officetech/components/responses/responses.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ForumComponent, CommentComponent, ResponsesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'officetech-frontend';
}
