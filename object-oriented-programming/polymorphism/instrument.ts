type InstrumentType = 'viento' | 'cuerda' | 'percusión'

abstract class Instrument {

  constructor(public type: InstrumentType) {

  }

  play() {}
}

class Guitar extends Instrument {
  constructor() {
    super('cuerda')
  }

  play() {
    console.log('🎸 Strum strum strum...')
  }
}

class Flute extends Instrument {
  constructor() {
    super('viento')
  }

  play() {
    console.log('🪈 Toot toot toot...')
  }
}

class Drums extends Instrument {

  constructor() {
    super('percusión')
  }

  play() {
    console.log('🥁 Boom boom boom')
  }
}

class Artist {
  constructor() {}

  playInstrument(instrument: Instrument) {
    instrument.play()
    console.log(instrument.type)
  }
}


const guitar1 = new Guitar()
const flute1 = new Flute()
const drums1 = new Drums() 

const artist1 = new Artist()

artist1.playInstrument(guitar1)
artist1.playInstrument(flute1)
artist1.playInstrument(drums1)