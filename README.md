# Htext-Editor
[![Build Status](https://travis-ci.org/moraisvinny/htext-editor.svg?branch=master)](https://travis-ci.org/moraisvinny/htext-editor)      [![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://opensource.org/licenses/MIT)

![alt text](https://res.cloudinary.com/moraisvinny-com/image/upload/v1533331725/htext-editor.png "Exemplo de utilização")


Htext-Editor é um compmente Angular que consiste em um editor de Hiper Texto que gera código HTML baseado na formatação inserida.
Ideal para posts em blog, por exemplo.

__Atenção: Este componente foi desenvolvido e testado utilizando o Angular 6. Se você testá-lo em outras versões do Angular, por favor, deixe seu feedback!__ :blush:

## Iniciando

Estas instruções irão lhe mostrar como baixar, instalar e rodar o componente na sua aplicação Angular

### Dependências

Esta lib depende do [Angular Material](https://material.angular.io/). Você pode instalá-lo com o seguinte comando

```
npm install @angular/material @angular/cdk --save
```
Para os ícones, existe a dependência da lib [MaterialDesign-SVG](https://github.com/Templarian/MaterialDesign-SVG), que você instala com o comando:
```
npm install @mdi/svg
```

### Instalação

Após a instalação das libs acima, você pode instalar o Htext-editor com o comando:


```
npm install htext-editor --save
```

Logo após, serão necessários alguns ajustes no seu projeto Angular, veja:

#### Adicionar o css do Angular Material ao seu projeto:

No seu arquivo _angular.json_ (ou _.angular-cli.json_ em versões anteriores do Angular), na chave _"styles"_, adicione o seguinte:

```javascript 
{
  "input": "node_modules/@angular/material/prebuilt-themes/indigo-pink.css"
},
```

#### Incorporar os assets do MaterialDesign-SVG

Ainda no seu arquivo _angular.json_ (ou _.angular-cli.json_ em versões anteriores do Angular), na chave _"assets"_, inclua o código abaixo:

```javascript
{
  "glob": "**/*",
  "input": "./node_modules/@mdi/svg/svg/",
  "output": "./assets/"
}
```
_Isso fará com que os ícones sejam copiados para a pasta de assets do seu projeto_

#### Importar o módulo na sua aplicação

No seu arquivo _app.module.ts_ (ou outro módulo de sua preferência), importe o _EditorModule_ e importe-o no seu _@NgModule_, dessa forma:

```javascript
import { EditorModule } from './editor/editor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EditorModule //---> Aqui!

  ],
  providers: [],
  bootstrap: [AppComponent]
})

```

Pronto! Agora você está pronto para usar o componente! :blush:

## Usando

Para usar o Htext-Editor é muito fácil, basta adicionar o seletor ao template do seu componente, veja:

```html
<vm-hte></vm-hte>
```
Só isso já fará o componente funcionar, no entanto, você vai querer obter o código HTML que o usuário digitou, certo?
Para fazer isso, siga os seguintes passos:

1. No seu template:

```html
<vm-hte #editor></vm-hte>
```

2. Na classe do seu componente:

```javascript
// imports...

export class AppComponent {
  title = 'app';
  @ViewChild(EditorComponent) editor: EditorComponent

  obterHTML() {
    this.editor.getHtmlGerado(); // --> Método de acesso ao html gerado
  }
```

Simples né?! 


## Feito com

* Amor e...
* Angular 6
* Angular Material
* VSCode
* Ng-packagr
* NPM

## Versionamento

Nós usamos [SemVer](http://semver.org/) para o versionamento. Para versões disponíveis acesse: [tags](https://github.com/moraisvinny/htext-editor/tags). 

## Contribuição

Por favor, leia [CONTRIBUTING.md](https://gist.github.com/moraisvinny/95eee19a4d0f43e97f97fae567c7e3d0) para detalhes sobre nosso código de conduta e submissão de pull requests.

## Autores

* **Vinicius Morais** - [Github](https://github.com/moraisvinny) [Site/portfolio](https://moraisvinny.com/)

Veja também quem está [contribuindo](https://github.com/moraisvinny/htext-editor/graphs/contributors) com este projeto!

## Licença

Este projeto é licenciado sob a licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes
