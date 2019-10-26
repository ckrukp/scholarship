import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-scholardetails',
  templateUrl: './scholardetails.page.html',
  styleUrls: ['./scholardetails.page.scss'],
})
export class ScholardetailsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  displayPrevious() {
    this.navCtrl.back();
  }

}
