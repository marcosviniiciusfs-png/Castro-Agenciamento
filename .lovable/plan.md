

## Plano: Enviar dados do simulador para o CRM de Consórcio

### O que será feito

Adicionar um terceiro envio paralelo no `handleFinish` do simulador, desta vez para a API do CRM de Consórcio (`https://app.crmdeconsorcio.com.br/api/v1/Integracao/Formulario`).

### Detalhes técnicos

**Arquivo:** `src/components/Simulator.tsx`

A API do CRM espera `FormData` (não JSON) e usa autenticação Bearer. Também captura parâmetros UTM da URL.

Adicionar após a criação do `webhookData` (antes do `Promise.allSettled`):

```typescript
// Preparar FormData para o CRM
const crmFormData = new FormData();
crmFormData.append("Nome", formData.fullName);
crmFormData.append("Telefone", formData.whatsapp);
crmFormData.append("Selecione o tipo de bem", formData.propertyType);
crmFormData.append("Qual o valor do crédito que deseja simular?", formData.creditAmount);
crmFormData.append("Tem valor de entrada?", formData.hasDownPayment);
crmFormData.append("Qual valor de entrada disponível?", formData.hasDownPayment === "Sim" ? formData.downPaymentAmount : "");
crmFormData.append("Qual a parcela mensal ideal pra você?", formData.monthlyPayment);
crmFormData.append("Qual cidade você reside?", formData.city);
crmFormData.append("Nome completo", formData.fullName);

// Capturar UTMs da URL
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get("utm_source")) crmFormData.append("UTMSource", urlParams.get("utm_source")!);
if (urlParams.get("utm_medium")) crmFormData.append("UTMMedium", urlParams.get("utm_medium")!);
if (urlParams.get("utm_campaign")) crmFormData.append("UTMCampaing", urlParams.get("utm_campaign")!);
```

Adicionar como terceiro item no `Promise.allSettled`:

```typescript
fetch("https://app.crmdeconsorcio.com.br/api/v1/Integracao/Formulario", {
  method: "POST",
  mode: "cors",
  headers: {
    "Authorization": "Bearer NjA2ZmFmYWEtZGE3Mi00NWMyLWJiYTAtMzVkY2U4YjliYTQ3OjE3NzQzNjA5MzU=",
  },
  body: crmFormData,
}),
```

Atualizar o logging para incluir "CRM" como terceiro resultado.

### Nota importante
- O CRM usa `FormData` (multipart), não JSON — por isso **não** se adiciona header `Content-Type` (o browser define automaticamente com boundary).
- O token Bearer é público (já está exposto no HTML fornecido).
- UTMs são capturados da URL atual automaticamente.

