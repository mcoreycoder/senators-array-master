import Senators from './data/senators'

//filter.map.reduce

export const republicans = () => {
  return Senators.filter (senator => senator.party === "Republican")
}

export const democrats = () => {
  return Senators.filter (senator => senator.party === "Democrat")
}

export const independents = () => {
  return Senators.filter (senator => senator.party === "Independent")
}

export const males = () => {
  return Senators.filter (senator => senator.person.gender === "male")
}

export const females = () => {
  return Senators.filter (senator => senator.person.gender === "female")
}

export const byState = (state = 'UT') => {
  return Senators.filter (senator => senator.state === state)
}

export const mapping = () => {
  return Senators.map (senator => {
    return {
      firstName: senator.person.firstName,
      lastName: senator.person.lastName,
      party: senator.party,
      gender: senator.person.gender
    }
  })
}

export const birthplaceSeniorSenator = () => {
  return (byState().filter(senator => senator.senator_rank === "senior")).reduce((accumulator, currentValue) => currentValue);
 }


const REPLACE_ME_WITH_CODE = false
