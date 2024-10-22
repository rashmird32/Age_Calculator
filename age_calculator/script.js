const inputDate = document.querySelector("#date");
const output = document.querySelector("#output");

inputDate.addEventListener("change", () => {
  const birthDate = new Date(inputDate.value);
  const currentDate = new Date();
  const newDate = new Date(currentDate - birthDate);

  const years = newDate.getFullYear() - 1970;
  const months = newDate.getMonth();
  const dayCalc = newDate.getDay();
  console.log(dayCalc);
  const days = newDate.getDay();

  output.innerText = `You are ${years} years ${months} months ${days} days old.`;
});
