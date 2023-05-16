function updateTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let day = date.getDay();
  
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    let time = hour + ":" + min + ":" + sec + ":" + daysOfWeek[day];
    document.getElementById("clock").innerText = time;
  }

  function updateDate() {
    let date = new Date();
    let month = date.toLocaleString('en-US', { month: 'long' });
    let year = date.getFullYear();
    let dateText = month + " " + year;
    document.getElementById("date").innerText = dateText;
  }
  
  function startClock() {
    updateTime(); 
    updateDate(); 
    setInterval(updateTime, 1000); 
  }
  
  startClock();
