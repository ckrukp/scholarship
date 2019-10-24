import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  blogdata = [
    {
      id: 1,
      title:'Tuition Free Study in Finland, 2014 Admissions are Open',
      date:'November 5, 2013',
      content:'Tuition Free Study in Finland, 2014 Admissions are Open for International Students If you wish to study FREE in Finland come 2014...',
      imgPath:'../../../assets/img/blogs/blog_1.png',
      commentCount:3
    },
    {
      id: 2,
      title:'Tuition Free Study in Finland, 2014 Admissions are Open',
      date:'November 5, 2013',
      content:'Tuition Free Study in Finland, 2014 Admissions are Open for International Students If you wish to study FREE in Finland come 2014...',
      imgPath:'../../../assets/img/blogs/blog_2.png',
      commentCount:3
    },
    {
      id: 3, 
      title:'Tuition Free Study in Finland, 2014 Admissions are Open',
      date:'November 5, 2013',
      content:'Tuition Free Study in Finland, 2014 Admissions are Open for International Students If you wish to study FREE in Finland come 2014...',
      imgPath:'../../../assets/img/blogs/blog_3.png',
      commentCount:3
    },
    {
      id: 4,
      title:'Tuition Free Study in Finland, 2014 Admissions are Open',
      date:'November 5, 2013',
      content:'Tuition Free Study in Finland, 2014 Admissions are Open for International Students If you wish to study FREE in Finland come 2014...',
      imgPath:'../../../assets/img/blogs/blog_4.png',
      commentCount:3
    }
  ];

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  displayDetails() {
    this.navCtrl.navigateForward('/blogdetails');
  }

}
