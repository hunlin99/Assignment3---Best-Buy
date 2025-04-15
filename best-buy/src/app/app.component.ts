import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterModule } from '@angular/router'; // import RouterModule here

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule], // add RouterModule to imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {}

  onCategorySelect(event: Event) {
    const selectElement = event.target as HTMLSelectElement; // cast to HTMLSelectElement
    const category = selectElement.value; // now TypeScript knows 'value' exists
    if (category) {
      this.router.navigate(['/category', category]);
    }
  }  
}
