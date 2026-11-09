import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Diambil aman dari environment variable Vercel
});

export default async function handler(req, res) {
  // Izinkan aplikasi GitHub Pages Anda mengakses API ini (CORS)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { text } = req.query;

  if (!text) {
    return res.status(400).json({ error: "Teks tidak boleh kosong" });
  }

  try {
    const mp3 = await openai.audio.speech.create({
      model: "tts-1",
      voice: "alloy", // Pilihan suara Jepang yang sangat bagus: alloy, nova, shimmer, onyx
      input: text,
    });

    const buffer = Buffer.from(await mp3.arrayBuffer());
    
    // Kirim langsung sebagai file audio MP3 ke browser
    res.setHeader('Content-Type', 'audio/mpeg');
    return res.send(buffer);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
                                }
