export function formatDate(dateString: string) {
  const formattedDate = dateString.split("T")[0].split("-").reverse().join("/");
  return formattedDate;
}

export function formatDateUI(dateString: string): string {
  if (dateString) {
    const formattedDate = dateString.split("T")[0];
    return formattedDate;
  }

  return "";
}
