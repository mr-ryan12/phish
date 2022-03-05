const cleanDates = data => {
  const cleanedDates = data.map(show => {
    const [year, month, day] = show.date.split('-')

    if (year.length === 4) {
      show.date = [month, day, year].join('-')
    } else {
      show.date = [month, day, year].join('-')
    }
    return show
  })
  return cleanedDates
}

const cleanDate = show => {
  const [year, month, day] = show.date.split('-')
  show.date = [month, day, year].join('-')

  return show
}

const cleanTrackNames = show => {
  show.tracks.map(track => {
    if (track.title.includes('Funky')) {
      track.title = 'Funky'
    }
  })
  return cleanDate(show)
}

const cleanTrackName = track => {
  if (track.title.includes('Funky')) {
    track.title = 'Funky'
  }

  return track
}

export { cleanDate, cleanDates, cleanTrackNames, cleanTrackName }