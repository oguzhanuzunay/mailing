const mongoose=require('mongoose');

const Users = mongoose.model('users', {
  userName: String,
  password: String,
  type: String,
  email: String,
});


const Dev = new Users({
  userName: 'developer2',
  password: 'developer2',
  type: 'user',
  email: 'JohnMarie@gmail.com',
});
Dev.save().then(() => console.log('Admin Kaydedildi.'));
