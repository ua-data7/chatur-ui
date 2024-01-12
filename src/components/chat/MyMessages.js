import * as React from 'react';
import Sheet from '@mui/joy/Sheet';

import MessagesPane from './MessagesPane';
import ChatsPane from './ChatsPane';
import { users } from '../../data';

export default function MyProfile() {

  const initialChat = {
    id: 1,
    sender: users[0],
    messages: []
  };

  const [selectedChat, setSelectedChat] = React.useState(initialChat);
  const [studentMessageAppended, setStudentMessageAppended] = React.useState(false);
  const [pendingChatbotMessage, setPendingChatbotMessage] = React.useState(null);

  function appendMessage(messageString, sender) {

      if (sender === 'You') {
        setStudentMessageAppended(true);
      }
    
      const newMessage = {
        sender: sender,
        message: messageString,
        timestamp: Date.now()
      }
  
      if (selectedChat && Array.isArray(selectedChat.messages)) {
          return setSelectedChat({
              ...selectedChat,
              messages: [...selectedChat.messages, newMessage]
          });
      } else {
          console.error("Invalid chat selection or messages not an array");
      }
  };

  React.useEffect(() => {

    if (studentMessageAppended && pendingChatbotMessage) {
      appendMessage(pendingChatbotMessage, users[0]);
      setPendingChatbotMessage(null);
      setStudentMessageAppended(false);
    }
  }, [studentMessageAppended, pendingChatbotMessage]);

  return (
    <Sheet
      sx={{
        flex: 1,
        width: '100%',
        mx: 'auto',
        pt: { xs: 'var(--Header-height)', sm: 0 },
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'minmax(min-content, min(30%, 400px)) 1fr',
        },
      }}
    >
      <Sheet
        sx={{
          position: { xs: 'fixed', sm: 'sticky' },
          transform: {
            xs: 'translateX(calc(100% * (var(--MessagesPane-slideIn, 0) - 1)))',
            sm: 'none',
          },
          transition: 'transform 0.4s, width 0.4s',
          zIndex: 100,
          width: '100%',
          top: 52,
        }}
      >
        <ChatsPane
          chats={[initialChat]}
          selectedChatId={selectedChat.id}
          appendMessage={appendMessage}
        />
      </Sheet>
      <MessagesPane chat={selectedChat} appendMessage={appendMessage} setPendingChatbotMessage={setPendingChatbotMessage} />
    </Sheet>
  );
}
