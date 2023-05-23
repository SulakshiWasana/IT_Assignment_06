import {Customer} from "../models/customer";

document.getElementById('btn'),addEventListener('click',function (event ) {
    const customer = new Customer('C00-001','Sulakshi','Colombo','20000');
});

$('#btnSearch').on('click',function (event) {
    console.log("----------------clicked!");

})

