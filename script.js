let boyName
let boyAge
let girlName
let city

function button1(event) {
    boy1.removeAttribute("hidden");
    boy2.removeAttribute("hidden");
    boy3.removeAttribute("hidden");
    question.setAttribute("hidden", true);
    carphoto.setAttribute("hidden", true);
    start.setAttribute("hidden", true);
}

document.getElementById("start").addEventListener("click", button1);

function button2(event) {
    boyName = prompt("Imię chłopca", "Janek");
    boyAge = prompt("Wiek chłopca", "4");
    girl1.removeAttribute("hidden");
    girl2.removeAttribute("hidden");
    girl3.removeAttribute("hidden");
    boy1.setAttribute("hidden", true);
    boy2.setAttribute("hidden", true);
    boy3.setAttribute("hidden", true);
}

document.getElementById("boy3").addEventListener("click", button2);

function button3(event) {
    girlName = prompt("Imię dziewczynki", "Zuzia");
    city1.removeAttribute("hidden");
    city2.removeAttribute("hidden");
    city3.removeAttribute("hidden");
    girl1.setAttribute("hidden", true);
    girl2.setAttribute("hidden", true);
    girl3.setAttribute("hidden", true);
}

document.getElementById("girl3").addEventListener("click", button3);

function button4(event) {
    city = prompt("Miasto", "Gdańsk");
    newStory1.removeAttribute("hidden");
    newStory2.removeAttribute("hidden");
    newStory3.removeAttribute("hidden");
    city1.setAttribute("hidden", true);
    city2.setAttribute("hidden", true);
    city3.setAttribute("hidden", true);
}

document.getElementById("city3").addEventListener("click", button4);

