# PROJECT_STYLE.md
# Design system deste projeto. Edite à vontade.
# Gerado em: 2026-07-01 (derivado automaticamente do index.html existente)

## Projeto
name: Portarias SEAGRI
description: Páginas estáticas de apoio à SEAGRI/AC — solicitações de lotação, habilitação de assinatura e organograma institucional.
tone: institucional, profissional, confiável

## Stack
framework: HTML puro (GitHub Pages)
typescript: não
component_library: nenhuma
icons: nenhuma (emoji/unicode quando necessário)
animations: CSS puro

## Cores
primary: "#1b5e20"
primary_hover: "#2e7d32"
background: "#fafafa"
surface: "#ffffff"
border: "#e0e0e0"
text_primary: "#212121"
text_secondary: "#666666"
accent: "#0b5394"
success: "#2e7d32"
error: "#e65100"
warning: "#ff9800"

## Dark Mode
dark_mode: light_only

## Tipografia
font_heading: "Roboto — sistema (fallback Segoe UI, Arial)"
font_body: "Roboto — sistema (fallback Segoe UI, Arial)"
font_mono: "Consolas — sistema"

## Layout & Tokens
border_radius: modern
density: balanced

## Componentes Específicos do Domínio
# - Card de portaria: número + badge de status (Pendente/Concluído) + link do PDF + textos copiáveis
# - Barra de progresso: gradiente verde, percentual e contagem X/Y
# - Organograma (organograma.html): reprodução fiel do slide oficial — cores do slide
#   (roxo #7030A0 Secretária, amarelo #FFC000 assessorias, azul #4472C4 Adm/Finanças,
#   verde #70AD47 Produção/Agronegócio, laranja #ED7D31 Pesquisa/Tecnologia),
#   caixas com cabeçalho colorido + corpo branco com nome e portaria, bordas pretas,
#   seções expansíveis/recolhíveis. Nesta página a fidelidade ao slide prevalece
#   sobre os tokens acima.
