# Atividade 01 - Desenvolvimento de Sistemas Web II

API desenvolvida em Node.js + TypeScript para gerenciar tarefas (tasks), seguindo os requisitos da disciplina.

## Como rodar o projeto

1. Clonar o repositório:
   ```bash
   git clone web-2-atividade-01
   cd atividade-01

2. Instalar as dependências:
   ```
   npm install
   ```


3. Rodar em modo desenvolvimento:

   ```bash
   npx ts-node-dev src/index.ts
   ```

4. O servidor estará disponível em:

   ```
   http://localhost:3000
   ```

## Rotas disponíveis

* **POST /tasks** → Criar uma nova task
* **GET /tasks** → Listar todas as tasks (com busca opcional por `?search=`)
* **PUT /tasks/\:id** → Atualizar uma task existente
* **PATCH /tasks/\:id/complete** → Marcar ou desmarcar uma task como concluída
* **DELETE /tasks/\:id** → Remover uma task

## Testes no Insomnia

1. Abrir o Insomnia.
2. Criar uma nova Collection chamada `Tasks API`.
3. Adicionar as requisições conforme as rotas acima.

Exemplo de corpo para **POST /tasks**:

```json
{
  "title": "Estudar TypeScript",
  "description": "Revisar generics e interfaces"
}
```

