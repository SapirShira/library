import { Component, OnInit } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { SubscribersService } from 'src/app/servises/subscribers.service';
import { subscribers } from 'src/app/classes/subscribers';
import { Router } from '@angular/router';



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
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'address', 'phon', 'email', 'startDate', 'numOfBooks', 'update', 'garbege'];


  constructor(private subscribersService: SubscribersService,
    private router:Router) { }
   


  ngOnInit(): void {
    this.router.events.subscribe(
      e => { this.subList()});
      this.subList()
  }

  subList()
  {
    this.subscribersService.getAllSubscribers().subscribe((data: subscribers[]) => { this.sub = data });
  }

  delete(id:number) {
    
    this.subscribersService.deleteCopy(id).subscribe(res=>
      this.subscribersService.getAllSubscribers().subscribe((data: subscribers[]) => { this.sub = data }));
  }

}
