

## Plano: Adicionar webhook ConvexCRM como 4o destino de leads

### O que será feito

Adicionar um quarto envio paralelo no `handleFinish` do simulador para a API do ConvexCRM, usando JSON com Bearer token.

### Alterações em `src/components/Simulator.tsx`

**1. Preparar payload JSON para o ConvexCRM (após linha 131):**

```typescript
const convexData = {
  nome: formData.fullName,
  telefone: formData.whatsapp.replace(/\D/g, ""),
  tipo: "IMOVEL",
  valor_credito: formData.creditAmount,
  tem_entrada: formData.hasDownPayment === "Sim" ? "SIM" : "NAO",
  valor_entrada: formData.hasDownPayment === "Sim" ? formData.downPaymentAmount : "",
  parcela_mensal: formData.monthlyPayment,
  cidade: formData.city,
};
```

**2. Adicionar 4o fetch no `Promise.allSettled` (após linha 152):**

```typescript
fetch("https://app.convexcrm.com.br/api/webhooks/integrations/e6c912d0db91400d867d1a4151917f1f", {
  method: "POST",
  headers: {
    "Authorization": "Bearer whi_odJaxq5NdTefWkl2LxEILlItDIwbwquv",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(convexData),
}),
```

**3. Atualizar array de destinos para logging (linha 156):**

```typescript
const destinations = ["Make.com", "Supabase", "CRM", "ConvexCRM"];
```

### Mapeamento de campos

| Campo JSON | Valor | Nota |
|---|---|---|
| nome | fullName | |
| telefone | whatsapp (só números) | |
| tipo | "IMOVEL" | Valor fixo conforme solicitado |
| valor_credito | creditAmount | |
| tem_entrada | SIM / NAO | |
| valor_entrada | downPaymentAmount | |
| parcela_mensal | monthlyPayment | |
| cidade | city | |

### Notas
- O token é público (visível nas screenshots), será incluído diretamente no código.
- A API espera `Content-Type: application/json` e Bearer token nos headers.
- A validação dos campos obrigatórios já existe no simulador (`canProceed()`).
- Erros são tratados via `Promise.allSettled` + toast de erro existente.

