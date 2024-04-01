let initialState = {
    contactList : [],
    keyword : '',
};
function reducer (state=initialState, action) {
    const {type, payload} = action;
    const uniqueID = () => {
        return Math.random().toString(36).substr(2, 16);
      }
      console.log("reducer실행",state, payload)
    switch(type) {
        case "ADD-CONTACT":
            return {
                ...state, 
                contactList:[
                    ...state.contactList, 
                    {
                        id : uniqueID(),
                        name : payload.name, 
                        phoneNumber : payload.phoneNumber,
                    }
                ],
                keyword:"",
            };
        case "SEARCH-CONTACT":
            return {...state, keyword : payload.keyword};
        case "DELETE-CONTACT":
            console.log("delete!!!!",payload.id, state.contactList)
            return {...state, 
                    contactList : state.contactList.filter(item => item.id !== payload.id)
                }
        default :
            return {...state};
    }
}
export default reducer;