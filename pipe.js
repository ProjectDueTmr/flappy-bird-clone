function createPipe() {
    const pipeElement = document.createElement('div');
    const topElemment = createPipeSegment('top')
    const bottomElemment = createPipeSegment('bottom')
    pipeElement.append(topElemment);
    pipeElement.append(bottomElemment);
    pipeElement.classList.add('pipe')
    pipeElement.style.setProperty('--hole-top', randomNumberBetween())
}

function createPipeSegment(position) {
const segment = document.createElement('div')
segment.classList.add('segment', position)
return segment
}

function randomNumberBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}   