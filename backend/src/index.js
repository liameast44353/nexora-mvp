const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/build-agent', (req, res) => {
  const { prompt } = req.body;
  
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  // Simple name generation logic (stub)
  const name = prompt
    .split(' ')
    .slice(0, 2)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('') + 'Agent';

  res.json({
    name: name || 'NexoraAgent',
    goal: prompt,
    tools: []
  });
});

app.listen(PORT, () => console.log(\API running on \\));
