import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import Textarea from '@mui/joy/Textarea';
import { Stack } from '@mui/joy';
import React, { useState } from 'react';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

export default function MessageInput(props) {
  const { textAreaValue, setTextAreaValue, appendMessage, setPendingChatbotMessage } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChatbotResponse = async () => {
    try {
      if (textAreaValue.trim() !== '') {
        setIsLoading(true);

        // Replace 'YOUR_API_KEY' with the actual API key
        const apiKey = process.env.NEXT_PUBLIC_CHAT_API_KEY;
        const apiUrl = process.env.NEXT_PUBLIC_CHAT_API_URL;

        // Replace 'YOUR_MODEL_NAME' with the actual model name
        const modelName = 'Mistral-7B-OpenOrca';

        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: modelName,
            messages: [
              { role: 'user', content: textAreaValue },
            ],
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to send message');
        }

        // Set the API response to display in the chat
        const responseBody = await response.json();
        setPendingChatbotMessage(responseBody.choices[0].message.content);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = async () => {
    appendMessage(textAreaValue, 'You');
     // Clear the text area after submitting
    setTextAreaValue('');
    handleChatbotResponse();    
  };

  return (
    <Box sx={{ px: 2, pb: 3 }}>
      <FormControl>
        <Textarea
          placeholder="Type something here…"
          aria-label="Message"
          onChange={(e) => {
            setTextAreaValue(e.target.value);
          }}
          value={textAreaValue}
          minRows={3}
          maxRows={10}
          endDecorator={
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              flexGrow={1}
              sx={{
                py: 1,
                pr: 1,
                borderTop: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Button
                size="sm"
                color="primary"
                sx={{ alignSelf: 'center', borderRadius: 'sm' }}
                endDecorator={<SendRoundedIcon />}
                onClick={handleClick}
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send'}
              </Button>
            </Stack>
          }
          onKeyDown={(event) => {
            if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
              handleClick();
            }
          }}
          sx={{
            '& textarea:first-of-type': {
              minHeight: 72,
            },
          }}
        />
      </FormControl>
    </Box>
  );
}