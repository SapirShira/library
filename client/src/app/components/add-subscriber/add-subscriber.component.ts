import { Component, OnInit } from '@angular/core';
import { SubscribersService } from 'src/app/servises/subscribers.service';
import { subscribers } from 'src/app/classes/subscribers';
import { SubcriptionTypesService } from 'src/app/servises/subcription-types.service';
import { subcription_types } from 'src/app/classes/subcription_types';
import { FormControl } from '@angular/forms';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-subscriber',
  templateUrl: './add-subscriber.component.html',
  styleUrls: ['./add-subscriber.component.css']
})
export class AddSubscriberComponent implements OnInit {

  newSubsriber: subscribers = new subscribers();
  id: number = null;

  subscriptionTypes: subcription_types[];
  constructor(private subscribersService: SubscribersService, private subcriptionTypesService: SubcriptionTypesService, private activatedRoute: ActivatedRoute) { }

  savaSubscriber() {
    if (this.id == null) {
      this.newSubsriber.isDeleted = false;
      this.newSubsriber.startDate = new Date();
      this.subscribersService.createSubscribers(this.newSubsriber).subscribe(res => { })
    }
    else {
      this.subscribersService.updateSubscribers(this.newSubsriber).subscribe(res => { })
    }
  }

  ngOnInit(): void {

    this.subcriptionTypesService.getAllSubcription_types().subscribe((data: subcription_types[]) => { this.subscriptionTypes = data; console.log(this.subscriptionTypes); });


    this.id = +this.activatedRoute.snapshot.paramMap.get('id');

    if (this.id != null) {

      this.subscribersService.getAllSubscribersById(this.id).subscribe((data: subscribers[]) => { this.newSubsriber = data[0] });

    }
    this.subcriptionTypesService.getAllSubcription_types().subscribe((data: subcription_types[]) => { this.subscriptionTypes = data; console.log(this.subscriptionTypes); });
  }

}
