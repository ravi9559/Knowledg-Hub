// This file is machine-generated - edit at your own risk!

'use server';

/**
 * @fileOverview An AI agent that extracts keywords or named entities from the user’s search query.
 *
 * - suggestContent - A function that handles the content suggestion process.
 * - SuggestContentInput - The input type for the suggestContent function.
 * - SuggestContentOutput - The return type for the suggestContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestContentInputSchema = z.object({
  query: z.string().describe('The user search query.'),
});
export type SuggestContentInput = z.infer<typeof SuggestContentInputSchema>;

const SuggestContentOutputSchema = z.object({
  keywords: z
    .array(z.string())
    .describe('Keywords extracted from the search query.'),
  entities: z
    .array(z.string())
    .describe('Named entities extracted from the search query.'),
});
export type SuggestContentOutput = z.infer<typeof SuggestContentOutputSchema>;

export async function suggestContent(input: SuggestContentInput): Promise<SuggestContentOutput> {
  return suggestContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestContentPrompt',
  input: {schema: SuggestContentInputSchema},
  output: {schema: SuggestContentOutputSchema},
  prompt: `You are an expert in understanding user search queries for a real estate knowledge hub.

  Your task is to extract relevant keywords and named entities from the user's query.
  These keywords and entities will be used to find relevant resources in the knowledge hub.

  Query: {{{query}}}

  Extract keywords and named entities that can help improve search relevance.
  Return the keywords and entities in the appropriate output fields.
  `,
});

const suggestContentFlow = ai.defineFlow(
  {
    name: 'suggestContentFlow',
    inputSchema: SuggestContentInputSchema,
    outputSchema: SuggestContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
