export async function POST(req) {
    try {
      const formData = await req.formData();
  
      const response = await fetch("https://formspree.io/f/xjkgrvae", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error("Form submission failed");
      }
  
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }
  }
  