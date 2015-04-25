
var cont = ["Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","South America","Europe","Europe" , "Europe", "Europe", "North America", "Asia", "Africa", "Australia"];
var age = ["0-20","21-40","21-40","0-20","0-20","21-40","21-40","21-40","0-20","21-40","21-40","0-20","41-60","21-40","0-20","21-40","21-40","21-40","0-20","0-20", "0-20", "21-40", "60+", "60+", "41-60", "21-40"];
var sex = ["Man","Man","Man","Man","Woman","Man","Man","Man","Woman","Man","Man","Man","Woman","Man","Man","Man","Man","Man","Man","Man","Man","Man", "Other", "Other", "Man", "Woman"];
var mind =["Artistic","Cientific","Artistic","Artistic","Artistic","Artistic","Scientific","Scientific","Artistic","Artistic","Scientific","Scientific","Artistic","Artistic","Artistic","Artistic","Artistic","Artistic","Scientific","Scientific","Artistic","Scientific", "Scientific","Artistic","Scientific","Artistic"];
var guess1 =[456,400,1500,700,500,547,300,800,270,600,400,750,650,3000,100,400,260,250,609,1500,500,550,750,800,900,300];
var guess2 =[234,100,300,400,180,103,150,600,160,300,200,250,500,1000,75,100,130,100,326,800,200,220,300,300,100,245];
var guess3 =[132,50,200,300,110,94,120,200,130,150,150,150,200,500,50,80,130,75,278,500,150,200,200,350,50,200];
var guess4 =[567,400,800,650,700,477,380,900,330,450,320,950,600,2000,110,200,300,120,569,1300,250,500,400,500,200,500];
var guess5 =[978,500,1500,1000,1000,683,800,1100,650,750,600,1800,1000,5000,175,500,500,350,1346,2000,600,1001,1000,3000,400,1000];
var people = 26;

var colorRect = 1
var count =0
var infoButton =1;

var GInd = 1

var contSimp = []
var ageSimp = []
var sexSimp = []
var mindSimp = []

var tempGuess1Stat = 0;///guess1
var tempAverageGuess1 = 0;
var averageGuess1 = 0;
var guess1Stat  = 0 ;
var realGuess1 = 765;
var prevPrintG1 = 0;
var goalPrintG1 = 0;
var tempPrintG1 = 0;

var tempGuess2Stat = 0;///guess2
var tempAverageGuess2 = 0;
var averageGuess2 = 0;
var guess2Stat  = 0 ;
var realGuess2 = 234;
var prevPrintG2 = 0;
var goalPrintG2 = 0;
var tempPrintG2 = 0;

var tempGuess3Stat = 0;///guess3
var tempAverageGuess3 = 0;
var averageGuess3 = 0;
var guess3Stat  = 0 ;
var realGuess3 = 145;
var prevPrintG3 = 0;
var goalPrintG3 = 0;
var tempPrintG3 = 0;

var tempGuess4Stat = 0;///guess4
var tempAverageGuess4 = 0;
var averageGuess4 = 0;
var guess4Stat  = 0 ;
var realGuess4 = 567;
var prevPrintG4 = 0;
var goalPrintG4 = 0;
var tempPrintG4 = 0;

var tempGuess5Stat = 0;///guess5
var tempAverageGuess5 = 0;
var averageGuess5 = 0;
var guess5Stat  = 0 ;
var realGuess5 = 1500;
var prevPrintG5 = 0;
var goalPrintG5 = 0;
var tempPrintG5 = 0;

var prevPrintTotal = 0;
var goalPrintTotal = 0;
var tempPrintTotal = 0;

var buttonX = 70;

var printEurope =0;
var printNAmerica=0;
var printSAmerica=0;
var printAsia=0;
var printAfrica=0;
var printAustralia=0;
var printO=0;
var printSI=0;
var printAI=0;
var printGI=0;
var printMan=0;
var printWoman=0;
var printOther=0;
var printScientific=0;
var printArtistic=0;
var printTotal=0;
var printG1=0;
var printG2=0;
var printG3=0;
var printG4=0;
var printG5=0;

var modWidth
var modHeight
var buttonCounter = 0;




var EuropePeople = 0; ///CONTINENT Europe
var tempEuropeG1 = 0;
var tempEuropeG2 = 0;
var tempEuropeG3 = 0;
var tempEuropeG4 = 0;
var tempEuropeG5 = 0;
var tempAvEuropeG1 = 0;
var tempAvEuropeG2 = 0;
var tempAvEuropeG3 = 0;
var tempAvEuropeG4 = 0;
var tempAvEuropeG5 = 0;
var avEuropeG1 = 0;
var avEuropeG2 = 0;
var avEuropeG3 = 0;
var avEuropeG4 = 0;
var avEuropeG5 = 0;
var totEuropeGuess = 0;
var prevPrintEurope = 0;
var goalPrintEurope = 0;
var tempPrintEurope = 0;


var NAmericaPeople = 0; ///CONTINENT NAmerica
var tempNAmericaG1 = 0;
var tempNAmericaG2 = 0;
var tempNAmericaG3 = 0;
var tempNAmericaG4 = 0;
var tempNAmericaG5 = 0;
var tempAvNAmericaG1 = 0;
var tempAvNAmericaG2 = 0;
var tempAvNAmericaG3 = 0;
var tempAvNAmericaG4 = 0;
var tempAvNAmericaG5 = 0;
var avNAmericaG1 = 0;
var avNAmericaG2 = 0;
var avNAmericaG3 = 0;
var avNAmericaG4 = 0;
var avNAmericaG5 = 0;
var totNAmericaGuess = 0;
var prevPrintNAmerica = 0;
var goalPrintNAmerica = 0;
var tempPrintNAmerica = 0;

var SAmericaPeople = 0; ///CONTINENT SAmerica
var tempSAmericaG1 = 0;
var tempSAmericaG2 = 0;
var tempSAmericaG3 = 0;
var tempSAmericaG4 = 0;
var tempSAmericaG5 = 0;
var tempAvSAmericaG1 = 0;
var tempAvSAmericaG2 = 0;
var tempAvSAmericaG3 = 0;
var tempAvSAmericaG4 = 0;
var tempAvSAmericaG5 = 0;
var avSAmericaG1 = 0;
var avSAmericaG2 = 0;
var avSAmericaG3 = 0;
var avSAmericaG4 = 0;
var avSAmericaG5 = 0;
var totSAmericaGuess = 0;
var prevPrintSAmerica = 0;
var goalPrintSAmerica = 0;
var tempPrintSAmerica = 0;

var AsiaPeople = 0; ///CONTINENT Asia
var tempAsiaG1 = 0;
var tempAsiaG2 = 0;
var tempAsiaG3 = 0;
var tempAsiaG4 = 0;
var tempAsiaG5 = 0;
var tempAvAsiaG1 = 0;
var tempAvAsiaG2 = 0;
var tempAvAsiaG3 = 0;
var tempAvAsiaG4 = 0;
var tempAvAsiaG5 = 0;
var avAsiaG1 = 0;
var avAsiaG2 = 0;
var avAsiaG3 = 0;
var avAsiaG4 = 0;
var avAsiaG5 = 0;
var totAsiaGuess = 0;
var prevPrintAsia = 0;
var goalPrintAsia = 0;
var tempPrintAsia = 0;

var AfricaPeople = 0; ///CONTINENT Africa
var tempAfricaG1 = 0;
var tempAfricaG2 = 0;
var tempAfricaG3 = 0;
var tempAfricaG4 = 0;
var tempAfricaG5 = 0;
var tempAvAfricaG1 = 0;
var tempAvAfricaG2 = 0;
var tempAvAfricaG3 = 0;
var tempAvAfricaG4 = 0;
var tempAvAfricaG5 = 0;
var avAfricaG1 = 0;
var avAfricaG2 = 0;
var avAfricaG3 = 0;
var avAfricaG4 = 0;
var avAfricaG5 = 0;
var totAfricaGuess = 0;
var prevPrintAfrica = 0;
var goalPrintAfrica = 0;
var tempPrintAfrica = 0;

