export class Endpoint {
  constructor(private baseUrl: string, private path: string) {}
  get url(): string { return `${this.baseUrl.replace(/\/$/, '')}/${this.path.replace(/^\//, '')}`; }
}
