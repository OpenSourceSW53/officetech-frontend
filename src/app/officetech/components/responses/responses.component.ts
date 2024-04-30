import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardModule} from "@angular/material/card";
import {NgForOf, NgIf} from "@angular/common";
import {ForumService} from "../../services/forum/forum.service";
import {Router} from "@angular/router";
import ForumCommentEntity from "../../models/forum-comment.entity";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-responses',
  standalone: true,
  imports: [
    MatCardModule,
    MatCardContent,
    MatCardHeader,
    NgForOf,
    NgIf
  ],
  templateUrl: './responses.component.html',
  styleUrl: './responses.component.css'
})

export class ResponsesComponent implements OnInit{
  post: ForumCommentEntity | undefined;

  constructor(
    private forumService: ForumService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(async params => {
      const postId = +params['id'];  // Asegúrate de que 'id' sea el nombre correcto del parámetro.
      if (!isNaN(postId)) {
        await this.loadPost(postId);
      }
    });
  }


  private loadPost(postId: number) {
    try {
      this.forumService.getForumPosts().subscribe(
        (result) => {
          this.post = result.find((p:any) => p.id === postId);
        }
      )
    } catch (error) {
      console.error('Error al cargar la publicación:', error);
    }
  }
}
