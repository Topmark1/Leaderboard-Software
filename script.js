
//accessing element that would help to insert candidate profile and score
let firstt = document.querySelector('#inpu1')
let lastt = document.querySelector('#inpu2')
let countryy = document.querySelector('#inpu3')
let scoree = document.querySelector('#inpu4')
 base = document.querySelector('#base')
let fill = document.querySelector('p')
fill.style.cssText='text-align:center;color:red'
let button = document.querySelector('button')

function currentDate(){
  const now = new Date()
    const year = now.getFullYear()
  let monthword =['January','February','March','April','May','June',
  'July','August','September','October','November','December']
    let month = monthword[now.getMonth() + 1]
    let date = now.getDate()
    let hours = now.getHours()
    let min = now.getMinutes()
    let sec = now.getSeconds()
    if (date < 10) {date = '0' + date}
      if (hours < 10){hours = '0' + hours}
  //if (month < 10){month = '0' + month}// month in number
     if (min < 10)  {min = '0' + min}
    if(sec < 10)   {sec = '0' + sec}
  let time = month+' '+date+', '+year+' '+hours+':'+min+':'+sec
  return time}

//creating array to take in data of each candidate
 arr = []

//button to create and style each candidate details and score
button.addEventListener('click',()=>{

//condition for if any input is not empty 
if (firstt.value.trim().length != 0 && lastt.value.trim().length != 0 && countryy.value.trim().length != 0 && scoree.value.trim().length != 0){

//accessing candidate input values
first = firstt.value
last = lastt.value
country = countryy.value
let score = [scoree.value]


//creating candidate input divs and button
let ansBox = document.createElement('div')
let innerName = document.createElement('div')
let innerDate = document.createElement('p')
let innerCountry = document.createElement('div')
let innerScore = document.createElement('div')
let innerDelete = document.createElement('button')
let innerAdd = document.createElement('button')
let innerMinus = document.createElement('button')

//styling candidate input divs and button
ansBox.style.cssText = 'margin:0px 0px 5px 0px;background-color:rgb(204, 136, 147);width:700px;height:50px;display:flex'
innerName.innerHTML = first +' '+last
innerName.style.cssText = 'width:270px;font-size:24px;margin:4px 30px'

innerDate.innerHTML = currentDate()//'July 22 2022 02:30'
innerDate.style.cssText ='position:absolute;margin:30px 30px;font-size:14px'
innerCountry.innerHTML = country
innerCountry.style.cssText ='width:160px;margin:12px 0px;font-size:24px'
innerScore.style.cssText ='width:85px;margin:8px 0px;font-size:28px'

innerDelete.style.cssText ='width:35px;height:35px;border-radius:100% 100%;margin:7px 7px 9px 0px;background:url("delete.png");background-color:white;'
innerDelete.addEventListener('mouseover',()=>{innerDelete.style.cssText ='width:35px;height:35px;border-radius:100% 100%;margin:7px 7px 9px 0px;background:url("delete.png");background-color:#fa86c4;'})
innerDelete.addEventListener('mouseleave',()=>{innerDelete.style.cssText ='width:35px;height:35px;border-radius:100% 100%;margin:7px 7px 9px 0px;background:url("delete.png");background-color:white;'})

innerAdd.innerHTML = '+5'
innerAdd.style.cssText ='width:35px;height:35px;border-radius:100% 100%;background-color:white;margin:7px 9px;color:black'
innerAdd.addEventListener('mouseover',()=>{innerAdd.style.cssText ='width:35px;height:35px;border-radius:100% 100%;background-color:green;margin:7px 9px;color:black'})
innerAdd.addEventListener('mouseleave',()=>{innerAdd.style.cssText ='width:35px;height:35px;border-radius:100% 100%;background-color:white;margin:7px 9px;color:black'})

innerMinus.innerHTML = '-5'
innerMinus.style.cssText ='width:35px;height:35px;border-radius:100% 100%;background-color:white;margin:7px 9px;color:black'
innerMinus.addEventListener('mouseover',()=>{innerMinus.style.cssText ='width:35px;height:35px;border-radius:100% 100%;background-color:white;margin:7px 9px;color:black;background-color:red' })
innerMinus.addEventListener('mouseleave',()=>{innerMinus.style.cssText ='width:35px;height:35px;border-radius:100% 100%;background-color:white;margin:7px 9px;color:black' })
fill.innerHTML = ''

innerScore.innerHTML = score
//completion of styling and inserting to inner HTMLs//


//writing what the plus button and minus will do
innerAdd.addEventListener('click',()=>{score = score *1 + 5
innerScore.innerHTML = score

base.innerHTML=''
//arr contains {Score:score;Elem:ansBox;key:(random number)}

  for(p=0;p<arr.length;p++){
if(key == arr[p].key ){
  console.log(arr[p].Elem)
 arr[p].Score = score*1}}

//REARRANGING DATA
arr.sort((a, b) => {
  if (a.Score < b.Score) return 1
  if (a.Score > b.Score) return -1
  return 0})

//accessing arranged candidate data and appending the final div for display
for (i = 0;i<arr.length;i++){
base.appendChild(arr[i].Elem)}
})

innerMinus.addEventListener('click',()=>{score = score *1 - 5
innerScore.innerHTML = score 


base.innerHTML=''
//arr contains {Score:score;Elem:ansBox;key:(random number)}

  for(p=0;p<arr.length;p++){
if(key == arr[p].key ){
  console.log(arr[p].Elem)
 arr[p].Score = score*1}}

//REARRANGING DATA
arr.sort((a, b) => {
  if (a.Score < b.Score) return 1
  if (a.Score > b.Score) return -1
  return 0})

//accessing arranged candidate data and appending the final div for display
for (i = 0;i<arr.length;i++){
base.appendChild(arr[i].Elem)}
 })



//writing what the delete button will do
innerDelete.addEventListener('click',()=>{ansBox.innerHTML=''
ansBox.style.cssText=''})


//appending candidate details and styles to a single div
ansBox.appendChild(innerDate)
ansBox.appendChild(innerName)
ansBox.appendChild(innerCountry)
ansBox.appendChild(innerScore)
ansBox.appendChild(innerDelete)
ansBox.appendChild(innerAdd)
ansBox.appendChild(innerMinus)

//writing code to store and sort each candiate data base on score difference
let obj = {}
let key = Math.random()
console.log(key)
obj.Score = score*1




obj.Elem = ansBox
obj.key = key
arr.push(obj)
arr.sort((a, b) => {
  if (a.Score < b.Score) return 1
  if (a.Score > b.Score) return -1
  return 0})

//accessing arranged candidate data and appending the final div for display
for (i = 0;i<arr.length;i++){
base.appendChild(arr[i].Elem)}
}//end of the 'if' condition 

//conclusion of condition if input is empty
else{fill.innerHTML = 'All fields are required'}

})
