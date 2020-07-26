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
      console.log("SUBMITTED");
      let pilotName= document.querySelector("input[name=pilotName]").value;
       console.log(typeof pilotName);
      let coPilotName = document.querySelector("input[name=copilotName]").value;
       console.log(coPilotName);
      let fuelLevel = document.querySelector("input[name='fuelLevel']").value;
       console.log(fuelLevel);
      let cargoMass = document.querySelector("input[name=cargoMass]").value;
      console.log(cargoMass);

         let coPilotType = isNaN(Number(coPilotName));
         let cargoType = isNaN(Number(cargoMass));
         let pilotType = isNaN(Number(pilotName));
         let fuelType = isNaN(Number(fuelLevel));


         let faultyItems = document.getElementById("faultyItems");
         let launchStatus = document.getElementById("launchStatus");
         let fuelMessage = "high enough";
         let cargoMessage = "low enough";

         if(fuelType || cargoType || !pilotType || !coPilotType){
            alert("Invalid Input");
         }
         else if(cargoMass < 10000 && fuelLevel > 10000){
         launchStatus.innerHTML = "<h2>Shuttle Ready for Launch</h2>";
         launchStatus.style.color="green";
         faultyItems.style.visibility="visible";
         faultyItems.innerHTML = `<ol>
         <li id="pilotStatus">Pilot ${pilotName} is ready for launch</li>
         <li id="copilotStatus">Co-pilot ${coPilotName} is ready for launch</li>
         <li id="fuelStatus">Fuel level  ${fuelMessage} for launch</li>
         <li id="cargoStatus">Cargo mass ${cargoMessage} for launch</li>
     </ol>`
     
         }
         else if(cargoMass > 10000 || fuelLevel < 10000){
            launchStatus.innerHTML = "<h2>Shuttle Not Ready for Launch</h2>";
            launchStatus.style.color="red";
            faultyItems.style.visibility="visible";
            if(fuelLevel < 10000){
               fuelMessage = "too low"
            }
            if(cargoMass > 10000){
               cargoMessage = "too high"
            }
            faultyItems.innerHTML = `<ol>
            <li id="pilotStatus">${pilotName} is ready for launch</li>
            <li id="copilotStatus">${coPilotName} is ready for launch</li>
            <li id="fuelStatus">Fuel level ${fuelMessage} for launch</li>
            <li id="cargoStatus">Cargo ${cargoMessage} for launch</li>
        </ol>`
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
