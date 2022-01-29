<template>
  <div class="about">
    <h2>Kim jesteśmy?</h2>
    <p>
      Początkowo Dreams powstało jako gildia o nazwie Socia Tael, założona przez
      grupkę znajomych, która chciała mieć własną, stałą grupę do gry. Grupa
      składała się zarówno z osob, które miały już za sobą mityczne raidy, ale
      także takich, które dopiero rozpoczynały swoją przygodę ze Światem
      Wojennego Rzemiosła. Pomimo trudnych początków, udawało się nam dobierać
      kolejne osoby, uzupełniając swój skład, z czasem dochodząc do momentu, w
      którym mogliśmy organizować w pełni gildyjne raidy na poziomie heroicznym.
      Był to moment, w którym zaczęliśmy powoli patrzeć w kierunku kolejnego
      poziomu trudności raidu, jednak wciąż potrzebowaliśmy brakujących osób.
      Zdecydowaliśmy się na fuzję z inną gildią, z której zostało kilkoro
      dobrych graczy, chcących spróbować swoich sił na mitycznej Ny'alothcie.
      Maj 2020 roku był dla nas początkiem progresu.
    </p>

    <h2>Ny'alotha, the Waking City</h2>
    <p>
      Ny'alotha była dla nas pierwszym sprawdzianem tego jak będzie wyglądać w
      przyszłości nasz progres. Głównym sukcesem był fakt, że z czasem udało nam
      się zebrać stałą grupę, chcącą przeć do przodu. Niestety, mała
      atrakcyjność dodatku jakim było Battle for Azeroth spowodowała, że
      niektóre osoby miały dość korupcji i wszystkiego innego co związane z
      dodatkiem - poskutkowało to tym, że po zabiciu Xanesh nie byliśmy w stanie
      progresować kolejnych bossów i zatrzymaliśmy się na zabitych 6 na 12
      możliwych. Pozytywem wyciągniętym z Battle for Azeroth było
      zbudowanie podstawy gildii jak i grupy raidowej, a w szczególności jej
      kluczowych członków, którzy pomimo nieukończonej Ny'alothy byli gotowi do
      mocnego wejścia w Shadowlands..
    </p>

    <h2>Shadowlands i Castle Nathria</h2>
    <p>
      Wraz z rozpoczęciem nowego dodatku oraz wyjściem nowego raidu chcieliśmy
      zmienić nieco swoje podejście, usystematyzować gildię i mocno wejść w nowy
      raid, odpowiednio się do niego przygotowując. Naszym celem było zdobycie
      Cutting Edge w każdym tierze Shadowlands. Nie byliśmy doświadczoną
      gildią, dlatego ranking nie miał dla nas dużego znaczenia - chcieliśmy
      w pełni ukończyć raid i umożliwić zdobycie achievementu każdemu z naszych
      raiderów, a także zdobyć potrzebne doświadczenie do dalszego rozwijania
      gildii i naszych umiejętności. Castle Nathria okazał się dobrym raidem, który
      trochę jednak pokazał, że raidowanie na poziomie mythic będzie wymagało znacznie
      więcej samozaparcia, ale też umiejętności. Po dosyć trudnym początku z czasem udało
      się nam przeć naprzód i dojść do Sludgefista. Tutaj niestety pojawiły się problemy
      typowe dla gildii z końca stawki, której celują w późny Cutting Edge. Wypalenie, problemy
      z rekrutacją i uzupełnienim ludzi, ciągła rotacja i nauka walki od początku spowodowały,
      że zostawiając Sludgefistowi zaledwie 4% życia grupa raidowa nie miała możliwość dalej grać.
    </p>

    <h2>Sanctum of Domination, a następnie Sepulcher of the First Ones</h2>
    <p>
      Po rozpadzie grupy raidowej, około połowa osób zdecydowała się na dalszą grę w innych gildiach,
      natomiast połowa z nas całkowicie zrezygnowała z gry, a co za tym idzie z raidowania na Sanctum
      of Domination. Pomimo tego gorzkiego zakończenia przygody na Castle Nathria, chcemy spróbować
      jeszcze raz, tym razem ze zdobytym doświadczeniem i nową energią. Wracamy na ostatni patch Shadowlands
      i celem jest wyczyszczenie raidu Sepulcher of the First Ones do końca dodatku!
    </p>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {};
  },
};
</script>

<style scoped>
h2,
h3 {
  font-weight: 300;
  color: white;
  margin-top: 5px;
  text-align: center !important;
  text-shadow: black 2px 0 10px;
}

.about {
  text-justify: auto;
  text-align: justify;
  width: 60vw;
  height: auto;
  margin: 20px auto 0px;
  color: white;
  padding-bottom: 20px;
  font-weight: 300;
  padding: 20px;
}

@media (max-width: 767px) {
  .about {
    width: 100vw;
    margin-top: 0;
    padding-top: 0;
    text-justify: inter-character;
  }
}
</style>
