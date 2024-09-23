import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; // Importar AlertController

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {
  nombre: string = ''; // Inicializado como cadena vacía

  constructor(private router: Router, private alertController: AlertController) {} // Inyectar AlertController

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.nombre = navigation.extras.state['nombre']; // Usar corchetes
    }
  }

  salirAplicacion() {
    this.router.navigate(['/login']);
  }

  // Función para mostrar la alerta
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Activa tu ubicación',
      message: 'Debes activar tu ubicación para poder registrar tu asistencia',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Alert canceled');
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Alert confirmed');
            this.router.navigate(['/qralumno']);
          },
        },
      ],
    });

    await alert.present();
  }
}
