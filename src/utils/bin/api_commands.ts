// API COMMANDS
import { getProjects } from '../api';
import { getQuote } from '../api';
import { getReadme } from '../api';
import { getWeather } from '../api';
import { getGPTResponse } from '../api';

export const projects = async (args: string[]): Promise<string> => {
  const projects = await getProjects();
  return projects
    .map(
      (repo) =>
        `${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
    )
    .join('\n');
};

export const quote = async (args: string[]): Promise<string> => {
  const data = await getQuote();
  return data.quote;
};

export const readme = async (args: string[]): Promise<string> => {
  const readme = await getReadme();
  return `Opening GitHub README...\n
  ${readme}`;
};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather casablanca';
  }
  const weather = await getWeather(city);
  return weather;
};

//                      // 
//      BELOW ARE       //
//    OPENAI RELATED    //
//     API COMMANDS     //
//                      //

export const gpt = async (args: string[]): Promise<string> => {
  const prompt = args.join(' ').trim();

  if (!prompt) {
    return 'Type "gpt -" then your prompt. (ex: gpt -What is ChatGPT?)';
  }

  if (prompt.startsWith('-')) {
    const userPrompt = prompt.slice(1).trim();
    return await getGPTResponse("You are an AI assistant.", userPrompt);
  }

  return 'Please provide a prompt after the "gpt" command. Usage: gpt -[your prompt]';
};

// REFERENCE OPENAI COMMAND FOR TEMPLATING

//export const gpt = async (args: string): Promise<string> => {
//  const response = await getGPTResponse("Tell the user you are not yet implemented on the current website.", args);
//  return response;
//};

