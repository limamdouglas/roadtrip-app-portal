export class EventoCadastroDto {
    id: number;
    nome: string;
    descricao: string;
    roteiro: string;
    data: string;
    preco: number;
    qtdVagas: number;
    qtdVagasDisponiveis: number;
    pontoDeEmbarque: number[];
    categoria: number;
}
