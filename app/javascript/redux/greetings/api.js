export const fetchGreetings = async () => {
  const response = await fetch("/api/greeting");
  const greetings = await response.json();
  return greetings;
}