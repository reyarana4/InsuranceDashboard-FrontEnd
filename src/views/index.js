import React from 'react';
import store from '../store';
import InsuranceDataView from './insuranceDataView';
import {Provider} from 'react-redux';
//import '../../registerPopup';


function ModuleIndex (){
	return( 
        <Provider store = {store}>
                <InsuranceDataView/>
        </Provider>
		
	
	)
}

export default ModuleIndex;

