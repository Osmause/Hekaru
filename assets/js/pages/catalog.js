export function initFrame() {
  let actions = document.querySelectorAll(".playIframe");

  actions.forEach((action) => {
    action.addEventListener("click", play);
  });

  function play() {
    let iframe = `<div class="width-100 height-100 iframe-Media z-index-7 animation">
      <div class="backgroundOpacity bg-color-oceanDepth width-100 height-100"></div>
      <div class="z-index-5 iframeSource flex column gap-15 jc-center">
        <div class="close-iframe flex">
          <button class="close-btn-iframe pointer">
            <svg class="close-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24">
              <path class="icon-svg-fill-softLight"
                d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z" />
            </svg>
          </button>
        </div>
        <figure class="iframe-video">
          <iframe src="https://www.youtube.com/embed/ai3o0XtrnM8"
            title="Ratchet &amp; Clank: Rift Apart - Announcement Trailer | PS5" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </figure>
      </div>
    </div>`;

    //We transform the string into an HTML element (more precisely, a "Node"), and add it to the DOM (to the page) and inserts the iframeParser node at the very beginning of the <body>, before all other elements
    let iframeParser = new DOMParser().parseFromString(iframe, "text/html").body
      .firstChild;
    document.body.prepend(iframeParser);

    let closeBtn = document.querySelector(".close-btn-iframe");
    closeBtn.addEventListener("click", stop);
  }

  function stop() {
    let iframeStop = document.querySelector(".iframe-Media");
    if (iframeStop) iframeStop.remove(); //remove iframe-Media DIV
  }
}

export function initPlay() {
  let playBg = document.querySelector(".stateVid");
  let iconPause = document.querySelector(".icon-min-pause");
  let iconPlay = document.querySelector(".icon-min-play");

  if (!playBg) return;

  playBg.addEventListener("click", () => {
    let stateVideo = document.querySelector(".videoMedia");

    if (stateVideo.dataset.state === "play") {
      stateVideo.dataset.state = "pause";
      stateVideo.pause();
      iconPause.classList.add("hide");
      iconPlay.classList.remove("hide");
    } else {
      stateVideo.dataset.state = "play";
      stateVideo.play();
      iconPause.classList.remove("hide");
      iconPlay.classList.add("hide");
    }
  });
}
