body {
    font-family: 'Segoe UI', sans-serif;
    text-align: center;
    background: #f0f8ff;
    margin: 0;
    padding: 20px;
}

h1 {
    color: #2c3e50;
}

.wheel-container {
    position: relative;
    width: 500px;
    margin: 0 auto;
}

canvas {
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    background-color: #fff;
}

.arrow {
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 30px solid #e74c3c;
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    cursor: pointer;
}

button:hover {
    background-color: #2980b9;
}

#result {
    font-size: 20px;
    margin-top: 15px;
    font-weight: bold;
    color: #2c3e50;
}

.disclaimer {
    margin-top: 40px;
    font-size: 12px;
    color: #777;
    max-width: 600px;
    margin: 40px auto;
}
