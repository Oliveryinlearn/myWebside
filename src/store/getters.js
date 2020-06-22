const getters = {
    worksList(state){
        return state.worksList;
    },
    starArray(state){
        return state.worksList.filter((item)=>{
            return item.starShow === 1;
        })
    },
    firendLink(state){
        return state.firendLink;
    },
    filterWorksGet(state){
        return state.filterWorks;
    },
    getWorksDetail(state){
        return state.WorksDetail;
    }
}
export default getters;