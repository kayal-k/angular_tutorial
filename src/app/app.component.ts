import { Component, OnInit } from '@angular/core';
import { MasterService } from './master.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html', // External HTML file
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'My Angular App';
  posts: any[] = [];
  errorMessage: string = '';

  constructor(private masterService: MasterService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.masterService.getPosts().subscribe(
      (data) => {
        this.posts = data;
        this.errorMessage = ''; // Clear any previous errors
      },
      (error) => {
        console.error('Error:', error);
        this.errorMessage = 'Failed to load posts. Please try again later.';
      }
    );
  }
}


