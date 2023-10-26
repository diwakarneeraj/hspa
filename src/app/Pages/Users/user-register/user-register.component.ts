import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { passwordMatchingValidator } from './matchpassword.validatoer';
import { UserForRegister } from 'src/app/Model/user';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  registrationForm!: FormGroup;
  user?:UserForRegister;
  userSubmitted?:boolean;
  constructor(private fb:FormBuilder, private authService: AuthService, private alertify:AlertifyService){}

  ngOnInit(){
   
    this.createRegistrationForm()
  }

  createRegistrationForm(){
    this.registrationForm=this.fb.group({
      userName:[null,Validators.required],
      email:[null,[Validators.required, Validators.email]],
      password:[null,[Validators.required, Validators.minLength(8)]],
      confirmPassword:[null,Validators.required],
      mobile:[null,[Validators.required,Validators.maxLength(10)]],

    },{validators:passwordMatchingValidator})
  }

  
  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }
  get email(){
    return this.registrationForm.get('email') as FormControl;
  }
  get password(){
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }

  onSubmit(){
    console.log(this.registrationForm)
    this.userSubmitted=true;
    if(this.registrationForm.valid){
   // this.user=Object.assign(this.user, this.registrationForm.value)
    this.authService.registerUser(this.userData()).subscribe(()=>
    {
      this.onReset(); 
    this.userSubmitted=false;
    this.alertify.success("Congrats,you are successfylly registered")
    }
    );
    
    }
  }

  onReset(){
    this.userSubmitted=false;
    this.registrationForm.reset();
  }

  userData():UserForRegister{
    return this.user={
      username:this.userName.value,
      email:this.email.value,
      password:this.password.value,
      mobile:this.mobile.value,

    }
  }

  
}
