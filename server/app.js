/*
 * @Description: 
 * @Version: 1.0
 * @Author: shenkai03
 * @Date: 2024-06-04 20:50:22
 * @LastEditors: shenkai03
 * @LastEditTime: 2024-06-04 22:03:19
 * @FilePath: /siteman/server/app.js
 * Copyright (C) 2024 shenkai03. All rights reserved.
 */
const express = require('express')
const cors = require('cors');

const app = express()
const port = 4000
const obj = {
    id:1,
    title:'testing',
    description:'siteMan testing'
}
app.use(cors());
app.use(express.json());  
// Read
app.get('/read', (req, res) => {
  console.log(`Reading Object:${JSON.stringify(obj)}`)
  res.send(obj)
})
// Create
app.post('/create',(req,res)=>{
    console.log(`Creating Object:${req.body}`)
    console.log(req.body)
    res.json({ message: 'Create successfully', receivedData: req.body });
})

// Update
app.post('/update',(req,res)=>{
    console.log(`Updating Object:${req.body}`)
    res.json({ message: 'Update successfully', receivedData: req.body });

})
// Delete
app.post('/delete',(req,res)=>{
    console.log(`Deleting Object:${req.body.id}`)
    res.json({ message: 'Delete successfully', receivedData: req.body.id });

})

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });


  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      error: {
        message: err.message
      }
    });
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})