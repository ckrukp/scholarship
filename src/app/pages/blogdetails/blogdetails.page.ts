import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.page.html',
  styleUrls: ['./blogdetails.page.scss'],
})
export class BlogdetailsPage implements OnInit {

  blogsimpledata = [
    {
      userid: 'brownbear646',
      date: 'November 5, 2013',
      simplecontent: "If I roll once and you roll twice. What does that mean?",
      image: '../../../assets/img/photos/photo_1.png'
    },
    {
      userid: 'whiteswan331',
      date: 'November 5, 2013',
      simplecontent: "I see you have something to talk about. Well, I have something to shout about. Infact something to sing about. But I'll just keep quiet and let you carry on.",
      image: '../../../assets/img/photos/photo_2.png'
    },
    {
      userid: 'greenkoala518',
      date: 'November 5, 2013',
      simplecontent: "I can drive 10 miles, walk 50 feet. Turn around and before I know it, I'd be back home. Or would I? I'm not sure but that's just how it is.",
      image: '../../../assets/img/photos/photo_3.png'
    }
  ];

  constructor(private navc:NavController) { }

  ngOnInit() {
  }

  displayPrevious(){
    this.navc.back();
  }

}
