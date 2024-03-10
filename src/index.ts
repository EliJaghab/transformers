import dotenv from 'dotenv';

import { OpenAI } from 'openai';
import { OpenAiService } from './OpenAiService';


dotenv.config();

console.log(process.env.OPENAI_API_KEY);

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const service = new OpenAiService(openai);
(async () => {
    const responses = await service.getResponse('Test prompt');
    console.log(responses);
})();

(async () => {
    const responses = await service.getResponse('Test prompt');
    console.log(responses);
})();