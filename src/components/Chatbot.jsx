import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Minimize2, Maximize2, MessageCircle, X } from 'lucide-react';
// import { io } from "socket.io-client";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm here to help you with our services. How can I assist you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  // ✅ Socket ref
  // const socket = useRef(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // ✅ Setup socket connection
  // useEffect(() => {
  //   socket.current = io("http://localhost:5000", { withCredentials: true });

  //   socket.current.on("botReply", (replyText) => {
  //     const botMessage = {
  //       id: Date.now(),
  //       text: replyText,
  //       isUser: false,
  //       timestamp: new Date()
  //     };
  //     setMessages((prev) => [...prev, botMessage]);
  //     setIsTyping(false);
  //   });

  //   return () => {
  //     socket.current.disconnect();
  //   };
  // }, []);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // ✅ Emit message to server
    socket.current.emit("userMessage", userMessage.text);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => setIsOpen(!isOpen);
  const minimizeChat = () => setIsMinimized(!isMinimized);

  const Message = ({ message, isUser, timestamp }) => (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex max-w-xs lg:max-w-md ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isUser ? 'bg-blue-500 ml-2' : 'bg-gray-300 mr-2'}`}>
          {isUser ? <User size={16} className="text-white" /> : <Bot size={16} className="text-gray-600" />}
        </div>
        <div className={`rounded-lg p-3 ${isUser ? 'bg-blue-500 text-white rounded-br-none' : 'bg-gray-100 text-gray-800 rounded-bl-none'}`}>
          <p className="text-sm">{message}</p>
          <span className="text-xs opacity-70 mt-1 block">
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
    </div>
  );

  const TypingIndicator = () => (
    <div className="flex justify-start mb-4">
      <div className="flex">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-2">
          <Bot size={16} className="text-gray-600" />
        </div>
        <div className="bg-gray-100 rounded-lg rounded-bl-none p-3">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition-all duration-200 hover:scale-105"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {isOpen && (
        <div className={`bg-white rounded-lg shadow-2xl border transition-all duration-300 ${isMinimized ? 'w-80 h-16' : 'w-80 h-96'}`}>
          <div className="bg-blue-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bot size={20} />
              <h3 className="font-semibold">Support Assistant</h3>
            </div>
            <div className="flex space-x-2">
              <button onClick={minimizeChat} className="hover:bg-blue-600 p-1 rounded">
                {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
              </button>
              <button onClick={toggleChat} className="hover:bg-blue-600 p-1 rounded">
                <X size={16} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="flex-1 p-4 h-64 overflow-y-auto">
                {messages.map((m) => (
                  <Message
                    key={m.id}
                    message={m.text}
                    isUser={m.isUser}
                    timestamp={m.timestamp}
                  />
                ))}
                {isTyping && <TypingIndicator />}
                <div ref={messagesEndRef} />
              </div>

              <div className="border-t p-4">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled={isTyping}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={isTyping || !inputMessage.trim()}
                    className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