var AustraliaPeople = 0; ///CONTINENT Australia
var tempAustraliaG1 = 0;
var tempAustraliaG2 = 0;
var tempAustraliaG3 = 0;
var tempAustraliaG4 = 0;
var tempAustraliaG5 = 0;
var tempAvAustraliaG1 = 0;
var tempAvAustraliaG2 = 0;
var tempAvAustraliaG3 = 0;
var tempAvAustraliaG4 = 0;
var tempAvAustraliaG5 = 0;
var avAustraliaG1 = 0;
var avAustraliaG2 = 0;
var avAustraliaG3 = 0;
var avAustraliaG4 = 0;
var avAustraliaG5 = 0;
var totAustraliaGuess = 0;
var prevPrintAustralia = 0;
var goalPrintAustralia = 0;
var tempPrintAustralia = 0;

var OPeople = 0; ///AGE 0-20
var tempOG1 = 0;
var tempOG2 = 0;
var tempOG3 = 0;
var tempOG4 = 0;
var tempOG5 = 0;
var tempAvOG1 = 0;
var tempAvOG2 = 0;
var tempAvOG3 = 0;
var tempAvOG4 = 0;
var tempAvOG5 = 0;
var avOG1 = 0;
var avOG2 = 0;
var avOG3 = 0;
var avOG4 = 0;
var avOG5 = 0;
var totOGuess = 0;
var prevPrintO = 0;
var goalPrintO = 0;
var tempPrintO = 0;

var SIPeople = 0; ///AGE SI
var tempSIG1 = 0;
var tempSIG2 = 0;
var tempSIG3 = 0;
var tempSIG4 = 0;
var tempSIG5 = 0;
var tempAvSIG1 = 0;
var tempAvSIG2 = 0;
var tempAvSIG3 = 0;
var tempAvSIG4 = 0;
var tempAvSIG5 = 0;
var avSIG1 = 0;
var avSIG2 = 0;
var avSIG3 = 0;
var avSIG4 = 0;
var avSIG5 = 0;
var totSIGuess = 0;
var prevPrintSI = 0;
var goalPrintSI = 0;
var tempPrintSI = 0;

var AIPeople = 0; ///AGE AI
var tempAIG1 = 0;
var tempAIG2 = 0;
var tempAIG3 = 0;
var tempAIG4 = 0;
var tempAIG5 = 0;
var tempAvAIG1 = 0;
var tempAvAIG2 = 0;
var tempAvAIG3 = 0;
var tempAvAIG4 = 0;
var tempAvAIG5 = 0;
var avAIG1 = 0;
var avAIG2 = 0;
var avAIG3 = 0;
var avAIG4 = 0;
var avAIG5 = 0;
var totAIGuess = 0;
var prevPrintAI = 0;
var goalPrintAI = 0;
var tempPrintAI = 0;

var GIPeople = 0; ///AGE GI
var tempGIG1 = 0;
var tempGIG2 = 0;
var tempGIG3 = 0;
var tempGIG4 = 0;
var tempGIG5 = 0;
var tempAvGIG1 = 0;
var tempAvGIG2 = 0;
var tempAvGIG3 = 0;
var tempAvGIG4 = 0;
var tempAvGIG5 = 0;
var avGIG1 = 0;
var avGIG2 = 0;
var avGIG3 = 0;
var avGIG4 = 0;
var avGIG5 = 0;
var totGIGuess = 0;
var prevPrintGI = 0;
var goalPrintGI = 0;
var tempPrintGI = 0;

var ManPeople = 0; ///SEX Man
var tempManG1 = 0;
var tempManG2 = 0;
var tempManG3 = 0;
var tempManG4 = 0;
var tempManG5 = 0;
var tempAvManG1 = 0;
var tempAvManG2 = 0;
var tempAvManG3 = 0;
var tempAvManG4 = 0;
var tempAvManG5 = 0;
var avManG1 = 0;
var avManG2 = 0;
var avManG3 = 0;
var avManG4 = 0;
var avManG5 = 0;
var totManGuess = 0;
var prevPrintMan = 0;
var goalPrintMan = 0;
var tempPrintMan = 0;

var WomanPeople = 0; ///SEX Woman
var tempWomanG1 = 0;
var tempWomanG2 = 0;
var tempWomanG3 = 0;
var tempWomanG4 = 0;
var tempWomanG5 = 0;
var tempAvWomanG1 = 0;
var tempAvWomanG2 = 0;
var tempAvWomanG3 = 0;
var tempAvWomanG4 = 0;
var tempAvWomanG5 = 0;
var avWomanG1 = 0;
var avWomanG2 = 0;
var avWomanG3 = 0;
var avWomanG4 = 0;
var avWomanG5 = 0;
var totWomanGuess = 0;
var prevPrintWoman = 0;
var goalPrintWoman = 0;
var tempPrintWoman = 0;

var OtherPeople = 0; ///SEX Other
var tempOtherG1 = 0;
var tempOtherG2 = 0;
var tempOtherG3 = 0;
var tempOtherG4 = 0;
var tempOtherG5 = 0;
var tempAvOtherG1 = 0;
var tempAvOtherG2 = 0;
var tempAvOtherG3 = 0;
var tempAvOtherG4 = 0;
var tempAvOtherG5 = 0;
var avOtherG1 = 0;
var avOtherG2 = 0;
var avOtherG3 = 0;
var avOtherG4 = 0;
var avOtherG5 = 0;
var totOtherGuess = 0;
var prevPrintOther = 0;
var goalPrintOther = 0;
var tempPrintOther = 0;

var ArtisticPeople = 0; ///MIND Artistic
var tempArtisticG1 = 0;
var tempArtisticG2 = 0;
var tempArtisticG3 = 0;
var tempArtisticG4 = 0;
var tempArtisticG5 = 0;
var tempAvArtisticG1 = 0;
var tempAvArtisticG2 = 0;
var tempAvArtisticG3 = 0;
var tempAvArtisticG4 = 0;
var tempAvArtisticG5 = 0;
var avArtisticG1 = 0;
var avArtisticG2 = 0;
var avArtisticG3 = 0;
var avArtisticG4 = 0;
var avArtisticG5 = 0;
var totArtisticGuess = 0;
var prevPrintArtistic = 0;
var goalPrintArtistic = 0;
var tempPrintArtistic = 0;

var ScientificPeople = 0; /// MIND Scientific
var tempScientificG1 = 0;
var tempScientificG2 = 0;
var tempScientificG3 = 0;
var tempScientificG4 = 0;
var tempScientificG5 = 0;
var tempAvScientificG1 = 0;
var tempAvScientificG2 = 0;
var tempAvScientificG3 = 0;
var tempAvScientificG4 = 0;
var tempAvScientificG5 = 0;
var avScientificG1 = 0;
var avScientificG2 = 0;
var avScientificG3 = 0;
var avScientificG4 = 0;
var avScientificG5 = 0;
var totScientificGuess = 0;
var prevPrintScientific = 0;
var goalPrintScientific = 0;
var tempPrintScientific = 0;









var thick =12;

