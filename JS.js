
var ltv;

function ltvMultiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        ltv = num1 * num2;
}

function industryAverages()
{
  var vertical = document.getElementById("vertical").value;

  
  switch(vertical){
    case "Advocacy":
     gSearchCPC = "1.72";
     gDisplayCPC = "0.32";
     gSearchConv = "4.61";
     gDisplayConv = "0.37";
      break;
    case "Auto":
     gSearchCPC = "1.43";
     gDisplayCPC = "0.39";
     gSearchConv = "2.27";
     gDisplayConv = "0.79";
      break;
    case "B2B":
     gSearchCPC = "1.64";
     gDisplayCPC = "0.37";
     gSearchConv = "2.58";
     gDisplayConv = "0.96";
      break;
    case "Consumer Services":
     gSearchCPC = "3.77";
     gDisplayCPC = "0.69";
     gSearchConv = "5.00";
     gDisplayConv = "0.96";
      break;
    case "Dating & Personals":
     gSearchCPC = "0.19";
     gDisplayCPC = "0.18";
     gSearchConv = "2.75";
     gDisplayConv = "0.41";
      break;
    case "E-Commerce":
     gSearchCPC = "0.88";
     gDisplayCPC = "0.29";
     gSearchConv = "1.91";
     gDisplayConv = "0.96";
      break;
    case "Education":
     gSearchCPC = "1.74";
     gDisplayCPC = "0.40";
     gSearchConv = "4.13";
     gDisplayConv = "0.50";
      break;
    case "Employment Services":
     gSearchCPC = "4.20";
     gDisplayCPC = "1.66";
     gSearchConv = "3.97";
     gDisplayConv = "1.28";
      break;
     case "Finance & Insurance":
     gSearchCPC = "3.72";
     gDisplayCPC = "0.72";
     gSearchConv = "7.19";
     gDisplayConv = "1.75";
      break;
    case "Health & Medical":
     gSearchCPC = "3.17";
     gDisplayCPC = "0.37";
     gSearchConv = "2.51";
     gDisplayConv = "0.77";
      break;
    case "Home Goods":
     gSearchCPC = "3.19";
     gDisplayCPC = "0.70";
     gSearchConv = "3.68";
     gDisplayConv = "0.77";
      break;
    case "Industrial Services":
     gSearchCPC = "2.00";
     gDisplayCPC = "0.60";
     gSearchConv = "2.58";
     gDisplayConv = "0.88";
      break;
    case "Legal":
     gSearchCPC = "5.88";
     gDisplayCPC = "0.60";
     gSearchConv = "4.35";
     gDisplayConv = "0.98";
      break;
    case "Real Estate":
     gSearchCPC = "1.81";
     gDisplayCPC = "0.88";
     gSearchConv = "4.40";
     gDisplayConv = "1.49";
      break;
    case "Technology":
     gSearchCPC = "1.78";
     gDisplayCPC = "0.20";
     gSearchConv = "2.55";
     gDisplayConv = "1.04";
      break;
    case "Travel & Hospitality":
     gSearchCPC = 1.55;
     gDisplayCPC = 0.24;
     gSearchConv = 2.57;
     gDisplayConv = 0.53;
      break;
  }
  document.getElementById("gSearchCPC").innerHTML = '$' + gSearchCPC;
  document.getElementById("gDisplayCPC").innerHTML = '$' + gDisplayCPC;
  document.getElementById("gSearchConv").innerHTML = gSearchConv + '%';
  document.getElementById("gDisplayConv").innerHTML = gDisplayConv + '%';
}

