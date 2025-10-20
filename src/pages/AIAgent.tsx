import { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Send, Trash2, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useVoiceRecognition } from '@/hooks/useVoiceRecognition';
import { useAIAgent } from '@/hooks/useAIAgent';
import { useTextToSpeech } from '@/hooks/useTextToSpeech';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { KGroupLogo } from '@/components/KGroupLogo';

const AIAgent = () => {
  const { toast } = useToast();
  const [inputText, setInputText] = useState('');
  const [autoSpeak, setAutoSpeak] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const { isListening, transcript, startListening, stopListening, resetTranscript, isSupported } = useVoiceRecognition();
  const { messages, isLoading, sendMessage, clearMessages } = useAIAgent();
  const { speak, stop: stopSpeaking } = useTextToSpeech();

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Auto-speak assistant responses
  useEffect(() => {
    if (autoSpeak && messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.role === 'assistant' && lastMessage.content) {
        speak(lastMessage.content);
      }
    }
  }, [messages, autoSpeak, speak]);

  // Update input with transcript
  useEffect(() => {
    if (transcript) {
      setInputText(transcript);
    }
  }, [transcript]);

  const handleSendMessage = async () => {
    const message = inputText.trim();
    if (!message || isLoading) return;

    await sendMessage(message);
    setInputText('');
    resetTranscript();
  };

  const handleVoiceToggle = () => {
    if (isListening) {
      stopListening();
      if (inputText.trim()) {
        handleSendMessage();
      }
    } else {
      if (!isSupported) {
        toast({
          title: 'No soportado',
          description: 'Tu navegador no soporta reconocimiento de voz.',
          variant: 'destructive',
        });
        return;
      }
      resetTranscript();
      setInputText('');
      startListening();
      toast({
        title: 'Escuchando...',
        description: 'Habla ahora para hacer tu consulta',
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <KGroupLogo className="h-10 w-auto" />
            </Link>
            <h1 className="text-lg font-semibold text-foreground md:text-xl">
              Agente IA KGroup
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Analiza Oportunidades con IA
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Usa tu voz o escribe para obtener insights sobre clientes y mejoras continuas
          </p>
        </div>

        {/* Chat Messages */}
        <Card className="mb-4 h-[60vh] overflow-y-auto p-4 bg-card/50 backdrop-blur">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
              <Mic className="w-16 h-16 mb-4 opacity-50" />
              <p className="text-lg font-medium mb-2">Comienza una conversación</p>
              <p className="text-sm max-w-md">
                Presiona el micrófono y pregunta sobre oportunidades de mercado, análisis de clientes o estrategias de mejora
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    <p className="text-sm md:text-base whitespace-pre-wrap break-words">
                      {message.content}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-2xl px-4 py-3">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </Card>

        {/* Controls */}
        <div className="space-y-3">
          {/* Voice & Clear Controls */}
          <div className="flex gap-2 justify-between items-center">
            <Button
              variant={autoSpeak ? 'default' : 'outline'}
              size="sm"
              onClick={() => {
                setAutoSpeak(!autoSpeak);
                if (autoSpeak) stopSpeaking();
              }}
              className="flex-1"
            >
              {autoSpeak ? <Volume2 className="w-4 h-4 mr-2" /> : <VolumeX className="w-4 h-4 mr-2" />}
              <span className="hidden sm:inline">
                {autoSpeak ? 'Voz Activada' : 'Voz Desactivada'}
              </span>
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                clearMessages();
                resetTranscript();
                setInputText('');
                stopSpeaking();
              }}
              disabled={messages.length === 0}
              className="flex-1"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Limpiar Chat</span>
            </Button>
          </div>

          {/* Input Area */}
          <div className="flex gap-2">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={isListening ? 'Escuchando...' : 'Escribe o usa el micrófono...'}
              disabled={isLoading || isListening}
              className="flex-1 text-base"
            />
            
            <Button
              size="icon"
              variant={isListening ? 'destructive' : 'outline'}
              onClick={handleVoiceToggle}
              disabled={isLoading}
              className="h-10 w-10 shrink-0"
            >
              {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </Button>
            
            <Button
              size="icon"
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isLoading}
              className="h-10 w-10 shrink-0"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>

          {/* Status Indicator */}
          {isListening && (
            <div className="flex items-center justify-center gap-2 text-sm text-destructive animate-pulse">
              <div className="w-2 h-2 bg-destructive rounded-full" />
              <span>Escuchando tu voz...</span>
            </div>
          )}
        </div>

        {/* Suggestions */}
        {messages.length === 0 && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              '¿Qué oportunidades hay en Polanco?',
              'Analiza el perfil de cliente para oficinas',
              '¿Cómo mejorar la estrategia de renta?',
              'Tendencias del mercado inmobiliario',
            ].map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                onClick={() => {
                  setInputText(suggestion);
                  sendMessage(suggestion);
                }}
                className="h-auto py-3 px-4 text-left justify-start whitespace-normal text-sm"
              >
                {suggestion}
              </Button>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default AIAgent;
