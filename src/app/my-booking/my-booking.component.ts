import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.css'],
})
export class MyBookingComponent implements OnInit{
  bookings: any[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookings = this.bookingService.getBookings();
    console.log('Bookings retrieved:', this.bookings);
    console.log("something")
  }
}

