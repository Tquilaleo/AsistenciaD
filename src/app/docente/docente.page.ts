import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {
  nombre: string= '';

  constructor(private router: Router) { }

  ngOnInit() {
    // Obtén los datos pasados en la navegación
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.nombre = navigation.extras.state['nombre'];
    }
  }

  salirAplicacion(){

    this.router.navigate(['/login'])
  }
}
