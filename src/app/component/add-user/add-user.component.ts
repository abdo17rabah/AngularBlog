import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {User} from "../../model/user";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  form!: FormGroup;

  constructor(private builder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.form = this.builder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      drinkPreference: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
    });
  }

  onSubmit() {
    const formData = this.form.value;
    console.log('formData', formData);
    const user = new User(
      formData['firstName'],
      formData['lastName'],
      formData['email'],
      formData['drinkPreference'],
    );

    this.userService.addUser(user);
    this.router.navigate(['/users']);

  }




}
