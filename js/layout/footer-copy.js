import {e, } from '../data/initial-state.js';
import {Text2} from './texts.js';


export function FooterCopy() {
  return e(
    'footer',
    {
      className: 'footer-copy-wrap t-border-3',
    },
    e(LogoWrap),
    e('br'),
    e('strong', {}, 'Всі мої (завершені) проєкти розміщені на GitHub під ліцензією MIT.'),
    e('br'),
    e('h3', {}, 'PortfolioHub'),
    e('p', {}, `PortfolioHub — збірка всіх моїх проєктів з детальним описом технологій реалізації та відмінностей, посиланнями на проєкти та вихідний код. А також детальна інформація про мене як програміста, опис моїх навичок, мої контакти. Найбільш корисно для IT роботодавців та інших людей пов'язаних з IT.`),
    e(AUrl, {name: 'PortfolioHub',}),
    e('h3', {}, 'Коротка інформація та посилання на інші мої проєкти:'),
    e(WebsiteSection),
    e(GameSection),
    e('h2', {}, 'Мої контакти:'),
    e('h3', {}, 'Вам потрібно зробити сайт чи хочете запропонувати вакансію? Напишіть мені!'),
    e(AddressWrap),
    e(CopyWrap),
    
  );
}


function LogoWrap() {
  return e(
    'div',
    {
      className: 'logo-wrap',
    },
    e(Logo, {src: 'img/my-logo/logo.svg', alt: 'Моє лого',}),
    e(Logo, {src: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png', alt: 'Лого GitHub',}),
    e(Logo, {mit: true, src: 'https://img.shields.io/badge/License-MIT-yellow.svg', alt: 'Знак ліцензії MIT',}),
    
  );
}


function Logo(props) {
  return e(
    'img',
    {
      src: props.src,
      alt: props.alt,
      className: `logo ${props.mit ? 'mit' : ''}`,
    },
    
  );
}


function AUrl(props) {
  const name = props.name.trim().replace(/\s+/g, '-');
  
  return [
    e(
      'a',
      {
        href: `https://kingalaluna.github.io/${name}/`,
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      `Перейти на ${props.name}`,
    ),
    e(
      'a',
      {
        href: `https://github.com/KingAlaluna/${name}.git`,
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      `Глянути вихідний код`,
    ),
  ];
}


function WebsiteSection() {
  return e(
    'section',
    {
      className: 'wrap-my-project',
    },
    e('h2', {}, 'Інші сайти:'),
    e(
      'ul',
      {},
      e(AUrlLi, {name: 'AnimePotik-SPA', type: 'аніме', }),
      e(AUrlLi, {name: 'AnimePotik-MPA', type: 'аніме', }),
      e(AUrlLi, {name: 'AnimeHub-SPA', type: 'аніме', }),
      
    ),
  );
}


function GameSection() {
  return e(
    'section',
    {
      className: 'wrap-my-project',
    },
    e('h2', {}, 'Ігри:'),
    e(
      'ul',
      {},
      e(AUrlLi, {name: 'Flappy UFO-DOM'}),
      e(AUrlLi, {name: 'Dino-DOM'}),
      
    ),
  );
}


function AUrlLi(props) {
  return e(
    'li',
    {},
    e('h3', {}, `${props.name} ${props.theme ? `(${props.theme})` : ''}`),
    e(AUrl, {name: props.name}),
  );
}


function AddressWrap() {
  return e(
    'address',
    {
      className: 'my-contacts-wrap',
    },
    e(UrlImg, {href: 'https://t.me/Viktor_2352', src: 'img/not-my-logo/telegram.svg', alt: 'Telegram',}),
  );
}


function UrlImg(props) {
  return e(
    'a',
    {
      href: props.href,
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    e(Logo, {src: props.src, alt: props.alt}),
  );
}


function CopyWrap() {
  return e(
    'div',
    {
      className: 'copy-wrap',
    },
    e(Logo, {src: 'img/my-logo/logo.svg', alt: 'Моє лого',}),
    e('span', {}, '\u00A9 AnimeHub 2026 | v2.0.0-alpha.2 (SPA).',),
    
  );
}
//16


