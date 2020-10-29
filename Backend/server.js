const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const users = [
  { id: '1', firstName: 'Sejal', lastName: 'Pande', contactNo: '1234345456'}
];

const viacomInfo = {
  profileImgURL: 'https://www.viacom18.com/images/media_uploads/5e775149e85e5VIACOM-18-banner-418X252.jpg',
  profileInfo: 'Viacom18 Media Pvt. Ltd. is one of Indias fastest growing entertainment networks and a house of iconic brands that offers multi-platform, multi-generational and multicultural brand experiences. A joint venture of Network18, which owns 51%, and ViacomCBS, with a 49% stake, Viacom18 defines entertainment in India by touching the lives of people through its properties on air, online, on ground, in shop and through cinema.'
};

const city = [ "Mumbai", "Pune", "Nagpur", "Nashik", "Thane", "Amaravati", "Kolhapur", "Latur", "Ahmednagar", "Jalgaon", "Akola"];

app.use(bodyParser.json());

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  users.push(user);
  res.json("user added");
});

app.get('/', (req,res) => {
    res.send('App Works !!!!');
});

app.get('/api/profileDetail', (req, res) => {
  res.json(viacomInfo);
});

app.get('/api/cities', (req, res) => {
  res.json(city);
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});