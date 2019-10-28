import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  exp_start_date = 10;
  exp_end_date = 10;
  knobValues: any = {
    upper:10,
    lower:10
  }

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  displayScolarships() {
    this.navCtrl.navigateForward('/main/main/scholar');
  }

  displayMain() {
    this.navCtrl.back();
  }

  rangeChanged($event) {
    // console.log("Position1: ", $event);
    // console.log("Position2: ", this.knobValues);
    this.exp_start_date = this.knobValues['lower'];
    this.exp_end_date = this.knobValues['upper'];
  }

  displayFilterDetail() {
    this.navCtrl.navigateForward('/filterdetail');
  }
}
