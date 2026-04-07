

## Plano: Atualizar webhook ConvexCRM

### Alteração

**Arquivo:** `supabase/functions/convex-proxy/index.ts`

1. Atualizar `CONVEX_URL` para `https://app.convexcrm.com.br/api/webhooks/integrations/dde2b70b777f46c98620a11c3ad8264f`
2. Atualizar `CONVEX_TOKEN` para `whi_g9GnwzPcIpCVx2I6tP5lrSk4wBqcWwEe`

**Arquivo:** `src/components/Simulator.tsx`

Atualizar o payload `convexData` para incluir os novos campos do exemplo:

```typescript
const convexData = {
  nome: formData.fullName,
  telefone: formData.whatsapp.replace(/\D/g, ""),
  tipo: "IMOVEL",
  interesse: formData.propertyType,
  quanto_tempo: "",
  credito: formData.creditAmount,
  entrada_disponivel: formData.hasDownPayment === "Sim" ? formData.downPaymentAmount : "NAO",
  parcela_ideal: formData.monthlyPayment,
  cidade: formData.city,
  whatsapp: formData.whatsapp.replace(/\D/g, ""),
};
```

