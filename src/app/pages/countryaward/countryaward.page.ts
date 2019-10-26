import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-countryaward',
  templateUrl: './countryaward.page.html',
  styleUrls: ['./countryaward.page.scss'],
})
export class CountryawardPage implements OnInit {

  countryAwardList = [
    {
      name:'USA',
      award:true
    },
    {
      name:'UK',
      award:false
    },
    {
      name:'Germany',
      award:false
    },
    {
      name:'Canada',
      award:false
    },
    {
      name:'Japan',
      award:true
    },
    {
      name:'China',
      award:true
    },
    {
      name:'France',
      award:false
    },
    {
      name:'Brazil',
      award:false
    },
    {
      name:'Australia',
      award:false
    }
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  displayPrevious(){
    this.navCtrl.back();
  }

}
