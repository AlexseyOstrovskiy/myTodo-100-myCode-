let store = {
    _state:{
        namesForPublicAcc:[
            {id: 1, nameForPublicAcc:'testName'}
        ],
        lastNameForPublicAcc: '',

        casesForPublicAcc:{
            
                namePublicAcc:'',
                namePublicAcc:{
                taskForPublicAcc: [
            {
            idCases:1,    
            nameForPublicAcc:'someNamePublicAccFortest',
            newCaseName:'newCaseName',
            priority:'high',
            startCaseData:'startCaseData',
            endCaseData:'endCaseData',
            placeCase:'placeCase',
            valueCase:'valueCase'     
        },
        {
            idCases:2,    
            nameForPublicAcc:'someNamePublicAccFortest',
            newCaseName:'newCaseName2',
            priority:'high2',
            startCaseData:'startCaseData2',
            endCaseData:'endCaseData2',
            placeCase:'placeCase2',
            valueCase:'valueCase2'     
        },
        {
            idCases:3,    
            nameForPublicAcc:'someNamePublicAccFortest',
            newCaseName:'newCaseName3',
            priority:'high3',
            startCaseData:'startCaseData3',
            endCaseData:'endCaseData3',
            placeCase:'placeCase3',
            valueCase:'valueCase3'     
        },
    ],
},
   
    },

        
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

export let addNewMyCaseFromState = (nameForPublicAcc,newCaseName,
                                    priority,startCaseData,endCaseData,
                                    placeCase, valueCase   ) =>{

                                        let newMyCase={
                                            // idCases:store._state.casesForPublicAcc.indexOf.id +1,
                                            idCases:1,    
                                            nameForPublicAcc:nameForPublicAcc,
                                            newCaseName:newCaseName,
                                            priority:priority,
                                            startCaseData:startCaseData,
                                            endCaseData:endCaseData,
                                            placeCase:placeCase,
                                            valueCase: valueCase    
                                         } 
if(store._state.casesForPublicAcc.namePublicAcc!==nameForPublicAcc){
        store._state.casesForPublicAcc.namePublicAcc.push(nameForPublicAcc)
        store._state.casesForPublicAcc.namePublicAcc.taskForPublicAcc.push(newMyCase);
      
       }
       else{
        store._state.casesForPublicAcc.namePublicAcc.taskForPublicAcc.push(newMyCase);
       
       }
}
window.store = store;
export default store;