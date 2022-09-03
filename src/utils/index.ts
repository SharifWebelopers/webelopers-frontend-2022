function convertNumberToEnglish(numberStr: string): string {
  const NUMBER_MAPPING: any = {
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9",
  };

  return NUMBER_MAPPING[numberStr] ?? numberStr;
}

export function normalizePhoneNumber(phoneNumber: string): string {
  let normalizedNumber = "";
  for (const numberStr of phoneNumber) {
    normalizedNumber += convertNumberToEnglish(numberStr);
  }

  return normalizedNumber;
}
