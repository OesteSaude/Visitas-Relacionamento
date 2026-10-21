# Visitas – Relacionamento Corporativo (Oeste Saúde)

React (Vite) + Firebase Authentication + Realtime Database.

## Como rodar
1. `npm install`
2. Copie `.env.example` para `.env` e preencha com os dados do seu projeto Firebase (Configurações do projeto > Seus apps > Web).
3. No Firebase: ative **Authentication > E-mail/senha** e crie o **Realtime Database**.
4. Em **Realtime Database > Regras**, cole o conteúdo de `database.rules.json` e publique.
   Se o domínio de e-mail não for `@oestesaude.com.br`, troque-o também nas regras (usuarios > $uid > .write) e no `.env`.
5. `npm run dev`

## Como criar um administrador
Cada pessoa cria a conta pela tela "Criar conta". Depois, no console do Firebase, abra
**Realtime Database > usuarios > (id da pessoa)** e mude `administrador` de `false` para `true`.

## Estrutura dos dados
- `usuarios/{uid}`: nome, email, administrador
- `visitas/{uid}/{idVisita}`: dataVisita, empresa, cidade, objetivo, assuntos, nomeUsuario
- `acoesColetivas/{id}`: titulo, data, descricao (somente o administrador cria)

As regras garantem que cada funcionário só lê e edita as próprias visitas, e que só o administrador vê tudo.
