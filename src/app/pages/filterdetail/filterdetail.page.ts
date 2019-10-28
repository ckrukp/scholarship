import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-filterdetail',
  templateUrl: './filterdetail.page.html',
  styleUrls: ['./filterdetail.page.scss'],
})
export class FilterdetailPage implements OnInit {

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

  displayScholar() {
    this.navCtrl.navigateForward('/main/main/scholar');
  }
  
}
