import React, { Component } from 'react';
import './../../../assets/insuranceData.css';
import * as actions from './../../../actions/insuranceAction';
import InsuranceDataGridColumn from './insuranceDataGridColumn';
import {connect} from 'react-redux';
import Loadable from 'react-loadable';

import InsuranceDataFilter from './insuranceDataFilter';
//import Popup from 'react-popup';
const {ColumnSelectorHelper, DataGrid} = Component

const columns = new InsuranceDataGridColumn();

class InsuranceDataGrid extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            gridHeightL: 100,
            dataList: [],
            gridColumns: columns.getColumnDef(this),
            columnFilters: columns.getColumnDef(this).map(column =>{
                return {key: column.field, name: column.headerName, type: 'string'}
            }),
            rowCount: 0,
            filteredCount: false,
            filteredRows: [],
            selectedNodes: []
        };

        this.gridoptions = {
            checkboxSelection: true,
            columnDefs: this.state.gridColumns,
            debug: true,
            enableSorting: true,
            enableFilter: true,
            rowSelection: true,
            rowSelection: "single",
            defaultColDef: {
                sortavle: true
            },
            client: this.props.client,
            enableCellTextSelection: true,
            
        };
        this.allColumnNames = {};
    
    }

    onGridReadyCallback(){
        this.setState({colSelectionState: this.dataGrid.gridColumnApi.getColumnState()})
    }

    openEditDetails = () => {
       // Popup.plugines().editDetails();
    }
    
    handleRowSelection = (params) => {
        const selectedNodes = this.dataGrid.gridOptions.api.getSelectedNodes()

        this.setState(
            {
                selectedNodes: selectedNodes
            }
        )
        this.props.dspatch(actions.setInsuranceSelectedNodes(selectedNodes));
    }
    
    componentWillReceiveProps(nextProps){
        if(this.props.isLoading != nextProps.isLoading){
            this.setState(
                {
                    filteredCount: false
                }
            )
        }
    }

    render(){
        const {isLoading} = this.props;
        return (
            <div>
                <div style= {{display: 'flex'}}>
                    <div className= 'ag-theme-dark' id='insurance-Grid'>
                        <Loadable
                            active= {isLoading}
                            spinner= {true}
                            zIndex= {1}>
                                <DataGrid
                                    gridOptions={this.gridOptions}
                                    columnDefs= {this.state.gridColumns}
                                    ref= {instance => this.dataGrid = instance}
                                    rowData= {this.props.insuranceDataList || []}
                                    gridOffset= {300}
                                    onGridReadyCallback= {this.onGridReadyCallback.bind(this)}>

                                    </DataGrid>
                            </Loadable>
                    </div>
                    <div style = {{paddingTop: "10px"}}>
                        <span className="footerStyle"> Number of Rows: {this.state.filteredCount?this.state.rowCount:this.props.insuranceDataList.length}</span>

                        <button class = "btn-create" style= {{float:"right", marginRight: "10px", marginTop:"0.1px"}} onClick={this.editDetails}>
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    var insuranceDataList= state.InsuranceReducer.insuranceDataList;
    return {
        InsuranceDataGridState: state.InsuranceReducer,
        insuranceDataList,
        isLoading: state.InsuranceReducer.isLoading
    };
};

export default connect(mapStateToProps)(InsuranceDataGrid);