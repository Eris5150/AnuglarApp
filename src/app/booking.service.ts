import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookings: any[] = [];

  constructor() { }

  addBooking(booking: any): void {
    this.bookings.push(booking);
    console.log(booking)
  }


  getBookings(): any[] {
    return this.bookings;
  }
}
