class insuranceService{
    constructor(client) {
        this.client = client;
    }


getPolicyDetailsOnPolicyId(policy_id){
    console.log("Policy id"+ policy_id);
    let test = this.client.get("http://127.0.0.1:8000/get-using-policy/",policy_id);
    console.log(test, "PolicyDetails");
    return test;
}


getPolicyDetailsOnCustomerId(customer_id){
    console.log("customer_id id"+ customer_id);
    let test = this.client.get("http://127.0.0.1:8000/get-using-customer/",customer_id);
    console.log(test, "PolicyDetails");
    return test;
}

editPolicyDetails(policy_id,data){
    console.log(data);
    console.log("Policy id"+ policy_id);
    let test = this.client.get("http://127.0.0.1:8000/edit/",policy_id);
    console.log(test, "PolicyDetails");
    return test;
}
}

module.exports = insuranceService;