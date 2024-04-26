// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
import themes from '../../../themes.json';


// Assuming config.asciiskull is the source URL for the iframe
export const skull = async (args: string[]): Promise<string> => {
  return `
  <iframe
    name="a cool skull"
    id="STL2ASCIIskull"
    src="${config.asciiskull}"
    title="STL2ASCII Skull"
    width="100%"
    height="800"
  </iframe>
  `;
};

// Banner (Home Page)
export const banner = (args?: string[]): string => {
  return `
   ┓┓•          •          
┏┏┓┃┃┓┏┓┏┏┓┏┳┓┏┓┓┏┓┏ ┏┏┓┏┳┓
┗┗┛┗┗┗┛┗┛┗┛┛┗┗┛┗┗┗┻┗•┗┗┛┛┗┗

Welcome to COLLINSOMNIAC.COM!

┌─────────────────┬────────────────────────────────┐
│ c o m m a n d : │    d e s c r i p t i o n :     │
├─────────────────┼────────────────────────────────┤
|   'theme'       | change the theme!              |
│   'skull'       │ see a cool skull.              │
│ * 'blog'        │ visit my blog/journal.         │
│ * 'links'       │ visit my full index of links.  │
│ * 'files'       │ visit my full index of files.  │
│   'repo'        │ visit this site's GitHub repo. │
│   'type'        │ open the Text Editor.          │
│   'chat'        │ open the Chat Interface.       │
│   'help'        │ list all available commands.   │
│ * 'credits'     │ list credited authors/devs.    │
│   'about'       │ read about me and this site.   │
└─────────────────┴────────────────────────────────┘
      ┌─────────────────────────────────────┐
      │  *  =  CURRENTLY UNDER DEVELOPMENT  │
      └─────────────────────────────────────┘
\n`;
};

// Help (Display Hotkeys/Commands)
//use "${c}" in the 'return' area for definitive plaintext list of all commands "utils/bin"
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `\n
┌───────────────────────────────┬────────────────────────────────┐
│        c o m m a n d :        │     d e s c r i p t i o n :    │
├───────────────────────────────┼────────────────────────────────┤
│          s i t e :            │                                │
|   'theme'                     | change the theme!              |
│   'skull'                     │ see a cool skull.              │
│   'repo'                      │ visit this site's GitHub repo. │
│ * 'blog'                      │ visit my blog/journal.         │
│ * 'links'                     │ visit my full index of links.  │
│ * 'files'                     │ visit my full index of files.  │
│   'type'                      │ open the Text Editor.          │
│   'chat'                      │ open the Chat Interface.       │
│ * 'gpt'                       │ send a message to ChatGPT.     │
│   'help'                      │ list all available commands.   │
│ * 'credits'                   │ list credited authors/devs.    │
│   'about'                     │ read about me and this site.   │
│         s o c i a l :         │                                │
│   'instagram'                 │ visit my Instagram.            │
│   'soundcloud'                │ visit my SoundCloud.           │
│   'reddit'                    │ visit my Reddit.               │
│ * 'medium'                    │ visit my Medium.               │
│   'github'                    │ visit my GitHub.               │
│ * 'huggingface'               │ visit my Huggingface.          │
│ * 'kofi'                      │ visit my Ko-fi.                │
│ * 'patreon'                   │ visit my Patreon.              │
│          s t u f f :          │                                │
│ * 'art'                       │ visit my art/gallery.          │
│ * 'music'                     │ visit my music/discography.    │
│ * 'writing'                   │ visit my writing/anthology.    │
│         s e a r c h :         │                                │
│   'xgoogle ____'              │ search Google.                 │
│   'xduckduckgo ____'          │ search DuckDuck Go.            │
│   'xbing ____'                │ search Bing.                   │
│   'xecosia ____'              │ search Ecosia.                 │
│   'xreddit ____'              │ search Reddit.                 │
└───────────────────────────────┴────────────────────────────────┘
              ┌─────────────────────────────────────┐
              │  *  =  CURRENTLY UNDER DEVELOPMENT  │
              └─────────────────────────────────────┘
               ┌───────────┬───────────────────────┐
               │  [tab]:   │ autocomplete command  │
               ├───────────┼───────────────────────┤
               │ [ctrl+l]: │ clear window          │
               └───────────┴───────────────────────┘

`;
};

