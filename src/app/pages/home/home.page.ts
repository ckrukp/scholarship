import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  country_name_arr = ['USA', 'UK', 'Australia', 'Canada', 'China', 'Germany', 'Japan', 'France', 'Netherlands', 'Belgium', 'Brazil', 'Pakistan'];
  // country_arr: Array<{name: string, img: string}> = [];
  country_img_arr = [];
  constructor() { }

  ngOnInit() {
    // for(let i = 0; i < 12; i++) {
    //   this.country_arr.push(
    //     {
    //       name : this.country_name_arr[i],
    //       img : '../../../assets/img/flags/' + this.country_name_arr[i].toLowerCase() + '.png'
    //     }
    //   );
    // }

    for(let i = 0; i < this.country_name_arr.length; i++){
      this.country_img_arr[i] = '../../../assets/img/flags/' + this.country_name_arr[i].toLowerCase() + '.png';
    }
  }

}

  
