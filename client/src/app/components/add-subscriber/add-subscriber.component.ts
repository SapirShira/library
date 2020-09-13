import { Component, OnInit } from '@angular/core';
import { SubscribersService } from 'src/app/servises/subscribers.service';
import { subscribers } from 'src/app/classes/subscribers';
import { SubcriptionTypesService } from 'src/app/servises/subcription-types.service';
import { subcription_types } from 'src/app/classes/subcription_types';
import {FormControl} from '@angular/forms';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';

@Component({
  selector: 'app-add-subscriber',
  templateUrl: './add-subscriber.component.html',
  styleUrls: ['./add-subscriber.component.css']
})
export class AddSubscriberComponent implements OnInit {

  newSubsriber: subscribers;
  subscriptionTypes:subcription_types[];
  constructor(private subscribersService: SubscribersService, private subcriptionTypesService: SubcriptionTypesService) { }

  savaSubscriber() {
    this.newSubsriber.isDeleted=false;
    this.newSubsriber.startDate=Date.now();
    this.subscribersService.createSubscribers(this.newSubsriber).subscribe(res => { })
  }

  ngOnInit(): void {
    this.subcriptionTypesService.getAllSubcription_types().subscribe((data:subcription_types[])=> {this.subscriptionTypes = data ; console.log(this.subscriptionTypes); });
  }

}
