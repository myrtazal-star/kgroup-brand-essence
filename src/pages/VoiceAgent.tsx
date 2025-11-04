import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Phone, PhoneOff } from "lucide-react";
import { RealtimeChat } from "@/utils/RealtimeAudio";
import { toast } from "sonner";
import { KGroupLogo } from "@/components/KGroupLogo";
import { Link } from "react-router-dom";

const VoiceAgent = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [transcript, setTranscript] = useState<string[]>([]);
  const chatRef = useRef<RealtimeChat | null>(null);

  const handleMessage = (event: any) => {
    console.log('Event received:', event.type);
    
    if (event.type === 'response.audio_transcript.delta') {
      setTranscript(prev => {
        const newTranscript = [...prev];
        if (newTranscript.length > 0 && newTranscript[newTranscript.length - 1].startsWith('Agente:')) {
          newTranscript[newTranscript.length - 1] += event.delta;
        } else {
          newTranscript.push('Agente: ' + event.delta);
        }
        return newTranscript;
      });
    } else if (event.type === 'conversation.item.input_audio_transcription.completed') {
      setTranscript(prev => [...prev, 'Tú: ' + event.transcript]);
    } else if (event.type === 'response.audio.delta') {
      setIsSpeaking(true);
    } else if (event.type === 'response.audio.done') {
      setIsSpeaking(false);
    } else if (event.type === 'error') {
      console.error('Error event:', event);
      toast.error('Error en la conversación');
    }
  };

  const startConversation = async () => {
    setIsLoading(true);
    try {
      chatRef.current = new RealtimeChat(handleMessage);
      await chatRef.current.init();
      setIsConnected(true);
      setTranscript(['Sistema: Conexión establecida. El agente está listo para hablar.']);
      
      toast.success("Conectado", {
        description: "Puedes comenzar a hablar ahora",
      });
    } catch (error) {
      console.error('Error starting conversation:', error);
      toast.error("Error al conectar", {
        description: error instanceof Error ? error.message : 'No se pudo iniciar la conversación',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const endConversation = () => {
    chatRef.current?.disconnect();
    setIsConnected(false);
    setIsSpeaking(false);
    setTranscript(prev => [...prev, 'Sistema: Conversación finalizada.']);
    toast.info("Desconectado");
  };

  useEffect(() => {
    return () => {
      chatRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <KGroupLogo variant="full" size="md" />
            <Link to="/">
              <Button variant="outline" size="sm">
                Volver
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-2xl space-y-8">
          {/* Title */}
          <div className="text-center space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light">
              Agente <span className="italic">Inteligente</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Análisis de oportunidades por comando de voz
            </p>
          </div>

          {/* Voice Status Indicator */}
          <div className="flex justify-center">
            <div className={`w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center transition-all duration-300 ${
              isSpeaking 
                ? 'bg-foreground/10 scale-110 shadow-premium' 
                : isConnected 
                ? 'bg-foreground/5' 
                : 'bg-muted'
            }`}>
              {isSpeaking ? (
                <div className="relative">
                  <div className="absolute inset-0 animate-ping rounded-full bg-foreground/20" />
                  <Mic className="w-12 h-12 sm:w-16 sm:h-16 relative z-10" />
                </div>
              ) : (
                <Mic className={`w-12 h-12 sm:w-16 sm:h-16 ${isConnected ? 'opacity-100' : 'opacity-30'}`} />
              )}
            </div>
          </div>

          {/* Status Text */}
          <div className="text-center">
            <p className="text-sm sm:text-base text-muted-foreground">
              {isLoading ? 'Conectando...' : isConnected ? (isSpeaking ? 'El agente está hablando...' : 'Escuchando...') : 'Presiona el botón para comenzar'}
            </p>
          </div>

          {/* Control Buttons */}
          <div className="flex justify-center gap-4">
            {!isConnected ? (
              <Button 
                onClick={startConversation}
                disabled={isLoading}
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                {isLoading ? 'Conectando...' : 'Iniciar Conversación'}
              </Button>
            ) : (
              <Button 
                onClick={endConversation}
                variant="outline"
                size="lg"
                className="border-2"
              >
                <PhoneOff className="w-5 h-5 mr-2" />
                Finalizar
              </Button>
            )}
          </div>

          {/* Transcript */}
          {transcript.length > 0 && (
            <div className="glass p-4 sm:p-6 border-2 rounded-lg max-h-[40vh] overflow-y-auto">
              <h3 className="text-lg font-semibold mb-4">Transcripción</h3>
              <div className="space-y-3">
                {transcript.map((line, index) => (
                  <p 
                    key={index} 
                    className={`text-sm leading-relaxed ${
                      line.startsWith('Tú:') 
                        ? 'text-foreground' 
                        : line.startsWith('Agente:')
                        ? 'text-muted-foreground'
                        : 'text-muted-foreground/70 italic'
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
            <div className="text-center p-4 glass rounded-lg">
              <div className="text-2xl font-light mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Análisis
              </div>
              <p className="text-xs text-muted-foreground">
                Identifica oportunidades
              </p>
            </div>
            <div className="text-center p-4 glass rounded-lg">
              <div className="text-2xl font-light mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Insights
              </div>
              <p className="text-xs text-muted-foreground">
                Factores de clientes
              </p>
            </div>
            <div className="text-center p-4 glass rounded-lg">
              <div className="text-2xl font-light mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Mejora
              </div>
              <p className="text-xs text-muted-foreground">
                Aprendizaje continuo
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-6">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>Agente impulsado por IA • OpenAI GPT-4o Realtime</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VoiceAgent;
