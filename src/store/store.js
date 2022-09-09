import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        isDisable: false,
    },
    getters: {
        isDisable: state => {
            return state.isDisable;
        }
    },
    mutations: {
        SET_DISABLE(state, disable) {
            state.isDisable = disable;
        }
    }
})