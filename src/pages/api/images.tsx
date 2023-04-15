import { NextApiRequest, NextApiResponse } from 'next';

interface Attachment {
  url: string;
  filename: string;
}

interface Message {
  id: string;
  attachments: Attachment[];
}

interface Image {
  id: string;
  url: string;
  name: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Image[]>) {
  const response = await fetch(`https://discord.com/api/channels/${process.env.DISCORD_CHANNEL_ID}/messages`, {
    headers: {
      Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
    },
  });

  const messages: Message[] = await response.json();
  const images = messages
    .filter((message) => message.attachments.length > 0)
    .map((message) => ({
      id: message.id,
      url: message.attachments[0].url,
      name: message.attachments[0].filename,
    }));

  res.status(200).json(images);
}