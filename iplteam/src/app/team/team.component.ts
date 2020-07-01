import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  teamName: String[] = [
    'Chennai super kings',
    'mumbai indians',
    'Delhi capitals',
    'Royal Challengers Banglore',
    'kolkata knight Riders',
    'kings xl punjab',
    'Sunrises Hyderabad',
    'Rising Pune Supergiant'
  ];
  phoneNumbers: String[] = [
    '965-144-6018',
    '984-233-4521',
    '927-256-7281',
    '828-854-2643',
    '739-281-3267',
    '9988-772-555',
    '070-610-2661',
    '892-432-5482'
  ];
  website: String[] = ['https://www.chennaisuperkings.com/',
    'https://www.mumbaiindians.com/',
    'https://www.dehlicapitals.in/',
    'https://www.royalchallegers.com/',
    'https://www.kkr.in/',
    'https://www.kxip.in/',
    'https://www.Sunrises-Hyderabad.in/',
    'https://www.rps.in/'
  ];
  images: String[] = ['../../assets/csk.png',
    '../../assets/MI.png',
    '../../assets/Delhi.png',
    '../../assets/RCB.png',
    '../../assets/KKR.png',
    '../../assets/KXI.png',
    '../../assets/SRH.png',
    '../../assets/RPS.png'
  ];

}

