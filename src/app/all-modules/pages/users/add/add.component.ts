import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@app/services';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  submited:boolean;
  userForm:FormGroup;
  processing:boolean;
  errMsg='';

  constructor(private fb:FormBuilder,private auth:AuthService) { }

  ngOnInit(): void {
    this.newUserForm()
  }

  newUserForm(edit:any=false)
  {
    this.errMsg='';
    this.processing=false;
    const pattern = "/^[0-9]*$/";
    if(edit)
    {
      this.userForm = this.fb.group({
        fullName:[''],
        email:['',[Validators.required,Validators.email]],
        phone:['',[Validators.required]],
        password:['',[Validators.required]],
        confirmPass:['']
      })
    }
    else
    {
      this.userForm = this.fb.group({
        fullName:[''],
        email:['',[Validators.required,Validators.email]],
        phone:['',[Validators.required]],
        password:['',[Validators.required]],
        confirmPass:['']
      })
    }
    
  }
  get getControls() {
    return this.userForm.controls;
  }

  ConfirmPassErr='';
  submit()
  {
    this.submited = true;
    this.processing = true;
    this.ConfirmPassErr='';
    if(!this.userForm.valid)
    {
      this.userForm.markAllAsTouched();
      this.processing = false;
      return false;
    }

    // validate confirm pasword
    if(this.userForm.get('password').value !=this.userForm.get('confirmPass').value)
    {
      this.ConfirmPassErr = "Password and confirm password should be same."
      this.processing = false;
      return false;
    }

    console.log(this.userForm.value);return;

    // submit your form to api's for add user
    this.auth.register(this.userForm.value).subscribe((res:any)=>{
      console.log(res);
    })
  }
  reset()
  {
    this.submited = false;
    this.userForm.reset();
  }

  
 

}
