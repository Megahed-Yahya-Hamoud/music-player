const audio = [
  {
    id: 1,
    title: "Dance Monkey",
    singer: "Tones and I",
    img: "./image/maxresdefault.jpg",
    description:
      "dance monkey, dance monkey lyrics, tones and i, lyrics, tones and i dance monkey, dance monkey tones and i, tones and i lyrics, dance monkey lyrics tones and i, dance monkey lyric, dance monkey lyric video, 7clouds, monkey dance, dance monkey tiktok, royal music, pop, music, dance for me, new",
    link: "./music/Tones and I - Dance Monkey (Lyrics)(MP3_160K).mp3",
  },
  {
    id: 2,
    title: "Symphony",
    singer: "Clean Bandit",
    img: "./image/images.jpeg",
    description:"",
    link: "./music/Clean Bandit - Symphony (Lyrics_Vietsub) feat. Zara Larsson(MP3_160K).mp3",
  },
  {
    id: 3,
    title: "Shape of You",
    singer: "Ed Sheeran",
    img: "./image/images(1).jpeg",
    description:"",
    link: "./music/Ed Sheeran - Shape Of You (Lyrics)(M4A_128K).m4a",
  },
  {
    id: 4,
    title: "Believer",
    singer: "Imagine Dragons",
    img: "./image/maxresdefault(1).jpg",
    description:"",
    link: "./music/Imagine Dragons - Believer (Lyrics)(M4A_128K).m4a",
  },
  {
    id: 5,
    title: "Happy",
    singer: "Pharrell Williams",
    img: "./image/images(2).jpeg",
    description:"",
    link: "./music/Pharrell Williams - Happy (Video)(M4A_128K).m4a",
  },
  {
    id: 6,
    title: "Low",
    singer: "Flo Rida",
    img: "./image/images(3).jpeg",
    description:"",
    link: "./music/Flo Rida - Low (feat. T-Pain) [from Step Up 2 The Streets O.S.T. _ Mail On Sunday] (Official Video)(M4A_128K).m4a",
  },
  {
    id: 7,
    title: "Venom",
    singer: "Eminem",
    img: "./image/images(4).jpeg",
    description:"",
    link: "./music/Eminem - Venom(M4A_128K).m4a",
  },
  {
    id: 8,
    title: "Till I Collapse",
    singer: "Eminem",
    img: "./image/maxresdefault(2).jpg",
    description:"",
    link: "./music/Till I Collapse(M4A_128K).m4a",
  },
  {
    id: 9,
    title: "Rockabye",
    singer: "Anne-Marie",
    img: "./image/sddefault.jpg",
    description:"",
    link: "./music/Rockabye - Clean Bandit ft. Sean Paul _ Anne-Marie (Lyrics_Vietsub)(M4A_128K).m4a",
  },
  {
    id: 10,
    title: "Sickick",
    singer: "Infected",
    img: "./image/images(6).jpeg",
    description:"",
    link: "./music/Sickick - Infected (lyrics)(M4A_128K).m4a",
  },
  {
    id: 11,
    title: "Go Down Deh",
    singer: "Spice_ Sean Paul_ Shaggy",
    img: "./image/maxresdefault(3).jpg",
    description:"",
    link: "./music/Spice_ Sean Paul_ Shaggy - Go Down Deh _ Official Music Video(M4A_128K).m4a",
  },
  {
    id: 12,
    title: "SAFARİ",
    singer: "Serena",
    img: "./image/hqdefault.jpg",
    description:"",
    link: "./music/SAFARİ - Serena (Lyrics_Vietsub)(M4A_128K).m4a",
  },
  {
    id: 13,
    title: "See You Again",
    singer: "Wiz Khalifa",
    img: "./image/maxresdefault(4).jpg",
    description:"",
    link: "./music/Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack(M4A_128K).m4a",
  },
  {
    id: 14,
    title: "Gangsta_s Paradise",
    singer: "Coolio",
    img: "./image/maxresdefault(5).jpg",
    description:"",
    link: "./music/Coolio - Gangsta_s Paradise (Official Music Video) [HD] ft. L.V(M4A_128K).m4a",
  },
  {
    id: 15,
    title: "Señorita",
    singer: "Shawn Mendes_ Camila Cabello",
    img: "./image/maxresdefaulte(1).jpg",
    description:"",
    link: "./music/New folder/Shawn Mendes_ Camila Cabello - Señorita مترجمة(M4A_128K).m4a",
  },
  {
    id: 16,
    title: "Thunder",
    singer: "Imagine Dragons",
    img: "./image/maxresdefaultThu(3).jpg",
    description:"",
    link: "./music/New folder/Imagine Dragons - Thunder(M4A_128K).m4a",
  },
  {
    id: 17,
    title: "lovely",
    singer: "Billie Eilish_ Khalid",
    img: "./image/maxresdefaultLove(4).jpg",
    description:"",
    link: "./music/New folder/Billie Eilish_ Khalid - lovely(M4A_128K).m4a",
  },
  {
    id: 18,
    title: "In Da Club",
    singer: "50 Cent_ Fity Cent",
    img: "./image/maxresdefaulte(2).jpg",
    description:"",
    link: "./music/New folder/50 Cent - In Da Club (Official Music Video)(M4A_128K).m4a",
  },
  {
    id: 19,
    title: "Can_t Be Touched",
    singer: "Roy Jones",
    img: "./image/sddefault(2).jpg",
    description:"",
    link: "./music/New folder/Roy Jones - Can_t Be Touched (HQ_Dirty)(M4A_128K).m4a",
  },
];

