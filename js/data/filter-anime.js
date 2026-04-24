// загальний шаблон фільтра
class Filter1 {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
}


// фільтри жанрів
export const filterGenres = [
  new Filter1('Екшен', 1),
  new Filter1('Пригоди', 2),
  new Filter1('Комедія', 4),
  new Filter1('Драма', 8),
  new Filter1('Фентезі', 10),
  new Filter1('Жахи', 14),
  new Filter1('Містика', 7),
  new Filter1('Романтика', 22),
  new Filter1('Наукова фантастика', 24),
  new Filter1('Повсякденність', 36),
  new Filter1('Спорт', 30),
  new Filter1('Надприродне', 37),
  new Filter1('Трилер', 41),
  new Filter1('Сьонен', 27),
  new Filter1('Сьоджьо', 25),
  new Filter1('Сейнен', 42),
  new Filter1('Джьосей', 43),
  new Filter1('Для дітей', 15),
  new Filter1('Історичні', 13),
  new Filter1('Бойові мистецтва', 17),
  new Filter1('Меха', 18),
  new Filter1('Музика', 19),
  new Filter1('Школа', 23),
  new Filter1('Суперсили', 31),
  new Filter1('Військові', 38),
  new Filter1('Поліція', 39),
  new Filter1('Психологічні', 40),
  new Filter1('Еччі', 9),
  new Filter1('Еротика', 49),
  new Filter1('Хентай', 12)
];


// фільтри типів
export const filtersTypes = [
  new Filter1('Телесеріали', 'tv'),
  new Filter1('Фільми', 'movie'),
  new Filter1('OVA', 'ova'),
  new Filter1('Спешели', 'special'),
  new Filter1('ONA', 'ona'),
  new Filter1('Музичні відео', 'music')
];


// фільтри років
export const filtersYears = [
  new Filter1('2026', 2026),
  new Filter1('2025', 2025),
  new Filter1('2024', 2024),
  new Filter1('2023', 2023),
  new Filter1('2022', 2022),
  new Filter1('2021', 2021),
  new Filter1('2020', 2020),
  new Filter1('2019', 2019),
  new Filter1('2018', 2018),
  new Filter1('2017', 2017),
  new Filter1('2016', 2016),
  new Filter1('2015', 2015),
  new Filter1('2014', 2014),
  new Filter1('2013', 2013),
  new Filter1('2012', 2012),
  new Filter1('2011', 2011),
  new Filter1('2010', 2010),
  new Filter1('2009', 2009),
  new Filter1('2008', 2008),
  new Filter1('2007', 2007),
  new Filter1('2006', 2006),
  new Filter1('2005', 2005),
  new Filter1('2004', 2004),
  new Filter1('2003', 2003),
  new Filter1('2002', 2002),
  new Filter1('2001', 2001),
  new Filter1('2000', 2000),
  new Filter1('1999', 1999),
  new Filter1('1998', 1998),
  new Filter1('1997', 1997),
  new Filter1('1996', 1996),
  new Filter1('1995', 1995),
  new Filter1('1994', 1994),
  new Filter1('1993', 1993),
  new Filter1('1995', 1992),
  new Filter1('1991', 1991),
  new Filter1('1990', 1990),
];


// фільтри студій
export const filtersStudios = [
  new Filter1('Bones', 4),
  new Filter1('Production I.G', 10),
  new Filter1('Madhouse', 11),
  new Filter1('Toei Animation', 18),
  new Filter1('Studio Ghibli', 21),
  new Filter1('OLM', 28),
  new Filter1('Nippon Animation', 29),
  new Filter1('Studio Deen', 37),
  new Filter1('Ufotable', 43),
  new Filter1('Shaft', 44),
  new Filter1('Sunrise', 47),
  new Filter1('A-1 Pictures', 56),
  new Filter1('Genco', 79),
  new Filter1('Studio Pierrot', 91),
  new Filter1('Kyoto Animation', 112),
  new Filter1('White Fox', 314),
  new Filter1('MAPPA', 569),
  new Filter1('Wit Studio', 858),
  new Filter1('CloverWorks', 1835)
];



//вибрані фільтри
export const arrayGenres = [];
export const arrayTypes = [];
export const arrayYears = [];
export const arrayStudios = [];

