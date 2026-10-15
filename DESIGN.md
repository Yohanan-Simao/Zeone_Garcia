---
name: Centro Educacional Professora Zeone Garcia
description: Landing page acolhedora e lúdica de uma escola infantil, com o arco-íris do logo sobre creme e azul-marinho firme.
colors:
  cream: "#FFF6E3"
  cream-warm: "#FFEBC2"
  sky: "#E6F5FD"
  white: "#FFFFFF"
  navy: "#1F2A5C"
  ink: "#2B3157"
  magenta: "#C8007A"
  purple: "#5A1E9C"
  blue: "#0070B8"
  green: "#1B7F3B"
  orange: "#C84A00"
  red: "#C7102E"
  sun: "#FFC933"
  action: "#FFC93C"
  action-hover: "#FFB800"
  action-edge: "#D99A00"
  field-border: "#7D87AF"
  placeholder: "#6B7194"
typography:
  display:
    fontFamily: "'Baloo 2', 'Trebuchet MS', sans-serif"
    fontSize: "clamp(2.4rem, 9vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "'Baloo 2', 'Trebuchet MS', sans-serif"
    fontSize: "clamp(1.9rem, 6vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.08
  title:
    fontFamily: "'Baloo 2', 'Trebuchet MS', sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 1.1
  body:
    fontFamily: "'Nunito', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Nunito', system-ui, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 800
    lineHeight: 1.3
rounded:
  field: "16px"
  caption: "22px"
  card: "28px"
  pill: "999px"
  round: "50%"
spacing:
  gutter: "20px"
  stack: "28px"
  section: "72px"
  container: "1160px"
components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
    padding: "0.7em 1.4em"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.action-hover}"
    textColor: "{colors.navy}"
  button-large:
    backgroundColor: "{colors.action}"
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
    padding: "0.8em 1.7em"
    height: "58px"
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "22px"
  field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.field}"
    padding: "0.6em 1em"
    height: "50px"
  quote:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.card}"
    padding: "26px 24px 22px"
---

# Design System: Centro Educacional Professora Zeone Garcia

## Overview

**Creative North Star: "A Ciranda"**

Como no logo, em que pessoas de cores diferentes formam uma roda, a interface é feita de cores vivas dispostas em círculo ao redor de uma base calma: creme quente e azul-marinho firme. O arco-íris nunca vira papel de parede; aparece como acento (pontos, ícones, manchas suaves, avatar) para que o texto continue legível e a página inspire confiança antes de inspirar festa.

O tom é acolhedor e lúdico por fora, confiável por dentro: cantos bem arredondados, mascote em destaque, alvos de toque grandes e contraste alto. A página é pensada para pais no celular, com uma única ação (agendar visita pelo WhatsApp) sempre em amarelo e navy.

**Key Characteristics:**
- Base creme e azul-marinho; arco-íris só como acento.
- Formas redondas (28px nos cartões, pílula nos botões, círculos nos ícones).
- Profundidade macia: sombras longas e difusas em navy, fundos em degradê suave.
- Ilustração do mascote como protagonista visual; texto curto e direto.
- Movimento com função (entrada ao rolar, balões do fechamento), sempre desligável.

## Colors

Uma base quente (creme) e fria (céu), sustentada por azul-marinho, com o arco-íris do logo e um único amarelo de ação.

