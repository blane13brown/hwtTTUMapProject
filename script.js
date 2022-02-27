let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 33.59235, lng: -101.89105 },
    zoom: 14,
    maxZoom: 17,
    minZoom: 14,
    mapId: "df79e91244d53147",
    mapTypeControl: false,
    fullscreenControl: false
  });

const campusBox = [
    { lat: 33.57805, lng: -101.87064 },
    { lat: 33.57805, lng: -101.90510 },
    { lat: 33.59234, lng: -101.90510 },
    { lat: 33.59234, lng: -101.91114 },
    { lat: 33.60679, lng: -101.91114 },
    { lat: 33.60679, lng: -101.88783 },
    { lat: 33.59234, lng: -101.88784 },
    { lat: 33.59234, lng: -101.87064 },
    { lat: 33.57805, lng: -101.87064 },

  ];

const flightPath = new google.maps.Polyline({
    path: campusBox,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 4,
});

flightPath.setMap(map);

holden = new google.maps.Marker({
    position: {
        lat: 33.585473, 
        lng: -101.873730
    },
    map,
    icon: "Icons/ClassIcon.png",
    title: "Holden Hall",

  });

holden.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(holden.getPosition());
    holden.setIcon("Icons/ClassIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Holden Hall"
    });
    info.open(map, holden);
  });

math = new google.maps.Marker({
    position: {
        lat: 33.58497, 
        lng: -101.87619
    },
    map,
    icon: "Icons/ClassIcon.png",
    title: "Math and Statistics",
  });

math.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(math.getPosition());
    math.setIcon("Icons/ClassIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Math and Statistics"
    });
    info.open(map, math);
  });

maddox = new google.maps.Marker({
    position: {
        lat: 33.585425, 
        lng: -101.875283
    },
    map,
    icon: "Icons/ClassIcon.png",
    title: "Maddox Engineering Research Center",
  });

maddox.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(maddox.getPosition());
    maddox.setIcon("Icons/ClassIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Maddox Engineering Research Center"
    });
    info.open(map, maddox);
  });

WestHall = new google.maps.Marker({
    position: {
        lat: 33.585474176583595, 
        lng: -101.87243995586967
    },
    map,
    icon: "Icons/DormIcon.png",
    title: "West Hall",

  });

WestHall.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(WestHall.getPosition());
    WestHall.setIcon("Icons/DormIconS.png");
    var info = new google.maps.InfoWindow({
        content: "West Hall"
    });
    info.open(map, WestHall);
  });

SneedResidenceHall = new google.maps.Marker({
    position: {
        lat: 33.58556762654373, 
        lng: -101.87140837563032
    },
    map,
    icon: "Icons/DormIcon.png",
    title: "Sneed Residence Hall",

  });

SneedResidenceHall.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(SneedResidenceHall.getPosition());
    SneedResidenceHall.setIcon("Icons/DormIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Sneed Residence Hall"
    });
    info.open(map, SneedResidenceHall);
  });

GordonResidenceHall = new google.maps.Marker({
    position: {
        lat: 33.58655107818289, 
        lng: -101.87212913392472
    },
    map,
    icon: "Icons/DormIcon.png",
    title: "Gordon Residence Hall",

  });

GordonResidenceHall.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(GordonResidenceHall.getPosition());
    GordonResidenceHall.setIcon("Icons/DormIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Gordon Residence Hall"
    });
    info.open(map, GordonResidenceHall);
  });

BledsoeResidenceHall = new google.maps.Marker({
    position: {
        lat: 33.58639072767941, 
        lng: -101.87146788181539
    },
    map,
    icon: "Icons/DormIcon.png",
    title: "Bledsoe Residence Hall",

  });

BledsoeResidenceHall.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(BledsoeResidenceHall.getPosition());
    BledsoeResidenceHall.setIcon("Icons/DormIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Bledsoe Residence Hall"
    });
    info.open(map, BledsoeResidenceHall);
  });

CivilEngineering = new google.maps.Marker({
    position: {
        lat: 33.58677031543154, 
        lng: -101.87410797995847
    },
    map,
    icon: "Icons/ClassIcon.png",
    title: "Civil Engineering",

  });

CivilEngineering.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(CivilEngineering.getPosition());
    CivilEngineering.setIcon("Icons/ClassIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Civil Engineering"
    });
    info.open(map, CivilEngineering);
  });

