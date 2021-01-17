import React, {Component} from 'react';
import {connect} from 'react-redux';
import './../../../assets/insuranceData.css';
import * as actions from './../../../actions/insuranceAction';
import {NotificationContainer} from 'react-notifications';

class InsuranceDataFilter extends Component{

	constructor(props) {
		super(props);
		this.state = {
			policy_id: '',
			customer_id: ''
		};
	}
	
	
	componentDidMount(){
		const {client} = this.props;
		this.client = client;
	}
	
	changePolicyId = (e) => {
		let value = e.target.value;
		this.setState({
		'policy_id': value
		});
		this.props.dispatch(actions.setPolicyId(value));
	
	}
	
		changeCustomerId = (e) => {
		let value = e.target.value;
		this.setState({
		'customer_id': value
		});
		this.props.dispatch(actions.setCustomerId(value));
	
	}
	
	sendFilter = () => {
		if(this.state.customer_id != '' && this.state.insuranceId != ''){
			NotificationManager.warning('Please add only oner search criteria', '', 4000);
		}
		else if(this.state.customer_id != '') {
			this.props.dispatch(actions.asyncGetInsuranceDataOnCustomerId(this.state.customer_id));
		} 
		else if(this.state.policy_id != '') {
			this.props.dispatch(actions.asyncGetInsuranceDataOnPolicyId(this.state.policy_id));
		}
		else {
			NotificationManager.warning('Please add one search criteria','',4000);
		}
				
	}
	
	clearFilter = () => {
		this.setState(
		{
			'insurance_id': '',
			'customer_id': ''
		});
	}
	
	render(){
		return(
			<div className="insurance-report-filter">
				<div className="filter-topdiv">
					
					<div className= "filter-inputdiv" style={{maxWidth:'11%'}}>
						<input id = "pId" type="text" placeholder="Policy Number" className="textinput" value={this.state.policy_id}
							onChange={this.changePolicyId} style={{width: '100%'}}/>
					</div>
					
					<div className= "filter-inputdiv" style={{maxWidth:'11%'}}>
						<input id = "cId" type="text" placeholder="Customer Id" className="textinput" value={this.state.customer_id}
							onChange={this.changeCustomerId} style={{width: '100%'}}/>
					</div>
							
					
					<div className= "btn-inputdiv">
						<button title= "Submit" className="button but--primary" onClick={this.sendFilter}>
							Search
						</button>
					</div>
					
					<div className= "btn-inputdiv">
						<button title= "Reset" className="button but--primary" onClick={this.clearFilter}>
							Search
						</button>
					</div>
				
				
				</div>
			
			
			</div>
		);
	
	}
}

const mapStateToProps = (state) => {
	return {
		insuranceDataState: state.InsuranceReducer
	};

};

export default connect(mapStateToProps)(InsuranceDataFilter);

