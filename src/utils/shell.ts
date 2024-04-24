import React from 'react';
import * as bin from './bin';
import { getGPTResponse } from './api';
import config from '../../config.json';

export const shell = async (
  command: string,
  setHistory: (value: string) => void,
  clearHistory: () => void,
  setCommand: React.Dispatch<React.SetStateAction<string>>,
  setTheme: (theme: { themeName: string; variantName: string }) => void
) => {
  const args = command.split(' ');
  args[0] = args[0].toLowerCase();

  if (args[0] === 'clear') {
    clearHistory();
  } else if (command.trim() === '') {
    setHistory('');
  } else if (args[0] === 'theme') {
    const themeOutput: string = await bin.theme(args.slice(1), setTheme);
    setHistory(themeOutput);
  } else if (Object.keys(bin).indexOf(args[0]) === -1) {
    const output: string = await getGPTResponse(config.openai_sys, command);
    setHistory(output);
  } else {
    const output: string = await bin[args[0]](args.slice(1));
    setHistory(output);
  }

  setCommand('');
};