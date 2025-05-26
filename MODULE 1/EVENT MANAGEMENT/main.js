<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Local Community Event Portal</title>
  <link rel="stylesheet" href="styles.css">
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background-color: #f5f5f5;
    }
    .event-card {
      background-color: white;
      padding: 15px;
      margin-bottom: 10px;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .hidden {
      display: none;
    }
  </style>
</head>
<body>
  <h1>Upcoming Community Events</h1>

  <div>
    <label for="categoryFilter">Filter by Category:</label>
    <select id="categoryFilter">
      <option value="all">All</option>
      <option value="music">Music</option>
      <option value="workshop">Workshop</option>
    </select>
  </div>

  <div id="eventsContainer"></div>

  <form id="registrationForm">
    <h2>Register for an Event</h2>
    <label>Name: <input type="text" name="name" required></label><br>
    <label>Email: <input type="email" name="email" required></label><br>
    <label>Event: <input type="text" name="event" required></label><br>
    <button type="submit">Register</button>
  </form>

  <script src="main.js"></script>
</body>
</html>
