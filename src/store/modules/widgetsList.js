export default [
  {
    widgetType: 'wClimate',
    type: 'widget',
    settings: {
      name: 'Значение',
      address: 1,
      type: 2,
    },
  },
  {
    widgetType: 'wDimmer',
    type: 'widget',
    settings: {
      name: 'Значение',
      address: 1,
      type: 2,
    },
  },
  {
    widgetType: 'wHeader',
    type: 'widget',
    settings: {
      name: 'Значение',
      address: 1,
      type: 2,
    },
  },
  {
    widgetType: 'wInputNumber',
    type: 'widget',
    settings: {
      name: 'Значение',
      address: 1,
      type: 2,
    },
  },
  {
    widgetType: 'wLED',
    type: 'widget',
    settings: {
      name: 'Значение',
      address: 1,
      type: 2,
    },
  },
  {
    widgetType: 'wScenes',
    type: 'widget',
    settings: {
      name: 'Значение',
      address: 1,
      type: 2,
    },
    values: [
      {
        icon: 'lightbulb',
        name: 'Обычный',
        address: 22,
      },
      {
        icon: 'cloud-moon',
        name: 'Ночь',
        address: 22,
      },
      {
        icon: 'book-open',
        name: 'Чтение',
        address: 22,
      },
    ],
  },
  {
    widgetType: 'wSlider',
    type: 'widget',
    settings: {
      name: 'Значение',
      address: 1,
      type: 2,
    },
  },
  {
    widgetType: 'wStatusIcon',
    type: 'widget',
    settings: {
      name: 'Значение',
      address: 1,
      type: 2,
      icon: ['far', 'lightbulb'],
      isMultiIcon: false,
      statusIcon: [],
    },
  },
  {
    widgetType: 'wStatusValue',
    type: 'widget',
    settings: {
      name: 'Значение',
      demension: '°C',
      address: { status: null, type: 2, isAddress: true },
    },
  },
  {
    widgetType: 'wSwitch',
    type: 'widget',
    settings: {
      name: 'Значение',
      address: { value: null, status: null, type: 1, isAddress: true },
    },
  },
];
