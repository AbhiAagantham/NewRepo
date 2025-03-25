const os = require('os');

// Function to format and display system uptime
function displayUptime() {
  const uptimeInSeconds = os.uptime(); // Get system uptime in seconds

  // Calculate days, hours, and minutes
  const days = Math.floor(uptimeInSeconds / (24 * 3600));
  const hours = Math.floor((uptimeInSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((uptimeInSeconds % 3600) / 60);

  // Format the uptime
  console.log(`System Uptime: ${days} days, ${hours} hours, ${minutes} minutes`);
}

// Call the function to display uptime
displayUptime();
