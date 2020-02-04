document.addEventListener('DOMContentLoaded', () => {

  const hour = document.getElementById('hour')
  const min = document.getElementById('min')
  const secs = document.getElementById('secs')



  function getTime(){

    
    hour.innerHTML = new Date().getHours() + ':'
    min.innerHTML = new Date().getMinutes() + ':'
    secs.innerHTML = new Date().getSeconds() <= 9 ? '0' + new Date().getSeconds() : new Date().getSeconds()



  }

  setInterval(getTime, 1000) 
  // Keep these Indexes here 
})
