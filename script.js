// Write your JavaScript code here!

window.addEventListener("load",function (){
   let form = document.querySelector("form");
   console.log("form Loaded");
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json) {
         console.log(json);
         let missionTarget = document.getElementById("missionTarget");
         let index = 0;
         function randomPick(json){
              index = Math.floor(Math.random()*json.length)
            };
            randomPick(json);
         missionTarget.innerHTML = `
         <ol>
            <li>Name: ${json[index].name}</li>
            <li>Diameter: ${json[index].diameter}</li>
            <li>Star: ${json[index].star}</li>
            <li>Distance from Earth: ${json[index].distance}</li>
            <li>Number of Moons: ${json[index].moons}</li>
         </ol>
         <img src="${json[index].image}">`
         
      });
   });
   form.addEventListener("submit",function(event){
      event.preventDefault();
      let pilotName= document.querySelector("input[name=pilotName]").value;
      let coPilotName = document.querySelector("input[name=copilotName]").value;
      let fuelLevel = document.querySelector("input[name='fuelLevel']").value;
      let cargoMass = document.querySelector("input[name=cargoMass]").value;
      let coPilotType = isNaN(Number(coPilotName));
      let cargoType = isNaN(Number(cargoMass));
      let pilotType = isNaN(Number(pilotName));
      let fuelType = isNaN(Number(fuelLevel));
      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let fuelMessage = "high enough";
      let cargoMessage = "low enough";

         if(fuelType || cargoType || !pilotType || !coPilotType){
            alert("Invalid Input");
         }
         else if(cargoMass < 10000 && fuelLevel > 10000){
            launchStatus.innerHTML = "<h2>Shuttle Ready for Launch</h2>";
            launchStatus.style.color="green";
            faultyItems.style.visibility="visible";
            pilotStatus.innerHTML =` ${pilotName} is ready for launch`;
            copilotStatus.innerHTML =`${coPilotName} is ready for launch`;
            fuelStatus.innerHTML = `${fuelMessage} for launch`;
            cargoStatus.innerHTML =`${cargoMessage} for launch`;
         }
         else if(cargoMass > 10000 || fuelLevel < 10000){
            launchStatus.innerHTML = "<h2>Shuttle Not Ready for Launch</h2>";
            launchStatus.style.color="red";
            faultyItems.style.visibility="visible";
            if (fuelLevel < 10000){
               fuelMessage = "too low"
            }
            if(cargoMass > 10000){
               cargoMessage = "too high"
            }
            pilotStatus.innerHTML =` ${pilotName} is ready for launch`;
            copilotStatus.innerHTML =`${coPilotName} is ready for launch`;
            fuelStatus.innerHTML = `${fuelMessage} for launch`;
            cargoStatus.innerHTML =`${cargoMessage} for launch`;
         } 
   });
            

});






/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
