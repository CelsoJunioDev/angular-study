import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuario!: Usuario;
  public usuarios: Usuario[] =[
    {
      nome: "Celso",
      email: "celsoj18@gmail.com"
    },
    {
      nome: "Sara",
      email: "saraenf13@gmail.com"
    },
    {
      nome: "Carol",
      email: "carol_lorac@gmail.com"
    }
  ]
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  this.usuario = this.usuarioService.getUsuario()

  }

}
