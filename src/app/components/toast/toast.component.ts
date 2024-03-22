import { Component, OnInit } from '@angular/core';
import { Alerta } from 'src/app/model/response/alerta';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})


export class ToastComponent implements OnInit {

  titulo : string = "";
  texto : string = "";
  tipoAlerta : string = "";
  dados : string = "";
  status: number = 0;

  constructor() { }

  ngOnInit(): void {

  }


}
