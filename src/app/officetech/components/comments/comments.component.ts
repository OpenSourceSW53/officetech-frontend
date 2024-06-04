import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitleGroup,MatCardModule} from "@angular/material/card";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../shared/services/auth/auth.service";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";
import {RatingComponent, StarRatingColor} from "../rating/rating.component";

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitleGroup,
    MatCardContent,
    NgOptimizedImage,
    MatCardModule,
    MatIcon,
    MatIconButton,
    MatTooltip,
    NgForOf,
    RatingComponent
  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit{
  rating:number = 3;
  starCount:number = 5;
  starColor:StarRatingColor = StarRatingColor.accent;
  starColorP:StarRatingColor = StarRatingColor.primary;
  starColorW:StarRatingColor = StarRatingColor.warn;
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

  onRatingChanged(rating: number){
    console.log(rating);
    this.rating = rating;
  }

}

