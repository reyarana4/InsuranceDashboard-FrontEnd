
import { SET_POLICY_ID, SET_CUSTOMER_ID, GET_INSURANCE_DATA_REQUEST, GET_INSURANCE_DATA_SUCCESS, GET_INSURANCE_DATA_FAILED, 
    SET_INSURANCE_DATA_SELECTED_DOC,EDIT_DETAILS} from './../constants/actionTypes';
import {getPolicyDetailsOnPolicyId,getPolicyDetailsOnCustomerId,editPolicyDetails} from '../service/insuranceService' ;

export function setPolicyId(value){
    return {
        type: SET_POLICY_ID,
        payload: value
    };
}

export function setCustomerId(value){
    return {
        type: SET_CUSTOMER_ID,
        payload: value
    };
}

export const asyncGetInsuranceDataOnCustomerId = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({
            type:GET_INSURANCE_DATA_REQUEST
        });
        getPolicyDetailsOnCustomerId(data)
        .then((response)=> {
            dispatch({
                type: GET_INSURANCE_DATA_SUCCESS,
                payload: response.data
            });
            resolve(response.data);
        })
        .catch(error=> {
            dispatch({
                type:GET_INSURANCE_DATA_FAILED,
                error: error
            });
            reject(error);
        });
    });
};

export const asyncGetInsuranceDataOnPolicyId = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({
            type:GET_INSURANCE_DATA_REQUEST
        });
        getPolicyDetailsOnPolicyId(data)
        .then((response)=> {
            dispatch({
                type: GET_INSURANCE_DATA_SUCCESS,
                payload: response.data
            });
            resolve(response.data);
        })
        .catch(error=> {
            dispatch({
                type:GET_INSURANCE_DATA_FAILED,
                error: error
            });
            reject(error);
        });
    });
};

export const asyncEditDetails =(data,policy_id)  => (dispatch,getState) => {
    return new Promise((resolve,reject) => {
        dispatch({
            type:GET_INSURANCE_DATA_REQUEST
        });
        editPolicyDetails(data,policy_id)
        .then(handleSuccesForEditDetails(resolve,reject,dispatch,EDIT_DETAILS))
        .then(function(){GET_INSURANCE_DATA_REQUEST(dispatch,getState)})
        .catch(handleErrorForEditOwnership(dispatch,EDIT_DETAILS));
    });
} 

export const setInsuranceSelectedNodes = (selectedDocs) => {
    return {
        type: SET_INSURANCE_DATA_SELECTED_DOC,
        data: selectedDocs
    }
}

