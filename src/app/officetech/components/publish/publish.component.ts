import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardModule, MatCardTitle} from "@angular/material/card";
import {CommonModule, DatePipe, NgForOf, NgIf} from "@angular/common";

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ForumService} from "../../services/forum/forum.service";
import {ActivatedRoute, Router} from "@angular/router";
import ForumCommentEntity from "../../models/forum-comment.entity";
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-publish',
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    CommonModule,
    DatePipe
  ],
  templateUrl: './publish.component.html',
  styleUrl: './publish.component.css'
})
export class PublishComponent implements OnInit {
  forum:any
  post: ForumCommentEntity | undefined;
  messageControl = new FormControl('',[Validators.required, Validators.maxLength(256)]);
  messages: any = [];
  userId: number = 0;
  postId: number = 0;
  private messageId = 0;
  constructor(
    private forumService: ForumService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      const postId = +params['idForum'];  // Asegúrate de que 'id' sea el nombre correcto del parámetro.
      const userId = +params['id'];
      this.postId = postId;
      this.userId = userId;
      if (!isNaN(postId)) {
        this.loadPost(postId,userId);
        this.loadAnswers(postId);
      }
    });
  }

  private loadAnswers(postId: number) {
    try {
      this.forumService.getAnswersByPostId(postId).subscribe(
        r=>{
          console.log(r);
          this.messages = r;
        }
      )
    }catch(e) {
      console.log("error", e);
    }
  }
  private loadPost(postId: number,userId:number) {
    try {
      this.forumService.getForumPostById(postId).subscribe(
        r=>{
          // here call the method to obtain users

          this.post = new ForumCommentEntity(r.id, "asdasd", "asd", r.title, r.description, []);
          /*
          this.forum = r.find((item: any) => item.id_user === userId);
          console.log('post', this.forum.forum_posts[0]);
          this.post= this.forum.forum_posts.find((post: any) => post.id === postId);
          */

        }
      )
    } catch (error) {
      console.error('Error al cargar la publicación:', error);
    }
  }




  publishMessage() {
    if (this.messageControl.value) {
      const newMessage = {
        idTechnician: this.userId,
        idPost: this.postId,
        description: this.messageControl.value,
      };
      this.forumService.saveNewAnswerByPostId(newMessage).subscribe(
        r => {
          console.log(r);
          this.loadAnswers(this.postId);
        }
      )
      this.messageControl.reset();
    }
  }
}
