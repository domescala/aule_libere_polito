const trackPage = () => {
  if (
    window.location.host.includes("localhost:") ||
    window.location.host.includes("127.0.0.1") ||
    window.location.host.includes("192.168.")
  ) {
    console.log("track counter debug bypass");
    return;
  }
  const aDay = 1000 * 60 * 60 * 24;
  const lastDateCounter = localStorage["date-counter-v0.1"];
  const aDayPassed =
    new Date(Number(lastDateCounter)).getTime() + aDay < new Date().getTime();

  if (lastDateCounter == undefined || aDayPassed) {
    new Image().src = "https://kutt.it/eVff7v";
    localStorage["date-counter-v0.1"] = new Date().getTime();
    console.log("track counter alive: hit!");
  } else {
    console.log("track counter alive: already hit!");
  }
};

trackPage();