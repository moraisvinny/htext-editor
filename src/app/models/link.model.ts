export class Link {

  constructor(private rotulo: string, private link: string) { }

  setRotulo(rotulo: string) {
    this.rotulo = rotulo;
  }

  setLink(link: string) {
    this.link = link;
  }

  getRotulo() {
    return new String(this.rotulo).toString();
  }

  getLink() {
    return new String(this.link).toString();
  }
}
