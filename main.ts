input.onButtonPressed(Button.A, function () {
    i = 0
    sum = 0
    for (let index = 0; index < score.length; index++) {
        sum = sum + score[i]
        i += 1
    }
    basic.showNumber(sum)
})
input.onButtonPressed(Button.B, function () {
    average = sum / score.length
    basic.showNumber(average)
})
let average = 0
let sum = 0
let i = 0
let score: number[] = []
score = [60, 70, 80, 90]
