import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  notifylist = [
    {
      status: 'active',
      title: 'New scholarship in Canada',
      date: 'Today',
      content: 'Tuition Free Study in Canada, 2019 Admissions are Open for International Students if you wish to study FREE'
    },
    {
      status: 'active',
      title: 'Eligibility requirements changed',
      date: 'Today',
      content: 'University Of Hamburg Doctoral Scholarships in Germany, 2020 is open for International Students'
    },
    {
      status: 'active',
      title: 'University of Hamburg added Post Doctorate level programs',
      date: 'Yesterday',
      content: 'Tuition Free Study in Canada, 2019 Admissions are Open for International Students if you wish to study FREE'
    },
    {
      status: 'inactive',
      title: 'New scholarship in Canada',
      date: 'Yesterday',
      content: 'Post Doctorate level programm(s) added in the field of All Subjects taught at University of HamburgPost Doctorate level programm(s) added in the field of All Subjects taught at University of Hamburg'
    }
  ];

  groups = [
    {
      date:'Today',
      sessions: [
        {
          status: 'active',
          title: 'New scholarship in Canada',
          date: 'Today',
          content: 'Tuition Free Study in Canada, 2019 Admissions are Open for International Students if you wish to study FREE'
        },
        {
          status: 'active',
          title: 'Eligibility requirements changed',
          date: 'Today',
          content: 'University Of Hamburg Doctoral Scholarships in Germany, 2020 is open for International Students'
        },
      ]
    },
    {
      date:'Yesterday',
      sessions:[
        {
          status: 'active',
          title: 'University of Hamburg added Post Doctorate level programs',
          date: 'Yesterday',
          content: 'Tuition Free Study in Canada, 2019 Admissions are Open for International Students if you wish to study FREE'
        },
        {
          status: 'inactive',
          title: 'New scholarship in Canada',
          date: 'Yesterday',
          content: 'Post Doctorate level programm(s) added in the field of All Subjects taught at University of HamburgPost Doctorate level programm(s) added in the field of All Subjects taught at University of Hamburg'
        }
      ]
    }
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  displayPrevious(){
    this.navCtrl.back();
  }

}
