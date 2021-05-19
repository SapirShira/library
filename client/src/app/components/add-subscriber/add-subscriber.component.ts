import { Component, OnInit } from '@angular/core';
import { SubscribersService } from 'src/app/servises/subscribers.service';
import { subscribers } from 'src/app/classes/subscribers';
import { SubcriptionTypesService } from 'src/app/servises/subcription-types.service';
import { subcription_types } from 'src/app/classes/subcription_types';
import { FormControl } from '@angular/forms';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-subscriber',
  templateUrl: './add-subscriber.component.html',
  styleUrls: ['./add-subscriber.component.css']
})
export class AddSubscriberComponent implements OnInit {

  newSubsriber: subscribers = new subscribers();
  id: number = null;
  workerTypes: string[] = ['מנהל', 'ספרנית'];
  link: string = "";
  answer: boolean


  subscriptionTypes: subcription_types[];
  constructor(private subscribersService: SubscribersService, private router: Router, private subcriptionTypesService: SubcriptionTypesService, private activatedRoute: ActivatedRoute) { }

  savaSubscriber() {
    if (this.id == -1) {
      this.newSubsriber.isDeleted = false;
      this.newSubsriber.startDate = new Date();
      this.subscribersService.createSubscribers(this.newSubsriber).subscribe(res => { this.answer = res })
      console.log(this.answer);
      if (this.answer == true) {
        this.router.navigate(['/subscribers'])

      }
    }
    else {
      this.subscribersService.updateSubscribers(this.newSubsriber).subscribe(res => {this.answer=res })
      if (this.answer == true) {
        this.router.navigate(['/subscribers'])

      }
    }
  }

  ngOnInit(): void {



    this.id = +this.activatedRoute.snapshot.paramMap.get('id');

    if (this.id == -1) {
      this.newSubsriber = new subscribers();
    }
    else {
      this.subscribersService.getAllSubscribersById(this.id).subscribe((data: subscribers[]) => { this.newSubsriber = data[0] });
    }
    this.subcriptionTypesService.getAllSubcription_types().subscribe((data: subcription_types[]) => { this.subscriptionTypes = data; console.log(this.subscriptionTypes); });
  }

}
