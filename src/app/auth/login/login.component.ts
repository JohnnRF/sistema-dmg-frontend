import { Component, inject } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    :host ::ng-deep .pi-eye,
    :host ::ng-deep .pi-eye-slash {
        transform:scale(1.6);
        margin-right: 1rem;
        color: var(--primary-color) !important;
    }
`]
})
export class LoginComponent {

  private fb = inject(FormBuilder);

  public myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  valCheck: string[] = ['remember'];

  password!: string;

  credentials = {
    email : "admin@gmail.com",
    password: "admin123"
  }

  constructor(private authService: AuthService, private router: Router){}

  doLogin(){
    
    const {email, password} = this.myForm.getRawValue();
    
    this.authService.login(email, password).subscribe(
      {
        next: ()=>{
          this.router.navigate(['/']);
        },
        error: ()=>{
           console.log('falló el login');
        }
      }
    )
      
  }


}