function setup() {

  createCanvas(window.innerWidth-15, window.innerHeight-15);
  noStroke();
  noSmooth();



  for (var i =0; i <= people-1; i++){// getting Average guess1 and pixel
    tempGuess1Stat += guess1[i];
    tempGuess2Stat += guess2[i];
    tempGuess3Stat += guess3[i];
    tempGuess4Stat += guess4[i];
    tempGuess5Stat += guess5[i];
    }


  for(var g =1; g <=5;g++){
    tempAverageGuess1 = tempGuess1Stat/people;
    averageGuess1 = (tempAverageGuess1*300)/realGuess1
    tempAverageGuess2 = tempGuess2Stat/people;
    averageGuess2 = (tempAverageGuess2*300)/realGuess2
    tempAverageGuess3 = tempGuess3Stat/people;
    averageGuess3 = (tempAverageGuess3*300)/realGuess3
    tempAverageGuess4 = tempGuess4Stat/people;
    averageGuess4 = (tempAverageGuess4*300)/realGuess4
    tempAverageGuess5 = tempGuess5Stat/people;
    averageGuess5 = (tempAverageGuess5*300)/realGuess5
  }

  for (var i= 0; i<= people-1; i++){
    if(cont[i] === "Europe"){
      contSimp[i] = 1
      EuropePeople = EuropePeople + 1
    }
    if(cont[i] === "North America"){
      contSimp[i] = 2;
      NAmericaPeople = NAmericaPeople + 1
    }
    if(cont[i] === "South America"){
      contSimp[i] = 3;
      SAmericaPeople = SAmericaPeople + 1
    }
    if(cont[i] === "Asia"){
      contSimp[i] = 4;
      AsiaPeople = AsiaPeople + 1
    }
    if(cont[i] === "Africa"){
      contSimp[i] = 5;
      AfricaPeople = AfricaPeople + 1
    }
    if(cont[i] === "Australia"){
      contSimp[i] = 6;
      AustraliaPeople = AustraliaPeople + 1
    }

    if(age[i] === "0-20"){
      ageSimp[i] = 1;
      OPeople = OPeople + 1
    }
    if(age[i] === "21-40"){
      ageSimp[i] = 2;
      SIPeople = SIPeople + 1
    }
    if(age[i] === "41-60"){
      ageSimp[i] = 3;
      AIPeople = AIPeople + 1
    }
    if(age[i] === "60+"){
      ageSimp[i] = 4;
      GIPeople = GIPeople + 1
    }
    if(sex[i] === "Man"){
      sexSimp[i] = 1;
      ManPeople = ManPeople + 1
    }
    if(sex[i] === "Woman"){
      WomanPeople = WomanPeople + 1
      sexSimp[i] = 2;
    }
    if(sex[i] === "Other"){
      OtherPeople = OtherPeople + 1
      sexSimp[i] = 3;
    }
    if(mind[i] === "Artistic"){
      ArtisticPeople = ArtisticPeople + 1
      mindSimp[i] = 1;
    }
    if(mind[i] === "Scientific"){
      ScientificPeople = ScientificPeople + 1
      mindSimp[i] = 2;
    }
  }

  for(var i = 0; i<= people-1; i ++){

    if(contSimp[i] ===1){
      tempEuropeG1 += guess1[i];
      tempEuropeG2 += guess2[i];
      tempEuropeG3 += guess3[i];
      tempEuropeG4 += guess4[i];
      tempEuropeG5 += guess5[i];
    }
    if(contSimp[i] ===2){
      tempNAmericaG1 += guess1[i];
      tempNAmericaG2 += guess2[i];
      tempNAmericaG3 += guess3[i];
      tempNAmericaG4 += guess4[i];
      tempNAmericaG5 += guess5[i];
    }
    if(contSimp[i] ===3){
      tempSAmericaG1 += guess1[i];
      tempSAmericaG2 += guess2[i];
      tempSAmericaG3 += guess3[i];
      tempSAmericaG4 += guess4[i];
      tempSAmericaG5 += guess5[i];
    }
    if(contSimp[i] ===4){
      tempAsiaG1 += guess1[i];
      tempAsiaG2 += guess2[i];
      tempAsiaG3 += guess3[i];
      tempAsiaG4 += guess4[i];
      tempAsiaG5 += guess5[i];
    }
    if(contSimp[i] ===5){
      tempAfricaG1 += guess1[i];
      tempAfricaG2 += guess2[i];
      tempAfricaG3 += guess3[i];
      tempAfricaG4 += guess4[i];
      tempAfricaG5 += guess5[i];
    }
    if(contSimp[i] ===6){
      tempAustraliaG1 += guess1[i];
      tempAustraliaG2 += guess2[i];
      tempAustraliaG3 += guess3[i];
      tempAustraliaG4 += guess4[i];
      tempAustraliaG5 += guess5[i];
    }

    if(ageSimp[i] ===1){
      tempOG1 += guess1[i];
      tempOG2 += guess2[i];
      tempOG3 += guess3[i];
      tempOG4 += guess4[i];
      tempOG5 += guess5[i];
    }
    if(ageSimp[i] ===2){
      tempSIG1 += guess1[i];
      tempSIG2 += guess2[i];
      tempSIG3 += guess3[i];
      tempSIG4 += guess4[i];
      tempSIG5 += guess5[i];
    }
    if(ageSimp[i] ===3){
      tempAIG1 += guess1[i];
      tempAIG2 += guess2[i];
      tempAIG3 += guess3[i];
      tempAIG4 += guess4[i];
      tempAIG5 += guess5[i];
    }
    if(ageSimp[i] ===4){
      tempGIG1 += guess1[i];
      tempGIG2 += guess2[i];
      tempGIG3 += guess3[i];
      tempGIG4 += guess4[i];
      tempGIG5 += guess5[i];
    }
    if(sexSimp[i] ===1){
      tempManG1 += guess1[i];
      tempManG2 += guess2[i];
      tempManG3 += guess3[i];
      tempManG4 += guess4[i];
      tempManG5 += guess5[i];
    }
    if(sexSimp[i] ===2){
      tempWomanG1 += guess1[i];
      tempWomanG2 += guess2[i];
      tempWomanG3 += guess3[i];
      tempWomanG4 += guess4[i];
      tempWomanG5 += guess5[i];
    }
    if(sexSimp[i] ===3){
      tempOtherG1 += guess1[i];
      tempOtherG2 += guess2[i];
      tempOtherG3 += guess3[i];
      tempOtherG4 += guess4[i];
      tempOtherG5 += guess5[i];
    }
    if(mindSimp[i] ===1){
      tempArtisticG1 += guess1[i];
      tempArtisticG2 += guess2[i];
      tempArtisticG3 += guess3[i];
      tempArtisticG4 += guess4[i];
      tempArtisticG5 += guess5[i];
    }
    if(mindSimp[i] ===2){
      tempScientificG1 += guess1[i];
      tempScientificG2 += guess2[i];
      tempScientificG3 += guess3[i];
      tempScientificG4 += guess4[i];
      tempScientificG5 += guess5[i];
    }





    tempAvEuropeG1 = tempEuropeG1/EuropePeople
    tempAvEuropeG2 = tempEuropeG2/EuropePeople
    tempAvEuropeG3 = tempEuropeG3/EuropePeople
    tempAvEuropeG4 = tempEuropeG4/EuropePeople
    tempAvEuropeG5 = tempEuropeG5/EuropePeople

    tempAvNAmericaG1 = tempNAmericaG1/NAmericaPeople
    tempAvNAmericaG2 = tempNAmericaG2/NAmericaPeople
    tempAvNAmericaG3 = tempNAmericaG3/NAmericaPeople
    tempAvNAmericaG4 = tempNAmericaG4/NAmericaPeople
    tempAvNAmericaG5 = tempNAmericaG5/NAmericaPeople

    tempAvSAmericaG1 = tempSAmericaG1/SAmericaPeople
    tempAvSAmericaG2 = tempSAmericaG2/SAmericaPeople
    tempAvSAmericaG3 = tempSAmericaG3/SAmericaPeople
    tempAvSAmericaG4 = tempSAmericaG4/SAmericaPeople
    tempAvSAmericaG5 = tempSAmericaG5/SAmericaPeople

    tempAvAsiaG1 = tempAsiaG1/AsiaPeople
    tempAvAsiaG2 = tempAsiaG2/AsiaPeople
    tempAvAsiaG3 = tempAsiaG3/AsiaPeople
    tempAvAsiaG4 = tempAsiaG4/AsiaPeople
    tempAvAsiaG5 = tempAsiaG5/AsiaPeople

    tempAvAfricaG1 = tempAfricaG1/AfricaPeople
    tempAvAfricaG2 = tempAfricaG2/AfricaPeople
    tempAvAfricaG3 = tempAfricaG3/AfricaPeople
    tempAvAfricaG4 = tempAfricaG4/AfricaPeople
    tempAvAfricaG5 = tempAfricaG5/AfricaPeople

    tempAvAustraliaG1 = tempAustraliaG1/AustraliaPeople
    tempAvAustraliaG2 = tempAustraliaG2/AustraliaPeople
    tempAvAustraliaG3 = tempAustraliaG3/AustraliaPeople
    tempAvAustraliaG4 = tempAustraliaG4/AustraliaPeople
    tempAvAustraliaG5 = tempAustraliaG5/AustraliaPeople

    tempAvOG1 = tempOG1/OPeople
    tempAvOG2 = tempOG2/OPeople
    tempAvOG3 = tempOG3/OPeople
    tempAvOG4 = tempOG4/OPeople
    tempAvOG5 = tempOG5/OPeople

    tempAvSIG1 = tempSIG1/SIPeople
    tempAvSIG2 = tempSIG2/SIPeople
    tempAvSIG3 = tempSIG3/SIPeople
    tempAvSIG4 = tempSIG4/SIPeople
    tempAvSIG5 = tempSIG5/SIPeople

    tempAvAIG1 = tempAIG1/AIPeople
    tempAvAIG2 = tempAIG2/AIPeople
    tempAvAIG3 = tempAIG3/AIPeople
    tempAvAIG4 = tempAIG4/AIPeople
    tempAvAIG5 = tempAIG5/AIPeople

    tempAvGIG1 = tempGIG1/GIPeople
    tempAvGIG2 = tempGIG2/GIPeople
    tempAvGIG3 = tempGIG3/GIPeople
    tempAvGIG4 = tempGIG4/GIPeople
    tempAvGIG5 = tempGIG5/GIPeople

    tempAvManG1 = tempManG1/ManPeople
    tempAvManG2 = tempManG2/ManPeople
    tempAvManG3 = tempManG3/ManPeople
    tempAvManG4 = tempManG4/ManPeople
    tempAvManG5 = tempManG5/ManPeople

    tempAvWomanG1 = tempWomanG1/WomanPeople
    tempAvWomanG2 = tempWomanG2/WomanPeople
    tempAvWomanG3 = tempWomanG3/WomanPeople
    tempAvWomanG4 = tempWomanG4/WomanPeople
    tempAvWomanG5 = tempWomanG5/WomanPeople

    tempAvOtherG1 = tempOtherG1/OtherPeople
    tempAvOtherG2 = tempOtherG2/OtherPeople
    tempAvOtherG3 = tempOtherG3/OtherPeople
    tempAvOtherG4 = tempOtherG4/OtherPeople
    tempAvOtherG5 = tempOtherG5/OtherPeople

    tempAvArtisticG1 = tempArtisticG1/ArtisticPeople
    tempAvArtisticG2 = tempArtisticG2/ArtisticPeople
    tempAvArtisticG3 = tempArtisticG3/ArtisticPeople
    tempAvArtisticG4 = tempArtisticG4/ArtisticPeople
    tempAvArtisticG5 = tempArtisticG5/ArtisticPeople

    tempAvScientificG1 = tempScientificG1/ScientificPeople
    tempAvScientificG2 = tempScientificG2/ScientificPeople
    tempAvScientificG3 = tempScientificG3/ScientificPeople
    tempAvScientificG4 = tempScientificG4/ScientificPeople
    tempAvScientificG5 = tempScientificG5/ScientificPeople



    avEuropeG1 = (tempAvEuropeG1*300)/realGuess1
    avEuropeG2 = (tempAvEuropeG2*300)/realGuess2
    avEuropeG3 = (tempAvEuropeG3*300)/realGuess3
    avEuropeG4 = (tempAvEuropeG4*300)/realGuess4
    avEuropeG5 = (tempAvEuropeG5*300)/realGuess5

    totEuropeGuess = (avEuropeG1 + avEuropeG2 + avEuropeG3 + avEuropeG4 + avEuropeG5)/5

    avNAmericaG1 = (tempAvNAmericaG1*300)/realGuess1
    avNAmericaG2 = (tempAvNAmericaG2*300)/realGuess2
    avNAmericaG3 = (tempAvNAmericaG3*300)/realGuess3
    avNAmericaG4 = (tempAvNAmericaG4*300)/realGuess4
    avNAmericaG5 = (tempAvNAmericaG5*300)/realGuess5

    totNAmericaGuess = (avNAmericaG1 + avNAmericaG2 + avNAmericaG3 + avNAmericaG4 + avNAmericaG5)/5

    avSAmericaG1 = (tempAvSAmericaG1*300)/realGuess1
    avSAmericaG2 = (tempAvSAmericaG2*300)/realGuess2
    avSAmericaG3 = (tempAvSAmericaG3*300)/realGuess3
    avSAmericaG4 = (tempAvSAmericaG4*300)/realGuess4
    avSAmericaG5 = (tempAvSAmericaG5*300)/realGuess5

    totSAmericaGuess = (avSAmericaG1 + avSAmericaG2 + avSAmericaG3 + avSAmericaG4 + avSAmericaG5)/5

    avAsiaG1 = (tempAvAsiaG1*300)/realGuess1
    avAsiaG2 = (tempAvAsiaG2*300)/realGuess2
    avAsiaG3 = (tempAvAsiaG3*300)/realGuess3
    avAsiaG4 = (tempAvAsiaG4*300)/realGuess4
    avAsiaG5 = (tempAvAsiaG5*300)/realGuess5

    totAsiaGuess = (avAsiaG1 + avAsiaG2 + avAsiaG3 + avAsiaG4 + avAsiaG5)/5

    avAfricaG1 = (tempAvAfricaG1*300)/realGuess1
    avAfricaG2 = (tempAvAfricaG2*300)/realGuess2
    avAfricaG3 = (tempAvAfricaG3*300)/realGuess3
    avAfricaG4 = (tempAvAfricaG4*300)/realGuess4
    avAfricaG5 = (tempAvAfricaG5*300)/realGuess5

    totAfricaGuess = (avAfricaG1 + avAfricaG2 + avAfricaG3 + avAfricaG4 + avAfricaG5)/5

    avAustraliaG1 = (tempAvAustraliaG1*300)/realGuess1
    avAustraliaG2 = (tempAvAustraliaG2*300)/realGuess2
    avAustraliaG3 = (tempAvAustraliaG3*300)/realGuess3
    avAustraliaG4 = (tempAvAustraliaG4*300)/realGuess4
    avAustraliaG5 = (tempAvAustraliaG5*300)/realGuess5

    totAustraliaGuess = (avAustraliaG1 + avAustraliaG2 + avAustraliaG3 + avAustraliaG4 + avAustraliaG5)/5

    avOG1 = (tempAvOG1*300)/realGuess1
    avOG2 = (tempAvOG2*300)/realGuess2
    avOG3 = (tempAvOG3*300)/realGuess3
    avOG4 = (tempAvOG4*300)/realGuess4
    avOG5 = (tempAvOG5*300)/realGuess5

    totOGuess = (avOG1 + avOG2 + avOG3 + avOG4 + avOG5)/5


    avSIG1 = (tempAvSIG1*300)/realGuess1
    avSIG2 = (tempAvSIG2*300)/realGuess2
    avSIG3 = (tempAvSIG3*300)/realGuess3
    avSIG4 = (tempAvSIG4*300)/realGuess4
    avSIG5 = (tempAvSIG5*300)/realGuess5

    totSIGuess = (avSIG1 + avSIG2 + avSIG3 + avSIG4 + avSIG5)/5

    avAIG1 = (tempAvAIG1*300)/realGuess1
    avAIG2 = (tempAvAIG2*300)/realGuess2
    avAIG3 = (tempAvAIG3*300)/realGuess3
    avAIG4 = (tempAvAIG4*300)/realGuess4
    avAIG5 = (tempAvAIG5*300)/realGuess5

    totAIGuess = (avAIG1 + avAIG2 + avAIG3 + avAIG4 + avAIG5)/5


    avGIG1 = (tempAvGIG1*300)/realGuess1
    avGIG2 = (tempAvGIG2*300)/realGuess2
    avGIG3 = (tempAvGIG3*300)/realGuess3
    avGIG4 = (tempAvGIG4*300)/realGuess4
    avGIG5 = (tempAvGIG5*300)/realGuess5

    totGIGuess = (avGIG1 + avGIG2 + avGIG3 + avGIG4 + avGIG5)/5

    avManG1 = (tempAvManG1*300)/realGuess1
    avManG2 = (tempAvManG2*300)/realGuess2
    avManG3 = (tempAvManG3*300)/realGuess3
    avManG4 = (tempAvManG4*300)/realGuess4
    avManG5 = (tempAvManG5*300)/realGuess5

    totManGuess = (avManG1 + avManG2 + avManG3 + avManG4 + avManG5)/5


    avWomanG1 = (tempAvWomanG1*300)/realGuess1
    avWomanG2 = (tempAvWomanG2*300)/realGuess2
    avWomanG3 = (tempAvWomanG3*300)/realGuess3
    avWomanG4 = (tempAvWomanG4*300)/realGuess4
    avWomanG5 = (tempAvWomanG5*300)/realGuess5

    totWomanGuess = (avWomanG1 + avWomanG2 + avWomanG3 + avWomanG4 + avWomanG5)/5


    avOtherG1 = (tempAvOtherG1*300)/realGuess1
    avOtherG2 = (tempAvOtherG2*300)/realGuess2
    avOtherG3 = (tempAvOtherG3*300)/realGuess3
    avOtherG4 = (tempAvOtherG4*300)/realGuess4
    avOtherG5 = (tempAvOtherG5*300)/realGuess5

    totOtherGuess = (avOtherG1 + avOtherG2 + avOtherG3 + avOtherG4 + avOtherG5)/5

    avArtisticG1 = (tempAvArtisticG1*300)/realGuess1
    avArtisticG2 = (tempAvArtisticG2*300)/realGuess2
    avArtisticG3 = (tempAvArtisticG3*300)/realGuess3
    avArtisticG4 = (tempAvArtisticG4*300)/realGuess4
    avArtisticG5 = (tempAvArtisticG5*300)/realGuess5

    totArtisticGuess = (avArtisticG1 + avArtisticG2 + avArtisticG3 + avArtisticG4 + avArtisticG5)/5

    avScientificG1 = (tempAvScientificG1*300)/realGuess1
    avScientificG2 = (tempAvScientificG2*300)/realGuess2
    avScientificG3 = (tempAvScientificG3*300)/realGuess3
    avScientificG4 = (tempAvScientificG4*300)/realGuess4
    avScientificG5 = (tempAvScientificG5*300)/realGuess5

    totScientificGuess = (avScientificG1 + avScientificG2 + avScientificG3 + avScientificG4 + avScientificG5)/5


  }



}


