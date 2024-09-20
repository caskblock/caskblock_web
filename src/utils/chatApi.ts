import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

interface ChatResponse {
  message: string;
}

const token = process.env.NEXT_PUBLIC_CHATBOT_TOKEN;
const userId = process.env.NEXT_PUBLIC_CHATBOT_USERID;
let chatUser: string | null = null;

export function initializeChatUser() {
  chatUser = localStorage.getItem('cb.chatUser');
  if (!chatUser) {
    chatUser = uuidv4();
    localStorage.setItem('cb.chatUser', chatUser);
  }
}

export async function sendChatMessage(message: string): Promise<ChatResponse> {
  if (!chatUser) {
    initializeChatUser();
  }

  try {
    const response = await axios.post<ChatResponse>(
      process.env.NEXT_PUBLIC_CHATBOT_API || '',
      {
        message: message.trim(),
        v: '0',
        categories: []
      },
      {
        headers: {
          'token': token,
          'userid': userId,
          'chatuser': chatUser
        }
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('Error:', error.response ? error.response.data : error.message);
    throw error;
  }
}
