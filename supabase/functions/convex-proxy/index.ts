const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const CONVEX_URL = "https://app.convexcrm.com.br/api/webhooks/integrations/dde2b70b777f46c98620a11c3ad8264f";
const CONVEX_TOKEN = "whi_g9GnwzPcIpCVx2I6tP5lrSk4wBqcWwEe";

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const body = await req.json();

    const response = await fetch(CONVEX_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${CONVEX_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const responseText = await response.text();

    return new Response(JSON.stringify({ 
      status: response.status, 
      body: responseText 
    }), {
      status: response.ok ? 200 : response.status,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
