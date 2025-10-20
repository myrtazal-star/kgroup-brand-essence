import { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Send, Trash2, Volume2, VolumeX, Sparkles, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useVoiceRecognition } from '@/hooks/useVoiceRecognition';
import { useAIAgent } from '@/hooks/useAIAgent';
import { useTextToSpeech } from '@/hooks/useTextToSpeech';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

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
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestions = [
    '¿Qué oportunidades hay en Polanco?',
    'Analiza el perfil de cliente ideal',
    '¿Cómo mejorar la estrategia de renta?',
    'Tendencias del mercado CDMX',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      {/* Minimal Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Inicio</span>
            </Link>
            
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <h1 className="text-lg font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Agente IA
              </h1>
            </div>

            <div className="w-20" /> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        {messages.length === 0 && (
          <div className="text-center mb-12 pt-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-6 backdrop-blur-sm border border-primary/10">
              <Sparkles className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-4xl font-semibold mb-4 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              ¿En qué puedo ayudarte?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Analiza oportunidades, entiende a tus clientes y obtén insights sobre el mercado inmobiliario
            </p>
          </div>
        )}

        {/* Chat Messages */}
        <div className="mb-8">
          {messages.length > 0 ? (
            <div className="space-y-6">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[75%] rounded-3xl px-5 py-4 ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'bg-card/50 backdrop-blur-sm text-foreground border border-border/50 shadow-sm'
                    }`}
                  >
                    <p className="text-[15px] leading-relaxed whitespace-pre-wrap break-words">
                      {message.content}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl px-5 py-4 shadow-sm">
                    <div className="flex space-x-1.5">
                      <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          ) : (
            /* Suggestions Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setInputText(suggestion);
                    sendMessage(suggestion);
                  }}
                  className="group p-4 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/40 hover:border-primary/40 hover:bg-card/50 transition-all duration-200 text-left"
                >
                  <p className="text-sm text-foreground/90 group-hover:text-foreground transition-colors">
                    {suggestion}
                  </p>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Input Area - Fixed at bottom on mobile, static on desktop */}
        <div className="fixed sm:static bottom-0 left-0 right-0 bg-background/95 backdrop-blur-xl border-t sm:border-t-0 border-border/40 p-4 sm:p-0">
          <div className="max-w-5xl mx-auto">
            {/* Controls Row */}
            {messages.length > 0 && (
              <div className="flex gap-2 mb-3 justify-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setAutoSpeak(!autoSpeak);
                    if (autoSpeak) stopSpeaking();
                  }}
                  className="rounded-full"
                >
                  {autoSpeak ? (
                    <Volume2 className="w-4 h-4 mr-2" />
                  ) : (
                    <VolumeX className="w-4 h-4 mr-2" />
                  )}
                  <span className="text-xs">{autoSpeak ? 'Audio On' : 'Audio Off'}</span>
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    clearMessages();
                    resetTranscript();
                    setInputText('');
                    stopSpeaking();
                  }}
                  disabled={messages.length === 0}
                  className="rounded-full"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  <span className="text-xs">Limpiar</span>
                </Button>
              </div>
            )}

            {/* Input Container */}
            <div className="relative max-w-3xl mx-auto">
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow">
                <Input
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={isListening ? 'Escuchando...' : 'Escribe tu mensaje...'}
                  disabled={isLoading || isListening}
                  className="flex-1 border-0 bg-transparent text-[15px] placeholder:text-muted-foreground/60 focus-visible:ring-0 focus-visible:ring-offset-0 px-4"
                />
                
                {/* Voice Button */}
                <Button
                  size="icon"
                  variant={isListening ? 'destructive' : 'ghost'}
                  onClick={handleVoiceToggle}
                  disabled={isLoading}
                  className={`h-10 w-10 rounded-full shrink-0 transition-all ${
                    isListening ? 'animate-pulse' : ''
                  }`}
                >
                  {isListening ? (
                    <MicOff className="w-5 h-5" />
                  ) : (
                    <Mic className="w-5 h-5" />
                  )}
                </Button>
                
                {/* Send Button */}
                <Button
                  size="icon"
                  onClick={handleSendMessage}
                  disabled={!inputText.trim() || isLoading}
                  className="h-10 w-10 rounded-full shrink-0 bg-primary hover:bg-primary/90"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>

              {/* Status Indicator */}
              {isListening && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 bg-destructive/10 backdrop-blur-sm rounded-full border border-destructive/20">
                  <div className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
                  <span className="text-xs text-destructive font-medium">Escuchando...</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom padding for fixed input on mobile */}
        <div className="h-32 sm:h-0" />
      </main>
    </div>
  );
};

export default AIAgent;
