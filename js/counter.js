const notToday = (lastDate) => {
  const now = new Date();
  lastDate = new Date(Number(lastDate));
  return (
    lastDate.getDate() != now.getDate() ||
    lastDate.getMonth() != now.getMonth() ||
    lastDate.getYear() != now.getYear()
  );
};

const KEY_STORAGE_HIT = "hits-counter-v0.3"
const KEY_STORAGE_LAST = "hits-lastDate-v0.3"

const trackPage = () => {
  // ignore localhost domain (debug)
//   if (
//     window.location.host.includes("localhost:") ||
//     window.location.host.includes("127.0.0.1") ||
//     window.location.host.includes("192.168.")
//   ) {
//     console.log("track counter debug bypass");
//     const hits = tryStorage(KEY_STORAGE_HIT, { today_hits: 1, total_hits: 1 });
//     updateCounter(hits);
//     return;
//   }
  // ignore recent click
  const lastDate = localStorage[KEY_STORAGE_LAST];
  if (lastDate == undefined || notToday(lastDate)) {
    localStorage[KEY_STORAGE_LAST] = new Date().getTime();
    console.log("track counter alive: hit!");
    hitCounter();
  } else {
    console.log("track counter alive: already hit!");
    historyCounter();
  }
};

const tryStorage = (key, defaultValue) => {
  let value;
  try {
    value = JSON.parse(localStorage[key]);
  } catch (error) {
    value = defaultValue;
    localStorage[key] = JSON.stringify(value);
  }
  return value;
};

const hitCounter = () => {
  let hits = tryStorage(KEY_STORAGE_HIT, { today_hits: 0, total_hits: 0 });

  fetch(
    "https://hitscounter.dev/api/hit?output=json&url=https%3A%2F%2Fdomescala.github.io%2Faule_libere_polito"
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((result) => {
      hits = { today_hits: result.today_hits, total_hits: result.total_hits };
      localStorage[KEY_STORAGE_HIT] = JSON.stringify(hits);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => updateCounter(hits));
};

const historyCounter = () => {
    let hits = tryStorage(KEY_STORAGE_HIT, { today_hits: 0, total_hits: 0 });
  
    fetch(
      "https://hitscounter.dev/api/history?url=https%3A%2F%2Fdomescala.github.io%2Faule_libere_polito"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((result) => {
        hits = { today_hits: result.today_hits, total_hits: result.total_hits };
        localStorage[KEY_STORAGE_HIT] = JSON.stringify(hits);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => updateCounter(hits));
  };


const updateCounter = (hits) => {
  let { today_hits, total_hits } = hits;
  console.log("FINE!! ", today_hits, total_hits);

  const sentences = [
    "si sono persi al poli oggi <span>😔</span>",
    "vagano per il poli senza meta <span>🏃‍♀️</span>",
    "volevano stare a casa oggi <span style='translate:0px -3px'>🛌</span>",
    "vogliono solo un banco <span>🪑</span>",
    "non sanno dove mettersi <span>🤷</span>",
    "cercano disperatamente un'aula <span>🕵️</span>",
  ];
  let sentence = sentences[Math.floor(Math.random() * sentences.length)];
  sentence = `${today_hits + 1} studenti ${sentence}`;
  document.querySelector(".views-today").innerHTML = sentence;
  document.querySelector(".views-today").style.display = "revert";
  document.querySelector(".views-total b").innerHTML = total_hits;
};

trackPage();



