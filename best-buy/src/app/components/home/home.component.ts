import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class CLHomeComponent {
  constructor(private router: Router) {}

  navigateToCategory(category: string) {
    this.router.navigate(['/category', category]);
  }
}