// Author / Developer Credits for All 3rd Party GitHub Repos Used
export const credits = async (args: string[]): Promise<string> => {
  return `ASCII FORMATTED TABLE WITH "REPO", "AUTHOR/DEV", "USED FOR"
  WILL LINK REPOS AND DEVS DIRECTLY WITH "credits.json" FILE
  EX: \${credits.repo.repoLINK} and \${credits.dev.devLINK} 
  where repoLINK and devLINK are values in "credits.json"
  \n
  `;
};

// OG "about" Command (Deprecated)
//export const about = async (args: string[]): Promise<string> => {
//  return `Hi, I am ${config.name}. I built this website!`;
//};

// Resume
export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.site_urls.resume}`);
  return 'Opening "resume.collinsomniac.com"...';
};

// site_urls Redirects
// GitHub repo
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.site_urls.repo}`);
  return 'Opening site Github repository...';
};
// blog.collinsomniac.com
export const blog = async (args: string[]): Promise<string> => {
  window.open(`${config.site_urls.blog}`);
  return 'Opening "blog.collinsomniac.com"...';
};
// art.collinsomniac.com
export const art = async (args: string[]): Promise<string> => {
  window.open(`${config.site_urls.art}`);
  return 'Opening "art.collinsomniac.com"...';
};
// music.collinsomniac.com
export const music = async (args: string[]): Promise<string> => {
  window.open(`${config.site_urls.music}`);
  return 'Opening "music.collinsomniac.com"...';
};
// writing.collinsomniac.com
export const writing = async (args: string[]): Promise<string> => {
  window.open(`${config.site_urls.writing}`);
  return 'Opening "writing.collinsomniac.com"...';
};
// files.collinsomniac.com
export const files = async (args: string[]): Promise<string> => {
  window.open(`${config.site_urls.files}`);
  return 'Opening "files.collinsomniac.com"...';
};
// type.collinsomniac.com
export const type = async (args: string[]): Promise<string> => {
  window.open(`${config.site_urls.type}`);
  return 'Opening "type.collinsomniac.com"...';
};
// chat.collinsomniac.com
export const chat = async (args: string[]): Promise<string> => {
  window.open(`${config.site_urls.chat}`);
  return 'Opening "chat.collinsomniac.com"...';
};
// links.collinsomniac.com
export const links = async (args: string[]): Promise<string> => {
  window.open(`${config.site_urls.links}`);
  return 'Opening "links.collinsomniac.com"...';
};

// Socials/Contact
// Direct Email
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};
// GitHub Profile
export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening GitHub profile...';
};
// Huggingface Profile
export const huggingface = async (args: string[]): Promise<string> => {
  window.open(`https://huggingface.co/${config.social.huggingface}/`);

  return 'Opening Huggingface profile...';
};
// Instagram Profile
export const instagram = async (args: string[]): Promise<string> => {
  window.open(`https://instagram.com/${config.social.instagram}/`);

  return 'Opening Instagram profile...';
};
// SoundCloud Profile
export const soundcloud = async (args: string[]): Promise<string> => {
  window.open(`https://soundcloud.com/${config.social.soundcloud}/`);

  return 'Opening SoundCloud profile...';
};
// Reddit Profile
export const medium = async (args: string[]): Promise<string> => {
  window.open(`https://www.medium.com/@${config.social.medium}/`);

  return 'Opening Medium profile...';
};
// Reddit Profile
export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/user/${config.social.reddit}/`);

  return 'Opening Reddit profile...';
};
// Ko-fi Profile
export const kofi = async (args: string[]): Promise<string> => {
  window.open(`https://ko-fi.com/${config.social.kofi}/`);

  return 'Opening Ko-fi profile...';
};
// Patreon (not created)
export const patreon = async (args: string[]): Promise<string> => {
  window.open(`https://www.patreon.com/${config.social.patreon}/`);

  return 'Opening Patreon profile...';
};

