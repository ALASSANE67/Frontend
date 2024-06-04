import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialModel } from '../../material.model';

@Component({
  selector: 'app-menuheader',
  standalone: true,
  imports: [RouterLink,MaterialModel],
  templateUrl: './menuheader.component.html',
  styleUrl: './menuheader.component.css'
})
export class MenuheaderComponent {

}
