let initialState = {
    contactList : [],
    keyword : '',
};
function reducer (state=initialState, action) {
    const {type, payload} = action;
    const uniqueID = () => {
        return Math.random().toString(36).substr(2, 16);
      }
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
        default :
            return {...state};
    }
}
export default reducer;