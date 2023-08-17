const AppointmentId = localStorage.getItem('AppointmentId')
const baseUrl = "http://192.168.1.66:7001/"

async function createAppointment(e) {
    if(e){
      e.preventDefault();
    }
    if(AppointmentId){
      await fetch(baseUrl + `api/v1/appointment/${AppointmentId}`, {
        method: 'PATCH',
        headers:{
          Accept: "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Appointment_Date : document.getElementById('Appointment_Date').value,
        Appointment_Time : document.getElementById('Appointment_Time').value,
        Patient_ID : document.getElementById("Patient_ID").value,
      })
    });
    localStorage.removeItem("AppointmentId");

    }else{
      const res = await fetch(baseUrl+"api/v1/appointment",{
        method: "POST",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          Appointment_Date : document.getElementById('Appointment_Date').value,
          Appointment_Time : document.getElementById('Appointment_Time').value,
          Patient_ID : document.getElementById("Patient_ID").value,
        })
    })
    }
    document.getElementById('Appointment-form').reset();
    
  }
  
  
  
  const appointBtn = document.getElementById('submit-appointment');
  appointBtn.addEventListener('click',createAppointment)
    
  
  
  async function retrieveAppointments(){
    fetch(baseUrl + 'api/v1/Appointment')
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      let containerDiv = document.querySelector('.appointment-records');
      for (let i = 0; i < data.data.length; i++) {
        let html = `<tr data-AppointmentId="${data.data[i].AppointmentId}">
                      <td>${data.data[i].AppointmentId}</td>
                      <td>${data.data[i].Patient_ID}</td>
                      <td>${data.data[i].Appointment_Date}</td>
                      <td>${data.data[i].Appointment_Time}</td>
                      <td>
                        <i class="fas fa-edit action-btn update-btn"></i>
                        <i class="fas fa-trash-alt action-btn delete-btn"></i>
                      </td>
                    </tr>`;
        containerDiv.insertAdjacentHTML('beforeend', html);
      }
      const tableEl = document.querySelector('.tableEl');
      tableEl.addEventListener('click',deleteAppointmentInfo);
      const updateEl = document.querySelector('.tableEl')
    updateEl.addEventListener('click',UpdateAppointmentInfo);
    });
  }

  function deleteAppointmentInfo(e) {
    if (e.target.classList.contains('delete-btn')) {
      console.log(e.target.parentNode.parentNode); 
      const rowElement = e.target.parentNode.parentNode;
      const AppointmentId = rowElement.getAttribute('data-AppointmentId'); 
      rowElement.remove(); 
      fetch(baseUrl + `api/v1/Appointment/${AppointmentId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log('Appointment Information deleted successfully');
      })
      .catch(error => {
        console.error('There was an error deleting Appointment Information:', error);
      });
    }
  }


  function UpdateAppointmentInfo(e) {
   
    if (e.target.classList.contains('update-btn')) {
      const rowElement = e.target.parentNode.parentNode;
      const AppointmentId= rowElement.getAttribute('data-AppointmentId');
      localStorage.setItem('AppointmentId', AppointmentId)
      window.location.href = "Scheduling.html"
      
    } 
  }
  
  
  
  window.addEventListener('load', updateAppointmentContent);

  async function updateAppointmentContent(){
      if(AppointmentId){
          await fetch(baseUrl+`api/v1/appointment/${AppointmentId}`,{
              method: 'GET',
              
          })
          .then(res=>{
              return res.json();
          })
          .then(data =>{
              console.log(data);
               document.getElementById('Appointment_Date').value = data.data.Appointment_Date
               document.getElementById('Appointment_Time').value = data.data.Appointment_Time
              document.getElementById("Patient_ID").value = data.data.Patient_ID
            
          })
          .catch(error => console.log(error));
      }
  }