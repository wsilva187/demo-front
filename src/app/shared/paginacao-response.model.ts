export class PaginacaoResponse<T> {
  constructor(
    public content?: Array<T>,
    public totalElements?: number,
    public size?: number,
    public number?: number,
    public totalPages?: number,
    public first?: boolean,
    public last?: boolean,
    public carregando?: boolean,
  ) {
    this.content = new Array<T>();
    this.totalElements = 0;
    this.size = 0;
    this.number = 0;
    this.totalPages = 0;
    this.first = true;
    this.carregando = false;
  }
}
