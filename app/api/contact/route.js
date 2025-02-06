export async function POST(req) {
  try {
      const data = await req.json();

      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
          formData.append(key, value);
      });

      const response = await fetch("https://formspree.io/f/xjkgrvae", {
          method: "POST",
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
