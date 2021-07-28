const Color = {
  CURIOS_BLUE: `#14aae2`,
  SILVER_CHALICE: `#a6a6a6`,
  MERCURY: `#e7e7e7`,
  CONCRETE: `#f3f3f3`,
  TUNDORA: `#414141`,
  MANTLE: `#939796`,
  MINE_SHAFT: `#262626`,
  WHITE: `#ffffff`,
  OLD_BRICK: `#892128`,
  BISMARK: `#457387`,
};

const chartData = [
  {
    name: `НДС`,
    color: `#0d4377`,
    value: 8,
  },
  {
    name: `Налог на прибыль`,
    color: `#e9ca78`,
    value: 3,
  },
  {
    name: `Земельный налог`,
    color: `#27acc8`,
    value: 6,
  },
  {
    name: `НДФЛ`,
    color: `#da9548`,
    value: 5,
  },
  {
    name: `Налог на имущество`,
    color: `#47cbcd`,
    value: 1,
  },
  {
    name: `Транспортный налог`,
    color: `#4fa26a`,
    value: 7,
  },
  {
    name: `Прочее`,
    color: `#8a1116`,
    value: 2,
  },
];

const tableTitles = [
  `Налог на прибыль`,
  `Налог на добавленную стоймость(НДС)`,
  `Налог на имущество`,
  `НДФЛ`,
  `Страховой налог`,
  `Земельный налог`,
  `Водный налог`,
];

export {
  chartData,
  tableTitles,
  Color,
};
