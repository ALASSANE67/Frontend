import { Component, OnInit } from '@angular/core';
import { Porst, Utilisateur } from '../../../model/custermer';
import { MasterService } from '../../_service/master.service';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent  implements OnInit{

  _utilisateurlist!:Utilisateur[];

  constructor(private master :MasterService){

  }
  ngOnInit() {
  this.loadIniat();
  }
loadIniat(){
  this.master.getAllUtilisateur().subscribe((item)=>{
    this._utilisateurlist = item;
    console.log(this._utilisateurlist)
  })
}
}
