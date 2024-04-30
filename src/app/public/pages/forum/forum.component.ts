import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";
import { CommentComponent } from '../../../officetech/components/comment/comment.component';
import { ResponsesComponent } from '../../../officetech/components/responses/responses.component';
import ForumCommentEntity from "../../../officetech/models/forum-comment.entity";
import {ForumService} from "../../../officetech/services/forum/forum.service";

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [
    CommentComponent,
    ResponsesComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.css'
})
export class ForumComponent implements OnInit {
  type_user: number = 1; // here will be the type of the user bringing by event input, 1: team, 0: technician
  data: any[] = [];
  answers: any[] = [];

  constructor(private forumService: ForumService, private router: Router){
  }

  ngOnInit() {
    this.getForumPosts();
  }

  getForumPosts() {
    this.forumService.getForumPosts().subscribe(
      result => {
        for(let e in result) {
          const post = new ForumCommentEntity(result[e].id,result[e].image, result[e].name, result[e].title, result[e].description, result[e].answers);
          console.log(result[e].answers)

          this.data.push(post);
        }
      },
      e => {
        console.log(e);
      }
    )
  }

  async receiveAnswers(answers: any[]) {
    this.answers = answers;
  }


  async getResponses(id: number) {
    this.router.navigate(['/publish', id]);
  }
}
