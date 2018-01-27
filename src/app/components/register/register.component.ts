import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['']);
  }

  goLogin() {
    this.router.navigate(['']);
  }

  register(email: string, repeatEmail: string) {
    let g = 'yolo';
  }
}
