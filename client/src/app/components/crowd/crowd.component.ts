import { Component, OnInit } from '@angular/core';
import { crowd } from 'src/app/classes/crowd';
import { CrowdService } from 'src/app/servises/crowd.service';

@Component({
  selector: 'app-crowd',
  templateUrl: './crowd.component.html',
  styleUrls: ['./crowd.component.css']
})
export class CrowdComponent implements OnInit {

  crowd:crowd = new crowd();
  constructor(private crowdService:CrowdService) { }


  ngOnInit(): void {

  }

  saveCrowd()
  {
    this.crowdService.createCrowd(this.crowd).subscribe(res=>{})
  }

}
