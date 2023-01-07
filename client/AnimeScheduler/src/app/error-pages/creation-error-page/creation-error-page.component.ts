import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-creation-error-page',
  templateUrl: './creation-error-page.component.html',
  styleUrls: ['./creation-error-page.component.css']
})
export class CreationErrorPageComponent {
  constructor(private route: ActivatedRoute,
    private router: Router){

  }
  backToHome() : void{
    this.router.navigate(['']);
  }
}
