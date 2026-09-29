# Site Limpa Sofá — inicial

## Rodar localmente
```bash
npm install
npm run dev
```
Acesse http://localhost:3000

## Gerar versão estática (o que vai pro Netlify)
```bash
npm run generate
```
Saída em `.output/public`.

## Estrutura
- `content/dados-site.json` — dados que o cliente edita pelo painel (/admin)
- `pages/index.vue` — página principal, lê o JSON acima
- `components/FormOrcamento.vue` — formulário que monta a mensagem e abre o WhatsApp
- `public/admin/` — Decap CMS (painel de edição)

## Deploy
Siga o passo a passo do Netlify + Git Gateway já combinado:
1. Suba este projeto num repositório Git
2. Conecte no Netlify (Add new site → Import an existing project)
3. Build command: `npm run generate`
4. Publish directory: `.output/public`
5. Ative Identity + Git Gateway em Site configuration
6. Convide o cliente em Identity → Invite users
