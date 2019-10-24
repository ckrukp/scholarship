import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NotificationsPage } from '../notifications/notifications.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  displayNotifications(){
    this.navCtrl.navigateForward('/notifications');
  }

  displayContactus(){
    this.navCtrl.navigateForward('/contactus');
  }

  logout(){
    //this.navCtrl.navigateForward('../singin');
  }

}
