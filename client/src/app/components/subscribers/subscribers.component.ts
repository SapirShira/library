import { Component, OnInit } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { SubscribersService } from 'src/app/servises/subscribers.service';
import { subscribers } from 'src/app/classes/subscribers';


@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent implements OnInit {
 
  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();

    // Highlight the 1st and 20th day of each month.
    return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
  }
  sub:subscribers[];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'address', 'phon', 'email', 'startDate', 'type', 'numOfBooks', 'garbege'];


  constructor(private subscribersService: SubscribersService) { }
  ngOnInit(): void {
    this.subscribersService.getAllSubscribers().subscribe((data: subscribers[]) => { this.sub = data });
  }

}