EngineeringTechnologyLab = new google.maps.Marker({
    position: {
        lat: 40.19823199218568,
        lng: -76.7445660087979
    },
    map,
    icon: "Icons/ClassIcon.png",
    title: "Engineering & Technology Lab",

  });

EngineeringTechnologyLab.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(EngineeringTechnologyLab.getPosition());
    EngineeringTechnologyLab.setIcon("Icons/ClassIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Engineering & Technology Lab"
    });
    info.open(map, EngineeringTechnologyLab);
  });

BobHerd = new google.maps.Marker({
    position: {
        lat: 33.58782565016329, 
        lng: -101.87409037732208
    },
    map,
    icon: "Icons/ClassIcon.png",
    title: "Bob L. Herd Department of Petroleum Engineering",

  });

BobHerd.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(BobHerd.getPosition());
    BobHerd.setIcon("Icons/ClassIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Bob L. Herd Department of Petroleum Engineering"
    });
    info.open(map, BobHerd);
  });

CreativeMovementStudio = new google.maps.Marker({
    position: {
        lat: 33.588272887493105, 
        lng: -101.87266087811498
    },
    map,
    icon: "Icons/ClassIcon.png",
    title: "Creative Movement Studio",

  });

CreativeMovementStudio.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(CreativeMovementStudio.getPosition());
    CreativeMovementStudio.setIcon("Icons/ClassIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Creative Movement Studio"
    });
    info.open(map, CreativeMovementStudio);
  });

Sports = new google.maps.Marker({
    position: {
        lat: 33.58958319777943, 
        lng: -101.87319815669194
    },
    map,
    icon: "Icons/POIIcon.png",
    title: "Sports Performance Center",

  });

Sports.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(Sports.getPosition());
    Sports.setIcon("Icons/POIIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Sports Performance Center"
    });
    info.open(map, Sports);
  });

FootballComplex = new google.maps.Marker({
    position: {
        lat: 33.58993811652016, 
        lng: -101.87153552950062
    },
    map,
    icon: "Icons/POIIcon.png",
    title: "Football Training Complex",

  });

FootballComplex.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(FootballComplex.getPosition());
    FootballComplex.setIcon("Icons/POIIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Football Training Complex"
    });
    info.open(map, FootballComplex);
  });

Jones = new google.maps.Marker({
    position: {
        lat: 33.591198269126124, 
        lng: -101.87290882048289
    },
    map,
    icon: "Icons/POIIcon.png",
    title: "Jones AT&T Stadium (Football)",

  });

Jones.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(Jones.getPosition());
    Jones.setIcon("Icons/POIIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Jones AT&T Stadium (Football)"
    });
    info.open(map, Jones);
  });

FrazierAlumni = new google.maps.Marker({
    position: {
        lat: 33.58994733194792, 
        lng: -101.87463472047509
    },
    map,
    icon: "Icons/POIIcon.png",
    title: "Frazier Alumni Pavilion",

  });

FrazierAlumni.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(FrazierAlumni.getPosition());
    FrazierAlumni.setIcon("Icons/POIIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Frazier Alumni Pavilion"
    });
    info.open(map, FrazierAlumni);
  });

Marsha = new google.maps.Marker({
    position: {
        lat: 33.589104786321734, 
        lng: -101.87494867018926
    },
    map,
    icon: "Icons/ClassIcon.png",
    title: "Marsha Sharp Center for Student Athletics",

  });

Marsha.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(Marsha.getPosition());
    Marsha.setIcon("Icons/ClassIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Marsha Sharp Center for Student Athletics"
    });
    info.open(map, Marsha);
  });

MechanicalEngineeringNorth = new google.maps.Marker({
    position: {
        lat: 33.58848337472868, 
        lng: -101.87489277326996
    },
    map,
    icon: "Icons/ClassIcon.png",
    title: "Mechanical Engineering North",

  });

MechanicalEngineeringNorth.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(MechanicalEngineeringNorth.getPosition());
    MechanicalEngineeringNorth.setIcon("Icons/ClassIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Mechanical Engineering North"
    });
    info.open(map, MechanicalEngineeringNorth);
  });

