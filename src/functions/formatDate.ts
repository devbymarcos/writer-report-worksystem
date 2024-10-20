export function formatDate(dateString: string) {
  const formattedDate = dateString.split("T")[0].split("-").reverse().join("/");
  return formattedDate;
}
