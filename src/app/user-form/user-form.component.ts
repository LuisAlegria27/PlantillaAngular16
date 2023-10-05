import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserServiceService } from '../api/user-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  form: FormGroup;
  action: string = "new";
  user: any;
  constructor(private fb: FormBuilder, private userService: UserServiceService, private router: ActivatedRoute, private location: Location){
    this.form=this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      username: ['', Validators.required],
      phone: ['', Validators.required, Validators.pattern("^[0-9]*$")],
    })
  }

  ngOnInit(): void{
    this.router.queryParams.subscribe((params:any) => {
      console.log(params);
      this.action = params.action;
      if (this.action != "new") {
        this.user = JSON.parse(params.data);
        console.log(this.user);
        this.form.patchValue({
          name: this.user.name.firstname || '',
          lastname: this.user.name.lastname || '',
          email: this.user.email || '',
          username: this.user.username || '',
          phone: this.user.phone || '',
        });
      }
    });
    if(this.action == "show"){
      this.form.disable();
    }
  }

  onSubmit(){

  }

}


