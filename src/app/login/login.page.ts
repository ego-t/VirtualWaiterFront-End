import { Produto } from './../services/database.service';
import { Alerta } from './../Utils/Alerta';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

import { DatabaseService } from './../../app/services/database.service';
import { defineBase } from '@angular/core/src/render3';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  srcImg = "../../../resources/logoComDescricao.png";
  username : string = "";
  password : string = "";
  processando: boolean = false;
  newItem: Produto = <Produto>{};


  constructor(public afAuth: AngularFireAuth,
    public user: UserService, 
    public router:Router,
    public alerta: Alerta,
    private db: DatabaseService) { 
    }

  ngOnInit() {
    // console.log(this.srcImg);
    // this.db.getDatabaseState().subscribe(rdy => {
    // });
    
  }

  async login()
  {
    const {username , password} = this;

    this.newItem.id = 1;
      this.newItem.nome = 'teste';
      this.db.addProduto(this.newItem);
      this.db.addProduto(this.newItem);
      this.newItem.id = 2;
      this.newItem.nome = 'teste2';
      this.db.addProduto(this.newItem);

    try{
      this.processando = true;

      const res = await this.afAuth.auth.signInWithEmailAndPassword(username +'@virtualwaiter.com',password)
      
      if(res.user){
        this.user.setUser({
          username,
          uid: res.user.uid
        })
        this.router.navigate(['/home'])
        this.processando = false;
      }

      console.log(this.user.getUID());
      this.processando = false;

    }catch(err){
      console.dir(err);
      
      var msgRetorno = ""

      switch (err.code) {
        case "auth/invalid-email":
          msgRetorno = "Usuário inválido"
          break;
        case "auth/user-not-found":
          msgRetorno = "Usuário não encontrado"
          break;
        case "auth/network-request-failed":
          msgRetorno = "Não foi possível se conectar a rede"
          break;
        case "auth/wrong-password":
          msgRetorno = "Senha inválida"
          break;
        default:
          msgRetorno = "Ocorreu um erro não conhecido."
          break;
      }

      if(msgRetorno != ""){
        this.alerta.showAlert("Error", msgRetorno)
      }

      console.log(err);
      this.processando = false;
    }
  }
}