function cascadeChannel(){
  document.getElementById("searchCheck").disabled = true;
  document.getElementById("gDisplayCheck").disabled = true;
  document.getElementById("otherCheck").disabled = true;
  document.getElementById("tripYes").disabled = true;
  document.getElementById("tripNo").disabled = true;
  document.getElementById("firstNumber").disabled = true;
  document.getElementById("secondNumber").disabled = true;
  document.getElementById("budget").disabled = true;
  document.getElementById("objectiveLead").disabled = true;
  document.getElementById("objectivePurchase").disabled = true;
  document.getElementById("tripYes").disabled = true;
  document.getElementById("tripNo").disabled = true;
  document.getElementById("clientSearchCPC").disabled = true;
  document.getElementById("clientDisplayCPC").disabled = true;
  document.getElementById("clientOtherCPC").disabled = true;
}
function cascadeChannelOff(){
  if (document.getElementById("vertical").value === "Blank"){
  document.getElementById("searchCheck").disabled = true;
  document.getElementById("gDisplayCheck").disabled = true;
  document.getElementById("otherCheck").disabled = true;
  document.getElementById("objectivePurchase").checked = true;
  document.getElementById("tripYes").disabled = true;
  document.getElementById("tripNo").disabled = true;
  document.getElementById("firstNumber").disabled = true;
  document.getElementById("secondNumber").disabled = true;
  document.getElementById("budget").disabled = true;
  document.getElementById("objectiveLead").disabled = true;
  document.getElementById("objectivePurchase").disabled = true;
  document.getElementById("tripYes").disabled = true;
  document.getElementById("tripNo").disabled = true;
  document.getElementById("searchCheck").checked = false;
  document.getElementById("gDisplayCheck").checked = false;
  document.getElementById("otherCheck").checked = false;
} else {
  document.getElementById("searchCheck").disabled = false;
  document.getElementById("gDisplayCheck").disabled = false;
  document.getElementById("otherCheck").disabled = false;
}
}


function searchShow(){
  if(document.getElementById("searchCheck").checked === true){
    document.getElementById("gSearchContainer").style.display = 'block';
    document.getElementById("gSearchConvData").style.display = 'block';
    document.getElementById("step2").style.display = 'block';
    document.getElementById("firstNumber").disabled = false;
  } else if (document.getElementById("searchCheck").checked === false) {
    document.getElementById("gSearchContainer").style.display = 'none';
    document.getElementById("gSearchConvData").style.display = 'none';
  } 
}

function gDisplayShow(){
  if(document.getElementById("gDisplayCheck").checked === true){
    document.getElementById("gDisplayContainer").style.display = 'block';
    document.getElementById("gDisplayConvData").style.display = 'block';
    document.getElementById("step2").style.display = 'block';
    document.getElementById("firstNumber").disabled = false;
  } else if (document.getElementById("gDisplayCheck").checked === false) {
    document.getElementById("gDisplayContainer").style.display = 'none';
    document.getElementById("gDisplayConvData").style.display = 'none';
  }
}
function otherShow(){
  if(document.getElementById("otherCheck").checked === true){
    document.getElementById("otherContainer").style.display = 'block';
    document.getElementById("otherConvData").style.display = 'block';
    document.getElementById("step2").style.display = 'block';
    document.getElementById("firstNumber").disabled = false;
  } else if (document.getElementById("otherCheck").checked === false) {
    document.getElementById("otherConvData").style.display = 'none';
    document.getElementById("otherContainer").style.display = 'none';
  }
}

function averagePurchaseValue(){
  if (document.getElementById("firstNumber").disabled === false && document.getElementById("firstNumber").value !== ""){
    document.getElementById("secondNumber").disabled = false;
  } else if (document.getElementById("firstNumber").disabled === true || document.getElementById("firstNumber").value === "") {
    document.getElementById("secondNumber").disabled = true;
    document.getElementById("secondNumber").value = "";
  }
}
function averageRepeatValue(){
  if (document.getElementById("secondNumber").disabled === false && document.getElementById("secondNumber").value !== ""){
    document.getElementById("budget").disabled = false;
  } else if (document.getElementById("secondNumber").disabled === true || document.getElementById("secondNumber").value === "") {
    document.getElementById("budget").disabled = true;
    document.getElementById("budget").value = "";
  }
}
function budgetValue(){
  if (document.getElementById("budget").disabled === false && document.getElementById("budget").value !== ""){
    document.getElementById("step3").style.display = 'block';
    document.getElementById("objectiveLead").disabled = false;
    document.getElementById("objectivePurchase").disabled = false;
  } else if (document.getElementById("budget").disabled === true || document.getElementById("budget").value === "") {
    document.getElementById("objectiveLead").disabled = true;
    document.getElementById("objectivePurchase").disabled = true;
    document.getElementById("objectiveLead").checked = false;
    document.getElementById("objectivePurchase").checked = false;
  }
}

