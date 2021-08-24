import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { Posts } from '../posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
// implements OnInit
export class PostsComponent implements OnInit {
  // readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  // posts: Observable<any[]>;

  // constructor(private http: HttpClient) {}
  posts: any[];

  ngOnInit(): void {
    interface getPostsResponse {
      userId: number;
      id: number;
      title: string;
      body: string;
    }

    this.http
      .get<getPostsResponse>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => {
        console.log(data);
        //  data;
      });
  }

  // getPosts() {
  //   this.posts = this.http.get<Posts[]>(this.ROOT_URL + '/posts');
  // }

  constructor(private http: HttpClient) {}
}