// Search Commands ("xsite" Format)
// Google
export const xgoogle = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching Google for ${args.join(' ')}...`;
};
// DuckDuckGo
export const xduckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching DuckDuckGo for ${args.join(' ')}...`;
};
// Bing - hahaha
export const xbing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Bing huh? Something for everyone I guess. Searching Bing for ${args.join(' ')}...`;
};
// Ecosia
export const xecosia = async (args: string[]): Promise<string> => {
  window.open(`https://www.ecosia.org/search?q=${args.join(' ')}`);
  return `Searching Ecosia for ${args.join(' ')}... 'guest' planted a tree!`;
};
// Reddit
export const xreddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching Reddit for ${args.join(' ')}...`;
};

// Donate - Kofi and Patreon
export const donate = async (args: string[]): Promise<string> => {
  return `Thank you for your interest in my work! 
Here are ways you can support me and my projects:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.social.kofi}" target="_blank">kofi</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.social.patreon}" target="_blank">patreon</a></u>
`;
};

// Linux Commands (TRUE=actually works FALSE=does not work)
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};
// TRUE "whoamai" - states user
export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};
// FALSE "ls" - lists directory contents
export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};
// FALSE "cd" - change working directory
export const cd = async (args: string[]): Promise<string> => {
  return `bash: cd: /COLLINSOMNIAC.COM: No such file or directory`;
};
// TRUE "date" - display the date and time
export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

// Future Feature (Theme Switching) - theme command (list and apply themes)
// Command to list and apply themes
export const theme = async (
  args: string[],
  setTheme: (theme: { themeName: string; variantName: string }) => void
): Promise<string> => {
  let themeName: string | undefined;
  let variantName: 'light' | 'dark' = 'dark';

  // Determine the theme name and variant from the arguments
  if (args.length === 0) {
    // If no arguments, display both light and dark variants
  } else if (args.length === 1) {
    if (args[0] === 'light' || args[0] === 'dark') {
      variantName = args[0] as 'light' | 'dark';
    } else {
      themeName = args[0];
    }
  } else {
    const variantIndex = args.findIndex((arg) => arg === 'light' || arg === 'dark');
    if (variantIndex !== -1) {
      variantName = args[variantIndex] as 'light' | 'dark';
      themeName = args.filter((arg) => arg !== 'light' && arg !== 'dark')[0];
    } else {
      themeName = args[0];
      variantName = args[1] as 'light' | 'dark';
    }
  }

  if (!themeName) {
    // List themes with color-coding for both light and dark variants
    const lightThemes = `\n<h3 style="margin-bottom: 10px;">light themes</h3>${Object.keys(themes)
      .map((name) => {
        const themeColors = Object.values(themes[name].light);
        const colorCodedName = name
          .split('')
          .map((char, i) => {
            const color = themeColors[i % themeColors.length];
            return `<span style="color:${color}; text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);">${char}</span>`;
          })
          .join('');
        const colorCodedVariantName = `<span style="color:lightgray;">light</span>`;
        return `${colorCodedName} ${colorCodedVariantName}<br>`;
      })
      .join('')}`;

    const darkThemes = `\n<h3 style="margin-bottom: 10px;">dark themes</h3>${Object.keys(themes)
      .map((name) => {
        const themeColors = Object.values(themes[name].dark);
        const colorCodedName = name
          .split('')
          .map((char, i) => {
            const color = themeColors[i % themeColors.length];
            return `<span style="color:${color}; text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);">${char}</span>`;
          })
          .join('');
        const colorCodedVariantName = `<span style="color:dimgray;">dark</span>`;
        return `${colorCodedName} ${colorCodedVariantName}<br>`;
      })
      .join('')}\n`;

    return `<div style="display: inline-flex; gap: 30px;">
              <div>${lightThemes}</div>
              <div>${darkThemes}</div>
            </div>
┌────────────────────────────────────────┐
│  type 'theme' and your desired theme!  │  
│  the default theme is 'grayscale dark' │
└────────────────────────────────────────┘
\n`;
  } else {
    // Apply color-coding to themeName and variantName
    const themeColors = Object.values(themes[themeName]?.[variantName] || themes[themeName]?.dark);
    const colorCodedThemeName = themeName
      .split('')
      .map((char, i) => {
        const color = themeColors[i % themeColors.length];
        return `<span style="color:${color}; text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);">${char}</span>`;
      })
      .join('');
    const colorCodedVariantName = `<span style="color:${variantName === 'light' ? 'lightgray' : 'dimgray'};">${variantName}</span>`;

    setTheme({ themeName, variantName });
    return `theme changed to ${colorCodedThemeName} ${colorCodedVariantName}`;
  }
};
