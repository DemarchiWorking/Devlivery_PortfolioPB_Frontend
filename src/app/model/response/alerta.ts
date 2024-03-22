import { StatusEnum } from "../enum/StatusEnum";

export interface Alerta {
    titulo: string;
    texto: string;
    tipoAlerta: StatusEnum;
    dados: any;
    status: number;
    mostrar: boolean
  }