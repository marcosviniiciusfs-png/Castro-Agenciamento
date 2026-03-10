

## Diagnóstico

A imagem mostra claramente o erro CORS:

> Request header field **x-supabase-client-platform** is not allowed by Access-Control-Allow-Headers in preflight response.

O header `x-supabase-client-platform` que adicionamos na última alteração está sendo bloqueado pela Edge Function. A função não inclui esse header na lista de `Access-Control-Allow-Headers`.

## Solução

**Arquivo:** `src/components/Simulator.tsx`

Remover os headers extras (`x-supabase-client-platform` e `x-supabase-client-platform-version`) do fetch para o webhook Supabase, enviando apenas `Content-Type`:

```typescript
fetch("https://uxttihjsxfowursjyult.supabase.co/functions/v1/form-webhook/65d8726823a8aa81ba15f5f9554ecc553785431eeedc7d443ef51dce5e1e5a5e", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(webhookData),
}),
```

Isso resolve o bloqueio CORS porque `Content-Type` é um header padrão aceito pela maioria das Edge Functions.

