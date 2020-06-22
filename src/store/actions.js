const actions = {
    actionWorksList({commit},list){
        commit("setWorksList",list)
    },
    actionFilterWorks({commit}, list){
        commit("setFilterWorksList", list)
    },
    actionSetWorksDetail({commit},obj){
        commit("setWorksDetail", obj)
    }
}
export default actions;