import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent implements OnInit{
  movieTitle!: string;
  tickets!:string;
  showtime!:string;
  totalCost!:string;
  bookingID!:string;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.movieTitle = params['movie'];
      this.tickets = params['tickets'];
      this.showtime = params['showtime'];
      this.totalCost = params['totalCost'];
      this.bookingID = this.generateBookingID();
    });
  }

  generateBookingID(): string {
    return 'BOOK-' + Math.random().toString(36).substring(2,9).toUpperCase();
  }
}
