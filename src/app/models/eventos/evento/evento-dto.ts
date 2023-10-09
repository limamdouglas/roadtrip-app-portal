export class EventoDto {
  id: number;
    nome: string;
    descricao: string;
    roteiro: string;
    data: string;
    preco: number;
    qtdVagas: number;
    qtdVagasDisponiveis: number;
    pontoEmbarque: number[];
    categoria: number;
    staff: any[];
    cliente: any[];
}