function draw(){


  if(colorRect ===4){
    colorRect= 1
  }

  background(0);



  tempPrintEurope = goalPrintEurope - prevPrintEurope
  tempPrintNAmerica = goalPrintNAmerica - prevPrintNAmerica
  tempPrintSAmerica = goalPrintSAmerica - prevPrintSAmerica
  tempPrintAsia = goalPrintAsia - prevPrintAsia
  tempPrintAfrica = goalPrintAfrica - prevPrintAfrica
  tempPrintAustralia = goalPrintAustralia - prevPrintAustralia
  tempPrintO = goalPrintO - prevPrintO
  tempPrintSI = goalPrintSI - prevPrintSI
  tempPrintAI = goalPrintAI - prevPrintAI
  tempPrintGI = goalPrintGI - prevPrintGI
  tempPrintMan = goalPrintMan - prevPrintMan
  tempPrintWoman = goalPrintWoman - prevPrintWoman
  tempPrintOther = goalPrintOther - prevPrintOther
  tempPrintArtistic = goalPrintArtistic - prevPrintArtistic
  tempPrintScientific = goalPrintScientific - prevPrintScientific
  tempPrintG1 = goalPrintG1 - prevPrintG1
  tempPrintG2 = goalPrintG2 - prevPrintG2
  tempPrintG3 = goalPrintG3 - prevPrintG3
  tempPrintG4 = goalPrintG4 - prevPrintG4
  tempPrintG5 = goalPrintG5 - prevPrintG5
  tempPrintTotal = goalPrintTotal - prevPrintTotal

  if(count<1){
    count = count+ 0.05
    printEurope = prevPrintEurope + (tempPrintEurope*count)
    printNAmerica = prevPrintNAmerica + (tempPrintNAmerica*count)
    printSAmerica = prevPrintSAmerica + (tempPrintSAmerica*count)
    printAsia = prevPrintAsia + (tempPrintAsia*count)
    printAfrica = prevPrintAfrica + (tempPrintAfrica*count)
    printAustralia = prevPrintAustralia + (tempPrintAustralia*count)
    printO = prevPrintO + (tempPrintO*count)
    printSI = prevPrintSI + (tempPrintSI*count)
    printAI = prevPrintAI + (tempPrintAI*count)
    printGI = prevPrintGI + (tempPrintGI*count)
    printMan = prevPrintMan + (tempPrintMan*count)
    printWoman = prevPrintWoman + (tempPrintWoman*count)
    printOther = prevPrintOther + (tempPrintOther*count)
    printArtistic = prevPrintArtistic + (tempPrintArtistic*count)
    printScientific = prevPrintScientific + (tempPrintScientific*count)
    printG1 = prevPrintG1 + (tempPrintG1*count)
    printG2 = prevPrintG2 + (tempPrintG2*count)
    printG3 = prevPrintG3 + (tempPrintG3*count)
    printG4 = prevPrintG4 + (tempPrintG4*count)
    printG5 = prevPrintG5 + (tempPrintG5*count)
    printTotal = prevPrintTotal + (tempPrintTotal*count)
  }


  modWidth = ((window.innerWidth/2)-270)
  modHeight = ((window.innerHeight/2)-350)
  translate(modWidth,modHeight);

  //Tesxts
  push()
  translate(0,10)
  textAlign(RIGHT)
  textSize(13);
  textFont("Verdana");
  fill(255)
  text("RESIDENCE",40,70)
  text("AGE",40,210)
  text("GENDER",40,310)
  text("MIND",40,390)

fill(240)
/*if (colorRect ===1){
    fill(242,103,33)
  }
  if (colorRect ===2){
    fill(255,206,0)
  }
  if (colorRect === 3){
    fill(163,255,0)
  }
  if (colorRect === 4){
    fill(0,212,207)
  }*/

  text("Total",60,490)

  text("Guess1",60,530)
  text("Guess2",60,550)
  text("Guess3",60,570)
  text("Guess4",60,590)
  text("Guess5",60,610)

  /*//translate(0,-2)
  textSize(12);
  if (colorRect ===1){
    fill(131,21,24)
  }
  if (colorRect ===2){
    fill(111,101,0)
  }
  if (colorRect ===3){
    fill(9,0,103)
  }
  if (colorRect ===3){
    fill(0,103,12)
  }*/
  text("Europe",60,90)
  text("North America",60,110)
  text("South America",60,130)
  text("Asia",60,150)
  text("Africa",60,170)
  text("Australia",60,190)

  /*if (colorRect ===1){
    fill(160,28,32)
  }
  if (colorRect ===2){
    fill(137,124,0)
  }
  if (colorRect ===3){
    fill(0,29,135)
  }
  if (colorRect ===3){
    fill(29,156,0)
  }*/


  text("0-20",60,230)
  text("21-40",60,250)
  text("41-60",60,270)
  text("60+",60,290)

  /*if (colorRect ===1){
    fill(189,52,38)
  }
  if (colorRect ===2){
    fill(180,154,0)
  }
  if (colorRect ===3){
    fill(64,191,0)
  }
  if (colorRect ===4){
    fill(64,191,0)
  }*/

  text("Man",60,330)
  text("Woman",60,350)
  text("Other",60,370)

  /*if (colorRect ===1){
    fill(217,69,38)
  }
  if (colorRect ===2){
    fill(214,184,0)
  }

  if (colorRect ===3){
    fill(109,223,0)
  }
  if (colorRect ===4){
    fill(109,223,0)
  }*/

  text("Scientific",60,410)
  text("Artistic",60,430)
  pop()
  fill(255,50)
  rect(buttonX,70,thick,thick);
  rect(buttonX,210,thick,thick);
  rect(buttonX,310,thick,thick);
  rect(buttonX,390,thick,thick);

  for(i = 0; i <=15; i++){
    fill(255,5+5*i)
    rect(buttonX+30 + (i*20),85 ,8,542)
  }
  for(i = 30; i >=16; i--){
    fill(255,155 -5*i)
    rect(buttonX+30 + (i*20),85 ,8,542)
  }
  fill(255,50)
  rect(buttonX+30 + 300,85 ,8,542)




  /*rect(buttonX + 30,90 , 30,532)
  rect(buttonX + 90,90 , 30,532)
  rect(buttonX + 150,90 , 30,532)
  rect(buttonX + 210,90 , 30,532)
  rect(buttonX + 270,90 , 30,532)*/







  if (colorRect ===1){
    fill(131,21,24)
  }
  if (colorRect ===2){
    fill(111,101,0)
  }
  if(colorRect ===3){
    fill(0, 103, 12)
  }

  rect(100,90,printEurope,thick);
  rect(100,110,printNAmerica,thick);
  rect(100,130,printSAmerica,thick);
  rect(100,150,printAsia,thick);
  rect(100,170,printAfrica,thick);
  rect(100,190,printAustralia,thick);


  rect(buttonX,90,thick,thick);
  rect(buttonX,110,thick,thick);
  rect(buttonX,130,thick,thick);
  rect(buttonX,150,thick,thick);
  rect(buttonX,170,thick,thick);
  rect(buttonX,190,thick,thick);




  if (colorRect ===1){
    fill(160,28,32)
  }
  if (colorRect ===2){
    fill(137,124,0)
  }
  if (colorRect ===3){
    fill(29,156,0)
  }

  rect(100,230,printO,thick);
  rect(100,250,printSI,thick);
  rect(100,270,printAI,thick);
  rect(100,290,printGI,thick);

  rect(buttonX,230,thick,thick);
  rect(buttonX,250,thick,thick);
  rect(buttonX,270,thick,thick);
  rect(buttonX,290,thick,thick);




  if (colorRect ===1){
    fill(189,52,38)
  }
  if (colorRect ===2){
    fill(180,154,0)
  }
  if (colorRect ===3){
    fill(64,191,0)
  }

  rect(100,330,printMan,thick);
  rect(100,350,printWoman,thick);
  rect(100,370,printOther,thick);

  rect(buttonX,330,thick,thick);
  rect(buttonX,350,thick,thick);
  rect(buttonX,370,thick,thick);



  if (colorRect ===1){
    fill(217,69,38)
  }
  if (colorRect ===2){
    fill(214,184,0)
  }
  if (colorRect ===3){
    fill(109,223,0)
  }

  rect(100,410,printArtistic,thick);
  rect(100,430,printScientific,thick);

  rect(buttonX,410,thick,thick);
  rect(buttonX,430,thick,thick);




  if (colorRect ===1){
    fill(242,103,33)
  }
  if (colorRect ===2){
    fill(255,206,0)
  }
  if (colorRect ===3){
    fill(64,191,0)
  }

  rect(100,490,printTotal,thick);

  rect(buttonX,490,thick,thick);




  rect(100,530,printG1,thick);
  rect(100,550,printG2,thick);
  rect(100,570,printG3,thick);
  rect(100,590,printG4,thick);
  rect(100,610,printG5,thick);


  rect(buttonX,530,thick,thick);
  rect(buttonX,550,thick,thick);
  rect(buttonX,570,thick,thick);
  rect(buttonX,590,thick,thick);
  rect(buttonX,610,thick,thick);

  fill(0,100)

  rect(100,90+thick,printEurope,GInd);
  rect(100,110+thick,printNAmerica,GInd);
  rect(100,130+thick,printSAmerica,GInd);
  rect(100,150+thick,printAsia,GInd);
  rect(100,170+thick,printAfrica,GInd);
  rect(100,190+thick,printAustralia,GInd);

  rect(100,230+thick,printO,GInd);
  rect(100,250+thick,printSI,GInd);
  rect(100,270+thick,printAI,GInd);
  rect(100,290+thick,printGI,GInd);

  rect(100,330+thick,printMan,GInd);
  rect(100,350+thick,printWoman,GInd);
  rect(100,370+thick,printOther,GInd);

  rect(100,410+thick,printArtistic,GInd);
  rect(100,430+thick,printScientific,GInd);

  rect(100,490+thick,printTotal,GInd);

  rect(100,530+thick,printG1,GInd);
  rect(100,550+thick,printG2,GInd);
  rect(100,570+thick,printG3,GInd);
  rect(100,590+thick,printG4,GInd);
  rect(100,610+thick,printG5,GInd);


  fill(0,30)

  rect(100,90+thick+GInd,printEurope,GInd);
  rect(100,110+thick+GInd,printNAmerica,GInd);
  rect(100,130+thick+GInd,printSAmerica,GInd);
  rect(100,150+thick+GInd,printAsia,GInd);
  rect(100,170+thick+GInd,printAfrica,GInd);
  rect(100,190+thick+GInd,printAustralia,GInd);

  rect(100,230+thick+GInd,printO,GInd);
  rect(100,250+thick+GInd,printSI,GInd);
  rect(100,270+thick+GInd,printAI,GInd);
  rect(100,290+thick+GInd,printGI,GInd);

  rect(100,330+thick+GInd,printMan,GInd);
  rect(100,350+thick+GInd,printWoman,GInd);
  rect(100,370+thick+GInd,printOther,GInd);

  rect(100,410+thick+GInd,printArtistic,GInd);
  rect(100,430+thick+GInd,printScientific,GInd);

  rect(100,490+thick+GInd,printTotal,GInd);

  rect(100,530+thick+GInd,printG1,GInd);
  rect(100,550+thick+GInd,printG2,GInd);
  rect(100,570+thick+GInd,printG3,GInd);
  rect(100,590+thick+GInd,printG4,GInd);
  rect(100,610+thick+GInd,printG5,GInd);






  if (colorRect ===1){
    fill(131,21,24)
  }
  if (colorRect ===2){
    fill(111,101,0)
  }
  if (colorRect ===3){
    fill(0,103,12)
  }



  rect(buttonX, 630, thick, 3)

  if (colorRect ===1){
    fill(160,28,32)
  }
  if (colorRect ===2){
    fill(137,124,0)
  }
  if (colorRect ===3){
    fill(29,156,0)
  }


  rect(buttonX, 633, thick, 3)

  if (colorRect ===1){
    fill(189,52,38)
  }
  if (colorRect ===2){
    fill(180,154,0)
  }
  if (colorRect ===3){
    fill(64,191,0)
  }


  rect(buttonX, 636, thick, 3)

  if (colorRect ===1){
    fill(217,69,38)
  }
  if (colorRect ===2){
    fill(214,184,0)
  }

  if (colorRect ===3){
    fill(109,223,0)
  }


  rect(buttonX, 639, thick, 3)


  fill(255)

  rect (buttonX, 650, thick, thick)

  fill(0)
  textStyle(BOLD);
  text("?",buttonX+2,660)
  textStyle(NORMAL)

  //////////Buttons/////////////



  if(buttonCounter === 90){////europe
    goalPrintG1 = avEuropeG1;
    goalPrintG2 = avEuropeG2;
    goalPrintG3 = avEuropeG3;
    goalPrintG4 = avEuropeG4;
    goalPrintG5 = avEuropeG5;
    goalPrintTotal = totEuropeGuess
  }



  else if(buttonCounter === 110){////namerica
    goalPrintG1 = avNAmericaG1;
    goalPrintG2 = avNAmericaG2;
    goalPrintG3 = avNAmericaG3;
    goalPrintG4 = avNAmericaG4;
    goalPrintG5 = avNAmericaG5;
    goalPrintTotal = totNAmericaGuess
  }


  else if(buttonCounter === 130){////samerica
    goalPrintG1 = avSAmericaG1;
    goalPrintG2 = avSAmericaG2;
    goalPrintG3 = avSAmericaG3;
    goalPrintG4 = avSAmericaG4;
    goalPrintG5 = avSAmericaG5;
    goalPrintTotal = totSAmericaGuess
  }



  else if(buttonCounter === 150){////asia
    goalPrintG1 = avAsiaG1;
    goalPrintG2 = avAsiaG2;
    goalPrintG3 = avAsiaG3;
    goalPrintG4 = avAsiaG4;
    goalPrintG5 = avAsiaG5;
    goalPrintTotal = totAsiaGuess
  }



  else if(buttonCounter === 170){////africa
    goalPrintG1 = avAfricaG1;
    goalPrintG2 = avAfricaG2;
    goalPrintG3 = avAfricaG3;
    goalPrintG4 = avAfricaG4;
    goalPrintG5 = avAfricaG5;
    goalPrintTotal = totAfricaGuess
  }



  else if(buttonCounter === 190){////australia
    goalPrintG1 = avAustraliaG1;
    goalPrintG2 = avAustraliaG2;
    goalPrintG3 = avAustraliaG3;
    goalPrintG4 = avAustraliaG4;
    goalPrintG5 = avAustraliaG5;
    goalPrintTotal = totAustraliaGuess
  }







  else if(buttonCounter === 230){////0-20
    goalPrintG1 = avOG1;
    goalPrintG2 = avOG2;
    goalPrintG3 = avOG3;
    goalPrintG4 = avOG4;
    goalPrintG5 = avOG5;
    goalPrintTotal = totOGuess
  }


  else if(buttonCounter === 250){////21-40
    goalPrintG1 = avSIG1;
    goalPrintG2 = avSIG2;
    goalPrintG3 = avSIG3;
    goalPrintG4 = avSIG4;
    goalPrintG5 = avSIG5;
    goalPrintTotal = totSIGuess
  }



  else if(buttonCounter === 270){////41-60
    goalPrintG1 = avAIG1;
    goalPrintG2 = avAIG2;
    goalPrintG3 = avAIG3;
    goalPrintG4 = avAIG4;
    goalPrintG5 = avAIG5;
    goalPrintTotal = totAIGuess
  }



  else if(buttonCounter === 290){////61+
    goalPrintG1 = avGIG1;
    goalPrintG2 = avGIG2;
    goalPrintG3 = avGIG3;
    goalPrintG4 = avGIG4;
    goalPrintG5 = avGIG5;
    goalPrintTotal = totGIGuess
  }

  else if(buttonCounter === 330){////Man
    goalPrintG1 = avManG1;
    goalPrintG2 = avManG2;
    goalPrintG3 = avManG3;
    goalPrintG4 = avManG4;
    goalPrintG5 = avManG5;
    goalPrintTotal = totManGuess
  }



  else if(buttonCounter === 350){////Woman
    goalPrintG1 = avWomanG1;
    goalPrintG2 = avWomanG2;
    goalPrintG3 = avWomanG3;
    goalPrintG4 = avWomanG4;
    goalPrintG5 = avWomanG5;
    goalPrintTotal = totWomanGuess
  }


  else if(buttonCounter === 370){////Other
    goalPrintG1 = avOtherG1;
    goalPrintG2 = avOtherG2;
    goalPrintG3 = avOtherG3;
    goalPrintG4 = avOtherG4;
    goalPrintG5 = avOtherG5;
    goalPrintTotal = totOtherGuess
  }



  else if(buttonCounter === 410){////Scientific
    goalPrintG1 = avScientificG1;
    goalPrintG2 = avScientificG2;
    goalPrintG3 = avScientificG3;
    goalPrintG4 = avScientificG4;
    goalPrintG5 = avScientificG5;
    goalPrintTotal = totScientificGuess
  }


  else if(buttonCounter === 430){////Artistic
    goalPrintG1 = avArtisticG1;
    goalPrintG2 = avArtisticG2;
    goalPrintG3 = avArtisticG3;
    goalPrintG4 = avArtisticG4;
    goalPrintG5 = avArtisticG5;
    goalPrintTotal = totArtisticGuess
  }


  else if (buttonCounter === 530){///GuessG1
    goalPrintEurope = avEuropeG1
    goalPrintNAmerica = avNAmericaG1
    goalPrintSAmerica = avSAmericaG1
    goalPrintAsia = avAsiaG1
    goalPrintAfrica = avAfricaG1
    goalPrintAustralia = avAustraliaG1
    goalPrintO = avOG1
    goalPrintSI = avSIG1
    goalPrintAI = avAIG1
    goalPrintGI = avGIG1
    goalPrintMan = avManG1
    goalPrintWoman = avWomanG1
    goalPrintOther = avOtherG1
    goalPrintArtistic = avArtisticG1
    goalPrintScientific = avScientificG1
  }

  else if (buttonCounter === 550){///GuessG2
    goalPrintEurope = avEuropeG2
    goalPrintNAmerica = avNAmericaG2
    goalPrintSAmerica = avSAmericaG2
    goalPrintAsia = avAsiaG2
    goalPrintAfrica = avAfricaG2
    goalPrintAustralia = avAustraliaG2
    goalPrintO = avOG2
    goalPrintSI = avSIG2
    goalPrintAI = avAIG2
    goalPrintGI = avGIG2
    goalPrintMan = avManG2
    goalPrintWoman = avWomanG2
    goalPrintOther = avOtherG2
    goalPrintArtistic = avArtisticG2
    goalPrintScientific = avScientificG2
  }
  else if (buttonCounter === 570){///GuessG3
    goalPrintEurope = avEuropeG3
    goalPrintNAmerica = avNAmericaG3
    goalPrintSAmerica = avSAmericaG3
    goalPrintAsia = avAsiaG3
    goalPrintAfrica = avAfricaG3
    goalPrintAustralia = avAustraliaG3
    goalPrintO = avOG3
    goalPrintSI = avSIG3
    goalPrintAI = avAIG3
    goalPrintGI = avGIG3
    goalPrintMan = avManG3
    goalPrintWoman = avWomanG3
    goalPrintOther = avOtherG3
    goalPrintArtistic = avArtisticG3
    goalPrintScientific = avScientificG3
  }
  else if (buttonCounter === 590){///GuessG4
    goalPrintEurope = avEuropeG4
    goalPrintNAmerica = avNAmericaG4
    goalPrintSAmerica = avSAmericaG4
    goalPrintAsia = avAsiaG4
    goalPrintAfrica = avAfricaG4
    goalPrintAustralia = avAustraliaG4
    goalPrintO = avOG4
    goalPrintSI = avSIG4
    goalPrintAI = avAIG4
    goalPrintGI = avGIG4
    goalPrintMan = avManG4
    goalPrintWoman = avWomanG4
    goalPrintOther = avOtherG4
    goalPrintArtistic = avArtisticG4
    goalPrintScientific = avScientificG4
  }

  else if (buttonCounter === 610){///GuessG5
    goalPrintEurope = avEuropeG5
    goalPrintNAmerica = avNAmericaG5
    goalPrintSAmerica = avSAmericaG5
    goalPrintAsia = avAsiaG5
    goalPrintAfrica = avAfricaG5
    goalPrintAustralia = avAustraliaG5
    goalPrintO = avOG5
    goalPrintSI = avSIG5
    goalPrintAI = avAIG5
    goalPrintGI = avGIG5
    goalPrintMan = avManG5
    goalPrintWoman = avWomanG5
    goalPrintOther = avOtherG5
    goalPrintArtistic = avArtisticG5
    goalPrintScientific = avScientificG5
  }

  else if (buttonCounter === 490){
    goalPrintEurope = totEuropeGuess
    goalPrintNAmerica = totNAmericaGuess
    goalPrintSAmerica = totSAmericaGuess
    goalPrintAsia = totAsiaGuess
    goalPrintAfrica = totAfricaGuess
    goalPrintAustralia = totAustraliaGuess
    goalPrintO = totOGuess
    goalPrintSI = totSIGuess
    goalPrintAI = totAIGuess
    goalPrintGI = totGIGuess
    goalPrintMan = totManGuess
    goalPrintWoman = totWomanGuess
    goalPrintOther = totOtherGuess
    goalPrintArtistic = totArtisticGuess
    goalPrintScientific = totScientificGuess
  }




  else if(buttonCounter === 70){////CONT
    goalPrintEurope = totEuropeGuess;
    goalPrintNAmerica = totNAmericaGuess;
    goalPrintSAmerica = totSAmericaGuess;
    goalPrintAsia = totAsiaGuess;
    goalPrintAfrica = totAfricaGuess;
    goalPrintAustralia = totAustraliaGuess;
  }


  else if(buttonCounter === 210){////AGE
    goalPrintO = totOGuess;
    goalPrintSI = totSIGuess;
    goalPrintAI = totAIGuess;
    goalPrintGI = totGIGuess;

  }


  else if(buttonCounter === 310){////SEX
    goalPrintMan = totManGuess;
    goalPrintWoman = totWomanGuess;
    goalPrintOther = totOtherGuess;

  }




  else if(buttonCounter === 390){////MIND
    goalPrintArtistic = totArtisticGuess;
    goalPrintScientific = totScientificGuess;


  }

  else{

    goalPrintEurope = 0
    goalPrintNAmerica = 0
    goalPrintSAmerica = 0
    goalPrintAsia = 0
    goalPrintAfrica = 0
    goalPrintAustralia = 0
    goalPrintO = 0
    goalPrintSI = 0
    goalPrintAI = 0
    goalPrintGI = 0
    goalPrintMan = 0
    goalPrintWoman = 0
    goalPrintOther = 0
    goalPrintArtistic = 0
    goalPrintScientific = 0
    goalPrintG1 = 0;
    goalPrintG2 = 0;
    goalPrintG3 = 0;
    goalPrintG4 = 0;
    goalPrintG5 = 0;
    goalPrintTotal = 0;
  }

  textSize(8)
  fill(255,100)
  triangle(buttonX+334,630,buttonX + 339,635,buttonX +329,635)
  triangle(buttonX+30,630,buttonX + 35,635,buttonX +25,635)
  triangle(buttonX+630,630,buttonX + 635,635,buttonX +625,635)

  fill(255,200)
  text("PERFECT GUESS", buttonX+300, 645)
  text("LOW GUESS", buttonX+30, 645)
  text("HIGH GUESS", buttonX+580, 645)

  stroke(100,10)
  line( buttonX+33,626, buttonX+638,626)
  line( buttonX+32,626, buttonX+32,86)
  line( buttonX+33,86, buttonX+638,86)
  stroke(50,30)
  line( buttonX+32,627, buttonX+638,627)
  line( buttonX+31,627, buttonX+31,85)
  line( buttonX+32,85, buttonX+638,85)
  stroke(100,100)
  line( buttonX+31,628, buttonX+638,628)
  line( buttonX+30,628, buttonX+30,84)
  line( buttonX+31,84, buttonX+638,84)
  stroke(255,100)
  line( buttonX+638,84, buttonX+638,628)
  stroke(0,0)
  fill(0)
  rect(buttonX+638,40,1000,600)

  noStroke()



  if (infoButton === 1){
    push()
    translate(400,0)
    fill(0,200)
    rect(-2000,-1000,20000, 20000)
    fill(255)
    textSize(15)
    textStyle(BOLD)
    textAlign(CENTER)
    text("Instructions:", buttonX-200,140)
    textStyle(NORMAL)
    textAlign(LEFT)
    textSize(11)

    text("It's really Simple, each box you see is a button.", buttonX-300, 180)
    text("CATEGORIES, click on them to see", buttonX-250,220)
    text("the average of the GUESSES for each OPTION", buttonX-250,235)

    text("These are the OPTIONS, click on them to see", buttonX-250,260)
    text("the average of each of the five GUESSES", buttonX-250,275)
    text("and the total average", buttonX-250,290)

    text("These are the GUESSES, click on them to see", buttonX-250,315)
    text("the average GUESS for each OPTION ", buttonX-250,330)
    text("and the total average", buttonX-250,345)

    text("Click on this button to change color", buttonX-250,370)

    text("Click on this button to come back to this screen", buttonX-250,395)
    fill(150)
    rect(buttonX-270, 210,12,12)

    if (colorRect ===1){
      fill(131,21,24)
    }
    if (colorRect ===2){
      fill(111,101,0)
    }
    if(colorRect ===3){
      fill(0, 103, 12)
    }
    rect(buttonX-270, 250,12,12)

    if (colorRect ===1){
      fill(242,103,33)
    }
    if (colorRect ===2){
      fill(255,206,0)
    }
    if (colorRect ===3){
      fill(64,191,0)
    }
    stroke()
    rect(buttonX-270, 305,12,12)
    noStroke()
    fill(255)
    rect (buttonX -270, 386, thick, thick)

    fill(0)
    textStyle(BOLD);
    text("?",buttonX+2-270,396)
    textStyle(NORMAL)

    textAlign(RIGHT)
    textSize(12)

    if (colorRect ===1){
      fill(131,21,24)
    }
    if (colorRect ===2){
      fill(111,101,0)
    }
    if (colorRect ===3){
      fill(0,103,12)
    }



    rect(buttonX-270, 361, thick, 3)

    if (colorRect ===1){
      fill(160,28,32)
    }
    if (colorRect ===2){
      fill(137,124,0)
    }
    if (colorRect ===3){
      fill(29,156,0)
    }


    rect(buttonX-270, 364, thick, 3)

    if (colorRect ===1){
      fill(189,52,38)
    }
    if (colorRect ===2){
      fill(180,154,0)
    }
    if (colorRect ===3){
      fill(64,191,0)
    }


    rect(buttonX-270, 367, thick, 3)

    if (colorRect ===1){
      fill(217,69,38)
    }
    if (colorRect ===2){
      fill(214,184,0)
    }

    if (colorRect ===3){
      fill(109,223,0)
    }

    rect(buttonX-270, 370, thick, 3)
    pop()
    fill(255)



  }








}



