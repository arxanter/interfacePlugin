import Vue from 'vue';
import widgetsList from './widgetsList.js';

const generateUID = () => {
  // I generate the UID from two parts here
  // to ensure the random number provide enough bits.
  var firstPart = (Math.random() * 46656) | 0;
  var secondPart = (Math.random() * 46656) | 0;
  firstPart = ('000' + firstPart.toString(36)).slice(-3);
  secondPart = ('000' + secondPart.toString(36)).slice(-3);
  return firstPart + secondPart;
};

const replaceArray = (data, menuItem, indexColumn) => {
  if (indexColumn !== undefined) {
    Vue.set(menuItem.widgets, indexColumn, data);
  } else menuItem.widgets = data;
};

export default {
  state: {
    mode: 'develop',
    editElement: null,
    activeMenu: null,
    data: {
      name: 'Проект 1',
      menuItems: [
        {
          settings: {
            name: 'Главная',
            templateType: 'ColumnsTemplate',
            icon: 'home',
          },
          uid: 'ca3321q',
          widgets: [
            [
              {
                type: 'wSlider',
                settings: {
                  name: 'Регулировка',
                  address: 1,
                  type: 2,
                },
              },
              {
                type: 'wSwitch',
                settings: {
                  name: 'Переключатель',
                  address: 2,
                  type: 1,
                },
              },
              {
                type: 'wHeader',
                settings: {
                  name: 'Заголовок',
                },
              },
              {
                type: 'wInputNumber',
                settings: {
                  name: 'Уставка',
                  address: 3,
                  type: 6,
                },
              },
              {
                type: 'wStatusValue',
                settings: {
                  name: 'Температура',
                  measure: '°',
                  address: 6,
                },
              },
              {
                type: 'wClimate',
                settings: {
                  name: 'Спальня',
                  address: 66,
                },
              },
              {
                type: 'wDimmer',
                settings: {
                  name: 'Лампа стол',
                  address: 66,
                },
              },
              {
                type: 'wLED',
                settings: {
                  name: 'Лампа стол',
                  address: 66,
                },
              },
              {
                type: 'wScenes',
                settings: {
                  name: 'Сценарии спальня',
                  address: 66,
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
                  {
                    icon: 'glass-cheers',
                    name: 'Вечеринка',
                    address: 22,
                  },
                  {
                    icon: 'theater-masks',
                    name: 'Кинотеатр',
                    address: 22,
                  },
                  {
                    icon: 'guitar',
                    name: 'Вечеринка 2',
                    address: 22,
                  },
                  {
                    icon: 'play',
                    name: 'Фильм',
                    address: 22,
                  },
                  {
                    icon: 'power-off',
                    name: 'Выключить всё',
                    address: 22,
                  },
                  {
                    icon: 'bed',
                    name: 'Ночной',
                    address: 22,
                  },
                  {
                    icon: 'play',
                    name: 'Игра',
                    address: 22,
                  },
                ],
              },
              {
                type: 'wStatusIcon',
                settings: {
                  name: 'Состояние',
                  address: 5,
                  type: 2,
                  icon: ['far', 'lightbulb'],
                  isMultiIcon: false,
                  statusIcon: [],
                },
              },
            ],
            [
              {
                type: 'wSlider',
                settings: {
                  name: 'Регулировка',
                  address: 1,
                  type: 2,
                },
              },
              {
                type: 'header',
                settings: {
                  name: 'Заголовок',
                },
              },
            ],
            [
              {
                type: 'header',
                settings: {
                  name: 'Заголовок',
                },
              },
              {
                type: 'header',
                settings: {
                  name: 'Заголовок',
                },
              },
            ],
          ],
        },
        {
          settings: {
            name: 'Гостиная',
            templateType: 'ColumnsTemplate',
            icon: 'shower',
          },
          uid: 'ca33222q',
          widgets: [
            [
              {
                type: 'header',
                settings: {
                  name: 'Заголовок',
                },
              },
              {
                type: 'header',
                settigs: {
                  name: 'Заголовок',
                },
              },
            ],
            [],
            [],
          ],
        },
      ],
    },
    widgetsList: widgetsList,
  },

  getters: {},
  mutations: {
    REPLACE_WIDGET(state, { data, menuUID, indexColumn }) {
      const menuItem = state.data.menuItems.find(el => el.uid === menuUID);
      replaceArray(data, menuItem, indexColumn);
    },
    REMOVE_WIDGET(state, { data, menuUID, indexColumn }) {
      const menuItem = state.data.menuItems.find(el => el.uid === menuUID);
      const arrayItems = indexColumn !== undefined ? menuItem.widgets[indexColumn] : menuItem.widgets;
      const newArray = arrayItems.filter(el => el !== data);
      replaceArray(newArray, menuItem, indexColumn);
    },
    SELECT_EDIT(state, data) {
      Vue.set(state, 'editElement', data);
    },
    SELECT_ACTIVE_MENU(state, data) {
      Vue.set(state, 'activeMenu', data);
    },
    SAVE_CONFIG(state, { data, item }) {
      item.settings = data;
    },
    REMOVE_ITEM_MENU(state, item) {
      const indexItem = state.data.menuItems.indexOf(item);
      if (indexItem !== -1) state.data.menuItems.splice(indexItem, 1);
    },
    ADD_ITEM_MENU(state) {
      const creatUID = () => {
        let uid = generateUID();
        if (state.data.menuItems.indexOf(uid) !== -1) uid = creatUID();
        return uid;
      };
      const uid = creatUID();
      const newMenu = {
        settings: {
          name: 'Заголовок',
          templateType: 'ColumnsTemplate',
          icon: 'home',
        },
        widgets: [[], [], []],
        uid,
      };
      state.data.menuItems.push(newMenu);
    },
  },
  actions: {},
};
