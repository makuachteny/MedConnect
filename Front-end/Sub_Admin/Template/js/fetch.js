// Function to fetch health records using the Fetch API
async function fetchHealthRecords() {
    const endpoint = '/api/patients'; // Assuming this endpoint returns patient data
    
    try {
      const response = await fetch(endpoint);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const patientsData = await response.json();
      return patientsData;
    } catch (error) {
      console.error('Error fetching health records:', error);
      throw error;
    }
  }
  
  // Function to display fetched health records
  function displayHealthRecords(records) {
    const recordsList = document.getElementById('health-records-list');
    recordsList.innerHTML = '';
  
    records.forEach(record => {
      const recordItem = document.createElement('li');
      recordItem.textContent = `Patient ID: ${record.patient_id}, Name: ${record.name}, Age: ${record.age}`;
      recordsList.appendChild(recordItem);
    });
  }
  
  // Fetch and display health records when the page loads
  window.addEventListener('load', async () => {
    try {
      const healthRecords = await fetchHealthRecords();
      displayHealthRecords(Object.values(healthRecords)); // Convert object values to an array
    } catch (error) {
      console.error('Failed to fetch or display health records:', error);
    }
  });
  