function button5(event) {
    episode1.removeAttribute("hidden");
    episode2.removeAttribute("hidden");
    episode3.removeAttribute("hidden");
    endTitles.removeAttribute("hidden");
    endTitles2.removeAttribute("hidden");
    startTitles1.setAttribute("hidden", true);
    startTitles2.setAttribute("hidden", true);
    newStory1.setAttribute("hidden", true);
    newStory2.setAttribute("hidden", true);
    newStory3.setAttribute("hidden", true);
    episode1.innerHTML = 
    `${boyName} - ${boyAge} letni chłopiec, mieszka wraz z rodzicami i siostrą w mieście ${city}.<br>
    W pokoju chłopca od zawsze było bardzo kolorowo. Różnorakie, pstrokate auta prezentowały się dumnie na białych półeczkach. <br>
    Natomiast te większe, takie jak: koparki, spychacze, betoniarka oraz duży lśniący wóz strażacki miały swoje miejsce pod niebieskim stoliczkiem przy oknie.<br>
    ${boyName} uwielbiał swój pokoik. Kiedy ${boyAge} latek wracał od kolegów, wbiegał do niego i wywoływał swoje auta do zabawy na dywanie.<br>
    Lubił bawić się w wyścigi resorakami! Ileż wtedy było emocji, gdy ustawiał je w jednym końcu pokoju i wyznaczał metę w drugim końcu, pod oknem. <br>
    Na środku ustawiał różne przeszkody, najczęściej zostawiając tam swój kapeć, czy wieżę z lego.
    – Siuuu….brrrrum….Szuuuuuu….!!!!! - naśladował autka ${boyName}.<br>
    Każde autko w wyścigach ${boyAge} latka wyróżniało się niezwykłą zwinnością, szybkością i lśniąca karoserią. <br>
    Bo… kiedy mama nie widziała, ${boyName} polerował autka rękawem swojej flanelowej koszuli w czarno-czerwoną kratę.<br>
    Niemniej jednak tego dnia, przyszła mu ochota na zabawę większymi pojazdami, tymi spod niebieskiego stoliczka. <br>
    Chciał zorganizować zabawę w budowę placu zabaw.<br>
    – Będą zjeżdżalnie! Huśtawki! Ooooooo ….taaakie wysokie!- emocjonował się ${boyName}. <br>
    – Dalej koparki! Dalej spychacze! Do dzieła!-wołał radośnie.<br>
    ${boyName} ustawił autka na dywanie, wziął klocki i rozpoczął budowanie placu. Zaczął od zbudowania kolorowego płotu z klocków.<br>
    – O tak! Ogrodzenie musi być, żeby dzieci na placu zabaw mogły się bezpiecznie bawić- komentował zadowolony z siebie, mały budowniczy.<br>
    Kiedy ogrodzenie było gotowe, ${boyName} postanowił zabrać się za zjeżdżalnię.<br>
    – Hmm…potrzebowałbym jakiejś śliskiej płaskiej powierzchni… Czego, by tu użyć? – zastanawiał się chłopiec?<br>
    -Już wiem!!- z radością zawołał ${boyName} i czym prędzej pobiegł do pokoju swojej siostry.<br>
    – ${girlName}, ${girlName}…. pożycz mi proszę, najdłuższą linijkę, jaką masz w tornistrze!!! <br>
    Buduję najbardziej niebezpieczną i stromą zjeżdżalnię świata! Eeeee…. to znaczy, najbardziej niebezpieczną zjeżdżalnię w moim pokoju.<br>
    ${girlName} uśmiechnęła się do brata, wyjęła półmetrową przezroczystą linijkę z szuflady swojego biurka, tym samym, stając się częścią budowlanego projektu swojego pomysłowego braciszka.<br>
    – Dziękuję, dziękuję! Juppii! – dziękował siostrze ${boyName} w locie do swojego pokoju.<br>
    Zjeżdżalnia miała podpórkę z wieży z klocków. Z drugiej strony przy pomocy plasteliny zamontowana została linijka siostry. <br>
    Zjeżdżalnia była naprawdę wysoka. Chłopiec użył do jej budowy wszystkich swoich klocków w kolorze żółtym i niebieskim.<br>
    – Ooo tak, to jest najniebezpieczniejsza zjeżdżalnia w moim pokoju!! – komentował dumny z siebie młody konstruktor.<br>
    ${boyName} jednak miał wątpliwości. Plac zabaw powinien być bezpiecznym miejscem. <br>
    Spojrzał na swoje budowlane pojazdy, kolejno wodząc po nich wzrokiem.<br>
    Koparka, spychacz i betoniarka spełniły już swoje zadania podczas budowy placu.<br>
    Koparka wykopała małą piaskownicę z piasku kinetycznego w foremce w kształcie muszelki. <br>
    Spychacz spychał klocki, potrzebne do budowy ogrodzenia w kierunku prawej rączki chłopca, która układała je kolejno jeden na drugim. <br>
    Betoniarka użyła szarej ciastoliny i wylała ją przy mocowaniu nóg huśtawki, które ${boyName} zrobił z kolorowych cienkich bierek.<br>
    Wzrok ${boyAge} latka utkwił teraz na lśniącym wozie strażackim.<br>
    – Hmm… przyjacielu, jeszcze Ty nie miałeś okazji się przydać w trakcie budowy… – zamyślił się chłopiec.<br>
    Myślał, myślał, rozglądał się dookoła… iiii wymyślił!<br>
    Spojrzał na swoją zjeżdżalnię, tę… najniebezpieczniejszą…., której nieumyślnie nie zbudował schodków, do wspinania się po niej. <br>
    Poza tym, zjeżdżalnia nie była zbyt bezpieczna. Zabawa na placu zabaw powinna być miła i przyjemna. <br>
    – Już wiem! – wykrzyczał ${boyName}.<br>
    – No, no koleżko, będziesz miał odpowiedzialną rolę – powiedział i wziął do ręki wóz strażacki.<br>
    Postawię Cię przy zjeżdżalni, będziesz rozciągał swoją strażacką drabinę i przenosił moje ludziki na szczyt zjeżdżalni.<br>
    – Genialne!!- cieszył się chłopiec.<br>
    - Poza tym….- ${boyName} kolejny raz zwrócił się do wozu.<br>
    – Będziesz czuwał nad bezpieczeństwem zabawy na moim placu – oznajmił chłopiec.<br>
    Gdy właśnie przydzielił ostatnia rolę dla wozu strażackiego, do pokoju weszła ${girlName}.<br>
    – Brawo ${boyName}! Jaki ładny plac zabaw!- pochwaliła brata.<br>
    – Widzisz.., jest i wóz strażacki, dba o bezpieczeństwo i przenosi ludziki na zjeżdżalnię- wyraźnie dumny z pomysłu odezwał się ${boyName}.<br>
    – Widzę! Ciekawie i mądrze to wymyśliłeś. Straż pożarna nie tylko gasi pożary, ale dba o nasze bezpieczeństwo, tam, gdzie istnieje duże ryzyko jakiegoś przykrego zdarzenia, wśród dużych skupisk ludzi. <br>
    Na przykład podczas różnych koncertów, festynów, konkursów plenerowych, wydarzeń sportowych. Organizuje też akcję ratowniczą. – doprecyzowała ${girlName}.<br>
    – Wow! Mój wóz strażacki ma naprawdę poważne zadania! Dbanie o bezpieczeństwo to jego SUPERMOC!- podsumował ${boyName}<br>
    – Ooo tak! To zdecydowanie jego supermoc. Twoją natomiast jest wymyślanie i konstruowanie przeróżnych budowli braciszku.  Może zostaniesz inżynierem, architektem, kto wie?!`;
}

document.getElementById("newStory3").addEventListener("click", button5);

function button6(event) {
    ending1.removeAttribute("hidden");
    ending2.setAttribute("hidden", true);
    episode2.setAttribute("hidden", true);
    episode3.setAttribute("hidden", true);
    printStory.removeAttribute("hidden");
    endTitles2.setAttribute("hidden", true);
    ending1.innerHTML = `- Tak, bardzo bym chciał kiedyś coś naprawdę skonstruować. <br>
    ${girlName} jesteś super siostrą - dodał ${boyName} i wspólnie z siostrą bawili się w jego pokoiku aż do kolacji.<br><br>
    <b><center>Na podstawie bajki SuperMocny wóz strażacki autorstwa Eweliny Jaski.</center></b>`;
    }

document.getElementById("episode2").addEventListener("click", button6);

function button7(event) {
    ending2.removeAttribute("hidden");
    ending1.setAttribute("hidden", true);
    episode2.setAttribute("hidden", true);
    episode3.setAttribute("hidden", true);
    printStory.removeAttribute("hidden");
    endTitles2.setAttribute("hidden", true);
    ending2.innerHTML = `– A może strażakiem?! OSP ${city}. <br>
    Kto wie? - dodał ${boyName} i wspólnie z siostrą bawili się w jego pokoiku aż do kolacji pod okiem lśniącego SuperMocnego wozu strażackiego.<br><br>
    <b><center>Na podstawie bajki SuperMocny wóz strażacki autorstwa Eweliny Jaski.</center></b>`;
    }

document.getElementById("episode3").addEventListener("click", button7);


