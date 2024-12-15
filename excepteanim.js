const response = await fetch("https://api.spotify.com/v1/me", {
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
  }
});
if (response.ok) {
  const userData = await response.json();
  console.log(userData);
} else {
  console.error('Error:', response.statusText);
}
