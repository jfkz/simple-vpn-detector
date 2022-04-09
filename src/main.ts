const ipGeolocationKey = `https://api.ipgeolocation.io/timezone?apiKey=%key`

interface IIPGeoLocationQueryResult {
  timezone: string;
}

export const isVPNDetected = async (ipGeolocationApiKey: string): Promise<boolean | undefined> => {
  const browserTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const url = ipGeolocationKey.replace('%key', ipGeolocationApiKey);

  try {
    const query = await fetch(url);
    const queryResult: IIPGeoLocationQueryResult  = await query.json();
    return browserTimeZone !== queryResult.timezone;
 } catch (err) {
    return undefined;
  }
}
