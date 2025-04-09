// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
import { Agent } from 'http';

// Help
export const help = async (args: string[], language: string): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }

  if (language === 'en')
    return `Welcome! Here are all the available commands:
  \n${c}\n
  [tab]: trigger completion.
  [ctrl+l]/clear: clear terminal.\n
  Type 'sumfetch' to display summary.
  `;
  else 
    return `欢迎！以下是所有可用的命令:
  \n${c}\n
  [tab]: 快速补全.
  [ctrl+l]/clear: 清空命令行.\n
  键入 'sumfetch' 以显示摘要.
  `;
};



// zh 切换中文
export const zh = async (args: string[], language: string): Promise<string> => {
  return '语言切换成中文👌';
}

// en 切换英文
export const en = async (args: string[], language: string): Promise<string> => {
  return 'switch language to english👌.';
}




// Redirection
export const repo = async (args: string[], language: string): Promise<string> => {
  window.open(`${config.repo}`);
  return type(language, 'Opening Github repository...', '打开Github仓库...');
};

// About
export const about = async (args: string[], language): Promise<string> => {
  return type(language ,`Hi, I am ${config.name} assistant. 
Welcome to our website!
More about me👇:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.` ,
`你好，我是${config.name}助理,
欢迎来到我们的网站！
了解更多信息👇：
'sumfetch' - 实验室简介。
'resume' - 最新的详细介绍。
'readme' - 我们的 github readme
`);
};

export const resume = async (args: string[],language): Promise<string> => {
  window.open(`${config.resume_url}`);
  return type(language, 'Opening resume...', '打开简介...');
};

// Donate
export const donate = async (args: string[], language): Promise<string> => {
  return type(language, `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
`, `感谢您的关注. 
您的支持会给予我们更多动力💪：
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>`);
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

// Search
export const baidu = async (args: string[], language): Promise<string> => {
  window.open(`https://www.baidu.com/s?wd=${args.join(' ')}`);
  return type(language, `Now search baidu for ${args.join(' ')}`, `百度搜索 ${args.join(' ')}`)
}


export const bing = async (args: string[], language: string): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return type(language, `Wow, really? You are using bing for ${args.join(' ')}?`, `Bing搜索 ${args.join(' ')}`);
};



// Typical linux commands
export const echo = async (args: string[], language: string): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[], language: string): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[], language: string, path?:string): Promise<string> => {
  if (path === '~/paper' || path === '~/project')
    return '';
  return type(language, `'paper' - published paers
'project' - projects that have already been solved`, 
  `'paper' - 已经发表的论文
'project' - 已经验收的项目
  `);
};

export const cd = async (args: string[], language: string, setPath?:any): Promise<string> => {
  if(args.length === 1 && args[0] === 'paper' || args[0] === 'project' || args[0] === '..' || args[0] === '~') {
    if (args[0] === '..' || args[0] === '~')
      setPath(``);
    else
      setPath(`~/${args[0]}`)
    return '';
  }
  return type(language, `unfortunately, i cannot afford more directories.
if you want to help, you can type 'ls'.`, `我们不能定位到目标路径.
如果你想确认可查看页面，你可以键入 'ls'`);
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[], language: string, path?: string): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[], language: string, path?: string): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[], language?: string): Promise<string> => {
  // window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return type(language, `Permission denied: with little power comes... no responsibility? `, `认证失败: 权限认证失败...`);
};

// Banner
export const banner = (args?: string[], language?: string): string => {
  return type(language, `
██████╗ ██████╗  ██████╗  █████╗     ██╗    ██╗███████╗██████╗ ███████╗██╗████████╗███████╗
██╔══██╗╚════██╗██╔═████╗██╔══██╗    ██║    ██║██╔════╝██╔══██╗██╔════╝██║╚══██╔══╝██╔════╝
██████╔╝ █████╔╝██║██╔██║╚██████║    ██║ █╗ ██║█████╗  ██████╔╝███████╗██║   ██║   █████╗  
██╔══██╗ ╚═══██╗████╔╝██║ ╚═══██║    ██║███╗██║██╔══╝  ██╔══██╗╚════██║██║   ██║   ██╔══╝  
██████╔╝██████╔╝╚██████╔╝ █████╔╝    ╚███╔███╔╝███████╗██████╔╝███████║██║   ██║   ███████╗
╚═════╝ ╚═════╝  ╚═════╝  ╚════╝      ╚══╝╚══╝ ╚══════╝╚═════╝ ╚══════╝╚═╝   ╚═╝   ╚══════╝

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`, `
██████╗ ██████╗  ██████╗  █████╗     ██╗    ██╗███████╗██████╗ ███████╗██╗████████╗███████╗
██╔══██╗╚════██╗██╔═████╗██╔══██╗    ██║    ██║██╔════╝██╔══██╗██╔════╝██║╚══██╔══╝██╔════╝
██████╔╝ █████╔╝██║██╔██║╚██████║    ██║ █╗ ██║█████╗  ██████╔╝███████╗██║   ██║   █████╗  
██╔══██╗ ╚═══██╗████╔╝██║ ╚═══██║    ██║███╗██║██╔══╝  ██╔══██╗╚════██║██║   ██║   ██╔══╝  
██████╔╝██████╔╝╚██████╔╝ █████╔╝    ╚███╔███╔╝███████╗██████╔╝███████║██║   ██║   ███████╗
╚═════╝ ╚═════╝  ╚═════╝  ╚════╝      ╚══╝╚══╝ ╚══════╝╚═════╝ ╚══════╝╚═╝   ╚═╝   ╚══════╝

键入 'help' 来查看可输入的命令.
键入 'sumfetch' 来查看实验室简介.
键入 'repo' 或点击 <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> 来访问 Github 仓库.
`);
};


const type = (language, en, zh) => {
  return language === 'zh' ? zh : en;
}