import {Component, OnInit} from '@angular/core';
import {CommentComponent} from "../../components/comment/comment.component";
import {ForumService} from "../../services/forum.service";
import ForumCommentEntity from "../../entities/forum-comment.entity";
import {NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {ResponsesComponent} from "../../components/responses/responses.component";

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

  constructor(private forumService: ForumService,private router: Router){

  }


  async ngOnInit() {
    await this.getForumPosts();
  }

  async getForumPosts() {
    const result = await this.forumService.getForumPosts();

    for(let e in result) {
      const post = new ForumCommentEntity(result[e].id,result[e].image, result[e].name, result[e].title, result[e].description, result[e].answers);
      console.log(result[e].answers)

      this.data.push(post);
    }
  }

  async receiveAnswers(answers: any[]) {
    this.answers = answers;
  }


  async   getResponses(id: number) {
    this.router.navigate(['/publish', id]);
  }
}
