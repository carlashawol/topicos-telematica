import { Component, OnInit } from '@angular/core';
import { MedidaService } from '../../services/medida.service'
import { NgForm } from '@angular/forms';
import { VirtualTimeScheduler } from 'rxjs';
import { Medida } from 'src/app/models/medida';

declare var M: any;

@Component({
  selector: 'app-medidas',
  templateUrl: './medidas.component.html',
  styleUrls: ['./medidas.component.css'],
  providers: [MedidaService]
})
export class MedidasComponent implements OnInit {

  constructor(private medidaService: MedidaService) { }

  ngOnInit() {
    this.getMedidas();
  }

  addMedida(form: NgForm) {
    if (form.value._id) {
      this.medidaService.putMedida(form.value)
        .subscribe(res => {
          M.toast({ html: 'Actualizado' });
          this.getMedidas();
        });
    } else {
      this.medidaService.postMedida(form.value)
        .subscribe(res => {
          M.toast({ html: 'Guardado' });
          this.getMedidas();
        });
    }
  }

  editMedida(medida: Medida) {
    this.medidaService.selectedMedida = medida;
  }

  deleteMedida(_id: string) {
    if (confirm('Estas seguro que deseas eliminar la medida?')) {
      this.medidaService.deleteMedida(_id)
      .subscribe(res => {
          M.toast({ html: 'Eliminado' });
          this.getMedidas();
      });
    }
  }

  getMedidas() {
    this.medidaService.getMedidas()
      .subscribe(res => {
        this.medidaService.medidas = res as Medida[];
        console.log(res);
      })
  }

}
