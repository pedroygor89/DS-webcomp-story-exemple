# `@yduqs-ds/themes`

Para adicionar um novo tema, crie um arquivo na pasta `css` com o nome do tema, ex:

```bash
# A partir da pasta ./css
└── default.css
└── vinho.css
└── roxo.css
```
Altere o valor dos tokens instanciados para refletirem a configuração proposta no tema do figma:

Exemplo de conteúdo do arquivo `default.css`

```css
:root {
	--color-primary: #7D1528;
	--color-default: #1C8E8E;
	--color-hover: #005466;
	--color-highlight: #FCDAD5;

	--text-font-family-heading: 'Inconsolata';
}
```
