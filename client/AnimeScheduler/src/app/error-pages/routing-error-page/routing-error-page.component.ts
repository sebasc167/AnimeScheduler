import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routing-error-page',
  templateUrl: './routing-error-page.component.html',
  styleUrls: ['./routing-error-page.component.css']
})
export class RoutingErrorPageComponent {
  constructor(private route: ActivatedRoute,
              private router: Router){

  }
  backToHome() : void{
    this.router.navigate(['']);
  }
}
