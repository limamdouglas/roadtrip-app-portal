import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDto } from 'src/app/models/login/login-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router) {
  }

  ngOnInit(): void {
    this.criarFormulario(new LoginDto)
  }

  criarFormulario(dto: LoginDto) {
    this.loginForm = this.formBuilder.group({
      username: [dto.usuario],
      password: [dto.senha]
    });
  }

  get formulario() { return this.loginForm.controls; }

  entrar() {
    var dto = this.loginForm.value;
    if(dto.username == 'admin')
      this.router.navigate(['home-administrativo']);
    else
      this.router.navigate(['home-cliente']);
  }
}
