let store = {
    _state:{
        namesForPublicAcc:[
            {id: 1, nameForPublicAcc:'testName'}
        ],
        lastNameForPublicAcc: '',

        
    },

    
}
export let addNameForPublicAcc = (newName)=> {
    let newNameFromeState ={
        id:store._state.namesForPublicAcc.length+1,
        nameForPublicAcc: newName
    }
    store._state.lastNameForPublicAcc = newName;
    store._state.namesForPublicAcc.push(newNameFromeState)
}
export let getNameNewAcc =()=>{
    return  store._state.lastNameForPublicAcc;
   
}
window.store = store;
export default store;