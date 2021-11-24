'use strict'

fetch('https://reqres.in/api/users?per_page=12')
  .then(response => response.json())
  .then(body => {
    console.log('-----------');
    console.log('Пункт №1:')
    console.log('-----------');
    console.log(body?.data);
    console.log('-----------');
    console.log('Пункт №2:')
    console.log('-----------');
    body?.data?.forEach(item => {
      console.log(item?.last_name);
    });
    console.log('-----------');
    console.log('Пункт №3:')
    console.log('-----------');
    console.log(body?.data?.filter(item => item?.last_name[0] === 'F'));
})
