import React from 'react';
import * as bin from './bin';

export const shell = async (
  command: string,
  setHistory: (value: string) => void,
  clearHistory: () => void,
  setCommand: React.Dispatch<React.SetStateAction<string>>,
  setPath: (value: string) => void,
  path: string,
  language: string,
  setLanguage: (value: string) => void
) => {
  const args = command.split(' ');
  args[0] = args[0].toLowerCase();

  if (args[0] === 'clear') {
    clearHistory();
  } else if (command === '') {
    setHistory('');
  } else if (Object.keys(bin).indexOf(args[0]) === -1) {
    setHistory(
      `shell: command not found: ${args[0]}. Try 'help' to get started.`,
    );
  } else {
    if (args[0] === 'zh') {
      setLanguage('zh');
    }
    else if (args[0] === 'en') {
      setLanguage('en');
    }

    let output = '';
    if (args[0] === 'cd')
      output = await bin[args[0]](args.slice(1), language, setPath);
    else if(args[0] === 'ls' || args[0] === 'vi' || args[0] === 'vim')
      output = await bin[args[0]](args.slice(1), language, path);
    else 
      output = await bin[args[0]](args.slice(1), language);
    setHistory(output);
  }

  setCommand('');
};
