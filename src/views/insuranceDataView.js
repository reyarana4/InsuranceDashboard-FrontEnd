import React, {Component} from 'react';
import {connect} from 'react-redux';
import InsuranceDataFilter from './insurance/components/insuranceDataFilter';
import '../assets/insuranceData.css';
import InsuranceDataGrid from './insurance/components/insuranceDataGrid';
//import {NotificationContainer} from 'react-notifications';
//import '../../registerpopup';

class InsuranceDataView extends Component {
	
	componentDidMount = () => {
		
	
	}

	render(){
		return(
			<div id = "insuranceDataView" className="insuranceData-view">
				<InsuranceDataFilter/>
				<InsuranceDataGrid/>
				
			</div>
		);
	}
} 

const mapStateToProps = (state) => {
	return {
	};
};

export default connect(mapStateToProps)(InsuranceDataView);
