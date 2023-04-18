import "../js/main.js";
import "../scss/styles.scss";

document
  .querySelector(".modal__close")
  .addEventListener("click", function (event) {
    document.querySelector(".gray_mask").style.display = "none";
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".modal__music-play iframe").setAttribute("src", "");
  });

const modalOpen = document.querySelectorAll(".modal-open");
modalOpen.forEach((button) => {
  button.addEventListener("click", function (event) {
    // console.log(event.currentTarget.parentNode.parentNode);
    // console.log(event.currentTarget.querySelector("p").textContent);
    document.querySelector(".gray_mask").style.display = "block";
    document.querySelector(".modal").style.display = "block";
    document.querySelector(".modal__modal-info p").textContent =
      event.currentTarget.parentNode.parentNode.querySelectorAll(
        "td"
      )[2].textContent;
    document.querySelector(".modal__modal-info span").textContent =
      event.currentTarget.querySelector("span").textContent;
    document
      .querySelector(".modal__music-play iframe")
      .setAttribute("src", event.currentTarget.querySelector("p").textContent);
    document.querySelector(".modal__like span").textContent =
      event.currentTarget.parentNode.parentNode.querySelectorAll(
        "td"
      )[3].textContent;
  });
});

const add = document.querySelectorAll("td a i");
add.forEach((button) => {
  button.addEventListener("click", function (event) {
    console.log(
      "clicked : ",
      event.currentTarget.parentNode.parentNode.parentNode
        .querySelectorAll("td")[1]
        .querySelector("img")
        .getAttribute("src")
    );
    event.preventDefault(); // prevent default anchor tag behavior
    const myData = {
      title:
        event.currentTarget.parentNode.parentNode.parentNode.querySelectorAll(
          "td"
        )[1].outerText,
      singer:
        event.currentTarget.parentNode.parentNode.parentNode.querySelectorAll(
          "td"
        )[2].innerText,
      thumb: event.currentTarget.parentNode.parentNode.parentNode
        .querySelectorAll("td")[1]
        .querySelector("img")
        .getAttribute("src"),
      url: event.currentTarget.parentNode.parentNode.parentNode
        .querySelectorAll("td")[1]
        .textContent.split("http")[1],
      fav: true,
      favNum:
        event.currentTarget.parentNode.parentNode.parentNode.querySelectorAll(
          "td"
        )[3].textContent,
    }; // data to be sent in the request
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(myData),
    })
      .then((response) => {
        // handle response
      })
      .catch((error) => {
        // handle error
      });
  });
});
// const buttons = document.querySelectorAll("button");
// const videoFrame = document.querySelector("iframe");

// function handleButtonClick(event) {
//   // 클릭된 버튼의 정보를 출력한다.
//   console.log(`Clicked button: ${event.target.textContent}`);
//   videoFrame.contentWindow.postMessage(
//     '{"event":"command","func":"playVideo","args":""}',
//     "*"
//   );
// }

// buttons.forEach((button) => {
//   button.addEventListener("click", handleButtonClick);
// });
