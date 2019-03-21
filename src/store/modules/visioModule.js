import Vue from 'vue';
import widgetsList from './widgetsList.js';
import iconsArray from './iconsArray.js';
// !!! удалить после импорта в плагин;
const _ = require('lodash');
// !!! END
// Func with generate short UID
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
    iconsArray,
    data: {
      name: 'Проект 1',
      menuItems: [
        {
          settings: {
            name: 'Главная',
            templateType: 'ColumnsTemplate',
            icon: 'home',
          },
          type: 'menuItem',
          uid: 'ca3321q',
          widgets: [[], [], []],
        },
        {
          settings: {
            name: 'Гостиная',
            templateType: 'ColumnsTemplate',
            icon: 'shower',
          },
          type: 'menuItem',
          uid: 'ca33222q',
          widgets: [[], [], []],
        },
      ],
    },
    widgetsList: widgetsList,
  },

  getters: {},
  mutations: {
    REPLACE_WIDGET(state, { data, menuUID, indexColumn }) {
      const menuItem = state.data.menuItems.find(el => el.uid === menuUID);
      //  !!! Костыль для недублирования объектов, чтобы они все были уникальны.
      const currectData = data.map(el => {
        if (el !== state.editElement) return _.cloneDeep(el);
        else return el;
      });
      // Костыль END
      replaceArray(currectData, menuItem, indexColumn);
    },
    REMOVE_WIDGET(state, { data, menuUID, indexColumn }) {
      const menuItem = state.data.menuItems.find(el => el.uid === menuUID);
      const arrayItems = indexColumn !== undefined ? menuItem.widgets[indexColumn] : menuItem.widgets;
      const newArray = arrayItems.filter(el => el !== data);
      if (data === state.editElement) state.editElement = null;
      replaceArray(newArray, menuItem, indexColumn);
    },
    SELECT_EDIT(state, data) {
      Vue.set(state, 'editElement', data);
    },
    SELECT_ACTIVE_MENU(state, data) {
      Vue.set(state, 'activeMenu', data);
    },
    CHANGE_SETTINGS(state, settings) {
      Vue.set(state.editElement, 'settings', settings);
    },
    REMOVE_ITEM_MENU(state, item) {
      const indexItem = state.data.menuItems.indexOf(item);
      if (indexItem !== -1) {
        state.data.menuItems.splice(indexItem, 1);
        if (item === state.activeMenu) state.activeMenu = null;
        if (item === state.editElement) state.editElement = null;
      }
    },
    ADD_ITEM_MENU(state) {
      // Creat new UID for menu Item and check uniqueness
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
        type: 'menuItem',
        widgets: [[], [], []],
        uid,
      };
      // Set new item Menu
      state.data.menuItems.push(newMenu);
    },
  },
  actions: {},
};
