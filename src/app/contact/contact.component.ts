import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent  implements OnInit{

  contactForm!: FormGroup;
  messageSent : boolean  = false;

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, Validators.required),
    });
  }

  onSubmit():void {
    if (this.contactForm.valid){
      this.messageSent = true;
      this.contactForm.reset();
    }
  }
}
