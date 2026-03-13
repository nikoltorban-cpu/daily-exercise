(function (numOfChild, nameOfPartner,location,job) {
  const body = document.querySelector('body');
  const h4 = document.createElement('h4');
  h4.textContent = `You will be a ${job} in ${location}, and married to ${nameOfPartner} with ${numOfChild} kids.`;
  body.appendChild(h4);
})(3, "andrie" ,"Tel Aviv", "programmer" );