import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  movieTitle!: string;
  bookingForm!: FormGroup;
  theaterList: string[] = ['Scotiabank Cineplex', 'King and Young', 'Bathurst and dundas'];
  showtimeList: string[] = ['12:00 PM', '03:00 PM', '06:00 PM', '09:00 PM'];


  ngOnInit(): void {

    this.bookingForm = new FormGroup({
      theater : new FormControl(null, Validators.required),
      showtime: new FormControl(1, Validators.required),
      adultTickets: new FormControl(1, [Validators.required, Validators.min(1)]),
      childTickets: new FormControl(0, [Validators.required, Validators.min(0)]),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email])
    })

    this.route.queryParams.subscribe((params) => {
      this.movieTitle = params['movie'];
    });
  }

  constructor(private bookingService: BookingService,private route: ActivatedRoute, private router: Router) {}

  onSubmit(): void {
    if (this.bookingForm.valid){
      const formData = this.bookingForm.value;
      const totalCost = formData.adultTickets * 10 + formData.childTickets * 8;

      const booking = {
        movie: this.movieTitle,
        showtime: formData.showtime,
        tickets: `Adult: ${formData.adultTickets}, Child: ${formData.childTickets}`,
        totalCost: formData.adultTickets * 10 + formData.childTickets * 8,
      };

      this.bookingService.addBooking(booking);
      console.log(booking);

      this.router.navigate(['/confirmation'], {
        queryParams:{
          movie: this.movieTitle,
          tickets: `Adult: ${formData.adultTickets}, Child: ${formData.childTickets}`,
          showtime: formData.showtime,
          totalCost: totalCost,
        },
      });
    }
  }


}
