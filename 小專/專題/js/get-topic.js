fetch('http://localhost:5229/api/seniorproject/ReadOneData?id=d7567ad5-e6f3-4cc2-b3c8-326498435185')
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.dir(err);
  });