const content = document.querySelector(".content-audio");
// const sideBar = document.querySelector(".sideBar");
const bar = document.querySelector(".bar");
const btn = document.querySelector(".close");
const show = document.querySelector(".show-data");
const musicImage = document.querySelector(".container-image");
const musicHeader = document.querySelector(".style-header");
const musicAudio = document.querySelector(".music-audio");
const descriptionMusic = document.querySelector(".description-audio");
const heart = document.querySelector(".heart");
const inputSearch = document.querySelector(".input-search");
const searchBtn = document.querySelector(".search-btn");

document.addEventListener("DOMContentLoaded", () => {
  const inputSearch = document.querySelector(".input-search");
  const searchBtn = document.querySelector(".search-btn");

  if (inputSearch && searchBtn) {
    searchBtn.addEventListener("click", () => {
      if (inputSearch.value) {
        const oneMusic = audio.filter(
          (ele) =>
            ele.title.toLocaleLowerCase() ==
            inputSearch.value.toLocaleLowerCase()
        );
        // console.log(oneMusic.map(ele=>ele.title));

        content.innerHTML = ``;

        oneMusic.map((ele) => {
          content.innerHTML += `<div class="cardOfMusic" data-id=${ele.id}>
                 <img class="image" src=${ele.img} alt="">
                 <div class="audio">
                   <div>
                     <p class="titleMusic">${ele.title}</p>
                     <p class="singer">${ele.singer}</p>
                   </div>
                   <i class="fa-solid fa-circle-play  icon-play" style="color: green;"></i>
                 </div>
             </div>
       `;
        });

        function singleMusic(id) {
          const index = id;

          forward.addEventListener("click", () => {
            methos(+index + 1);
          });

          backward.addEventListener("click", () => {
            methos(+index - 1);
          });

          musicImage.innerHTML = `<img src=${
            audio[index - 1].img
          }  class="image-sideBar"/>`;

          musicHeader.innerHTML = `
       
                                 <div class="name_singer">
                                 <p class="title-music">
                                 ${audio[index - 1].title} 
                                 </p>
                                 
                                 <p class="singer-music">
                                 ${audio[index - 1].singer} 
                                 </p>
                              </div>
       
                               
                               `;

          musicAudio.innerHTML = `<audio  class="audio-style" style="width: 100%;" controls autoPlay    >                                   
                                   <source src="${
                                     audio[index - 1].link
                                   }"  type="audio/ogg"> 
                                   </audio> `;

          descriptionMusic.innerHTML = `<p>${
            audio[index - 1].description
          } </p>`;
        }

        const NewMusic = document.querySelectorAll(".cardOfMusic");

        NewMusic.forEach((ele) => {
          ele.addEventListener("click", () => {
            singleMusic(ele.dataset.id);
            console.log(+ele.dataset.id + 1);
            bar.classList.add("active-width");
          });

          btn.addEventListener("click", () => {
            bar.classList.remove("active-width");
          });
        });
      } else {
        content.innerHTML = ``;
        audio.forEach((element) => {
          content.innerHTML += `
            <div class="cardOfMusic" data-id=${element.id}>
                      <img class="image" src=${element.img} alt="">
                      <div class="audio">
                        <div>
                          <p class="titleMusic">${element.title}</p>
                          <p class="singer">${element.singer}</p>
                        </div>
                        <i class="fa-solid fa-circle-play  icon-play" style="color: green;"></i>
                      </div>
                  </div>
            `;
        });

        function methos(id) {
          const index = id;

          forward.addEventListener("click", () => {
            methos(+index + 1);
          });

          backward.addEventListener("click", () => {
            methos(+index - 1);
          });

          musicImage.innerHTML = `<img src=${
            audio[index - 1].img
          }  class="image-sideBar"/>`;

          musicHeader.innerHTML = `
                                    <div class="name_singer">
                                    <p class="title-music">
                                    ${audio[index - 1].title} 
                                    </p>
                                    
                                    <p class="singer-music">
                                    ${audio[index - 1].singer} 
                                    </p>
                                 </div>
                                  `;

          musicAudio.innerHTML = `<audio class="audio-style  style="width: 100%;" controls autoPlay    >                                   
                                      <source src="${
                                        audio[index - 1].link
                                      }"  type="audio/ogg"> 
                                      </audio> `;

          descriptionMusic.innerHTML = `<p>${
            audio[index - 1].description
          } </p>`;
        }

        const music = document.querySelectorAll(".cardOfMusic");

        music.forEach((ele) => {
          ele.addEventListener("click", () => {
            methos(ele.dataset.id);
            console.log(+ele.dataset.id + 1);
            // sideBar.classList.add("active");
            bar.classList.add("active-width");
          });

          btn.addEventListener("click", () => {
            // sideBar.classList.remove("active");
            bar.classList.remove("active-width");
          });
        });
      }
    });
  } else {
  }
});

