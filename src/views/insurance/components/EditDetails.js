import React, {Compenent} from 'react';
import {connect} from 'react-redux';
import Popup from 'react-popup';

class EditDetails extends Compenent {
    constructor(props){
        super(props);
        let data = this.props.insuraanceDataGridState.Id[0].data;
        this.state = {
            policy_id: data.policy_id,
            date_of_purchase: data.date_of_purchase,
            customer_id: data.customer_id,
            vehicle_segment: data.vehicle_segment,
            premium: data.premium, 
            bodily_injury_liability: data.bodily_injury_liability,
            collision: data.collision, 
            comprehensive: data.comprehensive,
            gender: data.gender,
            income_group: data.income_group, 
            region: data.region,
            personal_injury_protection: data.personal_injury_protection,
            maritalStatus: data.marital_status,
            property_damage_liability: data.property_damage_liability

        }
    }

    saveVehicleSegment = (event) => {
        this.setState({
            vehicle_segment: event.target.value
        })
    }

    saveBodilyInjuryLiability = (event) => {
        this.setState({
            bodily_injury_liability: event.target.value
        })
    }

    savePremium= (event) => {
        if(event.target.value >= 1000000){
            NotificationManager.warning('Premium should not be more then 1 million','',4000);

        } else {
        this.setState({
            premium: event.target.value
        })
        }
    }

    saveCollision = (event) => {
        this.setState({
            collision: event.target.value
        })
    }
    saveIncomeGroup = (event) => {
        this.setState({
            income_group: event.target.value
        })
    }

    saveRegion = (event) => {
        this.setState({
            region: event.target.value
        })
    }

    saveFuel = (event) => {
        this.setState({
            fuel: event.target.value
        })
    }

    saveMaritalStatus = (event) => {
        this.setState({
            marital_status: event.target.value
        })
    }
    savePropertyDamageLiability= (event) => {
        this.setState({
            property_damage_liability: event.target.value
        })
    }
    savePersonalInjuryProtection = (event) => {
        this.setState({
            personal_injury_protection: event.target.value
        })
    }

    handleCancel = () => {
        Popup.close();
    }

    handleUpdate = () =>{
        let submittedData = {
            vehicle_segment: this.state.vehicle_segment,
            premium: this.state.premium, 
            bodily_injury_liability: this.state.bodily_injury_liability,
            collision: this.state.collision, 
            fuel: this.state.fuel,
            comprehensive: this.state.comprehensive,
            gender: this.state.gender,
            income_group: this.state.income_group, 
            region: this.state.region,
            personal_injury_protection: this.state.personal_injury_protection,
            maritalStatus: this.state.marital_status,
            property_damage_liability: this.state.property_damage_liability
        }

        this.props.dispatch(actions.asyncEditDetails(submittedData, this.state.policy_id));
        Popup.close();

    }


    render (){
        return(
            
            <div>
                <div style = {{float: "left", width:"100%",marginBottom: "20px"}}>
                    Policy Id
                    <textarea disabled class="insurance-textarea" value= {this.state.policy_id} style= {{width: '50px',height: '20px'}}
                    />
                </div>    

                <div syle = {{float: "left", width: "100%", marginBottom: "20px"}}>
                    Date of Purchase
                   <textarea disabled class="insurance-textarea" value = {this.state.date_of_purchase} style={{ width: '50px', height: '20px'}}
                   />
                 </div>

                <div syle = {{float: "left", width: "100%", marginBottom: "20px"}}>
                    Customer Id
                   <textarea disabled class="insurance-textarea" value = {this.state.customer_id} style={{ width: '50px', height: '20px'}}
                   />
                 </div>

                <div style = {{float: "left", width: "100%", marginBottom: "20px"}}>
                    Fuel 
                    <textarea class="insurance-textarea" value = {this.state.fuel} style={{width: '50px', height: '20px'}}
                    onchange = {this.saveFuel}/>
                </div>

                <div style = {{float:"left", width: "100%", marginBottom: "20px"}}>
                    Vehicle Segment    
                    <textarea class="insurance-textarea" value = {this.state.vehicle_segment} style={{ width:'50px', height: '20px'}}
                    onchange = {this.saveVehicleSegment}/>
                </div>

                <div style = {{float: "left", width: "100%", marginBottom: "20px"}}>
                    Premium
                    <textarea class="insurance-textarea" value = {this.state.premium} style={{width:'50px' , height: '20px'}}
                    onchnage = {this.savePremium}/> 
                </div>

                <div style = {{float: "left", width: "100%", marginBottom:"20px"}}>
                    Bodily Injury Laibility
                    <textarea class="insurance-textarea" value = {this.state.bodily_injury_liability} style={{width: '50px' , height: '20px'}}
                    onchange = {this.saveBodilyInjuryLiability}/>
                </div>

                <div style = {{float:"left", width:"100%", marginBottom:"20px"}}>
                    Personal Injury Protection
                    <textarea class="insurance-textarea" value = {this.state.personal_injury_protection} style={{ width: '50px', height:'20px'}}
                    onchange = {this.savePersonalInjuryProtection}/>
                </div>

                <div style = {{float:"left", width: "100%", marginBottom: "20px"}}>
                    Property Damage Liability
                    <textarea class="insurance-textarea" value = {this.state.property_damage_liability} style={{ width: '50px', height: '20px'}}
                    onchange = {this.savePropertyDamageLiability}/>
                </div>

                <div style = {{float:"left", width: "100%", marginBottom: "20px"}}>
                    Collision
                    <textarea class="insurance-textarea" value = {this.state.collision} style={{ width: '50px', height: '20px'}}
                    onchange = {this.saveCollision}/>
                </div>

                <div style = {{float: "left", width: "100%", marginBottom: "20px"}}>
                    Comprehensive
                    <textarea class="insurance-textarea" value = {this.state.comprehensive} style={{ width: '50px', height: '20px'}}
                    onchange = {this.saveComprehensive}/>
                </div>

                <div style= {{marginTop: "20px"}}>
                    Gender
                    <textarea class="insurance-textarea" value = {this.state.gender} style={{ width: '50px', height: '20px'}}
                    onchange = {this.saveGender}/>
                </div>

                <div style = {{float:"left", width: "100%", marginBottom: "20px"}}>
                    Income Group
                    <textarea class="insurance-textarea" value = {this.state.income_group} style={{ width: '50px', height: '20px'}}
                    onchange = {this.saveIncomeGroup}/>
                </div>

                <div style = {{float: "left", width: "100%", marginBottom: "20px"}}>
                    Region
                    <textarea class="insurance-textarea" value = {this.state.region} style={{ width: '50px', height: '20px'}}
                    onchange = {this.saveRegion}/>
                </div>

                <div style= {{marginTop: "20px"}}>
                    Marital Status
                    <textarea class="insurance-textarea" value = {this.state.maritalStatus} style={{ width: '50px', height: '20px'}}
                    onchange = {this.saveMaritalStatus}/>
                      
                </div>

                <div style= {{marginTop: "10px"}}>
                        <button class = "btn-action" onclick={this.handleUpdate}> Update </button>
                        <button class = "btn-action" onclick={this.handleCancel}> Cancel </button>
                </div>
            </div>      
        );
}

}


const mapStateToProps = (state) => {

    return {
        InsuranceDataGridState:state.InsuranceReducer
    
    };
};

export default connect(mapStateToProps)(EditDetails);
        
            