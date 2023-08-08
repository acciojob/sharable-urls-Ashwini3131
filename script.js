// your code here
      document.getElementById("myForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevents the form from actually submitting
            
            // Get values from the input fields
            const name = document.getElementById("name").value;
            const year = document.getElementById("year").value;
            let url = "https://localhost:8080/";
            
             
             // Append query parameters based on input values
            if (name && year) {
                url += `?name=${encodeURIComponent(name)}&year=${year}`;
            } else if (name) {
                url += `?name=${encodeURIComponent(name)}`;
            } else if (year) {
                url += `?year=${year}`;
            }
            // Update the URL
            document.getElementById("url").textContent = url;
        });