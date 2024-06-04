import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Porst, Utilisateur } from '../../model/custermer';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) {

   }

   getAll(){
    return this.http.get<Porst[]>('http://localhost:3000/posts');
   }

   getAllUtilisateur(){
    return this.http.get<Utilisateur[]>('http://localhost:8082/utilisateur/getUtilisateur');
   }

}
