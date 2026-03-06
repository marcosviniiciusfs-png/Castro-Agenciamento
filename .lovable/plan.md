
## Plano: Substituir Logos do Cabeçalho e Rodapé

**Tarefa**: Trocar a imagem da logo "AC AGENCIAMENTO" em ambos os componentes (Header e Footer).

**Contexto Atual**:
- `Header.tsx` (linha 4): Importa `castroLogo` de `@/assets/castro-logo.png`
- `Header.tsx` (linha 21): Exibe logo com `className="h-12 w-auto"`
- `Footer.tsx` (linha 2): Importa `castroLogo` de `@/assets/castro-logo.png`
- `Footer.tsx` (linha 12): Exibe logo com `className="h-12 w-auto"`

**O que será feito**:
1. Copiar a nova imagem da logo do upload para `src/assets/castro-logo.png` (sobrescrever a atual)
   - Origem: `user-uploads://Cópia_de_A7_-_LOGOS_2.png`
   - Destino: `src/assets/castro-logo.png`

2. Os componentes `Header.tsx` e `Footer.tsx` já estão configurados corretamente:
   - Ambos importam a mesma logo
   - Mantêm o tamanho `h-12 w-auto`
   - Alt text já está correto: "AC Castro Agenciamento"
   - Nenhuma mudança de código é necessária - apenas substituir o arquivo de imagem

**Resultado**: A nova logo será exibida automaticamente em ambos os locais com a mesma qualidade e proporcionalidade.