MechanicalEngineeringSouth = new google.maps.Marker({
    position: {
        lat: 33.588027562627055, 
        lng: -101.87502450621409
    },
    map,
    icon: "Icons/ClassIcon.png",
    title: "Mechanical Engineering South",

  });

MechanicalEngineeringSouth.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(MechanicalEngineeringSouth.getPosition());
    MechanicalEngineeringSouth.setIcon("Icons/ClassIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Mechanical Engineering South"
    });
    info.open(map, MechanicalEngineeringSouth);
  });

ChemicalEngineering = new google.maps.Marker({
    position: {
        lat: 33.587670061258954, 
        lng: -101.87609202524857
    },
    map,
    icon: "Icons/ClassIcon.png",
    title: "Chemical Engineering",

  });

ChemicalEngineering.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(ChemicalEngineering.getPosition());
    ChemicalEngineering.setIcon("Icons/ClassIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Chemical Engineering"
    });
    info.open(map, ChemicalEngineering);
  });

IMSE = new google.maps.Marker({
    position: {
        lat: 33.587178494446874, 
        lng: -101.87628514435383
    },
    map,
    icon: "Icons/ClassIcon.png",
    title: "Industrial, Manufacturing, and Systems Engineering",

  });

IMSE.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(IMSE.getPosition());
    IMSE.setIcon("Icons/ClassIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Industrial, Manufacturing, and Systems Engineering"
    });
    info.open(map, IMSE);
  });

EngineeringCenter = new google.maps.Marker({
    position: {
        lat: 33.587205307254926, 
        lng: -101.87581307556385
    },
    map,
    icon: "Icons/ClassIcon.png",
    title: "Engineering Center",

  });

EngineeringCenter.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(EngineeringCenter.getPosition());
    EngineeringCenter.setIcon("Icons/ClassIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Engineering Center"
    });
    info.open(map, EngineeringCenter);
  });

ComputerCenter = new google.maps.Marker({
    position: {
        lat: 33.587665592474366, 
        lng: -101.87533564238866
    },
    map,
    icon: "Icons/ClassIcon.png",
    title: "Computer Center",

  });

ComputerCenter.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(ComputerCenter.getPosition());
    ComputerCenter.setIcon("Icons/ClassIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Computer Center"
    });
    info.open(map, ComputerCenter);
  });

  KnappResidenceHall = new google.maps.Marker({
    position: {
        lat: 33.5806749059056, 
        lng: -101.87312163207221 
    },
    map,
    icon: "Icons/DormIcon.png",
    title: "Knapp Residence Hall",

  });

KnappResidenceHall.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(KnappResidenceHall.getPosition());
    KnappResidenceHall.setIcon("Icons/DormIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Knapp Residence Hall"
    });
    info.open(map, KnappResidenceHall);
  });

HornResidenceHall = new google.maps.Marker({
    position: {
        lat: 33.58049614017069,
        lng: -101.87240816456953
    },
    map,
    icon: "Icons/DormIcon.png",
    title: "Horn Residence Hall",

  });

HornResidenceHall.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(HornResidenceHall.getPosition());
    HornResidenceHall.setIcon("Icons/DormIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Horn Residence Hall"
    });
    info.open(map, HornResidenceHall);
  });

McKenzieMerketAlumniCenter = new google.maps.Marker({
    position: {
        lat: 33.579486106831624,
        lng: -101.87283731798114 
    },
    map,
    icon: "Icons/POIIcon.png",
    title: "McKenzie-Merket Alumni Center",

  });

McKenzieMerketAlumniCenter.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(McKenzieMerketAlumniCenter.getPosition());
    McKenzieMerketAlumniCenter.setIcon("Icons/POIIconS.png");
    var info = new google.maps.InfoWindow({
        content: "McKenzie-Merket Alumni Center"
    });
    info.open(map, McKenzieMerketAlumniCenter);
  });

HanceChapelKentR = new google.maps.Marker({
    position: {
        lat: 33.5792984002183,
        lng: -101.8714532982287
    },
    map,
    icon: "Icons/POIIcon.png",
    title: "Hance Chapel, Kent R.",

  });

HanceChapelKentR.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(HanceChapelKentR.getPosition());
    HanceChapelKentR.setIcon("Icons/POIIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Hance Chapel, Kent R."
    });
    info.open(map, HanceChapelKentR);
  });

