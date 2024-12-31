import express from 'express';
import path from 'path';
import { fileURLToPath } from "url";

// Define __dirname for ES modules 
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Set the views directory and view engine 
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the client/public directory 
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/', (req, res) => {
    res.render("index.ejs")
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    
})
