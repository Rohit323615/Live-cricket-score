

const APIKEY='wdyGEtWCIBSlBqBG0OtZ9nKtGLH2'

 export const getMatches=()=>{
    const URL=`https://cricapi.com/api/matches?apikey=${APIKEY}`
      return fetch(URL).then((res)=>res.json()).catch((err)=>console.log(err))
}

export const getMatchScore=(id)=>{
  const url=`https://cricapi.com/api/cricketScore?apikey=${APIKEY}&unique_id=${id}`
  return fetch(url).then((res)=>res.json()).catch((err)=>console.log(err))
}

export const getOldMatches=()=>{
  const Url=`https://cricapi.com/api/cricket?apikey=${APIKEY}`
  return fetch(Url).then((res)=>res.json()).catch((err)=>console.log(err))
}

