import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // country_arr: Array<{name: string, img: string}> = [];
  country_name_arr = ['USA', 'UK', 'Australia', 'Canada', 'China', 'Germany', 'Japan', 'France', 'Netherlands', 'Belgium', 'Brazil', 'Pakistan'];
  country_img_arr = [];

  subject_name_arr = ['Medicine', 'Management', 'Nursing', 'Science', 'Law', 'Chemistry', 'Medicine', 'Management', 'Nursing', 'Science', 'Law', 'Chemistry'];
  subject_img_arr = [];

  degree_name_arr = ['PhD', 'Masters', 'Bachelor', 'Undergraduate', 'Diploma', 'Post Doctorate', 'Graduate', 'Research']
  degree_img_arr = [];

  university_name_arr = ['USA', 'UK', 'Germany', 'Canada', 'Italy', 'Belgium', 'Mexico', 'Estonia', 'France'];
  university_count_arr = ['150', '190', '117', '40', '150', '190', '117', '40', '77'];
  university_img_arr = [];
  
  scholar_name_arr = [
    'Karen McKellin International Leader of Tomorrow Award, University of British Columbia',
    'Emile-Boutmy Scholarship in France for Non EU Students',
    'Oxford Pershing Square Graduate Scholarships in UK',
    'Justus & Louise van Effen Excellence Scholarships in Netherlands',
    'Reach Oxford Undergraduate Scholarships, University of Oxford, UK'
  ];
  scholar_date_arr = ['24 Oct 2019', '23 Oct 2019', '23 Oct 2019', '21 Oct 2019', '20 Oct 2019'];
  scholar_img_arr = [];

  constructor() { }

  ngOnInit() {

    for(let i = 0; i < this.country_name_arr.length; i++){
      this.country_img_arr[i] = '../../../assets/img/flags/' + this.country_name_arr[i].toLowerCase() + '.png';
    }

    for(let i = 0; i < this.subject_name_arr.length; i++){
      this.subject_img_arr[i] = '../../../assets/img/subjects/' + this.subject_name_arr[i].toLowerCase() + '.svg';
    }

    for(let i = 0; i < this.degree_name_arr.length; i++){
      this.degree_img_arr[i] = '../../../assets/img/degrees/' + this.degree_name_arr[i].toLowerCase() + '.svg';
    }

    for(let i = 0; i < this.university_name_arr.length; i++){
      this.university_img_arr[i] = '../../../assets/img/universities/' + this.university_name_arr[i].toLowerCase() + '.png';
    }

    for(let i = 0; i < this.scholar_name_arr.length; i++){
      this.scholar_img_arr[i] = '../../../assets/img/scholars/scholar_' + i + '.png';
    }
  }

}

  
