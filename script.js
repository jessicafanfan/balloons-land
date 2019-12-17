let popUpHasBeenCreatedBefore = false;
$(document).ready(function() {
  let balloons = ["balloon1", "balloon2", "balloon3"];
  let currentBalloonIndexToRelease = 0;
  let scale = 3.25;

  function balloonPop(balloonClass) {
    document.querySelector("#popping-sound").play();
    document.querySelector(
      `.balloon.${balloonClass} .balloon-svg`
    ).style.opacity = "0";
    document.querySelector(
      `.balloon.${balloonClass} .pop-anim svg:first-child`
    ).style.opacity = "1";
    setTimeout(function() {
      document.querySelector(
        `.balloon.${balloonClass} .pop-anim svg:first-child`
      ).style.opacity = "0";
      document.querySelector(
        `.balloon.${balloonClass} .pop-anim svg:nth-child(2)`
      ).style.opacity = "1";
    }, 50);
    setTimeout(function() {
      document.querySelector(
        `.balloon.${balloonClass} .pop-anim svg:nth-child(2)`
      ).style.opacity = "0";
      document.querySelector(
        `.balloon.${balloonClass} .pop-anim svg:nth-child(3)`
      ).style.opacity = "1";
    }, 55);
    setTimeout(function() {
      document.querySelector(
        `.balloon.${balloonClass} .pop-anim svg:nth-child(3)`
      ).style.opacity = "0";
      document.querySelector(`.balloon.${balloonClass}`).style.display = "none";
    }, 90);
  }

  function queueNextBalloon() {
    scale = 3.25;
    document.body.classList.remove("floating");
    document
      .querySelector(`.${balloons[currentBalloonIndexToRelease]}`)
      .classList.add("released");
    if (currentBalloonIndexToRelease < balloons.length) {
      currentBalloonIndexToRelease++;
      document.querySelector(
        `.${balloons[currentBalloonIndexToRelease]}`
      ).style.display = "block";
      setTimeout(function() {
        document.querySelector(
          `.${balloons[currentBalloonIndexToRelease]} svg`
        ).style.transform = "scale(1)";
      }, 100);
    }
  }

  document
    .querySelector("#balloon-pump-btn")
    .addEventListener("click", function() {
      let inflatorPopUp = window.open(
        "",
        "Inflator",
        "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=50,height=300,top=" +
          (screen.height - 500) +
          ",left=100"
      );
      inflatorPopUp.document.body.innerHTML = `<!DOCTYPE html>
      <html lang="en">
        <head>
          <title>Pump</title>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style>
            @font-face {
              font-family: "Maison Mono";
              font-display: swap;
              src: url("./fonts/Maison-Mono-Bold.otf") format("opentype");
              font-style: normal;
              font-weight: 700;
            }
            @font-face {
              font-family: "Maison Mono";
              font-display: swap;
              src: url("./fonts/Maison-Mono-Medium.otf") format("opentype");
              font-style: normal;
              font-weight: 500;
            }
            body {
              background: #FAF6EF;
              font-family: "Maison Mono";
              text-transform: uppercase;
              margin: 0;
            }
            .popup-resize-instruction {
              background: #A4C6E6;
              color: #000;
              text-align: center;
              width: 100vw;
              height: 100vh;
              padding-top: 10px;
              z-index: 0;
              opacity: 1;
              visibility: visible;
              transition: 0.3s opacity ease;
            }
            .resized .popup-resize-instruction {
              opacity: 0;
              visibility: hidden;
            }
            .bold {
              font-weight: 700;
              font-size: 14px;
            }
            .medium {
              font-weight: 500;
              font-size: 20px;
            }
            .inflator-top {
              position: fixed;
              width: 40vw;
              max-width: 75.19px;
              top: 30px;
              left: 30vw;
              z-index: -1;
            }
            .inflator-bottom {
              position: fixed;
              width: 33.465vw;
              max-width: 62.91px;
              bottom: 30px;
              left: 33.2675vw;
              z-index: -1;
            }
            .middle-bar {
              position: fixed;
              background: #6c213b;
              width: 10vw;
              max-width: 19px;
              top: 35px;
              bottom: 30px;
              left: 45vw;
              z-index: -2;
            }
          </style>
        </head>
        <body>
          <svg
            class="inflator-top"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 143 37"
          >
            <path
              d="M1701,2778.947h106a18,18,0,0,1,18,18h0a18,18,0,0,1-18,18H1701a18,18,0,0,1-18-18h0A18,18,0,0,1,1701,2778.947Z"
              transform="translate(-1682.499 -2778.447)"
              fill="#FFC655"
            />
          </svg>
          <div class="middle-bar"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inflator-bottom"
            viewBox="0 0 142 415"
          >
            <g transform="translate(-1521 -536)">
              <path
                d="M1825,3291.661v14.286a22,22,0,0,1-22,22h-98a22,22,0,0,1-22-22v-371a22,22,0,0,1,22-22h98a22,22,0,0,1,22,22v356.714Z"
                transform="translate(-161.999 -2376.947)"
                fill="#ac92c3"
              />
              <rect
                width="142"
                height="369"
                transform="translate(1521 559)"
                fill="#ff3c24"
              />
            </g>
          </svg>
      
          <div class="popup-resize-instruction">
            <span class="medium"> ↓ ↓ ↓ </span>
            <br />
            <br />
            <span class="bold">
              resize this
              <br />
              pop-up to
              <br />
              inflate the
              <br />
              balloon!</span
            >
          </div>
        </body>
      </html>
      `;
      if (!popUpHasBeenCreatedBefore) {
        setTimeout(function() {
          inflatorPopUp.document.querySelector(
            ".popup-resize-instruction"
          ).style.opacity = "0";
          popUpHasBeenCreatedBefore = true;
        }, 2000);
      } else {
        inflatorPopUp.document.querySelector(
          ".popup-resize-instruction"
        ).style.display = "none";
      }

      let transitionEnd = true;
      let prevHeight = inflatorPopUp.window.innerHeight;
      let currHeight = inflatorPopUp.window.innerHeight;
      let prevWidth = inflatorPopUp.window.innerWidth;
      let currWidth = inflatorPopUp.window.innerWidth;

      inflatorPopUp.addEventListener("resize", function() {
        currHeight = inflatorPopUp.window.innerHeight;
        currWidth = inflatorPopUp.window.innerWidth;
        if (
          prevHeight - currHeight > 10 &&
          currWidth == prevWidth &&
          transitionEnd &&
          scale < 8
        ) {
          document.querySelector("#inflate-sound").play();
          inflatorPopUp.opener.document.querySelector(
            `.balloon.${balloons[currentBalloonIndexToRelease]}`
          ).style.width = `${scale * 100}px`;
          inflatorPopUp.opener.document.querySelector(
            `.balloon.${balloons[currentBalloonIndexToRelease]}`
          ).style.height = `${scale * 100}px`;
          transitionEnd = false;
          scale += 0.25;

          if (scale >= 6.5) {
            document.body.classList.add("floating");
            if (scale == 8) {
              balloonPop(balloons[currentBalloonIndexToRelease]);
              queueNextBalloon();
            }
          }
        }
        prevHeight = currHeight;
        prevWidth = currWidth;
      });
      document
        .querySelector(`.balloon.${balloons[currentBalloonIndexToRelease]}`)
        .addEventListener("transitionend", function() {
          transitionEnd = true;
        });
    });

  document
    .querySelector(".release-button")
    .addEventListener("click", function() {
      $(`.balloon.${balloons[currentBalloonIndexToRelease]}`).throwable({
        containment: "window",
        drag: true,
        gravity: { x: 0, y: -1 },
        impulse: {
          f: 50,
          p: { x: 0, y: -0.5 }
        },
        shape: "circle",
        autostart: false,
        bounce: 0.5,
        damping: 50,
        areaDetection: [[0, 0, 200, 50]],
        collisionDetection: false
      });
      setTimeout(queueNextBalloon, 2500);
    });

  $(document).on("inarea", function(event, data) {
    console.log($(data[0]));
    // console.log($(data[0]).classList[1]);
    balloonPop("balloon1");
    // $("#notification").text($(data[0]).text()+" enter the area");
  });
});
