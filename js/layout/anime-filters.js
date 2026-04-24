import {e, s} from '../data/initial-state.js';
import {Text1, Text3, } from './texts.js';
import {Btn6, Btn2, } from './btns.js';


export function FilterPanel(props) {
  return e(
    'div',
    {
      style: {
        height: 'max-content',
        backgroundImage: 'var(--gradient-1), var(--gradient-17)',
        backgroundClip: 'padding-box, padding-box, border-box',
      },
      className: 't-border-2 ',
    },
    e(Text1, {text: 'Виберіть фільтри:'}),
    e(FilterPanel2, {text: 'Жанри:', btnFilters: props.btnFilterGenres || null, array: props.arrayGenres || null, }),
    e(FilterPanel2, {text: 'Типи:', btnFilters: props.btnFiltersTypes || null, array: props.arrayTypes || null, isAc: 'ActAnimeType',}),
    e(FilterPanel2, {filter: FilterPanel4, text: 'Роки:', btnFilters: props.btnFiltersYears || null, array: props.arrayYears || null, isAc: 'ActAnimeYear',}),
    e(FilterPanel2, {text: 'Студії:', btnFilters: props.btnFiltersStudios || null, array: props.arrayStudios || null, }),
    e(Btn2, {text: 'Підтвердити', onClick: props.onClick || null}),
  );
}

function FilterPanel2(props) {
  return e(
    'div',
    {
      style: {
        height: 'max-content',
      },
    },
    e(Text3, {text: props.text}),
    e(props.filter || FilterPanel3, {btnFilters: props.btnFilters || null, array: props.array || null, isAc: props.isAc || null,}),
  );
}

function FilterPanel3(props) {
  const g = s();
  return e(
    'div',
    {
      style: {
        height: 'max-content',
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      className: 't-grid-2 filter-1',
    },
    props?.btnFilters?.map?.((b, index) => 
      e(Btn6, {
        key: index,
        text: b.name,
        isAc: props.isAc || null,
        onClick: () => {
          if (props.isAc) {
            if (g[`is${props.isAc}`] !== b.name || g[`is${props.isAc}2`] !== true) {
              props.array.length = 0;
              props.array.push(b.url);
            } else {
              props.array.length = 0;
            }
          } else {
            const index = props?.array?.indexOf(b.url);
            if (index === -1) {
              props?.array?.push(b.url);
            } else {
              props?.array?.splice(index, 1);
            }
          }
        },
      }) || null,
    ),
  );
}

function FilterPanel4(props) {
  const g = s();
  return e(
    'div',
    {
      style: {
        height: 'max-content',
        padding: '0 1.25vw 0 1.25vw',
      },
      className: 't-grid-3 filter-2',
    },
    props?.btnFilters?.map?.((b, index) => 
      e(Btn6, {
        key: index,
        text: b.name,
        isAc: props.isAc || null,
        onClick: () => {
          if (props.isAc) {
            if (g[`is${props.isAc}`] !== b.name || g[`is${props.isAc}2`] !== true) {
              props.array.length = 0;
              props.array.push(b.url);
            } else {
              props.array.length = 0;
            }
          } else {
            const index = props?.array?.indexOf(b.url);
            if (index === -1) {
              props?.array?.push(b.url);
            } else {
              props?.array?.splice(index, 1);
            }
          }
        },
      }) || null,
    ),
  );
}
//110

