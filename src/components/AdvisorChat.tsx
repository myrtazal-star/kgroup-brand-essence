import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send, ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";

type Message = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/kgroup-advisor`;

const WELCOME_MESSAGE: Message = {
  role: "assistant",
  content:
    "Bienvenido a **KGroup Commercial Real Estate**.\n\nSoy su asesor digital especializado en oficinas corporativas premium en Ciudad de México.\n\n¿En qué puedo asistirle? ¿Busca un espacio para operar su empresa o una oportunidad de inversión?",
};

async function streamChat({
  messages,
  onDelta,
  onDone,
  onError,
}: {
  messages: Message[];
  onDelta: (text: string) => void;
  onDone: () => void;
  onError: (err: string) => void;
}) {
  const resp = await fetch(CHAT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
    },
    body: JSON.stringify({ messages }),
  });

  if (!resp.ok) {
    const data = await resp.json().catch(() => ({}));
    onError(data.error || "Error al conectar con el asesor.");
    return;
  }

  if (!resp.body) {
    onError("No se recibió respuesta.");
    return;
  }

  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });

    let idx: number;
    while ((idx = buffer.indexOf("\n")) !== -1) {
      let line = buffer.slice(0, idx);
      buffer = buffer.slice(idx + 1);
      if (line.endsWith("\r")) line = line.slice(0, -1);
      if (line.startsWith(":") || line.trim() === "") continue;
      if (!line.startsWith("data: ")) continue;
      const json = line.slice(6).trim();
      if (json === "[DONE]") {
        onDone();
        return;
      }
      try {
        const parsed = JSON.parse(json);
        const content = parsed.choices?.[0]?.delta?.content;
        if (content) onDelta(content);
      } catch {
        buffer = line + "\n" + buffer;
        break;
      }
    }
  }
  onDone();
}

export const AdvisorChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const send = useCallback(
    async (text: string) => {
      if (!text.trim() || isLoading) return;
      const userMsg: Message = { role: "user", content: text.trim() };
      const history = [...messages.filter((m) => m !== WELCOME_MESSAGE || messages.indexOf(m) > 0), userMsg];
      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setIsLoading(true);

      let assistantSoFar = "";
      const upsert = (chunk: string) => {
        assistantSoFar += chunk;
        setMessages((prev) => {
          const last = prev[prev.length - 1];
          if (last?.role === "assistant" && prev.length > 1 && last !== WELCOME_MESSAGE) {
            return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantSoFar } : m));
          }
          return [...prev, { role: "assistant", content: assistantSoFar }];
        });
      };

      await streamChat({
        messages: history,
        onDelta: upsert,
        onDone: () => setIsLoading(false),
        onError: (err) => {
          setMessages((prev) => [...prev, { role: "assistant", content: err }]);
          setIsLoading(false);
        },
      });
    },
    [messages, isLoading]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 group"
          style={{
            background: "linear-gradient(135deg, #C6A15B, #B8923F)",
            boxShadow: "0 8px 30px rgba(198,161,91,0.35)",
          }}
          aria-label="Abrir asesor digital"
        >
          <MessageCircle className="w-6 h-6 text-[#0B0C0F]" />
        </button>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <div
          className="fixed bottom-6 right-6 z-[60] w-[380px] max-w-[calc(100vw-2rem)] flex flex-col animate-fade-in"
          style={{
            height: "min(600px, calc(100vh - 6rem))",
            borderRadius: "20px",
            background: "linear-gradient(180deg, hsl(230 15% 10%), hsl(230 15% 7%))",
            border: "1px solid hsl(36 40% 40% / 0.2)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px hsl(230 15% 15%)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-5 py-4 shrink-0"
            style={{
              borderBottom: "1px solid hsl(36 40% 40% / 0.15)",
              borderRadius: "20px 20px 0 0",
              background: "hsl(230 15% 11%)",
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #C6A15B, #B8923F)" }}
              >
                <span className="text-[#0B0C0F] text-xs font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
                  KG
                </span>
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: "#F5F3EF", fontFamily: "'Inter', sans-serif" }}>
                  Asesor KGroup
                </p>
                <p className="text-[10px] tracking-[0.15em] uppercase" style={{ color: "#C6A15B", fontFamily: "'Inter', sans-serif" }}>
                  En línea
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-white/5"
            >
              <X className="w-4 h-4" style={{ color: "#8a8a9e" }} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className="max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed"
                  style={
                    msg.role === "user"
                      ? {
                          background: "linear-gradient(135deg, #C6A15B, #B8923F)",
                          color: "#0B0C0F",
                          fontFamily: "'Inter', sans-serif",
                          borderBottomRightRadius: "6px",
                        }
                      : {
                          background: "hsl(230 15% 14%)",
                          color: "#E0DED8",
                          fontFamily: "'Inter', sans-serif",
                          border: "1px solid hsl(230 15% 20%)",
                          borderBottomLeftRadius: "6px",
                        }
                  }
                >
                  {msg.role === "assistant" ? (
                    <div className="prose prose-sm prose-invert max-w-none [&_p]:mb-2 [&_p:last-child]:mb-0 [&_strong]:text-[#C6A15B] [&_ul]:my-2 [&_li]:my-0.5">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}
            {isLoading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex justify-start">
                <div
                  className="rounded-2xl px-4 py-3 flex items-center gap-1.5"
                  style={{ background: "hsl(230 15% 14%)", border: "1px solid hsl(230 15% 20%)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#C6A15B" }} />
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse [animation-delay:150ms]" style={{ background: "#C6A15B" }} />
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse [animation-delay:300ms]" style={{ background: "#C6A15B" }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions - only show at start */}
          {messages.length <= 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {["Busco oficina para operar", "Oportunidad de inversión", "Ver opciones en Polanco"].map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="text-[11px] px-3 py-1.5 rounded-lg transition-all duration-200 hover:opacity-80 flex items-center gap-1"
                  style={{
                    background: "hsl(36 40% 40% / 0.1)",
                    color: "#C6A15B",
                    border: "1px solid hsl(36 40% 40% / 0.2)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {q} <ArrowRight className="w-3 h-3" />
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div
            className="px-4 py-3 shrink-0"
            style={{ borderTop: "1px solid hsl(36 40% 40% / 0.1)", borderRadius: "0 0 20px 20px" }}
          >
            <div
              className="flex items-end gap-2 rounded-xl px-3 py-2"
              style={{ background: "hsl(230 15% 13%)", border: "1px solid hsl(230 15% 20%)" }}
            >
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escriba su consulta..."
                rows={1}
                className="flex-1 bg-transparent resize-none text-sm outline-none placeholder:text-[#5a5a6e]"
                style={{
                  color: "#F5F3EF",
                  fontFamily: "'Inter', sans-serif",
                  maxHeight: "80px",
                }}
              />
              <button
                onClick={() => send(input)}
                disabled={!input.trim() || isLoading}
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 disabled:opacity-30"
                style={{
                  background: input.trim() ? "linear-gradient(135deg, #C6A15B, #B8923F)" : "transparent",
                }}
              >
                <Send className="w-4 h-4" style={{ color: input.trim() ? "#0B0C0F" : "#5a5a6e" }} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
