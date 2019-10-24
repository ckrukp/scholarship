import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.page.html',
  styleUrls: ['./contactus.page.scss'],
})
export class ContactusPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  displayPrevious(){
    this.navCtrl.back();
  }

}