TalkingtonResidenceHall = new google.maps.Marker({
    position: {
        lat: 33.57895873959456, 
        lng: -101.87462903347458 
    },
    map,
    icon: "Icons/DormIcon.png",
    title: "Talkington Residence Hall, J.T. & Margaret",

  });

TalkingtonResidenceHall.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(TalkingtonResidenceHall.getPosition());
    TalkingtonResidenceHall.setIcon("Icons/DormIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Talkington Residence Hall, J.T. & Margaret"
    });
    info.open(map, TalkingtonResidenceHall);
  });

Music = new google.maps.Marker({
    position: {
        lat: 33.58080004169374,
        lng: -101.87433935492174
    },
    map,
    icon: "Icons/ClassIcon.png",
    title: "Music",

  });

Music.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(Music.getPosition());
    Music.setIcon("Icons/ClassIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Music"
    });
    info.open(map, Music);
  });

StudentUnionBuilding = new google.maps.Marker({
    position: {
        lat: 33.581577667188924, 
        lng: -101.87457538929813,
    },
    map,
    icon: "Icons/DiningIcon.png",
    title: "Student Union Building",

  });

StudentUnionBuilding.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(StudentUnionBuilding.getPosition());
    StudentUnionBuilding.setIcon("Icons/DiningIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Student Union Building"
    });
    info.open(map, StudentUnionBuilding);
  });

Library = new google.maps.Marker({
    position: {
        lat: 33.58156872900465, 
        lng: -101.87598086672112
    },
    map,
    icon: "Icons/POIIcon.png",
    title: "Library, University",

  });

Library.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(Library.getPosition());
    Library.setIcon("Icons/POIIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Library, University"
    });
    info.open(map, Library);
  });

AgriculturalPavilion = new google.maps.Marker({
    position: {
        lat: 33.58243946030038,
        lng: -101.87681590404013 
    },
    map,
    icon: "Icons/POIIcon.png",
    title: "Agricultural Pavilion",

  });

AgriculturalPavilion.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(AgriculturalPavilion.getPosition());
    AgriculturalPavilion.setIcon("Icons/POIIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Agricultural Pavilion"
    });
    info.open(map, AgriculturalPavilion);
  });

SouthwestCollection = new google.maps.Marker({
    position: {
        lat: 33.5826547843438, 
        lng: -101.87630319363062
    },
    map,
    icon: "Icons/ClassIcon.png",
    title: "Southwest Collection/Special Collections Library",

  });

SouthwestCollection.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(SouthwestCollection.getPosition());
    SouthwestCollection.setIcon("Icons/ClassIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Southwest Collection/Special Collections Library"
    });
    info.open(map, SouthwestCollection);
  });

Psychology = new google.maps.Marker({
    position: {
        lat: 33.58123955376628, 
        lng: -101.87721457033713
    },
    map,
    icon: "Icons/ClassIcon.png",
    title: "Psychology",

  });

Psychology.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(Psychology.getPosition());
    Psychology.setIcon("Icons/ClassIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Psychology"
    });
    info.open(map, Psychology);
  });

CharlesTheatre = new google.maps.Marker({
    position: {
        lat: 33.58112508094251,
        lng: -101.87769407033728 
    },
    map,
    icon: "Icons/POIIcon.png",
    title: "Charles E. Maedgen Jr. Theatre",

  });

CharlesTheatre.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(CharlesTheatre.getPosition());
    CharlesTheatre.setIcon("Icons/POIIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Charles E. Maedgen Jr. Theatre"
    });
    info.open(map, CharlesTheatre);
  });

BurkhartCenter = new google.maps.Marker({
    position: {
        lat: 33.58134373165962,
        lng: -101.87815676294912 
    },
    map,
    icon: "Icons/ClassIcon.png",
    title: "Burkhart Center for Autism Education and Research",

  });

BurkhartCenter.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(BurkhartCenter.getPosition());
    BurkhartCenter.setIcon("Icons/ClassIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Burkhart Center for Autism Education and Research"
    });
    info.open(map, BurkhartCenter);
  });

Classical = new google.maps.Marker({
    position: {
        lat: 33.58082718274726, 
        lng: -101.87848186243797 
    },
    map,
    icon: "Icons/ClassIcon.png",
    title: "Classical & Modern Languages and Literatures",

  });

