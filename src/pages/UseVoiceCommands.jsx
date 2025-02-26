import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "@/hooks/use-toast";

const useVoiceCommands = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const navigate = useNavigate();

  const commands = {
    'check balance': () => navigate('/accounts'),
    'open chat': () => navigate('/chatbot'),
    'show loans': () => navigate('/quick-loan'),
    'view offers': () => navigate('/youth-offers'),
    'play quiz': () => navigate('/quiz-game'),
    'show community': () => navigate('/community'),
    'go home': () => navigate('/'),
  };

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window)) {
      toast({
        title: "Error",
        description: "Voice recognition is not supported in this browser.",
        variant: "destructive"
      });
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
      toast({
        title: "Listening",
        description: "Speak your command..."
      });
    };

    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript.toLowerCase().trim();
      setTranscript(command);

      const matchedCommand = Object.entries(commands).find(([key]) =>
        command.includes(key)
      );

      if (matchedCommand) {
        matchedCommand[1]();
        toast({
          title: "Command recognized",
          description: `Executing: ${matchedCommand[0]}`
        });
      } else {
        toast({
          title: "Command not recognized",
          description: "Please try again",
          variant: "destructive"
        });
      }
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  return {
    isListening,
    transcript,
    startListening
  };
};

export default useVoiceCommands