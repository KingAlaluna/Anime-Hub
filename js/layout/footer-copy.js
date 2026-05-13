import {e, } from '../data/initial-state.js';
import {Text2} from './texts.js';


const url = 'https://my-projects-and-about-me-api.kvses0417.workers.dev/projects';
const nameProject = 'AnimeHub-SPA';

let data = null;

try {
  const json = await fetch(url);
  const jsonData = await json.json();
  data = await jsonData;
} catch (e) {
  console.error('Помилка в footer-copy.js', e);
}

function ProjectsRender({data}) {
  return data?.map(el => {
    if (el.name == nameProject) {
      return;
    }
    
    const {
      name,
      status,
      type,
      urlProject,
      urlCode,
    } = el;
    
    return e(AUrlLi, {key: name, title: name, name: name, type: type, status: status, });
  });
}


function SectionProjectsRender() {
  return data?.map(el => {
    const {
      name,
      data,
    } = el;
    
    return e(
      'section',
      {
        className: 'wrap-my-project',
      },
      e('h2', {}, `${name}:`),
      e(
        'ul',
        {},
        e(ProjectsRender, {data: data, }),
      ),
    );
  });
}




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
    e(ProjectsWrap),
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


function ProjectsWrap(param) {
  return e(
    'div',
    {
      className: 'all-my-projects-wrap',
    },
    e(SectionProjectsRender),
  );
}


function AUrlLi({title, name, type, status}) {
  return e(
    'li',
    {},
    e('h3', {}, title),
    e(
      'div',
      {
        className: 'labels-wrap',
      },
      type ? e(
        'span',
        {
          className: 'type',
        },
        type,
      ) : null,
      status != 'release' ? e(
        'span',
        {
          className: `status ${status}`,
        },
        status,
      ) : null,
    ),
    e(AUrl, {name: name}),
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
    e('span', {}, '\u00A9 AnimeHub 2026 | v2.0.0-alpha.3 (SPA).',),
    
  );
}


