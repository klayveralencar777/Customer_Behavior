# Migração Gradual para TypeScript (TS + JS juntos)

## 1) Fluxo recomendado de branch

```bash
git checkout -b chore/migracao-typescript
```

---

## 2) Backend: habilitar TS sem remover JS

Status atual: ✅ configurado neste projeto com `allowJs: true`.

### O que foi adicionado

- `backend/tsconfig.json`
- scripts no `backend/package.json`:
  - `dev:ts`
  - `typecheck`
  - `build`
  - `start:dist`
- dependências de dev:
  - `typescript`
  - `tsx`
  - `@types/node`
  - `@types/express`

### Instalação

```bash
cd backend
npm install
```

### Como rodar

```bash
# continua igual (JS puro)
npm run start

# modo gradual JS + TS (recomendado para migração)
npm run dev:ts
```

### Como validar tipos

```bash
npm run typecheck
```

---

## 3) Como funciona TS + JS ao mesmo tempo

No backend, o `tsconfig.json` usa:

- `allowJs: true` → aceita `.js` junto com `.ts`
- `checkJs: false` → não obriga tipagem nos `.js` antigos
- `module: "NodeNext"` → compatível com seu ESM (`"type": "module"`)

Resultado prático:

- Você pode migrar **1 arquivo por vez**.
- Arquivos `.js` continuam funcionando.
- Novos arquivos `.ts` já entram com tipagem.

---

## 4) Ordem segura de migração (backend)

1. Migrar primeiro arquivos de baixo acoplamento (`repository/*`).
2. Depois `service/*`.
3. Depois `controller/*`.
4. Por último rotas e `server.js`.

---

## 5) Regras importantes de import (ESM)

Mesmo em arquivo `.ts`, mantenha import com sufixo `.js`:

```ts
import CustomerService from '../service/CustomerService.js'
```

Isso é o padrão com `NodeNext` para funcionar no build final.

---

## 6) Mini-checklist por arquivo migrado

- [ ] Renomear arquivo `.js` para `.ts`
- [ ] Adicionar tipos básicos em parâmetros e retornos
- [ ] Rodar `npm run typecheck`
- [ ] Rodar app (`npm run dev:ts`)
- [ ] Commit pequeno

---

## 7) Próximo passo sugerido

Comece por `backend/src/repository/CustomerRepository.js` e converta para `CustomerRepository.ts` com tipos simples (sem refactor grande).
