export default function randomString(length: number = 16): string {
  const randChar = () =>
    String.fromCharCode(65 + Math.floor(Math.random() * 26));
  return Array.from({ length }, randChar).join("").toLowerCase();
}
