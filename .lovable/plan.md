

## Plano: Atualizar integração CRM com novos campos e token

### Alterações em `src/components/Simulator.tsx`

**1. Atualizar campos do FormData (linhas 116-124):**
- Mudar `"Selecione o tipo de bem"` → `"Qual tipo de bem você deseja adquirir?"`
- Converter valores do tipo de bem para UPPERCASE (o mapeamento depende dos valores atuais no simulador)
- Mudar resposta de entrada `"Sim"/"Não"` → `"SIM"/"NAO"`
- Adicionar novo campo `"WhatsApp para contato"` com `formData.whatsapp`

**2. Atualizar Bearer token (linha 148):**
- De: `NjA2ZmFmYWEtZGE3Mi00NWMyLWJiYTAtMzVkY2U4YjliYTQ3OjE3NzQzNjA5MzU=`
- Para: `NDFhYTlhNjUtMGFhZC00YjUxLTg4ZmUtZmM3ZjYwYmYwMDE3OjE3NzQzNzg2Mjk=`

### Mapeamento atualizado

| Campo CRM | Valor |
|---|---|
| Nome | fullName |
| Telefone | whatsapp |
| Qual tipo de bem você deseja adquirir? | propertyType (UPPERCASE) |
| Qual o valor do crédito que deseja simular? | creditAmount |
| Tem valor de entrada? | SIM / NAO |
| Qual valor de entrada disponível? | downPaymentAmount |
| Qual a parcela mensal ideal pra você? | monthlyPayment |
| Qual cidade você reside? | city |
| Nome completo | fullName |
| WhatsApp para contato | whatsapp |

