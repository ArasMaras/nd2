// Connection Simulation
const connectButton = document.getElementById('connect-home');
const connectionStatus = document.getElementById('connection-status');
connectButton.addEventListener('click', () => {
    connectionStatus.textContent = 'Status: Connecting...';
    setTimeout(() => {
        connectionStatus.textContent = 'Status: Connected';
    }, 2000); // Simulates a 2-second delay
});

// Update Temperature Display
const temperatureSlider = document.getElementById('temperature');
const temperatureDisplay = document.getElementById('temperature-display');
temperatureSlider.addEventListener('input', () => {
    temperatureDisplay.textContent = `${temperatureSlider.value}°C`;
});

// Lighting and Security Control
const toggleLightButton = document.getElementById('toggle-light');
toggleLightButton.addEventListener('click', () => {
    alert('Light toggled!');
});

// Add button for disabling light
const disableLightButton = document.createElement('button');
disableLightButton.textContent = 'Disable Light';
disableLightButton.className = toggleLightButton.className; // Match styles

disableLightButton.addEventListener('click', () => {
    alert('Light disabled!');
});
toggleLightButton.parentNode.insertBefore(disableLightButton, toggleLightButton.nextSibling);

// Security Toggle
const toggleSecurityButton = document.getElementById('toggle-security');
toggleSecurityButton.addEventListener('click', () => {
    alert('Security system toggled!');
});

// Add button for disabling security
const disableSecurityButton = document.createElement('button');
disableSecurityButton.textContent = 'Disable Security';
disableSecurityButton.className = toggleSecurityButton.className; // Match styles

disableSecurityButton.addEventListener('click', () => {
    alert('Security system disabled!');
});
toggleSecurityButton.parentNode.insertBefore(disableSecurityButton, toggleSecurityButton.nextSibling);

// Add Smart Device
const addDeviceButton = document.getElementById('add-device');
const deviceList = document.getElementById('device-list');
addDeviceButton.addEventListener('click', () => {
    const deviceNameInput = document.getElementById('device-name');
    const deviceName = deviceNameInput.value.trim();

    if (deviceName) {
        // Create device list item
        const li = document.createElement('li');
        li.textContent = deviceName;
        deviceList.appendChild(li);

        // Check if it's a "Smart Toaster"
        if (deviceName.toLowerCase() === 'smart toaster') {
            addSmartToasterControls(li);
        }

        deviceNameInput.value = ''; // Clear input
    } else {
        alert('Please enter a device name!');
    }
});

// Add Controls for Smart Toaster
function addSmartToasterControls(parentElement) {
    // Create control container
    const controlContainer = document.createElement('div');
    controlContainer.className = 'smart-device-control';

    // Add slider for toasting level
    const sliderLabel = document.createElement('label');
    sliderLabel.textContent = 'Toasting Level';
    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = '1';
    slider.max = '10';
    slider.value = '5';

    // Add dropdown for toasting time
    const timeLabel = document.createElement('label');
    timeLabel.textContent = 'Toasting Time';
    const timeDropdown = document.createElement('select');
    const times = ['Morning', 'Afternoon', 'Evening', 'Night'];
    times.forEach(time => {
        const option = document.createElement('option');
        option.value = time.toLowerCase();
        option.textContent = time;
        timeDropdown.appendChild(option);
    });

   // Add "Schedule Task" button
   const scheduleButton = document.createElement('button');
   scheduleButton.textContent = 'Schedule Task';
   scheduleButton.addEventListener('click', () => {
       const selectedLevel = slider.value;
       const selectedTime = timeDropdown.value;
       alert(`Task Scheduled: Toast Level ${selectedLevel} at ${selectedTime}`);
   });

   // Append controls to container
   controlContainer.appendChild(sliderLabel);
   controlContainer.appendChild(slider);
   controlContainer.appendChild(timeLabel);
   controlContainer.appendChild(timeDropdown);
   controlContainer.appendChild(scheduleButton);

   // Append container to the parent element
   parentElement.appendChild(controlContainer);

   // Add event listeners for interactivity
   slider.addEventListener('input', () => {
       console.log(`Toasting Level: ${slider.value}`);
   });
   timeDropdown.addEventListener('change', () => {
       console.log(`Toasting Time: ${timeDropdown.value}`);
   });
}