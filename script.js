let images = [['redesignimages/1-1.jpg', 
                    'redesignimages/1-2.jpg', 
                    'redesignimages/1-3.jpg'],
                ['',
                    '',
                    ''],
                ['',
                    '',
                    '']]
let marks = [['Length (encodes the percentage of people who spend a certain amount)', 
                    'Area (encodes the percentage of people who spend a certain amount)', 
                    'Area (encodes the percentage of people who spend a certain amount)', 'Size (encodes percentage), color (encodes the different groups)'],
                ['',
                    '',
                    ''], 
                ['',
                    '',
                    '']]
let channels = [['Length (encodes percentage), color (encodes the different groups), position (encodes the order of the price ranges from least to most, left to right)',
                     'Size (encodes percentage), color (encodes the different groups)', 
                     'Size (encodes percentage), color (encodes the different groups)'],
                ['',
                    '',
                    ''],
                ['',
                    '',
                    '']]

let rationales = [['I think this is my best redesign.  It improves on the original in 2 key ways.  First, the length of each bar is much more obvious than the sizes of the squares that were in the original, making it much easier to tell which price range had the highest percentage.  Second, it shows the bars in order from the lowest average price to the highest.  This helps to clarify the pattern of responses as a bell-curve, providing insight to the relative spending habits between different groups of people and the frequency at which the different spending habits occur.',
                        'Redesigning the chart as a tree map improves on the original by making it much more obvious what the size of each region is.  It also provides a label inside of each region, making it much easier to read since you no longer must rely on a key to tell you what region corresponds to what group.  The only issue that remains is the fact that the order of the price ranges is not clear (e.g.., the $100-$200 range is not placed relative to the about $100 and $200-$300 ranges)',
                        'This redesign improves on the original since it removes the overlap factor and ensures that you can clearly see the size of each section of the chart.  However, this design introduces the issue that it is more difficult to compare the sizes of two sections without looking at the labels.  Finally, the reliance on the key and lack of order within the price ranges make this the worst of the three redesigns, even though it is still better than the original.'],
                ['',
                    '',
                    ''],
                ['',
                    '',
                    '']]

// Initialize Redesign Boxes

document.querySelector('#image1').src = images[0][0]
document.querySelector('#marks1').innerText = marks[0][0]
document.querySelector('#channels1').innerText = channels[0][0]
document.querySelector('#rationale1').innerText = rationales[0][0]

document.querySelector('#image2').src = images[1][0]
document.querySelector('#marks2').innerText = marks[1][0]
document.querySelector('#channels2').innerText = channels[1][0]
document.querySelector('#rationale2').innerText = rationales[1][0]

document.querySelector('#image3').src = images[2][0]
document.querySelector('#marks3').innerText = marks[2][0]
document.querySelector('#channels3').innerText = channels[2][0]
document.querySelector('#rationale3').innerText = rationales[2][0]

// Event Listeners 1

var button11 = document.querySelector('#redesign11')
var button12 = document.querySelector('#redesign12')
var button13 = document.querySelector('#redesign13')

button11.addEventListener('click', (event) => {
    document.querySelector('#image1').src = images[0][0]
    document.querySelector('#marks1').innerText = marks[0][0]
    document.querySelector('#channels1').innerText = channels[0][0]
    document.querySelector('#rationale1').innerText = rationales[0][0]
})

button12.addEventListener('click', (event) => {
    document.querySelector('#image1').src = images[0][1]
    document.querySelector('#marks1').innerText = marks[0][1]
    document.querySelector('#channels1').innerText = channels[0][1]
    document.querySelector('#rationale1').innerText = rationales[0][1]
})

button13.addEventListener('click', (event) => {
    document.querySelector('#image1').src = images[0][2]
    document.querySelector('#marks1').innerText = marks[0][2]
    document.querySelector('#channels1').innerText = channels[0][2]
    document.querySelector('#rationale1').innerText = rationales[0][2]
})

// Event Listeners 2

var button21 = document.querySelector('#redesign21')
var button22 = document.querySelector('#redesign22')
var button23 = document.querySelector('#redesign23')

button21.addEventListener('click', (event) => {
    document.querySelector('#image2').src = images[1][0]
    document.querySelector('#marks2').innerText = marks[1][0]
    document.querySelector('#channels2').innerText = channels[1][0]
    document.querySelector('#rationale2').innerText = rationales[1][0]
})

button22.addEventListener('click', (event) => {
    document.querySelector('#image2').src = images[1][1]
    document.querySelector('#marks2').innerText = marks[1][1]
    document.querySelector('#channels2').innerText = channels[1][1]
    document.querySelector('#rationale2').innerText = rationales[1][1]
})

button23.addEventListener('click', (event) => {
    document.querySelector('#image2').src = images[1][2]
    document.querySelector('#marks2').innerText = marks[1][2]
    document.querySelector('#channels2').innerText = channels[1][2]
    document.querySelector('#rationale2').innerText = rationales[1][2]
})

// Event Listeners 3

var button31 = document.querySelector('#redesign31')
var button32 = document.querySelector('#redesign32')
var button33 = document.querySelector('#redesign33')

button31.addEventListener('click', (event) => {
    document.querySelector('#image3').src = images[2][0]
    document.querySelector('#marks3').innerText = marks[2][0]
    document.querySelector('#channels3').innerText = channels[2][0]
    document.querySelector('#rationale3').innerText = rationales[2][0]
})

button32.addEventListener('click', (event) => {
    document.querySelector('#image3').src = images[2][1]
    document.querySelector('#marks3').innerText = marks[2][1]
    document.querySelector('#channels3').innerText = channels[2][1]
    document.querySelector('#rationale3').innerText = rationales[2][1]
})

button33.addEventListener('click', (event) => {
    document.querySelector('#image3').src = images[2][2]
    document.querySelector('#marks3').innerText = marks[2][2]
    document.querySelector('#channels3').innerText = channels[2][2]
    document.querySelector('#rationale3').innerText = rationales[2][2]

})