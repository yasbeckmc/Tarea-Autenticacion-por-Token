import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private auth : AuthService,
              private router : Router){} 
  salir(){
    this.auth.logout();
    this.router.navigateByUrl('/login');
      
  }
            
      
            
}
