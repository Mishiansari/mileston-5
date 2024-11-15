let myname:any=document.getElementById('myname')
let degis:any=document.getElementById('degis')
let phone:any=document.getElementById('phone')
let email:any=document.getElementById('email')
let add:any=document.getElementById('add')
let pass:any=document.getElementById('pass')
let deg:any=document.getElementById('deg')
let uni:any=document.getElementById('uni')
let pass2:any=document.getElementById('pass2')
let deg1:any=document.getElementById('deg1')
let uni1:any=document.getElementById('uni1')
let skill1:any=document.getElementById('skill1')
let skill2:any=document.getElementById('skill2')
let skill3:any=document.getElementById('skill3')
let skill4:any=document.getElementById('skill4')
let skill5:any=document.getElementById('skill5')
let lang1:any=document.getElementById('lang1')
let lang2:any=document.getElementById('lang2')
let styear:any=document.getElementById('styear')
let endyear:any=document.getElementById('endyear')
let company:any=document.getElementById('company')
let comlocation:any=document.getElementById('comlocation')
let jobtitle:any=document.getElementById('jobtitle')
let pic:any=document.getElementById('pic')
let about:any=document.getElementById('about')

let submitbtn=document.getElementById('submitbtn');
let form=document.getElementById('form')

form?.addEventListener('submit',(e)=>{
    e.preventDefault()

    localStorage.setItem("name",myname.value)
    localStorage.setItem("degis",degis.value)
    localStorage.setItem("phone",phone.value)
    localStorage.setItem("email",email.value)
    localStorage.setItem("add",add.value)
    localStorage.setItem("pass",pass.value)
    localStorage.setItem("deg",deg.value)
    localStorage.setItem("uni",uni.value)
    localStorage.setItem("pass2",pass2.value)
    localStorage.setItem("deg1",deg1.value)
    localStorage.setItem("uni1",uni1.value)
    localStorage.setItem(" skill1", skill1.value)
    localStorage.setItem("skill2",skill2.value)
    localStorage.setItem("skill3",skill3.value)
    localStorage.setItem("skill4",skill4.value)
    localStorage.setItem("skill5",skill5.value)
    localStorage.setItem("lang1",lang1.value)
    localStorage.setItem("lang2",lang2.value)
    localStorage.setItem("styear",styear.value)
    localStorage.setItem(" endyear", endyear.value)
    localStorage.setItem("company",company.value)
    localStorage.setItem("comlocation",comlocation.value)
    localStorage.setItem("jobtitle",jobtitle.value)
    localStorage.setItem('about',about.value)
 

       if(pic.files && pic.files[0]){
           let reader= new FileReader()
           reader.addEventListener('load',()=>{
            let textimg:any=reader.result
            localStorage.setItem('profile_pic',textimg)
           })
           reader.readAsDataURL(pic.files[0])
       }

  window.location.href="./Milestone1-2/resume.html"
    



})
     