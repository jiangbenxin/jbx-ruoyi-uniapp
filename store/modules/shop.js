//user.js
const state = ({ //state里面存放的是变量，如果你要注册全局变量，写这里
  shop:'shop',   
});

const getters = { //getters相当于是state的计算属性，如果你需要将变量的值进行计算，然后输出，写这里
  fullName(state){
    return state.shop + '用户';
  }}
;

const mutations = { //修改store中的变量的方法，如果你要改变变量的值，就写这里
  SET_shop(state, value) {
	  console.log('shop');
    state.shop = value;
  },
};

const actions = { //actions提交的是mutations，相当于就是改变变量的方法的重写，但是，actions是可以进行异步操作的
  setUsername(content) {
	  console.log('shop');
    content.commit('SET_shop');
  }
};

export default{
  namespaced:true,
  state,
  getters,
  mutations,
  actions
};
