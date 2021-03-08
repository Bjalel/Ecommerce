import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [DataService,RestApiService]
})
export class Tab1Page implements OnInit {

  products: any;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(private data: DataService, private rest: RestApiService) {}

  async ngOnInit() {
    try {
      const data = await this.rest.get('http://localhost:3030/api/products');
      data['success']
        ? (this.products = data['products'])
        : this.data.error('Could not fetch products.');
    } catch (error) {
      this.data.error(error['message']);
    }
  }

}
