# Site Um Novo Tempo

Site institucional responsivo para salão de beleza, com:

- Página inicial elegante e animada
- Seção sobre o salão
- Catálogo com 9 serviços
- Explicação do processo de atendimento
- Formulário que monta uma mensagem e abre o WhatsApp
- Perguntas frequentes
- Dados de contato
- Política de privacidade e termos de atendimento
- SEO básico e dados estruturados
- Layout adaptado para celular, tablet e computador

## Como visualizar

Abra o arquivo `index.html` no navegador.

## O que editar antes de publicar

### 1. Número do WhatsApp

No arquivo `script.js`, altere:

```js
const WHATSAPP_NUMBER = "5575999999999";
```

Use o formato: código do país + DDD + número, sem espaços ou símbolos.

Também altere o número em `index.html`, procurando por:

```text
5575999999999
(75) 99999-9999
```

### 2. Endereço, Instagram e horários

No final do arquivo `index.html`, procure pela seção `Contato` e substitua:

- `Informe o endereço do salão`
- `@umnovotempo.salao`
- Horários de atendimento

### 3. Preços

O site informa “orçamento após avaliação”. Caso queira exibir preços, adicione um texto dentro de cada cartão de serviço.

### 4. Publicação

Pode ser publicado gratuitamente em:

- GitHub Pages
- Vercel
- Netlify

Na Vercel, basta importar a pasta do projeto ou enviar os arquivos para um repositório do GitHub.

## Observação importante

Os textos de política de privacidade e termos são modelos básicos. Ajuste-os à operação real do salão, principalmente regras de cancelamento, atrasos, sinal, uso de imagem e tratamento de dados.
