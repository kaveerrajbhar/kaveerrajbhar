
const btn1 = document.getElementById("btnEl");
const btn2 = document.getElementById("joke");
btn1.addEventListener("click",getjoke);

const apiKey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";
async function getjoke()
 {
  const options = {
    method: "GET",
    headers: {"X-Api-Key": apiKey}
  };
  btn2.innerText = "Loading...";
   const res  =  await fetch("https://api.api-ninjas.com/v1/dadjokes?limit=1",options);
   const data = await res.json();
   btn2.innerHTML = data[0].joke;
   /*fetch("https://api.api-ninjas.com/v1/dadjokes?limit=1")
   .then((response) => response.text())
   .then((data) => document.write(data));*/
 }
 //getjoke();
