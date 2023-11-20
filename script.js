// // JavaScript functions
// document.getElementById('popupBtn').addEventListener('click', function() {
//     var overlay = document.getElementById('overlay');
//     overlay.style.display = 'flex'; // Display the overlay as a flex container
// });

// document.getElementById('closeBtn').addEventListener('click', function() {
//     var overlay = document.getElementById('overlay');
//     overlay.style.display = 'none'; // Hide the overlay
// });


// // Your OpenAI API key
// const apiKey = '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';

// // Endpoint URL for the OpenAI API (adjust for the specific endpoint you're using)
// // const endpoint = 'https://api.openai.com/v1/engines/text-davinci-003/completions';

// // Example prompt
// const promptText = "what is 2+2";

// // Data payload for the request
// const requestData = {
//   prompt: promptText,
//   max_tokens: 50 // Adjust the number of tokens you want in the completion
// };

// // Fetch API request
// fetch(endpoint, {
//   method: 'POST',
//   headers: {
//     'Authorization': `Bearer ${apiKey}`,
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(requestData)
// })
// .then(response => {
//   if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   }
//   return response.json();
// })
// .then(data => {
//   // Handle the API response
//   console.log("Generated text:", data.choices[0].text);
// })
// .catch(error => {
//   console.error('Error:', error);
// });




// fetch("https://opentdb.com/api.php?amount=5&category=18&type=multiple")
// .then((res)=>res.json())
// .then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)})