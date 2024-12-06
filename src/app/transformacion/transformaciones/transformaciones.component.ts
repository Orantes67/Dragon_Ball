import { Component, OnInit } from '@angular/core';
import { TransformationsService } from '../service/transformacion.service';

@Component({
  selector: 'app-transformations',
  templateUrl: './transformaciones.component.html',
  styleUrls: ['./transformaciones.component.css'],
})
export class TransformationsComponent implements OnInit {
  transformations: any[] = []; // Arreglo de transformaciones
  loading = true; // Indicador de carga

  constructor(private transformationService: TransformationsService) {}

  ngOnInit(): void {
    // Suscribirse al observable de transformaciones
    this.transformationService.transformations$.subscribe({
      next: (data) => {
        this.transformations = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar transformaciones:', err);
        this.loading = false;
      },
    });
  }
}
