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

export { cleanDate, cleanDates }