Classical.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(Classical.getPosition());
    Classical.setIcon("Icons/ClassIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Classical & Modern Languages and Literatures"
    });
    info.open(map, Classical);
  });

Goddard = new google.maps.Marker({
    position: {
        lat: 33.58283909302174,
        lng: -101.87816417033642
    },
    map,
    icon: "Icons/ClassIcon.png",
    title: "Goddard Range & Wildlife Management",

  });

Goddard.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(Goddard.getPosition());
    Goddard.setIcon("Icons/ClassIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Goddard Range & Wildlife Management"
    });
    info.open(map, Goddard);
  });

PlantSciences = new google.maps.Marker({
    position: {
        lat: 33.581797481644834,
        lng: -101.8784943531394 
    },
    map,
    icon: "Icons/ClassIcon.png",
    title: "Plant Sciences",

  });

PlantSciences.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(PlantSciences.getPosition());
    PlantSciences.setIcon("Icons/ClassIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Plant Sciences"
    });
    info.open(map, PlantSciences);
  });

BayerPlantScience = new google.maps.Marker({
    position: {
        lat: 33.58308594330192,
        lng: -101.8789904856775
    },
    map,
    icon: "Icons/ClassIcon.png",
    title: "Bayer Plant Science",

  });

BayerPlantScience.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(BayerPlantScience.getPosition());
    BayerPlantScience.setIcon("Icons/ClassIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Bayer Plant Science"
    });
    info.open(map, BayerPlantScience);
  });

EnglishPhilosophy = new google.maps.Marker({
    position: {
        lat: 33.581616150413595,
        lng: -101.87926231963907
    },
    map,
    icon: "Icons/ClassIcon.png",
    title: "English & Philosophy",

  });

EnglishPhilosophy.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(EnglishPhilosophy.getPosition());
    EnglishPhilosophy.setIcon("Icons/ClassIconS.png");
    var info = new google.maps.InfoWindow({
        content: "English & Philosophy"
    });
    info.open(map, EnglishPhilosophy);
  });

Education = new google.maps.Marker({
    position: {
        lat: 33.580247600652164,
        lng: -101.87924999933719
    },
    map,
    icon: "Icons/ClassIcon.png",
    title: "Education",

  });

Education.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(Education.getPosition());
    Education.setIcon("Icons/ClassIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Education"
    });
    info.open(map, Education);
  });

MemorialCircle = new google.maps.Marker({
    position: {
        lat: 33.58452390089656, 
        lng: -101.8747213867832
    },
    map,
    icon: "Icons/POIIcon.png",
    title: "Memorial Circle",

  });

MemorialCircle.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(MemorialCircle.getPosition());
    MemorialCircle.setIcon("Icons/POIIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Memorial Circle"
    });
    info.open(map, MemorialCircle);
  });

RecCenter = new google.maps.Marker({
    position: {
        lat: 33.58302355241855, 
        lng: -101.88442836149122 
    },
    map,
    icon: "Icons/POIIcon.png",
    title: "Rec Center, Robert H. Ewalt Student",

  });

RecCenter.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(RecCenter.getPosition());
    RecCenter.setIcon("Icons/POIIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Rec Center, Robert H. Ewalt Student"
    });
    info.open(map, RecCenter);
  });

RecSportsLeisurePool = new google.maps.Marker({
    position: {
        lat: 33.582161943558816, 
        lng: -101.88376936757118 
    },
    map,
    icon: "Icons/POIIcon.png",
    title: "Rec Sports Leisure Pool",

  });

RecSportsLeisurePool.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(RecSportsLeisurePool.getPosition());
    RecSportsLeisurePool.setIcon("Icons/POIIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Rec Sports Leisure Pool"
    });
    info.open(map, RecSportsLeisurePool);
  });

UnitedSupermarketsArena = new google.maps.Marker({
    position: {
        lat: 33.58139101124273, 
        lng: -101.88657046758338
    },
    map,
    icon: "Icons/POIIcon.png",
    title: "United Supermarkets Arena",

  });

UnitedSupermarketsArena.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(UnitedSupermarketsArena.getPosition());
    UnitedSupermarketsArena.setIcon("Icons/POIIconS.png");
    var info = new google.maps.InfoWindow({
        content: "United Supermarkets Arena"
    });
    info.open(map, UnitedSupermarketsArena);
  });

