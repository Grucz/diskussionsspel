// Scenarier för diskussionsspelet
const scenarios = [
  {
    "title": "Kollegan som aldrig följer med",
    "text": "En nyanställd kollega tackar alltid nej när arbetsgruppen föreslår gemensam lunch eller fika. X är trevlig och professionell i arbetet, men verkar undvika allt socialt utanför det nödvändiga. Efter några veckor börjar vissa kollegor sucka och skämta om att X \"inte vill vara en del av gänget.\" Andra tycker att det är upp till var och en. Stämningen påverkas och du märker att vissa börjar exkludera X även i arbetssituationer."
  },
  {
    "title": "\"I Sverige gör vi på vårt sätt\"",
    "text": "Vid ett möte diskuterar ni en ny arbetsrutin som införts för att bättre anpassa sig till en mer kulturellt blandad personalgrupp. En av de mer erfarna kollegorna skakar på huvudet och säger att det här krånglar till saker i onödan. \"Vi måste sluta dalta med folk, i Sverige gör vi på vårt sätt.\" Några hummar instämmande, andra blir obekväma. Diskussionen dör snabbt ut, men du ser att en av era nyare kollegor ser både förvånad och nedstämd ut."
  },
  {
    "title": "Kan man skämta numera?",
    "text": "Under lunchrasten berättar en kollega ett skämt som anspelar på en kulturell stereotyp. Ingen skrattar, men ingen säger heller ifrån. Stämningen blir ansträngd och samtalet glider snabbt över på ett annat ämne. Du ser att en av era kollegor, som själv tillhör den kultur skämtet handlade om, blir tyst och sluter sig resten av lunchen. På väg tillbaka till kontoret hör du några viska att folk numera \"är så lättkränkta att man knappt kan skämta längre.\""
  },
  {
    "title": "Namn eller smeknamn?",
    "text": "En ny kollega med ett namn som vissa tycker är svårt att uttala börjar introducera sig med ett enklare, svenskklingande smeknamn. En del tycker att det är praktiskt och visar omtanke om gruppen. Andra menar att det är synd att X ska behöva anpassa sig. Någon föreslår att alla borde anstränga sig och lära sig det riktiga namnet. X själv verkar inte vilja göra en stor grej av det, men du märker att frågan återkommer i samtal och att vissa kollegor blir obekväma."
  },
  {
    "title": "Religion på jobbet",
    "text": "En kollega ber om att få ta en kort paus på eftermiddagen för att be. Det är inget som påverkar arbetsuppgifterna, men någon i arbetsgruppen börjar muttra om att \"det där hör inte hemma på en svensk arbetsplats\" och att det skapar en särbehandling. En annan kollega påpekar att folk ju redan får ta pauser för att röka eller scrolla på mobilen. Diskussionen blir snabbt laddad och du märker att den kollega som frågade blir obekväm och tyst."
  },
  {
    "title": "Vem säger till?",
    "text": "På en arbetsplats med stor språklig mångfald är det några kollegor som ofta pratar sitt modersmål med varandra i pauser och vid fikabordet. En dag säger en annan kollega att det känns exkluderande och att \"alla borde prata svenska när vi är på jobbet.\" Stämningen blir stel, och de som pratat sitt språk börjar göra det mer sällan. Efter ett tag märker du att de drar sig undan även i andra sammanhang."
  },
  {
    "title": "Personliga gränser",
    "text": "På din arbetsplats finns en kollega som alltid hälsar med en kram. De flesta verkar uppskatta det, men en kollega ser obekväm ut och undviker situationer där det kan ske. Du märker att vissa kollegor börjar tolka detta som att X är otrevlig eller avståndstagande, medan andra försvarar X rätt att ha sin egen gräns."
  },
  {
    "title": "Hierarkier och initiativförmåga",
    "text": "I arbetsgruppen finns en kollega som sällan ifrågasätter beslut och alltid väntar på tydliga instruktioner från chefen för att utföra något. Vissa börjar irritera sig på att X aldrig tar egna initiativ, medan andra menar att det handlar om olika sätt att se på hierarki och auktoritet. När ni ber kollegan att ta för sig mer svarar X att det bara handlar om att \"inte vilja göra fel.\""
  },
  {
    "title": "Högtider och ledighet",
    "text": "Varje år planeras arbetsplatsens gemensamma julfirande. En kollega påpekar att det känns exkluderande att bara fira svenska högtider och undrar varför inte andra traditioner också får utrymme. Några tycker att julfirandet är en viktig del av arbetsplatskulturen och att \"alla i Sverige firar ändå jul.\" Diskussionen blir snabbt känsloladdad, och kollegan som tog upp frågan verkar ångra att den sa något."
  },
  {
    "title": "Kön och auktoritet",
    "text": "Vid ett möte märker du att en kollega konsekvent riktar sina frågor och sin ögonkontakt mot männen i rummet, trots att kvinnliga kollegor sitter med och har expertkunskap i ämnet. Någon påpekar det efteråt, men kollegan verkar inte förstå vad problemet är."
  },
  {
    "title": "Osynliggörande",
    "text": "En kollega har svenska som andraspråk och talar med viss brytning. När X föreslår något på ett möte lyssnar få, men när en annan kollega senare upprepar samma sak får det plötsligt gehör. Du ser hur X ser uppgiven ut men inte säger något."
  },
  {
    "title": "När privata samtal skapade osäkerhet",
    "text": "Två kollegor pratar ofta med varandra på ett språk som ingen annan i gruppen förstår. De skrattar ibland, viskar något och fortsätter sedan arbeta. En dag suckar en av de andra i teamet och säger: \"Det känns som om de pratar om oss.\" Ingen vet riktigt vad som sagts, men plötsligt är stämningen annorlunda."
  },
  {
    "title": "När ett enkelt hej blev komplicerat",
    "text": "En ny kollega börjar i arbetsgruppen. Du går fram för att hälsa och sträcker automatiskt fram handen, men personen tvekar och lägger istället handen på hjärtat och nickar vänligt. Du känner dig osäker – borde du dra tillbaka handen eller insistera på handskakningen? Senare hör du någon på arbetsplatsen säga att \"man måste anpassa sig till svenska hälsningsregler\"."
  },
  {
    "title": "När en kollega kände sig förbisedd",
    "text": "En kollega uttrycker frustration efter ett möte och säger: \"Jag blir aldrig lyssnad på här, det är för att jag inte är svensk.\" Du var själv på mötet och upplevde att alla fick komma till tals, men kollegan verkar tydligt upprörd. Du funderar på om det handlar om något annat – kanske en skillnad i kommunikationsstil, vana vid hierarki, eller en personlig osäkerhet. Samtidigt tycker du att kollegans upplevelse är viktig, och du vill inte heller avfärda den."
  },
  {
    "title": "När en kollegas pronomen skapade osäkerhet",
    "text": "En ny kollega presenterar sig på första arbetsmötet och säger: \"Jag använder hen som pronomen.\" Några i gruppen nickar, medan andra ser osäkra ut. Under de kommande veckorna hör du flera kollegor använda fel pronomen, ibland av misstag, ibland med en viss irritation i rösten. En dag suckar någon och säger: \"Kan vi inte bara prata normalt? Det där känns så krångligt.\" Samtidigt ser du att den nyanställda drar sig undan allt mer."
  },
  {
    "title": "Alla ska ta ställning!",
    "text": "Efter en händelse i världen delar en kollega ett inlägg på sociala medier och förväntar sig att alla ska visa sitt stöd. När vissa i gruppen är tysta frågar hen rakt ut: \"Varför säger ni inget? Det här handlar om mänskliga rättigheter!\" En annan kollega svarar försiktigt att hen vill hålla politik utanför jobbet, men det tas emot som likgiltighet. Plötsligt har samtalsklimatet förändrats, och du märker att vissa känner sig pressade att välja sida medan andra blir tysta."
  },
  {
    "title": "När en kollega blev misstänkliggjord utan anledning",
    "text": "Vid ett säkerhetsmöte diskuteras nya rutiner för att komma in i byggnaden. En kollega säger skämtsamt till en annan: \"Men vi får väl hålla extra koll på dig, du ser ju lite misstänkt ut!\" Några skrattar, men personen som kommentaren riktades till tystnar. Du märker att stämningen blir stel, men ingen säger något."
  },
  {
    "title": "När en kollega kände sig bortvald",
    "text": "En tjänst blir ledig på din arbetsplats, och flera interna kandidater söker. En av dina kollegor får inte jobbet och är besviken. X säger till dig: \"Jag vet varför jag inte fick tjänsten. De vill bara ha någon med ett svenskt namn.\" Du vet att rekryteringen var noggrant genomförd och att den som fick jobbet hade mer erfarenhet, men du märker att din kollega känner sig orättvist behandlad. X verkar förvänta sig att du håller med, men du vill vara ärlig utan att upplevas som respektlös."
  },
  {
    "title": "Rätt att bära slöja på jobbet",
    "text": "En kvinna börjar sin praktik på en kommunal arbetsplats och bär religiös klädsel som sticker ut men inte hindrar arbetet. En äldre kollega muttrar att \"det där hör inte hemma på jobbet\" och att det skickar fel signaler till klienterna. Praktikanten hör kommentaren och känner sig osäker på om hon är välkommen."
  },
  {
    "title": "Dödsfall och sorgehantering",
    "text": "På ett äldreboende avlider en boende. En familjemedlem vill enligt sin tradition sitta vid kroppen i flera timmar, men personalen säger att det inte är möjligt. Familjen blir upprörd och säger att de förvägras att sörja på sitt sätt."
  },
  {
    "title": "Djinner och andar",
    "text": "Du pratar med en kvinna som har sökt hjälp av vården för psykiska besvär. Du misstänker utifrån samtalet att detta bor på PTSD men kvinnan hävdar bestämt att det är en släkting som hon är i fejd med som lagt en förbannelse på henne. Detta stämmer inte alls med hur du ser på psykisk sjukdom men du vill samtidigt inte avfärda patientens föreställningsvärld."
  },
  {
    "title": "När humor blir en barriär",
    "text": "En vårdtagare på hemtjänsten skämtar ofta om nationaliteter och använder grova ord. En anställd med utländsk bakgrund blir illa berörd, men de äldre kollegorna skrattar och säger att brukaren \"alltid varit sån.\""
  },
  {
    "title": "Brist på tillit till vården",
    "text": "En patient följer inte läkarnas råd utan förlitar sig på huskurer från hemlandet. Patienten misstror sjukvården och tror att medicinerna är skadliga. Läkaren försöker förklara, men patienten avfärdar det och vill bara ha naturliga behandlingar."
  }
];

