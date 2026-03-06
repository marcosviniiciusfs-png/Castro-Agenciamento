

## Plano: Substituir Imagens do Carrossel de Clientes Contemplados

**Tarefa**: Remover as 11 imagens atuais do carrossel e substituir pelas 6 novas imagens enviadas.

**O que será feito**:

1. **Copiar as 6 imagens** para `src/assets/`:
   - `user-uploads://04.png` → `src/assets/cliente-contemplado-1.png`
   - `user-uploads://05.png` → `src/assets/cliente-contemplado-2.png`
   - `user-uploads://06.png` → `src/assets/cliente-contemplado-3.png`
   - `user-uploads://07.png` → `src/assets/cliente-contemplado-4.png`
   - `user-uploads://08.png` → `src/assets/cliente-contemplado-5.png`
   - `user-uploads://09.png` → `src/assets/cliente-contemplado-6.png`

2. **Atualizar `TestimonialsSection.tsx`**:
   - Remover imports das imagens 7 a 11 (que não serão mais usadas)
   - Atualizar o array `clientImages` para conter apenas as 6 novas imagens
   - Manter o carrossel, autoplay e layout iguais

