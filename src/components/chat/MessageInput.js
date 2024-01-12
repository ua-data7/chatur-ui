import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import Textarea from '@mui/joy/Textarea';
import { IconButton, Stack } from '@mui/joy';
import React, { useState } from 'react';

import SendRoundedIcon from '@mui/icons-material/SendRounded';

export default function MessageInput(props) {
  const { textAreaValue, setTextAreaValue, onSubmit } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [apiResponse, setApiResponse] = useState('');

  const handleClick = async () => {
    try {
      if (textAreaValue.trim() !== '') {
        setIsLoading(true);

        // Replace 'YOUR_API_KEY' with the actual API key
        const apiKey = '';

        // Replace 'YOUR_MODEL_NAME' with the actual model name
        const modelName = 'Mistral-7B-OpenOrca';

        const response = await fetch('https://chatur-api.cyverse.ai/v1/chat/completions', {
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

        // Assuming onSubmit is meant to handle the successful API call
        onSubmit();

        // Clear the text area after submitting
        setTextAreaValue('');

        // Set the API response to display in the chat
        const responseBody = await response.json();
        setApiResponse(responseBody.choices[0].message); // Replace 'message' with the actual property in your API response
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
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

      {/* Display the API response in the chat */}
      {apiResponse && (
        <div>
          <strong>Bot:</strong> {apiResponse}
        </div>
      )}
    </Box>
  );
}