import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qrdocente',
  templateUrl: './qrdocente.page.html',
  styleUrls: ['./qrdocente.page.scss'],
})
export class QrdocentePage implements OnInit {

  constructor(private router : Router) { }

  salirAplicacion(){

    this.router.navigate(['/login'])
  }

  Volver(){
    this.router.navigate(['/docente'])
  }

  ngOnInit() {
  }

}