### Primary
- **Amarelo Convite** (#FFC93C): o botão de ação principal (agendar visita), com texto navy; hover em #FFB800 e faixa inferior em #D99A00.
- **Azul-marinho Giz** (#1F2A5C): títulos, texto de botões, foco, faixa de fatos e rodapé.

### Secondary
- **Magenta Roda** (#C8007A): acento de idade (Berçário), aspas dos depoimentos, indicador ativo do trilho.
- **Azul Céu Aberto** (#0070B8): acento do Maternal e dos ícones de inclusão.
- **Verde Folha** (#1B7F3B): acentos de confirmação (check da lista) e do projeto de culinária.

### Tertiary
- **Roxo Giz de Cera** (#5A1E9C), **Laranja Tangerina** (#C84A00), **Vermelho Maçã** (#C7102E), **Sol** (#FFC933): só como cor de ícone, avatar, balão e mancha; nunca como texto corrido.

### Neutral
- **Creme Pão Quente** (#FFF6E3): fundo da página e do hero.
- **Creme Mel** (#FFEBC2): base do degradê de Projetos.
- **Céu Claro** (#E6F5FD): fundo das turmas e do início da seção de visita.
- **Branco** (#FFFFFF): cartões, campos e legendas.
- **Tinta** (#2B3157): texto corrido (11:1 sobre creme).
- **Borda de Campo** (#7D87AF) e **Placeholder** (#6B7194): campos de formulário, com contraste de componente acima de 3:1.

### Named Rules
**A Regra da Roda.** Cada cor do arco-íris aparece em círculos, pontos ou manchas, e nunca como fundo de bloco de texto. A leitura é sempre navy ou tinta sobre creme, branco ou céu.

**A Regra do Único Amarelo.** O amarelo de ação (#FFC93C) é reservado ao que leva ao WhatsApp. Nenhum outro elemento usa essa cor como preenchimento.

## Typography

**Display Font:** Baloo 2 (com Trebuchet MS)
**Body Font:** Nunito (com system-ui)

**Character:** Baloo 2 é redonda e gordinha, quase uma letra de brinquedo, mas firme o bastante para títulos longos. Nunito mantém a leitura calma e legível para pais cansados.

### Hierarchy
- **Display** (800, clamp(2.4rem, 9vw, 3.5rem) no celular e até 4.2rem no desktop, 1.04): o título do hero, uma frase por tela.
- **Headline** (800, clamp(1.9rem, 6vw, 3rem), 1.08): títulos de seção, equilibrados (`text-wrap: balance`).
- **Title** (800, 1.5rem, 1.1): nome de turma, diferencial, projeto e formulário.
- **Body** (400, 1.0625rem, 1.6): texto corrido, até ~52ch no lead.
- **Label** (800, 0.92rem): rótulos de campo, pequenos destaques e links de turma.

### Named Rules
**A Regra da Frase Curta.** Títulos cabem em até três linhas no celular. Se o texto não cabe, é o texto que encolhe, não a fonte.

## Layout

Coluna única no celular, com 20px de respiro lateral. A partir de 900px a grade ganha colunas (3 cartões de turma, 3 de projeto; lista de diferenciais ao lado do título, que fica fixo ao rolar). O contêiner tem 1160px. Seções têm 72px de espaço vertical e blocos internos de 28px a 40px.

O hero usa o vídeo em tamanho nativo (1280px) com bordas laterais suavizadas; abaixo de 960px ele vira uma faixa 4:3 acima do texto. Projetos viram um trilho horizontal com encaixe abaixo de 900px. O menu é um painel com hambúrguer abaixo de 960px.

### Named Rules
**A Regra do Polegar.** Todo alvo de toque tem pelo menos 44px de altura; a ação principal fica no alcance do polegar e acima da dobra no celular.

## Elevation & Depth

Profundidade macia e em camadas: cartões brancos sobre fundos em degradê, com sombras longas e difusas em navy que somem na borda. A elevação responde ao estado (botões sobem 2px no hover; links de turma deslizam a seta), nunca é decorativa.

### Shadow Vocabulary
- **Cartão** (`box-shadow: 0 18px 36px -22px rgba(31, 42, 92, .45)`): turmas e depoimentos em repouso.
- **Formulário** (`box-shadow: 0 26px 46px -30px rgba(31, 42, 92, .55)`): o cartão do formulário, a superfície mais elevada.
- **Legenda** (`box-shadow: 0 16px 30px -20px rgba(31, 42, 92, .5)`): legendas de projeto sobrepostas à imagem.
- **Botão de ação** (`box-shadow: 0 10px 20px -10px rgba(217, 154, 0, .95), inset 0 -3px 0 rgba(217, 154, 0, .55)`): sombra amarelo-ouro mais uma faixa inferior de 3px que dá corpo ao botão.

### Named Rules
**A Regra da Sombra Longa.** Toda sombra tem deslocamento vertical e desfoque amplo; nenhuma é um halo sem deslocamento.

## Shapes

Formas redondas e acolhedoras: 28px nos cartões, 22px nas legendas, 16px nos campos, pílula (999px) nos botões e círculo em ícones, avatares e indicadores. Ícones usam traço de 3px com pontas arredondadas, dentro de um círculo tingido pela própria cor. Cartões de turma ganham inclinação suave (-1.4° e +1.2°) no desktop, como folhas soltas.

## Components

### Buttons
- **Shape:** pílula (999px), altura mínima 48px; a versão grande tem 58px.
- **Primary:** fundo amarelo (#FFC93C), texto navy, ícone do WhatsApp em navy; faixa inferior de 3px dourada.
- **Hover / Focus:** hover escurece para #FFB800 e sobe 2px; foco é um anel navy de 3px com 3px de distância.
- **Secondary:** link de texto sublinhado em dourado com seta (turmas) ou link sublinhado com ícone ("Prefiro falar no WhatsApp agora").

### Cards / Containers
- **Corner Style:** 28px.
- **Background:** branco sobre céu ou creme.
- **Shadow Strategy:** sombra longa de cartão (ver Elevation).
- **Internal Padding:** 22px a 28px.

### Inputs / Fields
- **Style:** fundo branco, borda de 2px em #7D87AF, raio de 16px, altura 50px, texto navy 600.
- **Focus:** anel navy de 3px com 2px de distância e borda navy.
- **Error:** borda vermelha, fundo rosado e mensagem curta e acolhedora abaixo, ligada ao campo.

### Navigation
- Topo fixo creme translúcido com logo, quatro links e o botão amarelo; no celular, hambúrguer que abre um painel com fundo escurecido e o botão de agendar no fim.

### Depoimentos
- Cartão branco com aspas grandes na cor do avatar (34% de opacidade), texto em navy e avatar circular com inicial. O primeiro, mais longo, é maior e ocupa duas linhas no desktop.

## Do's and Don'ts

### Do:
- **Do** manter o texto em navy (#1F2A5C) ou tinta (#2B3157) sobre creme, branco ou céu.
- **Do** usar o amarelo #FFC93C com texto navy só para ações que levam ao WhatsApp.
- **Do** dar a todo alvo de toque no mínimo 44px e anel de foco visível.
- **Do** usar raio de 28px nos cartões e pílula nos botões.
- **Do** desligar todo movimento decorativo para quem pede movimento reduzido.

### Don't:
- **Don't** usar o arco-íris como fundo de bloco de texto nem como cor de texto corrido.
- **Don't** repetir o mesmo botão amarelo em cada cartão; turmas usam link discreto.
- **Don't** usar sombras sem deslocamento ou blocos de sombra dura.
- **Don't** colocar texto sobre imagens do mascote sem uma superfície branca por baixo.
- **Don't** publicar dado da escola não confirmado; use colchetes ou deixe de fora (ver PENDENCIAS.md).
