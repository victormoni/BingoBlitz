# Bingo Blitz 🎲

Bem-vindo ao Bingo Game! Este é um projeto simples e divertido que simula um jogo de bingo. Com ele, você pode sortear números aleatórios, visualizar os números sorteados em uma tabela e até mesmo resetar o jogo para começar de novo. Abaixo, você encontrará instruções sobre como configurar o projeto, como utilizá-lo e algumas informações adicionais.

Link do site: https://bingo-game-ten.vercel.app/

## 🛠️ Como Configurar o Projeto

### Pré-requisitos

- Node.js instalado (versão 18 ou superior).
- Git instalado (opcional, mas recomendado).

### Passo a Passo

1. Clone o repositório (se você estiver usando Git):

    ```bash
    git clone https://github.com/seu-usuario/bingo-game.git
    cd bingo-game
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

4. Acesse o projeto: Abra o navegador e acesse [http://localhost:5173](http://localhost:5173).

---

## 🎮 Como Utilizar o Bingo Game

### Interface do Jogo

- **Botão "Sortear Número"**: Clique neste botão para sortear um número aleatório entre 1 e 75. O número será exibido em uma animação de roleta.
- **Botão "Resetar Jogo"**: Clique neste botão para reiniciar o jogo, limpando todos os números sorteados e a tabela.
- **Tabela de Números Sorteados**: Os números sorteados são organizados em uma tabela, separados por colunas (B, I, N, G, O).
- **Últimos Números Sorteados**: Os últimos 10 números sorteados são exibidos em uma linha abaixo da tabela.

### Funcionalidades

- **Sorteio de Números**: O jogo garante que nenhum número seja repetido até que todos os 75 números sejam sorteados.
- **Reset do Jogo**: Permite reiniciar o jogo a qualquer momento, limpando todos os números sorteados.
- **Responsividade**: O jogo é totalmente responsivo e funciona bem em dispositivos móveis.

---

## 🚀 Como Executar o Projeto

### Modo de Desenvolvimento

Para rodar o projeto em modo de desenvolvimento, utilize o comando:

```bash
npm run dev
Modo de Produção
Para construir o projeto para produção, utilize o comando:

bash
Copiar código
npm run build
Visualizar o Build de Produção
Após construir o projeto, você pode visualizar o resultado com:

bash
Copiar código
npm run preview
🧰 Tecnologias Utilizadas
React: Biblioteca JavaScript para construção de interfaces de usuário.
TypeScript: Adiciona tipagem estática ao JavaScript, melhorando a qualidade do código.
Vite: Ferramenta de build rápida para desenvolvimento moderno.
ESLint: Ferramenta de linting para garantir a qualidade do código.
CSS Modules: Para estilização modular e organizada.
📂 Estrutura do Projeto
src/: Contém o código-fonte do projeto.
components/: Componentes React reutilizáveis.
App.tsx: Componente principal do aplicativo.
main.tsx: Ponto de entrada do aplicativo.
public/: Arquivos estáticos, como ícones.
vite.config.ts: Configuração do Vite.
tsconfig.json: Configuração do TypeScript.
eslint.config.js: Configuração do ESLint.
🤝 Contribuição
Se você quiser contribuir para este projeto, siga os passos abaixo:

Faça um fork do repositório.

Crie uma branch para sua feature:

bash
Copiar código
git checkout -b feature/nova-feature
Commit suas mudanças:

bash
Copiar código
git commit -m 'Adicionando nova feature'
Push para a branch:

bash
Copiar código
git push origin feature/nova-feature
Abra um Pull Request.

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

📞 Contato
Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato:

Email: seu-email@exemplo.com
GitHub: seu-usuario
Aproveite o jogo e divirta-se! 🎉
