import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-scholar',
  templateUrl: './scholar.page.html',
  styleUrls: ['./scholar.page.scss'],
})
export class ScholarPage implements OnInit {

  scholardata = [
    {
      id: 1,
      title:'NUS Department of Economic PhD scholarships in Singapore, 2020',
      imgPath:'../../../assets/img/scholars/scholar_0.png',
      date:'November 5, 2019',
      fund:'Fully Funded',
      school: 'National University of Singapore',
      degree: 'PhD',
      branch: 'Economics',
      range: 'International Students',
      country: 'Singapore',
      like: 'active'
    },
    {
      id: 2,
      title:'NUS Department of Economic PhD scholarships in Singapore, 2021',
      imgPath:'../../../assets/img/scholars/scholar_2.png',
      date:'November 5, 2015',
      fund:'Fully Funded',
      school: 'National University of Singapore',
      degree: 'PhD',
      branch: 'Economics',
      range: 'International Students',
      country: 'Singapore',
      like: 'inactive'
    },
    {
      id: 3, 
      title:'NUS Department of Economic PhD scholarships in Singapore, 2010',
      imgPath:'../../../assets/img/scholars/scholar_3.png',
      date:'November 5, 2016',
      fund:'Fully Funded',
      school: 'National University of Singapore',
      degree: 'PhD',
      branch: 'Economics',
      range: 'International Students',
      country: 'Singapore',
      like: 'active'
    },
    {
      id: 4,
      title:'NUS Department of Economic PhD scholarships in Singapore, 2025',
      imgPath:'../../../assets/img/scholars/scholar_5.png',
      date:'November 5, 2017',
      fund:'Fully Funded',
      school: 'National University of Singapore',
      degree: 'PhD',
      branch: 'Economics',
      range: 'International Students',
      country: 'Singapore',
      like: 'active'
    }
  ];

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  displayDetails(){
    this.navCtrl.navigateForward('/scholardetails');
  }

}
