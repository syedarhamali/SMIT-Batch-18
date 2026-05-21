function* netflixSeries(){ //generator function
    yield 'Episode 1'
    yield 'Episode 2'
    yield 'Episode 3'
}

const watch = netflixSeries()

console.log(watch.next())
