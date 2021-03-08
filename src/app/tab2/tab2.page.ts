import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers:[DataService,RestApiService]
})
export class Tab2Page {
  
  searchTerm = '';
  isCollapsed = true;

  constructor(private data: DataService,private router :Router) {
    
    this.data.cartItems = this.data.getCart().length;
    this.data.getProfile();
  }

  get token() {
    return localStorage.getItem('token');
  }

  logout() {
    this.data.user = {};
    this.data.cartItems = 0;
    localStorage.clear();
    this.router.navigate(['']);
  }


}