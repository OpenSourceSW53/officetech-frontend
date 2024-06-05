import { Injectable } from '@angular/core';
import ForumCommentEntity from "../../models/forum-comment.entity";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  baseUrl: string = ""
  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }
  getForumPosts() {
    return this.http.get<any>(`${this.baseUrl}/forum/posts`)
  }

  getForumPostById(id: number) {
    return this.http.get<any>(`${this.baseUrl}/forum/posts/${id}`)
  }

  createForumPost(id: number, post: any) {
    return this.http.post<any>(`${this.baseUrl}/forum/new-post`, post)
  }

  saveForumPost(post: any) {
    return this.http.post<any>(`${this.baseUrl}/forum/new-post`, post)
  }

  saveNewAnswerByPostId(newAnswer: any) {
    return this.http.post<any>(`${this.baseUrl}/answers`, newAnswer)
  }

  getAnswersByPostId(idPost: number) {
    return this.http.get<any>(`${this.baseUrl}/answers/post/${idPost}`)
  }
}
