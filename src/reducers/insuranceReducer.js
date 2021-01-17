import {
        GET_INSURANCE_DATA_REQUEST, GET_INSURANCE_DATA_SUCCESS, GET_INSURANCE_DATA_FAILED, SET_INSURANCE_DATA_SELECTED_DOC
} from './../constants/actionTypes';

const initialState = {
    data: [],
    insuranceDataList:[]
};

const InsuranceReducer = (state = initialState, action) => {
    switch(action.type){
        case  GET_INSURANCE_DATA_REQUEST:
            return Object.assign(
                {},state,
                {
                    isLoading:true
                }
            )
            case  GET_INSURANCE_DATA_SUCCESS:
                return Object.assign(
                    {},state,
                    {
                        isLoading:false,
                        insuranceDataList: action.payload
                    }
                );

            case  GET_INSURANCE_DATA_FAILED:
                return Object.assign(
                    {},state,
                    {
                        isLoading:false,
                        insuranceDataList: initialState.insuranceDataList
                    }
                );
            case SET_INSURANCE_DATA_SELECTED_DOC:
                return Object.assign({},state,{Ids: action.data})
            default:
                return state;
            
    }
};
export default InsuranceReducer;