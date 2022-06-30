import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api/api.service';
import { RegisterI } from '../../../models/register.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
      name : new FormControl('', Validators.required),
      email : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required),
  })

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  onRegister(form: RegisterI){
    this.api.registerByEmail(form).subscribe(data => {
      console.log(data);
    });
  }

}
