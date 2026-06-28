# Site Um Novo Tempo — versão Cloudflare Pages

Este projeto é um site estático em HTML, CSS e JavaScript. Ele **não usa Next.js**.

## Arquivos principais

- `index.html`
- `styles.css`
- `script.js`
- `package.json`
- `build.mjs`
- `_headers`

## Configuração correta no Cloudflare Pages

Abra o projeto na Cloudflare e acesse:

`Settings` → `Build` → `Build configuration`

Use exatamente:

- **Framework preset:** `None`
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** deixe vazio
- **Node.js:** versão padrão da Cloudflare é suficiente

Apague o comando incorreto:

```text
npx @cloudflare/next-on-pages@1
```

Depois salve e selecione **Retry deployment** ou faça um novo commit no GitHub.

## Por que o erro aconteceu?

O comando `@cloudflare/next-on-pages` serve para projetos Next.js. Este repositório contém somente HTML, CSS e JavaScript e, portanto, não possui o pacote `next`.

## Teste local opcional

Com Node.js instalado:

```bash
npm run check
npm run build
```

O conteúdo pronto para publicação será criado na pasta `dist`.

## Dados configurados

- WhatsApp: `+55 75 99263-3332`
- Link interno do WhatsApp: `5575992633332`
- Endereço: `R. Amanhecer, 213 - Conceição, Feira de Santana - BA, 44066-152, Brasil`

## Foto principal

A foto exibida no destaque inicial está em `assets/profissional-um-novo-tempo.webp`.

## Identidade visual atualizada

- Logo do salão usada no topo e na seção inicial: `assets/logo-um-novo-tempo.webp`
- Arte da porta usada no destaque principal do site: `assets/arte-porta-um-novo-tempo.webp`
