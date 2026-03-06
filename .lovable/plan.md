
## Plano: Substituir Logo do Cabeçalho e Rodapé

**Tarefa**: Trocar a logo "Trajano Abreu Empreendimentos" pela nova logo "AC CASTRO AGENCIAMENTO" em ambos os componentes (Header e Footer).

**O que será feito**:

1. **Copiar a imagem** do upload para a pasta `src/assets/`
   - Origem: `user-uploads://Cópia_de_A7_-_LOGOS_1_1.png`
   - Destino: `src/assets/castro-logo.png`

2. **Atualizar Header.tsx**
   - Substituir import: `trajanoAbreuLogo` → `castroLogo`
   - Atualizar alt text: "Trajano Abreu Empreendimentos" → "AC Castro Agenciamento"

3. **Atualizar Footer.tsx**
   - Substituir import: `trajanoAbreuLogo` → `castroLogo`
   - Atualizar alt text: "Trajano Abreu Empreendimentos" → "AC Castro Agenciamento"

**Detalhes técnicos**:
- A logo será importada como módulo ES6 em ambos os componentes
- Mantém a mesma altura (`h-12`) para consistência visual
- Nenhuma mudança em estilos ou layout
