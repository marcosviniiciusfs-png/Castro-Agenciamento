

## Diagnóstico e Correção: Webhook Supabase não recebendo leads

### Problema
O `Promise.allSettled` engole os erros silenciosamente. Mesmo que o webhook Supabase falhe (CORS, 4xx, 5xx), o usuário vê sucesso e o erro não aparece no console.

### Solução
Adicionar logging dos resultados de cada webhook no console para diagnosticar o problema, e adicionar headers extras que o Supabase Edge Function pode exigir.

### Alterações em `src/components/Simulator.tsx`

1. **Adicionar logging dos resultados** após o `Promise.allSettled` para capturar erros:

```typescript
const results = await Promise.allSettled([
  fetch("https://hook.us1.make.com/...", { ... }),
  fetch("https://uxttihjsxfowursjyult.supabase.co/functions/v1/form-webhook/...", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(webhookData),
  }),
]);

// Log resultados para diagnóstico
results.forEach((result, index) => {
  const name = index === 0 ? "Make.com" : "Supabase";
  if (result.status === "fulfilled") {
    console.log(`${name} webhook: ${result.value.status} ${result.value.statusText}`);
  } else {
    console.error(`${name} webhook falhou:`, result.reason);
  }
});
```

Isto permitirá ver no console exatamente qual erro o webhook Supabase está retornando (CORS, 404, 500, etc.) para podermos corrigir a causa raiz.

