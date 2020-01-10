//golobal variable
var selectedRow = null;
function onFormSubmit(){
    resetValid();
    if (validateForm()){
        var formData = readFormData();
        if (selectedRow == null){
            insertNewEmployee(formData);
            selectedRow = null;
        }
    
        else{
            updateEmployee(selectedRow,formData);
            selectedRow = null;
            document.getElementById("button01").classList.remove('btn-success');
            document.getElementById("button01").classList.add('btn-primary');
        }
    }
    resetForm();
}

function readFormData(){
    var formData = {};
    formData["fullname"]    = document.getElementById("fullname").value;
    formData["empcode"]     = document.getElementById("empcode").value;
    formData["salary"]      = document.getElementById("salary").value;
    formData["city"]        = document.getElementById("city").value;
    return formData;
}

function insertNewEmployee(data){
    var table = document.getElementById("emplyeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullname;
    cell2 = newRow.insertCell(1);   
    cell2.innerHTML = data.empcode;
    cell3 = newRow.insertCell(2);      
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);  
    cell4.innerHTML = data.city;
    cell5 = newRow.insertCell(4);  
    cell5.innerHTML = `<button onClick="onEdit(this)" class="btn btn-success">Edit</button>  <button  onClick="onDelete(this)" class="btn btn-danger"">Delete</button>`;

}

function resetForm(){
    
    document.getElementById("fullname").value = "" ;
    document.getElementById("empcode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
 
}

function onEdit(td){
    document.getElementById("button01").classList.remove('btn-primary');
    document.getElementById("button01").classList.add('btn-success');
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullname").value   = selectedRow.cells[0].innerHTML ;
    document.getElementById("empcode").value    = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value     = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value       = selectedRow.cells[3].innerHTML;
    
}

function updateEmployee(row,data){
     row.cells[0].innerHTML = data.fullname;
     row.cells[1].innerHTML = data.empcode;
     row.cells[2].innerHTML = data.salary;
     row.cells[3].innerHTML = data.city;
}

function onDelete(td){
    if(confirm("Do you want realy delete this Row?")){
        row = td.parentElement.parentElement;    
        row.parentElement.deleteRow(row.rowIndex -1);
    }
}

function validateForm(){
    isvalid = true;
    if (document.getElementById("fullname").value == ""){
        isvalid = false;
        document.getElementById("fullname").classList.add("is-invalid");
    }
    if (document.getElementById("empcode").value == ""){
        isvalid = false;
        document.getElementById("empcode").classList.add("is-invalid");
        
    }
    if (document.getElementById("salary").value == ""){
        isvalid = false;
        document.getElementById("salary").classList.add("is-invalid");
    }
    if (document.getElementById("city").value == ""){
        isvalid = false;
        document.getElementById("city").classList.add("is-invalid");
    }
    return isvalid;
}

function resetValid(){
    if (document.getElementById("fullname").classList.contains("is-invalid"))
        document.getElementById("fullname").classList.remove("is-invalid");
    if (document.getElementById("empcode").classList.contains("is-invalid"))
        document.getElementById("empcode").classList.remove("is-invalid");
    if (document.getElementById("salary").classList.contains("is-invalid"))
        document.getElementById("salary").classList.remove("is-invalid");
    if (document.getElementById("city").classList.contains("is-invalid"))
        document.getElementById("city").classList.remove("is-invalid");
}