let images = [['redesignimages/1-1.jpg', 
                    'redesignimages/1-2.jpg', 
                    'redesignimages/1-3.jpg'],
                ['redesignimages/2-1.jpeg',
                    'redesignimages/2-2.jpeg',
                    'redesignimages/2-3.jpeg'],
                ['',
                    '',
                    '']]
let marks = [['Length (encodes the percentage of people who spend a certain amount)', 
                    'Area (encodes the percentage of people who spend a certain amount)', 
                    'Area (encodes the percentage of people who spend a certain amount)', 'Size (encodes percentage), color (encodes the different groups)'],
                ['Length (encodes the number of calories and the amount of caffeine in a given drink)',
                    'Circle (encodes which drink is being refered to)',
                    'Point (encodes the amount of calories and amount of caffiene in a given drink)'], 
                ['',
                    '',
                    '']]
let channels = [['Length (encodes percentage), color (encodes the different groups), position (encodes the order of the price ranges from least to most, left to right)',
                     'Size (encodes percentage), color (encodes the different groups)', 
                     'Size (encodes percentage), color (encodes the different groups)'],
                ['Length (encodes number of calories and amount of caffeine), Color (encodes calories versus caffeine), Position (encodes number of calories from least to most, left to right)',
                    'Position (encodes number of calories and amount of caffeine from least to most, left to right, and down to up)',
                    'Position (encodes number of calories and amount of caffeine from least to most, left to right, and down to up), Color (encodes calories (dark brown) and caffeine (light brown))'],
                ['',
                    '',
                    '']]

let rationales = [['I think this is my best redesign.  It improves on the original in 2 key ways.  First, the length of each bar is much more obvious than the sizes of the squares that were in the original, making it much easier to tell which price range had the highest percentage.  Second, it shows the bars in order from the lowest average price to the highest.  This helps to clarify the pattern of responses as a bell-curve, providing insight to the relative spending habits between different groups of people and the frequency at which the different spending habits occur.',
                        'Redesigning the chart as a tree map improves on the original by making it much more obvious what the size of each region is.  It also provides a label inside of each region, making it much easier to read since you no longer must rely on a key to tell you what region corresponds to what group.  The only issue that remains is the fact that the order of the price ranges is not clear (e.g.., the $100-$200 range is not placed relative to the about $100 and $200-$300 ranges)',
                        'This redesign improves on the original since it removes the overlap factor and ensures that you can clearly see the size of each section of the chart.  However, this design introduces the issue that it is more difficult to compare the sizes of two sections without looking at the labels.  Finally, the reliance on the key and lack of order within the price ranges make this the worst of the three redesigns, even though it is still better than the original.'],
                ['General Changes: There were some changes I made that are present in all 3 of the redesigns. First, I decluttered the dataset to only include the information relevant to caffeine and coffee, rather than including food items like Big Macs and Fries. This served two purposes: by narrowing the scope, the visualization is more digestible, additionally, it made the visualization more truthful by only listing Starbucks coffee, which is what the data source was pulled from. In order to improve truthfulness, I also added a subheading which specifies that the calories in coffee are based specifically off of Starbucks coffee calories. In addition, the coordinate plan is moved to have a (0,0) point rather than the center being at (150,150) which can be confusing for the viewer. Finally, I removed the coffee and food graphic images because they were repeatedly used to represent different items which made them useless and added to the clutter in the visualization.\n\nRedesign 1 Changes: This is the best of my redesigns. It improves on the original in multiple ways. First, it is easy to compare the calorie to caffeine ratio of different drinks due to the stacked bar format. A viewer can easily see which items have the most calories and quickly compare that to its caffeine amount. The colors are visually appealing and the brown hues remind the viewer of coffee. Additionally, all of the information is easy to comprehend due to the labels on the individual bars and the clear font underneath each bar which names the specific drink.',
                
                    'General Changes: There were some changes I made that are present in all 3 of the redesigns. First, I decluttered the dataset to only include the information relevant to caffeine and coffee, rather than including food items like Big Macs and Fries. This served two purposes: by narrowing the scope, the visualization is more digestible, additionally, it made the visualization more truthful by only listing Starbucks coffee, which is what the data source was pulled from. In order to improve truthfulness, I also added a subheading which specifies that the calories in coffee are based specifically off of Starbucks coffee calories. In addition, the coordinate plan is moved to have a (0,0) point rather than the center being at (150,150) which can be confusing for the viewer. Finally, I removed the coffee and food graphic images because they were repeatedly used to represent different items which made them useless and added to the clutter in the visualization.\n\nRedesign 2 Changes: The original visualization was most similar to this redesign but the advantage of this redesign is it simplifies the specific points in the visualization into circles which makes them more readable. In the original visualization, the labels were hard to read on each data point and the pictures on the graph were confusing because they were repeatedly used to represent different data, this graph eliminates this problem. The visualization is also easy to read and understand.',
                    'General Changes: There were some changes I made that are present in all 3 of the redesigns. First, I decluttered the dataset to only include the information relevant to caffeine and coffee, rather than including food items like Big Macs and Fries. This served two purposes: by narrowing the scope, the visualization is more digestible, additionally, it made the visualization more truthful by only listing Starbucks coffee, which is what the data source was pulled from. In order to improve truthfulness, I also added a subheading which specifies that the calories in coffee are based specifically off of Starbucks coffee calories. In addition, the coordinate plan is moved to have a (0,0) point rather than the center being at (150,150) which can be confusing for the viewer. Finally, I removed the coffee and food graphic images because they were repeatedly used to represent different items which made them useless and added to the clutter in the visualization.\n\nRedesign 3 Changes: This redesign allows for the viewer to compare calories and caffeine in each drink by looking at side by side points. This way of viewing the data is easy to read and highlights the contrast between calories and caffeine in certain drinks, which improves the insightfulness of the visualization. The points are large enough that the viewer can easily see them and the labels for each drink are clear and easy to read.'],
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