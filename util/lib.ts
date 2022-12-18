export const getEpisodes = async (access_token : string) => {
    const response = await fetch("https://api.spotify.com/v1/shows/3WNL9lM9zyI79CsxN5xwe1/episodes?offset=0&limit=10&market=PL", {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
    const data = await response.json();
    return data.items;
};

export async function getAccessToken() {
    const base64 = require('base-64');
  
    // Encode the client ID and client secret in base64
    const encoded = base64.encode(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`);
  
    try {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${encoded}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials',
      });
  
      const data = await response.json();
      const accessToken = data.access_token;
      return accessToken;
    } catch (error) {
      console.error(error);
    }
  }

  export function msToTime(miliseconds:number) {
    let seconds = Math.floor((miliseconds / 1000) % 60);
    let secondsString : string;
    if (seconds < 10) secondsString = `0${seconds}`
    else secondsString = `${seconds}`;
    let minutes = Math.floor((miliseconds / (1000 * 60)) % 60);
    let minutesString : string;
    if (minutes < 10) minutesString = `0${minutes}`
    else minutesString = `${minutes}`;
    let hours = Math.floor((miliseconds / (1000 * 60 * 60)) % 24);
    let hoursString : string;
    if (hours < 10) hoursString = `0${hours}`
    else hoursString = `${hours}`;
    return `${hoursString}:${minutesString}:${secondsString}`;
  }