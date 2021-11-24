'use strict'

fetch('https://reqres.in/api/users?per_page=12')
  .then(response => response.json())
  .then(body => {
    console.log('-----------\nПункт №1:\n-----------');
    console.log(body?.data);
    console.log('-----------\nПункт №2:\n-----------');
    body?.data?.forEach(item => {
      console.log(item?.last_name);
    });
    console.log('-----------\nПункт №3:\n-----------');
    console.log(body?.data?.filter(item => item?.last_name[0] === 'F'));
    console.log('-----------\nПункт №4:\n-----------');
    const result = body?.data?.reduce((acc, item) => {
      return acc + item?.first_name + ' ' + item?.last_name + ', ';
    }, '');
    console.log('Наша база содержит данные следующих пользователей:', result.slice(0, -2));
    console.log('-----------\nПункт №5:\n-----------');
    Object.entries(body?.data[0])?.forEach(([key]) => {
      console.log(key);
    });
  })
