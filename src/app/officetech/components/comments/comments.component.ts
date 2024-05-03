import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitleGroup,MatCardModule} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../shared/services/auth/auth.service";

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitleGroup,
    MatCardContent,
    NgOptimizedImage,
    MatCardModule
  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit{
  type_user: string = "";
  id_user: string = "";
  constructor(private router: Router, private authService: AuthService, private route: ActivatedRoute){}

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.type_user = p['type_user'];
      this.id_user = p['id'];
    })
  }

  addComment() {
    this.router.navigate([`/services/${this.type_user}/${this.id_user}`])
  }
}
