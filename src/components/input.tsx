// Text Input Form for Linux-style Terminal Emulation
import React, { useContext, useEffect, useRef } from 'react';
import { useTheme } from './theme/ThemeContext';
import { commandExists } from '../utils/commandExists';
import { shell } from '../utils/shell';
import { handleTabCompletion } from '../utils/tabCompletion';
import { Ps1 } from './Ps1';

// Utility function to check if the current window is inside an iframe
const isInIframe = () => {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
};

export const Input = ({
  inputRef,
  containerRef,
  command,
  history,
  lastCommandIndex,
  setCommand,
  setHistory,
  setLastCommandIndex,
  clearHistory,
}) => {
  const { theme, variant, setTheme } = useTheme();

  useEffect(() => {
    const handleClick = (event) => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener('click', handleClick);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('click', handleClick);
      }
    };
  }, [containerRef, inputRef]);

  const onSubmit = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    const commands: [string] = history
      .map(({ command }) => command)
      .filter((command: string) => command);

    // Handle Ctrl+C to clear the command and history
    if (event.key === 'c' && event.ctrlKey) {
      event.preventDefault();
      setCommand('');
      setHistory([]);
      setLastCommandIndex(0);
    }

    // Handle Ctrl+L to clear the history
    if (event.key === 'l' && event.ctrlKey) {
      event.preventDefault();
      clearHistory();
    }

    // Handle Tab key for command completion
    if (event.key === 'Tab') {
      event.preventDefault();
      handleTabCompletion(command, setCommand);
    }

    // Handle Enter key to execute commands
    if (event.key === 'Enter') {
      event.preventDefault();

      await shell(command, setHistory, clearHistory, setCommand, setTheme);

      containerRef.current?.scrollTo(0, containerRef.current.scrollHeight);
    }

    // Handle ArrowUp key to navigate through command history
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (!commands.length) {
        return;
      }
      const index: number = lastCommandIndex + 1;
      if (index <= commands.length) {
        setLastCommandIndex(index);
        setCommand(commands[commands.length - index]);
      }
    }

    // Handle ArrowDown key to navigate through command history
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (!commands.length) {
        return;
      }
      const index: number = lastCommandIndex - 1;
      if (index > 0) {
        setLastCommandIndex(index);
        setCommand(commands[commands.length - index]);
      } else {
        setLastCommandIndex(0);
        setCommand('');
      }
    }
  };

  const onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(value);
  };

  return (
    <div
      ref={containerRef}
      className="flex flex-row space-x-2"
      onClick={() => inputRef.current && inputRef.current.focus()} // Add focus on click
    >
      <label htmlFor="prompt" className="flex-shrink">
        <Ps1 />
      </label>

      <input
        ref={inputRef}
        id="prompt"
        type="text"
        style={{
          backgroundColor: `var(--${theme}-background)`,
          color: `var(--${theme}-text)`,
        }}
        className={`focus:outline-none flex-grow ${
          commandExists(command) || command === ''
            ? 'text-dark-green'
            : 'text-dark-red'
        }`}
        value={command}
        onChange={onChange}
        onKeyDown={onSubmit}
        autoComplete="off"
        spellCheck="false"
      />
    </div>
  );
};

export default Input;
