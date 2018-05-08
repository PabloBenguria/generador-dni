import { Component, OnInit } from '@angular/core';

import { DniService } from '../../services/dni/dni.service';


@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css'],
  providers: [DniService] 
})
export class DniComponent implements OnInit {

	dniGenerado: string;

  constructor(private dniService: DniService) { }

  ngOnInit() {
  }

  onGenerarDni() {
    this.dniGenerado = this.dniService.getRandomDni();
  }

}
