for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('Amazon');
  } else if (i % 3 == 0) {
    console.log('Google');
  } else if (i % 5 == 0) {
    console.log('Facebook');
  } else {
    console.log(i);
  }
}