UrbanovskyUniversityPark = new google.maps.Marker({
    position: {
        lat: 33.581215459859834,
        lng: -101.8834915142745 
    },
    map,
    icon: "Icons/POIIcon.png",
    title: "Urbanovsky University Park",

  });

UrbanovskyUniversityPark.addListener("click", () => {
    reset();
    map.setZoom(17);
    map.setCenter(UrbanovskyUniversityPark.getPosition());
    UrbanovskyUniversityPark.setIcon("Icons/POIIconS.png");
    var info = new google.maps.InfoWindow({
        content: "Urbanovsky University Park"
    });
    info.open(map, UrbanovskyUniversityPark);
  });

  EC = [Classical, Goddard, PlantSciences, BayerPlantScience, EnglishPhilosophy, Education, BurkhartCenter, SouthwestCollection, Psychology, holden, math, maddox, ComputerCenter, EngineeringCenter, IMSE, ChemicalEngineering, MechanicalEngineeringSouth, MechanicalEngineeringNorth, Marsha, CreativeMovementStudio, BobHerd, EngineeringTechnologyLab, CivilEngineering, Music, ]
  CF = [StudentUnionBuilding]
  DM = [BledsoeResidenceHall, GordonResidenceHall, SneedResidenceHall, WestHall, KnappResidenceHall, HornResidenceHall, TalkingtonResidenceHall,]
  POI = [FrazierAlumni, Jones, FootballComplex, Sports, McKenzieMerketAlumniCenter, HanceChapelKentR, Library, AgriculturalPavilion, CharlesTheatre, MemorialCircle, RecCenter, RecSportsLeisurePool, UnitedSupermarketsArena, UrbanovskyUniversityPark, ]

  function reset(){
    for (let i = 0; i < EC.length; i++){
        EC[i].setIcon("Icons/ClassIcon.png");
    }
    for (let i = 0; i < CF.length; i++){
        CF[i].setIcon("Icons/DiningIcon.png");
    }
    for (let i = 0; i < DM.length; i++){
        DM[i].setIcon("Icons/DormIcon.png");
    }
    for (let i = 0; i < POI.length; i++){
        POI[i].setIcon("Icons/POIIcon.png");
    }
  }

}

// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
let linkTag = searchWrapper.querySelector("a");
let webLink;
// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}
function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    
    for (let i = 0; i < EC.length; i++){
        EC[i].setIcon("Icons/ClassIcon.png");
    }
    for (let i = 0; i < CF.length; i++){
        CF[i].setIcon("Icons/DiningIcon.png");
    }
    for (let i = 0; i < DM.length; i++){
        DM[i].setIcon("Icons/DormIcon.png");
    }
    for (let i = 0; i < POI.length; i++){
        POI[i].setIcon("Icons/POIIcon.png");
    }

    if (selectData == "Holden Hall"){
        map.panTo(holden.getPosition());
        map.setZoom(17)
        holden.setIcon("Icons/ClassIconS.png");
    }
    if (selectData == "Math and Statistics"){
        map.panTo(math.getPosition());
        map.setZoom(17)
        math.setIcon("Icons/ClassIconS.png");
    }
    if (selectData == "Maddox Engineering Research Center"){
        map.panTo(maddox.getPosition());
        map.setZoom(17)
        maddox.setIcon("Icons/ClassIconS.png");
    }
    if (selectData == "West Hall"){
        map.panTo(WestHall.getPosition());
        map.setZoom(17)
        WestHall.setIcon("Icons/DormIconS.png");
      }
      
      if (selectData == "Engineering Center"){
        map.panTo(EngineeringCenter.getPosition());
        map.setZoom(17)
        EngineeringCenter.setIcon("Icons/ClassIconS.png");
      }
      
      if (selectData == "Industrial, Manufacturing, and Systems Engineering"){
        map.panTo(IMSE.getPosition());
        map.setZoom(17)
        IMSE.setIcon("Icons/ClassIconS.png");
      }
      
      if (selectData == "Chemical Engineering"){
        map.panTo(ChemicalEngineering.getPosition());
        map.setZoom(17)
        ChemicalEngineering.setIcon("Icons/ClassIconS.png");
      }
      
      if (selectData == "Mechanical Engineering South"){
        map.panTo(MechanicalEngineeringSouth.getPosition());
        map.setZoom(17)
        MechanicalEngineeringSouth.setIcon("Icons/ClassIconS.png");
      }
      
      if (selectData == "Mechanical Engineering North"){
        map.panTo(MechanicalEngineeringNorth.getPosition());
        map.setZoom(17)
        MechanicalEngineeringNorth.setIcon("Icons/ClassIconS.png");
      }
      
      if (selectData == "Marsha Sharp Center for Student Athletics"){
        map.panTo(Marsha.getPosition());
        map.setZoom(17)
        Marsha.setIcon("Icons/ClassIconS.png");
      }
      
      if (selectData == "Frazier Alumni Pavilion"){
        map.panTo(FrazierAlumni.getPosition());
        map.setZoom(17)
        FrazierAlumni.setIcon("Icons/POIIconS.png");
      }
      
      if (selectData == "Jones AT&T Stadium (Football)"){
        map.panTo(Jones.getPosition());
        map.setZoom(17)
        Jones.setIcon("Icons/POIIconS.png");
      }
      
      if (selectData == "Football Training Complex"){
        map.panTo(FootballComplex.getPosition());
        map.setZoom(17)
        FootballComplex.setIcon("Icons/POIIconS.png");
      }
      
      if (selectData == "Sports Performance CenterWest Hall"){
        map.panTo(Sports.getPosition());
        map.setZoom(17)
        Sports.setIcon("Icons/POIIconS.png");
      }
      
      if (selectData == "Creative Movement Studio"){
        map.panTo(CreativeMovementStudio.getPosition());
        map.setZoom(17)
        CreativeMovementStudio.setIcon("Icons/ClassIconS.png");
      }
      
      if (selectData == "Bob L. Herd Department of Petroleum Engineering"){
        map.panTo(BobHerd.getPosition());
        map.setZoom(17)
        BobHerd.setIcon("Icons/ClassIconS.png");
      }
      
      if (selectData == "Engineering & Technology Lab"){
        map.panTo(EngineeringTechnologyLab.getPosition());
        map.setZoom(17)
        EngineeringTechnologyLab.setIcon("Icons/ClassIconS.png");
      }
      
      if (selectData == "Civil Engineering"){
        map.panTo(CivilEngineering.getPosition());
        map.setZoom(17)
        CivilEngineering.setIcon("Icons/ClassIconS.png");
      }
      
      if (selectData == "Bledsoe Residence Hall"){
        map.panTo(BledsoeResidenceHall.getPosition());
        map.setZoom(17)
        BledsoeResidenceHall.setIcon("Icons/DormIconS.png");
      }
      
      if (selectData == "Gordon Residence Hall"){
        map.panTo(GordonResidenceHall.getPosition());
        map.setZoom(17)
        GordonResidenceHall.setIcon("Icons/DormIconS.png");
      }
      
      if (selectData == "Sneed Residence Hall"){
        map.panTo(SneedResidenceHall.getPosition());
        map.setZoom(17)
        SneedResidenceHall.setIcon("Icons/DormIconS.png");
      }
      
      if (selectData == "Computer Center"){
        map.panTo(ComputerCenter.getPosition());
        map.setZoom(17)
        ComputerCenter.setIcon("Icons/ClassIconS.png");
      }
      if (selectData == "Knapp Residence Hall"){
        map.panTo(KnappResidenceHall.getPosition());
        map.setZoom(17)
        KnappResidenceHall.setIcon("Icons/DormIconS.png");
      }
      
      if (selectData == "Horn Residence Hall"){
        map.panTo(HornResidenceHall.getPosition());
        map.setZoom(17)
        HornResidenceHall.setIcon("Icons/DormIconS.png");
      }
      
      if (selectData == "McKenzie-Merket Alumni Center"){
        map.panTo(McKenzieMerketAlumniCenter.getPosition());
        map.setZoom(17)
        McKenzieMerketAlumniCenter.setIcon("Icons/POIIconS.png");
      }
      
      if (selectData == "Hance Chapel, Kent R."){
        map.panTo(HanceChapelKentR.getPosition());
        map.setZoom(17)
        HanceChapelKentR.setIcon("Icons/POIIconS.png");
      }
      
      if (selectData == "Talkington Residence Hall, J.T. & Margaret"){
        map.panTo(TalkingtonResidenceHall.getPosition());
        map.setZoom(17)
        TalkingtonResidenceHall.setIcon("Icons/DormIconS.png");
      }
      
      if (selectData == "Music"){
        map.panTo(Music.getPosition());
        map.setZoom(17)
        Music.setIcon("Icons/ClassIconS.png");
      }
      
      if (selectData == "Student Union Building"){
        map.panTo(StudentUnionBuilding.getPosition());
        map.setZoom(17)
        StudentUnionBuilding.setIcon("Icons/DiningIconS.png");
      }
      
      if (selectData == "Library, University"){
        map.panTo(Library.getPosition());
        map.setZoom(17)
        Library.setIcon("Icons/POIIconS.png");
      }
      
      if (selectData == "Agricultural Pavilion"){
        map.panTo(AgriculturalPavilion.getPosition());
        map.setZoom(17)
        AgriculturalPavilion.setIcon("Icons/POIIconS.png");
      }
      
      if (selectData == "Southwest Collection/Special Collections Library"){
        map.panTo(SouthwestCollection.getPosition());
        map.setZoom(17)
        SouthwestCollection.setIcon("Icons/ClassIconS.png");
      }
      
      if (selectData == "Psychology"){
        map.panTo(Psychology.getPosition());
        map.setZoom(17)
        Psychology.setIcon("Icons/ClassIconS.png");
      }
      
      if (selectData == "Charles E. Maedgen Jr. Theatre"){
        map.panTo(CharlesTheatre.getPosition());
        map.setZoom(17)
        CharlesTheatre.setIcon("Icons/POIIconS.png");
      }
      
      if (selectData == "Burkhart Center for Autism Education and Research"){
        map.panTo(BurkhartCenter.getPosition());
        map.setZoom(17)
        BurkhartCenter.setIcon("Icons/ClassIconS.png");
      }
      
      if (selectData == "Classical & Modern Languages and Literatures"){
        map.panTo(Classical.getPosition());
        map.setZoom(17)
        Classical.setIcon("Icons/ClassIconS.png");
      }
      
      if (selectData == "Goddard Range & Wildlife Management"){
        map.panTo(Goddard.getPosition());
        map.setZoom(17)
        Goddard.setIcon("Icons/ClassIconS.png");
      }
      
      if (selectData == "Plant Sciences"){
        map.panTo(PlantSciences.getPosition());
        map.setZoom(17)
        PlantSciences.setIcon("Icons/ClassIconS.png");
      }
      
      if (selectData == "Bayer Plant Science"){
        map.panTo(BayerPlantScience.getPosition());
        map.setZoom(17)
        BayerPlantScience.setIcon("Icons/ClassIconS.png");
      }
      
      if (selectData == "English & Philosophy"){
        map.panTo(EnglishPhilosophy.getPosition());
        map.setZoom(17)
        EnglishPhilosophy.setIcon("Icons/ClassIconS.png");
      }
      
      if (selectData == "Education"){
        map.panTo(Education.getPosition());
        map.setZoom(17)
        Education.setIcon("Icons/ClassIconS.png");
      }
      
      if (selectData == "Memorial Circle"){
        map.panTo(MemorialCircle.getPosition());
        map.setZoom(17)
        MemorialCircle.setIcon("Icons/POIIconS.png");
      }
      
      if (selectData == "Rec Center, Robert H. Ewalt Student"){
        map.panTo(RecCenter.getPosition());
        map.setZoom(17)
        RecCenter.setIcon("Icons/POIIconS.png");
      }
      
      if (selectData == "Rec Sports Leisure Pool"){
        map.panTo(RecSportsLeisurePool.getPosition());
        map.setZoom(17)
        RecSportsLeisurePool.setIcon("Icons/POIIconS.png");
      }
      
      if (selectData == "United Supermarkets Arena"){
        map.panTo(UnitedSupermarketsArena.getPosition());
        map.setZoom(17)
        UnitedSupermarketsArena.setIcon("Icons/POIIconS.png");
      }
      
      if (selectData == "Urbanovsky University Park"){
        map.panTo(UrbanovskyUniversityPark.getPosition());
        map.setZoom(17)
        UrbanovskyUniversityPark.setIcon("Icons/POIIconS.png");
      }
    searchWrapper.classList.remove("active");
}
function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

