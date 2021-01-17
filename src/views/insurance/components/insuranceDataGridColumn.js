//import moment from 'moment';
//import Popup from 'react-popup';

class InsuranceDataGridColumn{

    getColumnDef(self){
        let that = this;
        return [
            {
                headername: "Policy Id",
                field:"policy_id",
                filter: 'agTextColumnFilter',
                width: 50
            },
            {
                headername: "Date of Purchase",
                field:"date_of_purchase",
                filter: 'agTextColumnFilter',
                width: 50
            },
            {
                headername: "Customer Id",
                field:"customer_id",
                filter: 'agTextColumnFilter',
                width: 50
            },
            {
                headername: "Fuel",
                field:"fuel",
                filter: 'agTextColumnFilter',
                width: 50
            },
            {
                headername: "Vehicle Segment",
                field:"vehicle_segment",
                filter: 'agTextColumnFilter',
                width: 50
            },
            {
                headername: "Premium",
                field:"premium",
                filter: 'agTextColumnFilter',
                width: 50
            },
            {
                headername: "Bodily Injury Liability",
                field:"bodily_injury_liability",
                filter: 'agTextColumnFilter',
                width: 50
            },
            {
                headername: "Personal Injury Protection",
                field:"personal_injury_protection",
                filter: 'agTextColumnFilter',
                width: 50
            },
            {
                headername: "Property Damage Liability",
                field:"property_damage_liability",
                filter: 'agTextColumnFilter',
                width: 50
            },
            {
                headername: "Collision",
                field:"collision",
                filter: 'agTextColumnFilter',
                width: 50
            },
            {
                headername: "Comprehensive",
                field:"comprehensive",
                filter: 'agTextColumnFilter',
                width: 50
            },
            {
                headername: "Gender",
                field:"gender",
                filter: 'agTextColumnFilter',
                width: 50
            },
            {
                headername: "Income Group",
                field:"income_group",
                filter: 'agTextColumnFilter',
                width: 50
            },
            {
                headername: "Region",
                field:"region",
                filter: 'agTextColumnFilter',
                width: 50
            },
            {
                headername: "Marital Status",
                field:"marital_status",
                filter: 'agTextColumnFilter',
                width: 50
            }
        ];
    }
}

const mapStateToProps = (state) => {
    return {
        InsuranceDataGridState: state.InsuranceReducer
    }
}

export default (InsuranceDataGridColumn);