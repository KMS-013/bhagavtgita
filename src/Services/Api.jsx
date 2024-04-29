const url = "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?limit=18";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "38dd78472cmsh5bce6ee96adccc6p164b94jsnbcf19f9ee62d",
    "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log("result", result);
} catch (error) {
  console.error(error);
}
