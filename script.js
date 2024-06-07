async function logMovies() {
    const response = await fetch("https://api.openf1.org/v1/drivers");
    const drivers = await response.json();
    const driver = drivers[0]
    document.body.innerHTML += `<li><a href="#">Item ${driver.full_name}</a></li>`
  }
  
  logMovies()