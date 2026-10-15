# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page landing page (pt-BR) for "Centro Educacional Zeone Garcia", a daycare/school. There is no package.json, build system, test suite, linter, or git repo. The deliverable is one self-contained file: `LP Zeone Garcia.html`. Photos used by the page live in `img/` (PNG, Portuguese filenames with spaces/accents).

To "run" it, open `LP Zeone Garcia.html` directly in a browser.

## Brief

- Landing page do Centro Educacional Professora Zeone Garcia (educação infantil: Berçário, Maternal e Pré-escolar), Palhoça/SC.
- Objetivo único: levar pais a agendar uma visita pelo WhatsApp (48) 99834-0569.
- Público: pais e mães de crianças de 4 meses a 5 anos; acesso principalmente pelo celular.
- Idioma: português do Brasil. Tom: acolhedor, lúdico, confiável.
- Identidade: cores do logo em arco-íris, mascote canguru (imagens em /assets).
- Regras: mobile-first, acessível (contraste, alt nos textos das imagens), leve (imagens otimizadas), sem inventar dados da escola (use PENDENCIAS.md).

## Estado atual do site

Site estático sem build: `index.html`, `styles.css`, `script.js`. Hospedagem prevista: Vercel (arquivos estáticos, sem configuração).

- Rodar local: `npx serve -l 4173 .` na raiz e abrir http://localhost:4173/.
- `assets/` guarda os originais (PNG e `hero-video.mp4`), que não devem ser alterados. `assets/web/` guarda cópias WebP (640 e 1200 px) e o logo, usadas pela página.
- Ordem das seções: topo, hero (vídeo), faixa de fatos, turmas, depoimentos, diferenciais, projetos (trilho horizontal no celular, grade no desktop), visita (formulário), rodapé.
- Conversão: todo CTA vai ao WhatsApp. Botões principais amarelos (`#FFC93C`, texto navy); nas turmas, link discreto que leva ao formulário com a turma escolhida. O formulário (`#visitForm`) valida no JS, monta a mensagem e abre o WhatsApp em nova aba; não guarda dados. Não há botão fixo flutuante (decisão do cliente).
- Dados não confirmados ficam entre colchetes ou fora da página (ver PENDENCIAS.md). Depoimentos exibidos como "Família de aluna" etc., com autorização ainda pendente.
- `prefers-reduced-motion` desliga animações, vídeo e entrada ao rolar. O vídeo pausa fora da tela.
- `LP Zeone Garcia.html` é só a referência visual antiga; a seção abaixo descreve esse bundle.

## Referência visual: bundle de design, não HTML escrito à mão

`LP Zeone Garcia.html` (~390 lines, but a few lines are enormous) is the output of a design-tool bundler. Do not edit it as if it were plain HTML:

- Lines ~25-300: bundler runtime script. On `DOMContentLoaded` it reads the manifest, base64-decodes (optionally decompressed) assets into blob URLs, rewrites the template's resource UUIDs, and replaces the document with the unpacked template.
- `<script type="__bundler/manifest">`: JSON map of `uuid -> {mime, compressed, data(base64)}` holding the embedded images/fonts/scripts. Huge; avoid printing it (use `cut -c1-200` or targeted grep).
- `<script type="__bundler/ext_resources">`: CDN scripts (React 18.3.1 + ReactDOM) mapped to UUIDs.
- `<script type="__bundler/template">` (line ~388): a JSON-encoded string containing the real page (`<x-dc>` root, `<helmet>` with Google Fonts @font-face for Baloo 2, then the sections). `<`/`/` are escaped (`/`), so edits to this line must preserve JSON string escaping.

The page content inside the template is a single-column design on a 1440px canvas with inline-styled sections in this order: header/nav, `#topo` (hero), `#sobre`, `#turmas`, `#rotina`, `#visita`, `#contato`, footer. Styling is inline `style` attributes (no external CSS); brand colors include navy `#1E2559`, sky `#E6F5FD`, cream `#FFF4CC`; headings use `Baloo 2` with `clamp()` sizes. There is one `@media (max-width: 760px)` block. An `x-dc` script block exposes an `accent` color prop (options `#C8007A`, `#5A1E9C`, `#0080C2`, `#D93A00`).

## Working notes

- To inspect or change page content, extract the template JSON string from line ~388, edit it, and write it back as a valid JSON string; do not hand-edit around the base64 manifest.
- Images in `img/` appear to be source assets; the page itself references embedded copies via the manifest UUIDs, so adding/replacing an image requires updating the manifest entry (or the bundler input), not just dropping a file in `img/`.
- `.codegraph/` is a CodeGraph index directory; it is not project source.
