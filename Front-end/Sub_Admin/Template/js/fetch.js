const PatientId = localStorage.getItem('PatientId')

const baseUrl = "http://192.168.1.66:7001/"
async function fetchHealthRecords(e) {
  if(e){
    e.preventDefault();
  }
  if (PatientId) {
    await fetch(baseUrl + `api/v1/patient/${PatientId}`, {
        method: 'PATCH',
        headers:{
          Accept: "application/json",
          "Content-Type": "application/json"
      },
        body: JSON.stringify({
          patientName : document.getElementById('Patient_Name').value,
          patientLocation : document.getElementById('Patient_Location').value,
          patientPNumber : document.getElementById("Patient_Phone_Number").value
        })
    });
    localStorage.removeItem("PatientId");
} else {
  const res = await fetch(baseUrl+"api/v1/patient",{
    method: "POST",
    headers:{
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
      patientName : document.getElementById('Patient_Name').value,
      patientLocation : document.getElementById('Patient_Location').value,
      patientPNumber : document.getElementById("Patient_Phone_Number").value
    })
  
})
}
document.getElementById('patient-form').reset();
}
const regBtn = document.getElementById('btn-primary-submit');
regBtn.addEventListener('click',fetchHealthRecords);


async function retrievePatients(){
  fetch(baseUrl + 'api/v1/patient')
  .then(res => {
    return res.json();
  })
  .then(data => {
    console.log(data);
    let containerDiv = document.querySelector('.patient-records');
    for (let i = 0; i < data.data.length; i++) {
      let html = `<tr data-patientId="${data.data[i].patientId}">
                    <td>${data.data[i].patientId}</td>
                    <td>${data.data[i].patientName}</td>
                    <td>${data.data[i].patientLocation}</td>
                    <td>${data.data[i].patientPNumber}</td>
                    <td>987569326</td>
                    <td>
                      <i class="fas fa-edit action-btn update-btn"></i>
                      <i class="fas fa-trash-alt action-btn delete-btn"></i>
                    </td>
                  </tr>`;
      containerDiv.insertAdjacentHTML('beforeend', html);
    }
    const tableEl = document.querySelector('.tableEl');
    tableEl.addEventListener('click',deletePatientInfo);
    const updateEl = document.querySelector('.tableEl')
    updateEl.addEventListener('click',UpdatePatientInfo);
   
  });
}


function deletePatientInfo(e) {
  if (e.target.classList.contains('delete-btn')) {
    console.log(e.target.parentNode.parentNode); 
    const rowElement = e.target.parentNode.parentNode;
    const patientId = rowElement.getAttribute('data-PatientId'); 
    console.log(patientId)
    rowElement.remove(); 
    fetch(baseUrl + `api/v1/patient/${patientId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('Patient record deleted successfully');
    })
    .catch(error => {
      console.error('There was an error deleting Patient record:', error);
    });
  }
}

function UpdatePatientInfo(e) {
   
  if (e.target.classList.contains('update-btn')) {
    const rowElement = e.target.parentNode.parentNode;
    const PatientId= rowElement.getAttribute('data-PatientId');
    localStorage.setItem('PatientId', PatientId)
    window.location.href = "patient_management.html"
    
  } 
}



window.addEventListener('load', updatePatientContent);
async function updatePatientContent(){
    if(PatientId){
        await fetch(baseUrl+`api/v1/patient/${PatientId}`,{
            method: 'GET',
            
        })
        .then(res=>{
            return res.json();
        })
        .then(data =>{
            console.log(data);

            document.getElementById('Patient_Name').value= data.data.patientName;
            document.getElementById('Patient_Location').value= data.data.patientLocation;
            document.getElementById('Patient_Phone_Number').value= data.data.patientPNumber;
          
        })
        .catch(error => console.log(error));
    }
}


// let popup = document.getElementById('popup')
// function openPopup(){
//     popup.classList.add('open-popup')
// }
// function closePopup(){
//     popup.classList.remove('open-popup')
// }