function mouseClicked() {


prevPrintEurope = goalPrintEurope
prevPrintNAmerica = goalPrintNAmerica
prevPrintSAmerica = goalPrintSAmerica
prevPrintAsia = goalPrintAsia
prevPrintAfrica = goalPrintAfrica
prevPrintAustralia = goalPrintAustralia
prevPrintO = goalPrintO
prevPrintSI = goalPrintSI
prevPrintAI = goalPrintAI
prevPrintGI = goalPrintGI
prevPrintMan = goalPrintMan
prevPrintWoman = goalPrintWoman
prevPrintOther = goalPrintOther
prevPrintArtistic = goalPrintArtistic
prevPrintScientific = goalPrintScientific
prevPrintG1 = goalPrintG1
prevPrintG2 = goalPrintG2
prevPrintG3 = goalPrintG3
prevPrintG4 = goalPrintG4
prevPrintG5 = goalPrintG5
prevPrintTotal = goalPrintTotal




  if(mouseX - modWidth >= buttonX && mouseX - modWidth <= buttonX + thick){

    if( mouseY - modHeight >= 70  && mouseY - modHeight <= 70  + thick ){
      buttonCounter = 70

    }
    else if( mouseY - modHeight >= 90  && mouseY - modHeight <= 90  + thick ){
      buttonCounter = 90
    }
    else if( mouseY - modHeight >= 110  && mouseY - modHeight <= 110  + thick ){
      buttonCounter = 110
    }
    else if( mouseY - modHeight >= 130  && mouseY - modHeight <= 130  + thick ){
      buttonCounter = 130
    }
    else if( mouseY - modHeight >= 150  && mouseY - modHeight <= 150  + thick ){
      buttonCounter = 150
    }
    else if( mouseY - modHeight >= 170  && mouseY - modHeight <= 170  + thick ){
      buttonCounter = 170
    }
    else if( mouseY - modHeight >= 190  && mouseY - modHeight <= 190  + thick ){
      buttonCounter = 190
    }
    else if( mouseY - modHeight >= 210  && mouseY - modHeight <= 210  + thick ){
      buttonCounter = 210
    }
    else if( mouseY - modHeight >= 230  && mouseY - modHeight <= 230  + thick ){
      buttonCounter = 230
    }
    else if( mouseY - modHeight >= 250  && mouseY - modHeight <= 250  + thick ){
      buttonCounter = 250
    }
    else if( mouseY - modHeight >= 270  && mouseY - modHeight <= 270  + thick ){
      buttonCounter = 270
    }
    else if( mouseY - modHeight >= 290  && mouseY - modHeight <= 290  + thick ){
      buttonCounter = 290
    }
    else if( mouseY - modHeight >= 310  && mouseY - modHeight <= 310  + thick ){
      buttonCounter = 310
    }
    else if( mouseY - modHeight >= 330  && mouseY - modHeight <= 330  + thick ){
      buttonCounter = 330
    }
    else if( mouseY - modHeight >= 350  && mouseY - modHeight <= 350  + thick ){
      buttonCounter = 350
    }
    else if( mouseY - modHeight >= 370  && mouseY - modHeight <= 370  + thick ){
      buttonCounter = 370
    }
    else if( mouseY - modHeight >= 390  && mouseY - modHeight <= 390  + thick ){
      buttonCounter = 390
    }
    else if( mouseY - modHeight >= 410  && mouseY - modHeight <= 410  + thick ){
      buttonCounter = 410
    }
    else if( mouseY - modHeight >= 430  && mouseY - modHeight <= 430  + thick ){
      buttonCounter = 430
    }
    else if( mouseY - modHeight >= 450  && mouseY - modHeight <= 450  + thick ){
      buttonCounter = 450
    }
    else if( mouseY - modHeight >= 470  && mouseY - modHeight <= 470  + thick ){
      buttonCounter = 470
    }
    else if( mouseY - modHeight >= 490  && mouseY - modHeight <= 490  + thick ){
      buttonCounter = 490
    }
    else if( mouseY - modHeight >= 510  && mouseY - modHeight <= 510  + thick ){
      buttonCounter = 510
    }
    else if( mouseY - modHeight >= 530  && mouseY - modHeight <= 530  + thick ){
      buttonCounter = 530
    }
    else if( mouseY - modHeight >= 550  && mouseY - modHeight <= 550  + thick ){
      buttonCounter = 550
    }
    else if( mouseY - modHeight >= 570  && mouseY - modHeight <= 570  + thick ){
      buttonCounter = 570
    }
    else if( mouseY - modHeight >= 590  && mouseY - modHeight <= 590  + thick ){
      buttonCounter = 590
    }
    else if( mouseY - modHeight >= 610  && mouseY - modHeight <= 610  + thick ){
      buttonCounter = 610
    }
    else if ( mouseY - modHeight >= 630  && mouseY - modHeight <= 630  + thick  ){
      colorRect = colorRect+1
    }


  }
  else {
    buttonCounter= 0;
  }
  if ( mouseY - modHeight >= 650  && mouseY - modHeight <= 650  + thick  ){
    infoButton = 1;
  }
  else{    infoButton = 0;}
  count = 0

  print(avEuropeG1)


  return false


}