function searchConvValue(){
  if (document.getElementById("clientSearchConv").disabled === false && document.getElementById("clientSearchConv").value !== ""){
    document.getElementById("clientSearchCPC").disabled = false;
  } else if (document.getElementById("clientSearchConv").disabled === true || document.getElementById("clientSearchConv").value === "") {
    document.getElementById("clientSearchCPC").disabled = true;
    document.getElementById("clientSearchCPC").value = "";
  }
}

function displayConvValue(){
  if (document.getElementById("clientDisplayConv").disabled === false && document.getElementById("clientDisplayConv").value !== ""){
    document.getElementById("clientDisplayCPC").disabled = false;
  } else if (document.getElementById("clientDisplayConv").disabled === true || document.getElementById("clientDisplayConv").value === "") {
    document.getElementById("clientDisplayCPC").disabled = true;
    document.getElementById("clientDisplayCPC").value = "";
  }
}

function otherConvValue(){
  if (document.getElementById("clientOtherConv").disabled === false && document.getElementById("clientOtherConv").value !== ""){
    document.getElementById("clientOtherCPC").disabled = false;
  } else if (document.getElementById("clientOtherConv").disabled === true || document.getElementById("clientOtherConv").value === "") {
    document.getElementById("clientOtherCPC").disabled = true;
    document.getElementById("clientOtherCPC").value = "";
  }
}

function leadBoxShow(){
  var objectiveLead = document.getElementById("objectiveLead");
  var objectivePurchase = document.getElementById("objectivePurchase");
  if(objectiveLead.checked){
    document.getElementById("gSearchLeadBox").style.display = 'block';
    document.getElementById("gDisplayLeadBox").style.display = 'block';
    document.getElementById("otherLeadBox").style.display = 'block';
    document.getElementById("tripYes").disabled = false;
    document.getElementById("tripNo").disabled = false;
    document.getElementById("leadConvRates").style.display = 'block';
    document.getElementById("purchaseCPABox").style.display = 'block';
    document.getElementById("leadCPABox").style.display = 'block';
  } else {
    document.getElementById("gDisplayLeadBox").style.display = 'none';
    document.getElementById("gSearchLeadBox").style.display = 'none';
    document.getElementById("otherLeadBox").style.display = 'none';
    document.getElementById("tripYes").disabled = true;
    document.getElementById("tripNo").disabled = true;
    document.getElementById("tripYes").checked = false;
    document.getElementById("tripNo").checked = false;
    document.getElementById("gSearchTripBox").style.display = 'none';
    document.getElementById("gDisplayTripBox").style.display = 'none';
    document.getElementById("otherTripBox").style.display = 'none';
    document.getElementById("leadConvRates").style.display = 'none';
    document.getElementById("convDataContainer").style.display = 'block';
    document.getElementById("purchaseCPABox").style.display = 'block';
    document.getElementById("leadCPABox").style.display = 'none';
  }
} 

function tripBoxShow(){
  var tripYes = document.getElementById("tripYes");
  var tripNo = document.getElementById("tripNo");
  document.getElementById("convDataContainer").style.display = 'block';
  if (tripYes.checked) {
    document.getElementById("gSearchTripBox").style.display = 'block';
    document.getElementById("gDisplayTripBox").style.display = 'block';
    document.getElementById("otherTripBox").style.display = 'block';
    document.getElementById("leadToGoalTitle").innerHTML= "Lead to Tripwire<br>Conv. %";
    document.getElementById("tripToPurchaseConv").disabled = false;
    document.getElementById("tripToPurchaseConv").placeholder = "0.00";
    document.getElementById("tripCPABox").style.display = 'block';
  } else if (tripNo.checked) {
    document.getElementById("gSearchTripBox").style.display = 'none';
    document.getElementById("gDisplayTripBox").style.display = 'none';
    document.getElementById("otherTripBox").style.display = 'none';
    document.getElementById("leadToGoalTitle").innerHTML= "Lead to Purchase<br>Conv. %";
    document.getElementById("tripToPurchaseConv").disabled = true;
    document.getElementById("tripToPurchaseConv").placeholder = "N/A";
    document.getElementById("tripCPABox").style.display = 'none';
    
  }
}

function searchButtonShow(){
  if ((document.getElementById("searchCheck").checked) && (document.getElementById("clientSearchCPC").value !== "")) {
    document.getElementById("calculateButton").style.display = 'block';
  }
}

