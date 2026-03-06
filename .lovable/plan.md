

## Plano: Atualizar URL do Webhook no Simulador

A estrutura JSON já está exatamente como solicitado no código atual. A única mudança necessária é trocar a URL do webhook.

### Alteração

**Arquivo:** `src/components/Simulator.tsx` (linha ~107)

Trocar a URL atual:
```
https://hook.us1.make.com/rr8wprwrp6h22xrt2kk295kfpdyd0453
```

Para a nova URL:
```
https://hook.us1.make.com/9g1zruupku13436nq7iblwt3owbypyqc
```

Nenhuma outra alteração é necessária — a estrutura JSON, o método POST e o envio automático ao finalizar já estão implementados corretamente.

