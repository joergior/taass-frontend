import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  infos = [
    {placeholder: 'Nome', value: 'Lamberto'},
    {placeholder: 'Cognome', value: 'Basti'},
    {placeholder: 'Email', value: 'basti.lamberto@gmail.com'},
    {placeholder: 'Matricola', value: 's183833'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
