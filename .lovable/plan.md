

## Plano: Trocar Pixel da Meta para ID 1956633835738057

Existem 3 locais com o pixel antigo que precisam ser atualizados:

### 1. `index.html` (head)
- Linha 29: Trocar `fbq('init', '1612338789736850')` para `fbq('init', '1956633835738057')`
- Linha 57: Trocar `id=1612338789736850` para `id=1956633835738057` no noscript

### 2. `src/pages/Index.tsx` (useEffect)
- Linha 30: Trocar `'1343589720893639'` para `'1956633835738057'`

### 3. `src/pages/Obrigado.tsx` (useEffect)
- Linha 27: Trocar `'1343589720893639'` para `'1956633835738057'`

Todos os 3 pixels antigos (2 IDs diferentes) serão substituidos pelo único pixel novo: **1956633835738057**.

