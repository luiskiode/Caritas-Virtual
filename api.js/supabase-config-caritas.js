(function () {
  const SUPABASE_URL = "https://lwpdpheoomdszxcjqccy.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3cGRwaGVvb21kc3p4Y2pxY2N5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY2NzkyMTUsImV4cCI6MjA3MjI1NTIxNX0._6oEjUeSY95ZrRIRzmmfAqZw-X1C8-P2mWUEE4d5NcY"; // tu key completa

  const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  window.CARITAS = window.CARITAS || {};
  window.CARITAS.supabase = supabase;
})();