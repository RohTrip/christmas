import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Page2Component } from '../page2/page2.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Page2Component,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToAnotherPage() {
    this.router.navigate(['/page2']);
  }
}