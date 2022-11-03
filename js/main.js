const elDivDetails = document.getElementById("details");
const elDivImgContainer = document.getElementById("img-container");
const elBtnGetUser = document.getElementById("next-random-user");
const URL = "https://random-data-api.com/api/v2/users";

const getUser = () => {
  const renderUser = (data) => {
    elDivImgContainer.innerHTML = `<img src="${data.avatar}">`;
    elDivDetails.innerHTML = `
    <h2>${data.first_name} ${data.last_name}</h2>
    <h3>${data.employment.title}</h3>
    <h4><i class="fa-solid fa-location-dot"></i>${data.address.city}</h4>
    `;

    let randomColor =
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");

    document.documentElement.style.setProperty("--theme-color", randomColor);
  };

  try {
    (async () => {
      const RESPONSE = await fetch(URL);
      const DATA = await RESPONSE.json();
      renderUser(DATA);
    })();
  } catch (error) {
    console.error(error);
  }
};

window.addEventListener("load", getUser);
elBtnGetUser.addEventListener("click", getUser);
