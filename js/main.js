fetch('http://api.openweathermap.org/data/2.5/weather?id=625144&appid=ac0f5ada92348dc24ec79caef061b5dc')
    .then(function (resp) { return resp.json(); })
    .then(function (data) {
        console.log(data);
        document.querySelector('.place').textContent = data.name;
        document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.weatherCondition').textContent = data.weather[0].description;

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();

        today = `${dd}/${mm}/${yyyy}`;
        document.querySelector('.date').textContent = today;
    })
    .catch(function name() {

    });
