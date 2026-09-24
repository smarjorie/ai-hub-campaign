# Traffiq Dashboard Pro

Dashboard profissional para gestores de tráfego com Meta Ads, Google Ads, TikTok, WhatsApp CRM e mais.

## Setup local

```bash
npm install
cp .env.example .env.local
# Preencha as variáveis no .env.local
npm run dev
# Acesse http://localhost:3000
```

## Deploy na Vercel

```bash
npm i -g vercel
vercel --prod
# Configure as variáveis de ambiente no Vercel Dashboard
```

## Seções do dashboard

- **Visão Geral** — KPIs, timeline 30 dias, funil resumido, mapa de regiões
- **Campanhas** — Hierarquia 3 níveis (Campanha → Conjunto → Anúncio) com toggles e edição de orçamento inline
- **Funil de Tráfego** — Cliques → Page Views → Add to Cart → Checkouts → Compras
- **Criativos** — Tabela completa de performance por anúncio
- **Público** — Gênero, faixa etária com gráficos donut
- **Mapa de Alcance** — Top regiões do Brasil com barras de alcance
- **Insights IA** — Recomendações automáticas de otimização
- **WhatsApp CRM** — Conversas conectadas às campanhas, chat ao vivo
- **Integrações** — Conecte Meta (MCP/API), Google (OAuth/API), TikTok, GA4, WhatsApp BSP

## Webhook de vendas

```bash
curl -X POST https://seu-projeto.vercel.app/api/webhook/sale \
  -H "Content-Type: application/json" \
  -H "x-webhook-secret: seu_secret" \
  -d '{"sale_id":"ORD-001","value":297.00,"campaign_id":"c1","adset_id":"c1-as-1","ad_id":"c1-as1-ad-1"}'
```

## SQL Supabase

```sql
CREATE TABLE sales (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  sale_id TEXT NOT NULL UNIQUE,
  value NUMERIC(10,2) NOT NULL,
  campaign_id TEXT NOT NULL,
  adset_id TEXT NOT NULL,
  ad_id TEXT NOT NULL,
  platform TEXT DEFAULT 'meta',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE sales ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow insert" ON sales FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow read" ON sales FOR SELECT USING (true);
```

## Stack

- Next.js 14 + TypeScript
- Tailwind CSS (dark theme customizado)
- Recharts (gráficos interativos)
- Supabase (banco de vendas)
- Vercel (deploy)
