import { Component, OnInit } from '@angular/core';
import { IdiomaService } from 'src/app/service/idioma/idioma.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {
  idiomaSelecionado: string | undefined;
  test: string | undefined;

  constructor(private idiomaService: IdiomaService) 
  {
    
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  alterarIdioma(idioma: string){


  //  ngOnInit(): void {
    this.idiomaService.definirIdioma(idioma);
    // .subscribe(lang => this.idiomaSelecionado = lang);  }
  
  }
}