function displayButtonShow(){
  if ((document.getElementById("gDisplayCheck").checked) && (document.getElementById("clientDisplayCPC").value !== "")) {
    document.getElementById("calculateButton").style.display = 'block';
  } 
}

function otherButtonShow(){
  if ((document.getElementById("otherCheck").checked) && (document.getElementById("clientOtherCPC").value !== "")) {
    document.getElementById("calculateButton").style.display = 'block';
  } 
}

function leadButtonShow(){
  if ((document.getElementById("objectiveLead").checked) && (document.getElementById("tripYes").checked) && (document.getElementById("tripToPurchaseConv").value !== "")) {
    document.getElementById("calculateButton").style.display = 'block';
  } else if ((document.getElementById("objectiveLead").checked) && (document.getElementById("tripNo").checked) && (document.getElementById("leadToPurchaseConv").value !== "")) {
    document.getElementById("calculateButton").style.display = 'block';
  }
}

function calcButtonHide(){
  if (((document.getElementById("searchCheck").checked) && (document.getElementById("clientSearchCPC").value === "")) || ((document.getElementById("gDisplayCheck").checked) && (document.getElementById("clientDisplayCPC").value === ""))|| ((document.getElementById("otherCheck").checked) && (document.getElementById("clientOtherCPC").value === "")) || ((document.getElementById("tripYes").checked) && (document.getElementById("tripToPurchaseConv").value === "")) || ((document.getElementById("tripNo").checked) && (document.getElementById("leadToPurchaseConv").value === ""))) {
    document.getElementById("calculateButton").style.display = 'none';
  }
}

