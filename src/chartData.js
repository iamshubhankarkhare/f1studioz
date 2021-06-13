export const datas = [
  [10, 30, 40, 20],
  [10, 40, 30, 20, 50, 10],
  [25, 18, 27],
];

const cs1 = [
  {
    name: 'line0',
    format: '%b',
    values: [
      { date: '2020-01-01', count: '20' },
      { date: '2020-03-02', count: '40' },
      { date: '2020-04-03', count: '80' },
      { date: '2020-06-04', count: '30' },
      { date: '2020-09-05', count: '50' },
      { date: '2020-10-07', count: '40' },
      { date: '2020-11-09', count: '30' },
    ],
  },
];

const cs2 = [
  {
    name: 'line1',
    format: '%b',
    values: [
      { date: '2020-01-01', count: '20' },
      { date: '2020-03-02', count: '40' },
      { date: '2020-04-03', count: '80' },
      { date: '2020-06-04', count: '30' },
      { date: '2020-09-05', count: '50' },
      { date: '2020-10-07', count: '40' },
      { date: '2020-11-09', count: '30' },
      { date: '2020-12-05', count: '50' },
    ],
  },
];

const cs3 = [
  {
    name: 'line2',
    format: '%a',
    values: [
      { date: '2020-01-01', count: '20' },
      { date: '2020-03-02', count: '40' },
      { date: '2020-04-03', count: '80' },
      { date: '2020-06-04', count: '30' },
      { date: '2020-08-05', count: '50' },
    ],
  },
];
const cs4 = [
  {
    name: 'line3',
    format: '%a',
    values: [
      { date: '2020-01-01', count: '20' },
      { date: '2020-03-02', count: '40' },
      { date: '2020-04-03', count: '80' },
      { date: '2020-06-04', count: '30' },
      { date: '2020-08-05', count: '50' },
    ],
  },
];
const cs5 = [
  {
    name: 'line4',
    format: '%a',
    values: [
      { date: '2020-01-01', count: '20' },
      { date: '2020-03-02', count: '40' },
      { date: '2020-04-03', count: '80' },
      { date: '2020-06-04', count: '30' },
      { date: '2020-08-05', count: '50' },
    ],
  },
];
const cs6 = [
  {
    name: 'line5',
    format: '%a',
    values: [
      { date: '2020-01-01', count: '20' },
      { date: '2020-03-02', count: '40' },
      { date: '2020-04-03', count: '80' },
      { date: '2020-06-04', count: '30' },
      { date: '2020-08-05', count: '50' },
    ],
  },
];

export const ConnectedScatterData = { cs1, cs2, cs3, cs3, cs4, cs5, cs6 };
export const cs_d_block_data = [
  {
    heading: 'Network Vulnerability',
    dData: [10, 30, 40],
    csData: cs3,
    bottomText:
      'The infrastructure that was down has increased by 10% since yesterday.',
  },
  {
    heading: 'Code Vulnerability',
    dData: [10, 30, 40],
    csData: cs4,
    bottomText:
      'The infrastructure that was down has increased by 10% since yesterday.',
  },
  {
    heading: 'Web App Vulnerability',
    dData: [10, 30, 40],
    csData: cs5,
    bottomText:
      'The infrastructure that was down has increased by 10% since yesterday.',
  },
  {
    heading: 'OSS Vulnerability',
    dData: [10, 30, 40],
    csData: cs6,
    bottomText:
      'The infrastructure that was down has increased by 10% since yesterday.',
  },
];
