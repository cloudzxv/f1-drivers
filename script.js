async function logMovies() {
    const response = await fetch("https://api.openf1.org/v1/drivers");
    const drivers = await response.json();
    const driversLess = drivers.slice(0, 10)
    for (const driver of driversLess) {
      document.body.innerHTML += `<div>
          <h1>Driver Number ${driver.driver_number}</h1>
          <h2>${driver.full_name}</h2>
          <img src="${driver.headshot_url}" alt="${driver.full_name}">
          <h3>Team Name: ${driver.team_name}</h3>
      </div>`
    }
}


  logMovies()
