## 4. Design e Identidade Visual

- **Paleta de Cores:**
  - **Primária:** `#FF5733` (Laranja vibrante)
  - **Secundária:** `#FFFFFF` (Branco)
  - **Fundo:** `#FDFDFD` (Branco suave)
  - **Texto Principal:** `#333333` (Cinza escuro)
  - **Texto Secundário:** `#666666` (Cinza médio)
  - **Acentos:** `#4CAF50` (Verde para sucesso/confirmação)

- **Tipografia:**
  - **Títulos (Headings):** "Playfair Display", "Georgia", ou outra fonte serifada elegante.
  - **Corpo do Texto (Body):** "Lato", "Roboto", ou outra fonte sans-serif limpa e legível.

- **Estilo Geral:** O design deve ser moderno, limpo e apetitoso. Utilizar imagens de alta qualidade das pizzas e do ambiente do restaurante para criar uma experiência visualmente atraente. A interface deve ser intuitiva e fácil de navegar.

## 5. Componentes e Funcionalidades

### 5.1. Componentes Reutilizáveis

- **Button:** Botão customizável com variantes (primário, secundário, etc.).
- **Card:** Componente para exibir itens do menu ou fotos da galeria.
- **Section:** Componente genérico para criar seções de conteúdo com título e subtítulo.
- **Navbar:** Barra de navegação com links para as seções da página.
- **Footer:** Rodapé com informações de contato, links para redes sociais e horário de funcionamento.

### 5.2. Seções da Página Principal (`app/page.tsx`)

1.  **Hero Section:**
    -   Imagem de fundo de alta qualidade de uma pizza.
    -   Título principal: "Sabor que Inspira".
    -   Subtítulo: "Feita com os melhores ingredientes, com massa de fermentação natural e assada no forno a lenha."
    -   Botão de CTA (Call to Action): "VER CARDÁPIO".

2.  **Sobre Nós:**
    -   Breve história da Pizzaria Napoli.
    -   Missão e valores.
    -   Foto da equipe ou do ambiente do restaurante.

3.  **Cardápio (Menu):**
    -   Seção com as categorias de pizza (Tradicionais, Especiais, Premium, Doces).
    -   Cada categoria terá uma lista de pizzas com:
        - Nome da pizza
        - Descrição dos ingredientes
        - Preço
        - Imagem (opcional)

4.  **Galeria:**
    -   Grid de fotos atraentes das pizzas e do restaurante.
    -   Efeito de lightbox ao clicar em uma imagem para visualização em tela cheia.

5.  **Contato:**
    -   Endereços das filiais com links para o Google Maps.
    -   Telefone de contato.
    -   Horário de funcionamento.
    -   Formulário de contato simples (Nome, E-mail, Mensagem).

## 6. Integrações

-   **Google Analytics:** Para monitorar o tráfego do site e o comportamento dos usuários.
-   **Meta Pixel:** Para rastrear conversões de campanhas no Facebook e Instagram.
-   **Link para Pedido Online:** Um botão destacado que redireciona para a plataforma de delivery (por exemplo, iFood).
- **WhatsApp:** Um botão de chat direto para contato rápido com o cliente.

## 7. Próximos Passos (Desenvolvimento)

-   [ ] **Configurar o ambiente de desenvolvimento** (já concluído).
-   [ ] **Criar a estrutura de arquivos e pastas** (já concluído).
-   [ ] **Desenvolver o componente Header (Navbar).**
-   [ ] **Desenvolver o componente Footer.**
-   [ ] **Criar a Hero Section na `page.tsx`.**
-   [ ] **Criar a seção "Sobre Nós".**
-   [ ] **Desenvolver o componente Cardápio e as categorias de pizza.**
-   [ ] **Criar a Galeria de Fotos.**
-   [ ] **Implementar o formulário de Contato.**
-   [ ] **Integrar o Google Analytics e o Meta Pixel.**
-   [ ] **Testar a responsividade em diferentes dispositivos.**
-   [ ] **Otimizar para SEO (meta tags, alt text para imagens, etc.).**
-   [ ] **Deploy final na Vercel.**

---
