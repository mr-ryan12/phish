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
    return track
  })
  return cleanDate(show)
}

const cleanShowName = show => {
  if (show.venue_name.includes('Gallagher')) {
    show.venue_name = 'Gallagher\'s'
  }
  if (show.venue_name.includes('Biddy')) {
    show.venue_name = 'Biddy Mulligan\'s'
  }
  if (show.venue_name.includes('Nietzsche')) {
    show.venue_name = 'Nietzsche\'s'
  }
  return cleanTrackNames(show)
}

const cleanTrackData = track => {
  const [year, month, day] = track.show_date.split('-')
  track.show_date = [month, day, year].join('-')

  if (track.title.includes('Funky')) {
    track.title = 'Funky'
  }

  return track
}

const cleanShows = shows => {
  const cleanedShows = shows.map(show => {
    if (show.venue_name.includes('Gallagher')) {
      show.venue_name = 'Gallagher\'s'
    }
    if (show.venue_name.includes('Biddy')) {
      show.venue_name = 'Biddy Mulligan\'s'
    }
    if (show.venue_name.includes('Nietzsche')) {
      show.venue_name = 'Nietzsche\'s'
    }
    return show
  })
  return cleanDates(cleanedShows)
}

export { cleanDate, cleanDates, cleanTrackNames, cleanTrackData, cleanShows, cleanShowName }