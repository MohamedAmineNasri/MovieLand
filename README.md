<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MovieLand README</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f7f7f7;
            color: #333;
        }

        .container {
            max-width: 800px;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #ee1e46;
            text-align: center;
        }

        img {
            display: block;
            max-width: 100%;
            margin: 20px auto;
            border-radius: 5px;
        }

        p {
            margin-bottom: 10px;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        li {
            margin-bottom: 5px;
        }

        a {
            color: #007bff;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        footer {
            text-align: center;
            margin-top: 20px;
            color: #777;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>MovieLand</h1>
        <img src="./public/LandingPage.png" alt="MovieLand Screenshot">
        <h2>Features</h2>
        <ul>
            <li>Search for movies by title</li>
            <li>View movie details including release year, poster, and type</li>
            <li>Practice foundational React concepts such as <code>useEffect</code> and <code>useState</code></li>
        </ul>
        <h2>Getting Started</h2>
        <ol>
            <li>Clone the repository to your local machine:</li>
            <pre><code>git clone https://github.com/your-username/MovieLand.git</code></pre>
            <li>Navigate to the project directory:</li>
            <pre><code>cd MovieLand</code></pre>
            <li>Install dependencies:</li>
            <pre><code>npm install</code></pre>
            <li>Start the development server:</li>
            <pre><code>npm start</code></pre>
            <li>Open your browser and visit <a href="http://localhost:3000">http://localhost:3000</a> to view MovieLand.</li>
        </ol>
        <h2>Usage</h2>
        <ol>
            <li>Enter a movie title in the search bar.</li>
            <li>Press Enter or click the search button to retrieve movie information.</li>
            <li>Explore the search results to find the movie you're interested in.</li>
            <li>Click on a movie to view its details, including the release year, poster, and type.</li>
        </ol>
        <h2>Technologies Used</h2>
        <ul>
            <li>React.js</li>
            <li>OMDb API</li>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
    </div>
</body>
</html>
