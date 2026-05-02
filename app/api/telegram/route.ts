import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type TelegramBody = {
  name?: string;
  phone?: string;
  age?: string;
};

type TelegramApiResult = {
  ok?: boolean;
  description?: string;
};

/**
 * POST /api/telegram
 * Forwards lead data to Telegram Bot API (sendMessage).
 * Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env.local (never commit real values).
 */
export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

  if (!token || !chatId) {
    return NextResponse.json(
      {
        ok: false,
        error: "Server is not configured for Telegram.",
        code: "MISSING_TELEGRAM_ENV",
      },
      { status: 500 },
    );
  }

  let body: TelegramBody;
  try {
    body = (await request.json()) as TelegramBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const age =
    typeof body.age === "string" && body.age.trim().length > 0 ? body.age.trim() : "—";

  if (!name || !phone) {
    return NextResponse.json(
      { ok: false, error: "Name and phone are required." },
      { status: 400 },
    );
  }

  const text = [
    "Новая заявка:",
    "",
    `Имя: ${name}`,
    `Телефон: ${phone}`,
    `Возраст: ${age}`,
  ].join("\n");

  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  const chatIdParam = /^\d+$/.test(chatId) ? Number(chatId) : chatId;

  try {
    const telegramResponse = await fetch(url, {
      method: "POST",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatIdParam,
        text,
        disable_web_page_preview: true,
      }),
    });

    const raw = await telegramResponse.text();
    let payload: TelegramApiResult = {};
    try {
      payload = raw ? (JSON.parse(raw) as TelegramApiResult) : {};
    } catch {
      return NextResponse.json(
        {
          ok: false,
          error: "Telegram returned an invalid response.",
        },
        { status: 502 },
      );
    }

    if (!telegramResponse.ok || payload.ok !== true) {
      const hint =
        typeof payload.description === "string" ? payload.description : "";
      const forbidden =
        hint.includes("can't initiate conversation") ||
        hint.includes("bot was blocked");
      return NextResponse.json(
        {
          ok: false,
          error: hint || "Telegram API request failed.",
          ...(forbidden ? { code: "TELEGRAM_FORBIDDEN" as const } : {}),
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Failed to reach Telegram." },
      { status: 502 },
    );
  }
}
