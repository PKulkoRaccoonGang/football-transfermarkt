import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Button, Form, Alert } from "react-bootstrap";
import {ButtonLink} from "../button-link/ButtonLink";
import "./AIChat.scss";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface AIChatProps {
  apiEndpoint: string;
}

export const AIChat: React.FC<AIChatProps> = ({ apiEndpoint }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isThinking, setIsThinking] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages: Message[] = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setIsThinking(true);

    try {
      const response = await axios.post<{ reply: string }>(apiEndpoint, { message: input });

      setMessages([...newMessages, { role: "assistant", content: response.data.reply }]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsThinking(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };

  const handleGlobalKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleGlobalKeyDown);
    } else {
      document.removeEventListener("keydown", handleGlobalKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isThinking]);

  return (
    <>
      <button className="chat-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "×" : "💬"}
      </button>

      {isOpen && (
        <div className="ai-chat-dialog-wrapper position-fixed shadow-lg bg-white rounded">
          <div className="ai-chat-dialog-header text-white text-center py-2 rounded-top">
            <h5 className="mb-0">Chat with Gemini</h5>
          </div>

          <div className="flex-grow-1 p-3" style={{ overflowY: "auto", maxHeight: "400px" }}>
            {messages.length === 0 && !isThinking && (
              <Alert variant="info" className="text-center">
                Ask Gemini something!
              </Alert>
            )}

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`d-flex ${
                  msg.role === "user" ? "justify-content-end" : "justify-content-start"
                } mb-2`}
              >
                <div
                  className={`p-2 rounded ${msg.role === "user" ? "bg-primary text-white" : "bg-light"}`}
                  style={{ maxWidth: "75%" }}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isThinking && (
              <div className="d-flex justify-content-start mb-2">
                <div className="p-2 rounded bg-light" style={{ maxWidth: "75%" }}>
                  <em>Thinking…</em>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="p-2 border-top d-flex">
            <Form.Group className="w-100">
              <Form.Control
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </Form.Group>
						<ButtonLink className="ms-2" type="button" onClick={sendMessage}>
							Send
						</ButtonLink>
          </div>
        </div>
      )}
    </>
  );
};