const forward = document.querySelector(".forward");
const backward = document.querySelector(".backward");

audio.forEach((element) => {
  content.innerHTML += `
  <div class="cardOfMusic" data-id=${element.id}>
            <img class="image" src=${element.img} alt="">
            <div class="audio">
              <div>
                <p class="titleMusic">${element.title}</p>
                <p class="singer">${element.singer}</p>
              </div>
              <i class="fa-solid fa-circle-play  icon-play" style="color: green;"></i>
            </div>
        </div>
  `;
});

function methos(id) {
  const index = id;

  forward.addEventListener("click", () => {
    methos(+index + 1);
  });

  backward.addEventListener("click", () => {
    methos(+index - 1);
  });

  musicImage.innerHTML = `<img src=${
    audio[index - 1].img
  }  class="image-sideBar"/>`;

  musicHeader.innerHTML = `
                          <div>
                          <p class="title-music">
                          ${audio[index - 1].title} 
                          </p>
                          
                          <p class="singer-music">
                          ${audio[index - 1].singer} 
                          </p>
                       </div>
                        `;

  musicAudio.innerHTML = `<audio class="audio-style"  style="width: 100%;" controls autoPlay    >                                   
                            <source src="${
                              audio[index - 1].link
                            }"  type="audio/ogg"> 
                            </audio> `;

  descriptionMusic.innerHTML = `<p>${audio[index - 1].description} </p>`;
}


const music = document.querySelectorAll(".cardOfMusic");

music.forEach((ele) => {
  ele.addEventListener("click", () => {
    methos(ele.dataset.id);
    console.log(+ele.dataset.id + 1);
    // sideBar.classList.add("active");
    bar.classList.add("active-width");
  });

  btn.addEventListener("click", () => {
    // sideBar.classList.remove("active");
    bar.classList.remove("active-width");
  });
});
