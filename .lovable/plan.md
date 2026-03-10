

## Plano: Adicionar segundo webhook para envio de leads

Adicionar um envio paralelo dos dados do formulário para o novo endpoint Supabase, além do webhook Make.com já existente.

### Alteração

**Arquivo:** `src/components/Simulator.tsx` (linhas 114-121)

Substituir o envio único por dois envios paralelos usando `Promise.allSettled` para garantir que ambos são chamados independentemente:

```typescript
// Enviar para ambos webhooks em paralelo
await Promise.allSettled([
  fetch("https://hook.us1.make.com/9g1zruupku13436nq7iblwt3owbypyqc", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(webhookData),
  }),
  fetch("https://uxttihjsxfowursjyult.supabase.co/functions/v1/form-webhook/65d8726823a8aa81ba15f5f9554ecc553785431eeedc7d443ef51dce5e1e5a5e", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(webhookData),
  }),
]);
```

Usar `Promise.allSettled` em vez de `Promise.all` garante que se um webhook falhar, o outro ainda será processado normalmente.

