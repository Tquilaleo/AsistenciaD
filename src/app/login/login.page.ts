import { Router, NavigationExtras } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; // Importar AlertController

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Define los objetos de alumnos y profesor
  alumnos = [
    { nombre: 'tamara', contraseña: '123' },
    { nombre: 'miguel', contraseña: '154' },
    { nombre: 'cristian', contraseña: '485' }
  ];

  profesor = { nombre: 'diego', contraseña: '372' };

  constructor(private router: Router, private alertController: AlertController) { } // Agregar AlertController

  // Define el formulario con validaciones
  usuario = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    pass: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
  });

  // Método para mostrar la alerta
  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  // Método que maneja el envío del formulario
  navegarExtras() {
    const userName = this.usuario.value.user;
    const password = this.usuario.value.pass;

    // Verifica si el usuario es un alumno
    const alumno = this.alumnos.find(
      (al) => al.nombre === userName && al.contraseña === password
    );

    if (alumno) {
      // Si es un alumno, redirige a la página de alumno
      this.router.navigate(['/alumno'], { state: { nombre: userName } });
    } else if (
      userName === this.profesor.nombre &&
      password === this.profesor.contraseña
    ) {
      // Si es el profesor, redirige a la página de docente
      this.router.navigate(['/docente'], { state: { nombre: userName } });
    } else {
      // Si las credenciales no coinciden, muestra un mensaje de error
      this.presentAlert('Nombre o contraseña incorrectos'); // Usar el popup
    }
  }

  ngOnInit() {
  }

  salirAplicacion() {
    this.router.navigate(['/login']);
  }
}
