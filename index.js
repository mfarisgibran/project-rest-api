console.log("Rest API");

const getIndonesiaData = async () => {
  try {
    const response = await fetch(
      "https://restcountries.eu/rest/v2/name/indonesia"
    );
    const data = await response.json();
    console.log(data); //Array containing Indonesia data

    const countryName = data[0].name;

    const countryCapital = data[0].capital;

    const countryCurrency = data[0].currencies[0].name;

    const countryFact = `${countryCapital} is the Capital of ${countryName} with ${countryCurrency} as its currency.`;

    console.log(countryFact);
  } catch (error) {
    console.log(error);
  }
};

getIndonesiaData();
