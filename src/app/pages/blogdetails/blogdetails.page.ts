import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.page.html',
  styleUrls: ['./blogdetails.page.scss'],
})
export class BlogdetailsPage implements OnInit {

  constructor(private navc:NavController) { }

  ngOnInit() {
  }

  displayPrevious(){
    this.navc.back();
  }

}
