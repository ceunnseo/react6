let initialState = {
    contactList : [],
    keyword : '',
};
function reducer (state=initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case "ADD-CONTACT":
            return {
                ...state, 
                contactList:[
                    ...state.contactList, 
                    {
                        name : payload.name, 
                        phoneNumber : payload.phoneNumber,
                    }
                ],
                keyword:""
            };
        case "SEARCH-CONTACT":
            return {...state, keyword : payload.keyword};
        default :
            return {...state};
    }
}
export default reducer;