import React from 'react';
import Popup from 'react-popup';
import * as actions from './actions/insuranceAction';
import EditDetails from './views/insurance/components/EditDetails';

Popup.registerPlugin('editDetails',function () {
    this.create({
        title: 'Edit Details',
        content: <EditDetails/>
    })
});