function forcast(){
  var objectiveLead = document.getElementById("objectiveLead");
  var objectivePurchase = document.getElementById("objectivePurchase");
  var tripYes = document.getElementById("tripYes");
  var tripNo = document.getElementById("tripNo");
  document.getElementById("results").style.display = 'block';
  document.getElementById("clientSearchCPCComp").innerHTML = '$' + document.getElementById("clientSearchCPC").value;
  document.getElementById("clientDisplayCPCComp").innerHTML = '$' + document.getElementById("clientDisplayCPC").value;
  document.getElementById("clientOtherCPCComp").innerHTML = '$' + document.getElementById("clientOtherCPC").value;
  document.getElementById("clientSearchConvComp").innerHTML = document.getElementById("clientSearchConv").value + '%';
  document.getElementById("clientDisplayConvComp").innerHTML = document.getElementById("clientDisplayConv").value + '%';
  document.getElementById("clientOtherConvComp").innerHTML = document.getElementById("clientOtherConv").value + '%';
  document.getElementById("purchaseCPA").innerHTML = '$' + ((document.getElementById("firstNumber").value*document.getElementById("secondNumber").value) * (document.getElementById("budget").value/100)).toFixed(2);
  minROAS = (1/(document.getElementById("budget").value/100)).toFixed(2);
  document.getElementById("minROAS1").innerHTML = '$' + (1/(document.getElementById("budget").value/100)).toFixed(2);
  document.getElementById("minROAS2").innerHTML = '$' + (1/(document.getElementById("budget").value/100)).toFixed(2);
  document.getElementById("minROAS3").innerHTML = '$' + (1/(document.getElementById("budget").value/100)).toFixed(2);
  
  
  
  if (objectivePurchase.checked){
    document.getElementById("searchClicksPurchase").innerHTML = (1/(document.getElementById("clientSearchConv").value/100)).toFixed(0);
    document.getElementById("displayClicksPurchase").innerHTML = (1/(document.getElementById("clientDisplayConv").value/100)).toFixed(0);
    document.getElementById("otherClicksPurchase").innerHTML = (1/(document.getElementById("clientOtherConv").value/100)).toFixed(0);
    searchClicksPurchase = (1/(document.getElementById("clientSearchConv").value/100));
    displayClicksPurchase = (1/(document.getElementById("clientDisplayConv").value/100)).toFixed(0);
    otherClicksPurchase = (1/(document.getElementById("clientOtherConv").value/100)).toFixed(0);
    document.getElementById("searchCostPurchase").innerHTML = '$' + (searchClicksPurchase * document.getElementById("clientSearchCPC").value).toFixed(2);
    document.getElementById("displayCostPurchase").innerHTML = '$' + (displayClicksPurchase * document.getElementById("clientDisplayCPC").value).toFixed(2);
    document.getElementById("otherCostPurchase").innerHTML = '$' + (otherClicksPurchase * document.getElementById("clientOtherCPC").value).toFixed(2);
    document.getElementById("searchROAS").innerHTML = '$' + ((document.getElementById("firstNumber").value*document.getElementById("secondNumber").value)/(searchClicksPurchase * document.getElementById("clientSearchCPC").value)).toFixed(2);
    searchROAS = ((document.getElementById("firstNumber").value*document.getElementById("secondNumber").value)/(searchClicksPurchase * document.getElementById("clientSearchCPC").value));
    displayROAS = ((document.getElementById("firstNumber").value*document.getElementById("secondNumber").value)/(displayClicksPurchase * document.getElementById("clientDisplayCPC").value)).toFixed(2);
    otherROAS = ((document.getElementById("firstNumber").value*document.getElementById("secondNumber").value)/(otherClicksPurchase * document.getElementById("clientOtherCPC").value)).toFixed(2);
    document.getElementById("displayROAS").innerHTML = '$' + ((document.getElementById("firstNumber").value*document.getElementById("secondNumber").value)/(displayClicksPurchase * document.getElementById("clientDisplayCPC").value)).toFixed(2);
    document.getElementById("otherROAS").innerHTML = '$' + ((document.getElementById("firstNumber").value*document.getElementById("secondNumber").value)/(otherClicksPurchase * document.getElementById("clientOtherCPC").value)).toFixed(2);
    
  } else if (objectiveLead.checked && tripNo.checked) {
    
    document.getElementById("searchClicksLead").innerHTML = (1/(document.getElementById("clientSearchConv").value/100)).toFixed(0);
    document.getElementById("displayClicksLead").innerHTML = (1/(document.getElementById("clientDisplayConv").value/100)).toFixed(0);
    document.getElementById("otherClicksLead").innerHTML = (1/(document.getElementById("clientOtherConv").value/100)).toFixed(0);
    searchClicksLead = (1/(document.getElementById("clientSearchConv").value/100)).toFixed(0);
    displayClicksLead = (1/(document.getElementById("clientDisplayConv").value/100)).toFixed(0);
    otherClicksLead = (1/(document.getElementById("clientOtherConv").value/100)).toFixed(0);
    document.getElementById("searchClicksPurchase").innerHTML = (searchClicksLead/(document.getElementById("leadToPurchaseConv").value/100)).toFixed(0);
    document.getElementById("displayClicksPurchase").innerHTML = (displayClicksLead/(document.getElementById("leadToPurchaseConv").value/100)).toFixed(0);
    document.getElementById("otherClicksPurchase").innerHTML = (otherClicksLead/(document.getElementById("leadToPurchaseConv").value/100)).toFixed(0);
    searchClicksPurchase = (searchClicksLead/(document.getElementById("leadToPurchaseConv").value/100)).toFixed(0);
    displayClicksPurchase = (displayClicksLead/(document.getElementById("leadToPurchaseConv").value/100)).toFixed(0);
    otherClicksPurchase = (otherClicksLead/(document.getElementById("leadToPurchaseConv").value/100)).toFixed(0);
    document.getElementById("searchCostPurchase").innerHTML = '$' + (searchClicksPurchase * document.getElementById("clientSearchCPC").value).toFixed(2);
    document.getElementById("displayCostPurchase").innerHTML = '$' + (displayClicksPurchase * document.getElementById("clientDisplayCPC").value).toFixed(2);
    document.getElementById("otherCostPurchase").innerHTML = '$' + (otherClicksPurchase * document.getElementById("clientOtherCPC").value).toFixed(2);
    document.getElementById("searchCostLead").innerHTML = '$' + (searchClicksLead * document.getElementById("clientSearchCPC").value).toFixed(2);
    document.getElementById("displayCostLead").innerHTML = '$' + (displayClicksLead * document.getElementById("clientDisplayCPC").value).toFixed(2);
    document.getElementById("otherCostLead").innerHTML = '$' + (otherClicksLead * document.getElementById("clientOtherCPC").value).toFixed(2);
    document.getElementById("searchROAS").innerHTML = '$' + ((document.getElementById("firstNumber").value*document.getElementById("secondNumber").value)/(searchClicksPurchase * document.getElementById("clientSearchCPC").value)).toFixed(2);
    document.getElementById("displayROAS").innerHTML = '$' + ((document.getElementById("firstNumber").value*document.getElementById("secondNumber").value)/(displayClicksPurchase * document.getElementById("clientDisplayCPC").value)).toFixed(2);
    document.getElementById("otherROAS").innerHTML = '$' + ((document.getElementById("firstNumber").value*document.getElementById("secondNumber").value)/(otherClicksPurchase * document.getElementById("clientOtherCPC").value)).toFixed(2);
    searchROAS = ((document.getElementById("firstNumber").value*document.getElementById("secondNumber").value)/(searchClicksPurchase * document.getElementById("clientSearchCPC").value)).toFixed(2);
    displayROAS = ((document.getElementById("firstNumber").value*document.getElementById("secondNumber").value)/(displayClicksPurchase * document.getElementById("clientDisplayCPC").value)).toFixed(2);
    otherROAS = ((document.getElementById("firstNumber").value*document.getElementById("secondNumber").value)/(otherClicksPurchase * document.getElementById("clientOtherCPC").value)).toFixed(2);
    document.getElementById("leadCPA").innerHTML = '$' + (((document.getElementById("firstNumber").value*document.getElementById("secondNumber").value) * (document.getElementById("budget").value/100)*(document.getElementById("leadToPurchaseConv").value/100))).toFixed(2);
    
  } else if (objectiveLead.checked && tripYes.checked) {
    document.getElementById("searchClicksLead").innerHTML = (1/(document.getElementById("clientSearchConv").value/100)).toFixed(0);
    document.getElementById("displayClicksLead").innerHTML = (1/(document.getElementById("clientDisplayConv").value/100)).toFixed(0);
    document.getElementById("otherClicksLead").innerHTML = (1/(document.getElementById("clientOtherConv").value/100)).toFixed(0);
    searchClicksLead = (1/(document.getElementById("clientSearchConv").value/100)).toFixed(0);
    displayClicksLead = (1/(document.getElementById("clientDisplayConv").value/100)).toFixed(0);
    otherClicksLead = (1/(document.getElementById("clientOtherConv").value/100)).toFixed(0);
    document.getElementById("searchClicksTrip").innerHTML = (searchClicksLead/(document.getElementById("leadToPurchaseConv").value/100)).toFixed(0);
    document.getElementById("displayClicksTrip").innerHTML = (displayClicksLead/(document.getElementById("leadToPurchaseConv").value/100)).toFixed(0);
    document.getElementById("otherClicksTrip").innerHTML = (otherClicksLead/(document.getElementById("leadToPurchaseConv").value/100)).toFixed(0);
    searchClicksTrip = (searchClicksLead/(document.getElementById("leadToPurchaseConv").value/100)).toFixed(0);
    displayClicksTrip = (displayClicksLead/(document.getElementById("leadToPurchaseConv").value/100)).toFixed(0);
    otherClicksTrip = (otherClicksLead/(document.getElementById("leadToPurchaseConv").value/100)).toFixed(0);
    document.getElementById("searchClicksPurchase").innerHTML = (searchClicksTrip/(document.getElementById("tripToPurchaseConv").value/100)).toFixed(0);
    document.getElementById("displayClicksPurchase").innerHTML = (displayClicksTrip/(document.getElementById("tripToPurchaseConv").value/100)).toFixed(0);
    document.getElementById("otherClicksPurchase").innerHTML = (otherClicksTrip/(document.getElementById("tripToPurchaseConv").value/100)).toFixed(0);
    searchClicksPurchase = (searchClicksTrip/(document.getElementById("tripToPurchaseConv").value/100)).toFixed(0);
    displayClicksPurchase = (displayClicksTrip/(document.getElementById("tripToPurchaseConv").value/100)).toFixed(0);
    otherClicksPurchase = (otherClicksTrip/(document.getElementById("tripToPurchaseConv").value/100)).toFixed(0);
    document.getElementById("searchCostLead").innerHTML = '$' + (searchClicksLead * document.getElementById("clientSearchCPC").value).toFixed(2);
    document.getElementById("displayCostLead").innerHTML = '$' + (displayClicksLead * document.getElementById("clientDisplayCPC").value).toFixed(2);
    document.getElementById("otherCostLead").innerHTML = '$' + (otherClicksLead * document.getElementById("clientOtherCPC").value).toFixed(2);
    document.getElementById("searchROAS").innerHTML = '$' + ((document.getElementById("firstNumber").value*document.getElementById("secondNumber").value)/(searchClicksPurchase * document.getElementById("clientSearchCPC").value)).toFixed(2);
    document.getElementById("displayROAS").innerHTML = '$' + ((document.getElementById("firstNumber").value*document.getElementById("secondNumber").value)/(displayClicksPurchase * document.getElementById("clientDisplayCPC").value)).toFixed(2);
    document.getElementById("otherROAS").innerHTML = '$' + ((document.getElementById("firstNumber").value*document.getElementById("secondNumber").value)/(otherClicksPurchase * document.getElementById("clientOtherCPC").value)).toFixed(2);
    searchROAS = ((document.getElementById("firstNumber").value*document.getElementById("secondNumber").value)/(searchClicksPurchase * document.getElementById("clientSearchCPC").value)).toFixed(2);
    displayROAS = ((document.getElementById("firstNumber").value*document.getElementById("secondNumber").value)/(displayClicksPurchase * document.getElementById("clientDisplayCPC").value)).toFixed(2);
    otherROAS = ((document.getElementById("firstNumber").value*document.getElementById("secondNumber").value)/(otherClicksPurchase * document.getElementById("clientOtherCPC").value)).toFixed(2);
    document.getElementById("searchCostPurchase").innerHTML = '$' + (searchClicksPurchase * document.getElementById("clientSearchCPC").value).toFixed(2);
    document.getElementById("displayCostPurchase").innerHTML = '$' + (displayClicksPurchase * document.getElementById("clientDisplayCPC").value).toFixed(2);
    document.getElementById("otherCostPurchase").innerHTML = '$' + (otherClicksPurchase * document.getElementById("clientOtherCPC").value).toFixed(2);
    document.getElementById("tripCPA").innerHTML = '$' + (((document.getElementById("firstNumber").value*document.getElementById("secondNumber").value) * (document.getElementById("budget").value/100)*(document.getElementById("tripToPurchaseConv").value/100))).toFixed(2);
    tripCPA = (((document.getElementById("firstNumber").value*document.getElementById("secondNumber").value) * (document.getElementById("budget").value/100)*(document.getElementById("tripToPurchaseConv").value/100))).toFixed(2);
    document.getElementById("leadCPA").innerHTML = '$' + ((tripCPA)*(document.getElementById("leadToPurchaseConv").value/100)).toFixed(2);
    document.getElementById("searchROAS").innerHTML = '$' + ((document.getElementById("firstNumber").value*document.getElementById("secondNumber").value)/(searchClicksPurchase * document.getElementById("clientSearchCPC").value)).toFixed(2);
    document.getElementById("displayROAS").innerHTML = '$' + ((document.getElementById("firstNumber").value*document.getElementById("secondNumber").value)/(displayClicksPurchase * document.getElementById("clientDisplayCPC").value)).toFixed(2);
    document.getElementById("otherROAS").innerHTML = '$' + ((document.getElementById("firstNumber").value*document.getElementById("secondNumber").value)/(otherClicksPurchase * document.getElementById("clientOtherCPC").value)).toFixed(2);
    document.getElementById("searchCostTrip").innerHTML = '$' + (searchClicksTrip * document.getElementById("clientSearchCPC").value).toFixed(2);
    document.getElementById("displayCostTrip").innerHTML = '$' + (displayClicksTrip * document.getElementById("clientDisplayCPC").value).toFixed(2);
    document.getElementById("otherCostTrip").innerHTML = '$' + (otherClicksTrip * document.getElementById("clientOtherCPC").value).toFixed(2);
  }
  if ((searchROAS)>=(1/(document.getElementById("budget").value/100))){
      document.getElementById("searchROAS").style.color = "green";
      } else {
        document.getElementById("searchROAS").style.color = "red";
      }
  if ((displayROAS)>(1/(document.getElementById("budget").value/100))){
      document.getElementById("displayROAS").style.color = "green";
      } else {
        document.getElementById("displayROAS").style.color = "red";
      }  
  if ((otherROAS)>(1/(document.getElementById("budget").value/100))){
      document.getElementById("otherROAS").style.color = "green";
      } else {
        document.getElementById("otherROAS").style.color = "red";
      }   
}