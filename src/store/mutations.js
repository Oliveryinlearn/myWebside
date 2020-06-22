const mutations = {
    setWorksList(state,list){
        state.worksList = list;
    },
    setFilterWorksList(state,list){
        state.filterWorks = list;
    },
    setWorksDetail(state,obj){
        state.WorksDetail = obj;
    }
}
export default mutations;