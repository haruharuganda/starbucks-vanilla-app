let tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//함수이름 변경 안 됨
function onYouTubeIframeAPIReady() {
  // <div id="player"></div>;
  new YT.Player("player", {
    videoId: "An6LvWQuj_8", // 최초 재생할 id를 가진 영상을 재생
    playerVars: {
      autoplay: true, //자동 재생 유무
      loop: true, //반복 재생
      playlist: "An6LvWQuj_8", //반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      //동영상 플레이어가 준비되면 실행될 이벤트
      onReady: function (event) {
        //재생 될 영상을 음소거
        event.target.mute();
      },
    },
  });
}
