import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  msg=false;
  public exform: FormGroup;

  ngOnInit() {

  this.exform = new FormGroup({
    'name' : new FormControl(null, Validators.required),
    'email' : new FormControl(null, [Validators.required, Validators.email]),
    'phone' : new FormControl(
      null,
      [
        Validators.required,
      ]),
    'message' : new FormControl(null, [Validators.required, Validators.minLength(10)])
  });
  }

  clicksub() {
    console.log(this.exform.value);
    this.exform.reset();
    this.msg = true
  }
  get name() {
    return this.exform.get('name');
  }
  get email() {
    return this.exform.get('email');
  }
  get phone() {
    return this.exform.get('phone');
  }
  get message() {
    return this.exform.get('message');
  }

  onOpenModal(){
    const container = document.getElementById('container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    button.setAttribute('data-target', '#confirmModal');

    container.appendChild(button);
    button.click();
  }

}
