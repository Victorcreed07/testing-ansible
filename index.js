const express = require('express')
const path = require('path')
const { spawn,exec } = require('child_process');
const axios = require('axios')
require("dotenv").config();
const app = express()
const cors = require("cors")  // npm i cors
app.use(cors())

const playbookPath = '/path/to/playbook.yml';
const targetHost = 'target-host.example.com';

// const child = spawn('ansible-playbook', [playbookPath, '-l', targetHost]);


app.get('/',(req,res) => {

 
  const curl = spawn('curl', ['https://www.example.com']);

// Listen for data events on the process's standard output stream
curl.stdout.on('data', (data) => {
  console.log(`Received data from curl process: ${data}`);
  res.status(200).send(`${data}`)
});

// Listen for the process to exit
curl.on('close', (code) => {
  console.log(`curl process exited with code ${code}`);
});

  
})

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})



// child.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// child.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

// child.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });

 exec('dir', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error executing command: ${err}`);
    return;
  }
  console.log(`Command output:\n${stdout}`);
  
});








app.listen(1000, () => {
  console.log('server is listening on port 1000....')
})
