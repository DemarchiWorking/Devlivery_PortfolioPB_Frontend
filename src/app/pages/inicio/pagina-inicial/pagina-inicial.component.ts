import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/model/card';
import { ConfigStorageService } from 'src/app/service/config-storage/config-storage.service';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({transform: 'translateY(-100%)', opacity: 0}),
        animate('500ms', style({transform: 'translateY(0)', opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translateY(0)', opacity: 1}),
        animate('500ms', style({transform: 'translateY(-100%)', opacity: 0}))
      ])
    ])
  ]
})
export class PaginaInicialComponent implements OnInit {

  constructor(
    private router : Router,
    private  configStorageService : ConfigStorageService,
  ) { }
  
  public currentIndex = 0;
  private numCards = 9;
  primeiraCapaCarrousel : string = "https://www.infnet.edu.br/infnet/wp-content/uploads/sites/6/revslider/infnet-01/infnet-sao-jose.jpg";
  segundaCapaCarrousel : string = "https://classic.exame.com/wp-content/uploads/2020/07/GettyImages-1081869166.jpg?quality=70&stri";
  terceiraCapaCarrousel : string = "https://www.integrasist.com.br/dados/editor/image/WhatsApp_Image_2021_04_05_at_21.13.13.jpeg";
  
  public cards : any = [
    {titulo: 'Gestão de Processos', descricao: ' Materialize uma ideia em um processo intenso de ideação, validação e planejamento de produto - Product Discovery .', image: 'https://img.freepik.com/fotos-gratis/empresarios-de-planejamento-em-uma-parede-de-vidro_53876-15194.jpg?t=st=1711235008~exp=1711238608~hmac=0d3e1960d88acc14bae767fbbeccca022e34a1837215f9a024502a080543a122&w=1380'},
    {titulo: 'Design Interface', descricao: ' Conte com nosso time de FrontEnd para aplicar revisões e melhorias de fluxos e interfaces.', image: 'https://img.freepik.com/fotos-gratis/representacao-da-experiencia-do-utilizador-e-design-da-interface_23-2150169847.jpg?w=1380&t=st=1711235882~exp=1711236482~hmac=c511277f9ce7dde573e643bfc57f57ac41df1f64027b4468a47a087793795253'},
    {titulo: 'Regras de Negócio', descricao: 'Potencialize suas entregas de tecnologia com o nosso time de especialistas.', image: 'https://img.freepik.com/fotos-gratis/conceito-de-rpa-com-tela-de-toque-de-mao-embacada_23-2149311914.jpg?t=st=1711235985~exp=1711239585~hmac=6b253bee419e250a5323c50d8073b9cda15a732b35c4a62d01be6c778bb0f475&w=1380'},
    {titulo: 'Integrações ', descricao: ' Conectamos você diretamente aos alunos cujos projetos mais chamaram sua atenção..', image: 'https://d69wugzumdc3j.cloudfront.net/064/de-maos-dadas-maquina-e-o-ser-humano.jpg'}
  ] 

  public items: string[] = [];

  public vantagens: Card[] = [
    { id: 1, titulo: "Foco no negócio", descricao: "Engenheiros de software podem criar soluções sob medida para atender às necessidades específicas da sua empresa.", image: '../../../../assets/images/estudante.png'},
    { id: 2, titulo: "Expertise Técnica", descricao: "Com habilidades em programação, desenvolvimento web, inteligência artificial e muito mais, nossos alunos estão preparados para enfrentar os desafios tecnológicos do mundo real.", image: '../../../../assets/images/estudante(a).png'},
    { id: 3, titulo: "Empreendedorismo", descricao: "Muitos de nossos projetos têm potencial para se tornarem startups de sucesso.", image: '../../../../assets/images/estudante.png'},
    { id: 4, titulo: "Exploração de Portfólios", descricao: "Navegue pelos portfólios dos alunos e descubra as melhores soluções para seu case. ", image: '../../../../assets/images/estudante(a).png' },
    { id: 5, titulo: "Conexões Estratégicas", descricao: "Conectamos você diretamente aos alunos cujos projetos mais chamaram sua atenção.", image: '../../../../assets/images/estudante.png'},
    { id: 6, titulo: "Conhecimento Técnico Profundo", descricao: "Eles são especialistas em algoritmos, estruturas de dados e design de sistemas." , image: "../../../../assets/images/estudante(a).png"},
    { id: 7, titulo: "Habilidades de Resolução de Problemas", descricao: " São solucionadores de quebra-cabeças digitais." , image: "../../../../assets/images/estudante.png"},
    { id: 8, titulo: "Colaboração e Comunicação", descricao: "Trabalham bem em equipe e se comunicam eficazmente", image: "../../../../assets/images/estudante(a).png" },
    { id: 9, titulo: "Adaptação às Mudanças Tecnológicas" , descricao: "Aprendem continuamente e aplicam as últimas tendências", image: "../../../../assets/images/estudante.png"},
  
  ]; 

  seta = true;


  public data : any = "slide";
  ngOnInit(): void {
    this.configStorageService.aplicarTema();
       // Preencha sua lista de 20 itens (por exemplo, com strings)
       for (let i = 1; i <= 9; i++) {
        this.items.push(`Item ${i}`);
        
      }
  }

  showNextItem(): void {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  alerta(){
    alert(this.primeiraCapaCarrousel);
  }
  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.numCards) % this.numCards;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.numCards;
  }

  redirecionar(){
    this.router.navigate(['catalogo']);
  }
}
