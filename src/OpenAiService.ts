import OpenAI from 'openai';

export class OpenAiService {
  private readonly openai: OpenAI;

  constructor(openai: OpenAI) {
    this.openai = openai;
  }

  async getResponse(prompt: string) {
    const stream = await this.openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      stream: true,
    });

    const responses = [];
    for await (const chunk of stream) {
      if (chunk.choices[0]?.delta?.content) {
        responses.push(chunk.choices[0].delta.content);
      }
    }
    return responses;
  }
}