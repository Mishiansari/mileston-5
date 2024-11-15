"use strict";
let name = localStorage.getItem("name");
window.addEventListener('load', () => {
    let degis = localStorage.getItem("degis");
    let phone = localStorage.getItem("phone");
    let email = localStorage.getItem("email");
    let add = localStorage.getItem("add");
    let pass = localStorage.getItem("pass");
    let deg = localStorage.getItem("deg");
    let uni = localStorage.getItem("uni");
    let pass2 = localStorage.getItem("pass2");
    let deg1 = localStorage.getItem("deg1");
    let uni1 = localStorage.getItem("uni1");
    let skill1 = localStorage.getItem(" skill1");
    let skill2 = localStorage.getItem("skill2");
    let skill3 = localStorage.getItem("skill3");
    let skill4 = localStorage.getItem("skill4");
    let skill5 = localStorage.getItem("skill5");
    let lang1 = localStorage.getItem("lang1");
    let lang2 = localStorage.getItem("lang2");
    let styear = localStorage.getItem("styear");
    let endyear = localStorage.getItem(" endyear");
    let company = localStorage.getItem("company");
    let comlocation = localStorage.getItem("comlocation");
    let jobtitle = localStorage.getItem("jobtitle");
    let about = localStorage.getItem('about');
    let picure = localStorage.getItem('profile_pic');
    let resumeName = document.getElementById('resumeName');
    resumeName.textContent = name;
    let resdegi = document.getElementById('resdegi');
    resdegi.textContent = degis;
    let resumephone = document.getElementById('resumephone');
    resumephone.textContent = phone;
    let resumeemail = document.getElementById('resumeemail');
    resumeemail.textContent = email;
    let resumeadd = document.getElementById('resumeadd');
    resumeadd.textContent = add;
    let passyear = document.getElementById('passyear');
    passyear.textContent = pass;
    let resumedegre = document.getElementById('resumedegre');
    resumedegre.textContent = deg;
    let resumeuni = document.getElementById('resumeuni');
    resumeuni.textContent = uni;
    let resumepass = document.getElementById("resumepass");
    resumepass.textContent = pass2;
    let resumedeg2 = document.getElementById('resumedeg2');
    resumedeg2.textContent = deg1;
    let resumeuni2 = document.getElementById('resumeuni2');
    resumeuni2.textContent = uni1;
    let resumelang1 = document.getElementById('resumelang1');
    resumelang1.textContent = lang1;
    let resumelang2 = document.getElementById('resumelang2');
    resumelang2.textContent = lang2;
    let resumeskill1 = document.getElementById('resumeskill1');
    resumeskill1.textContent = skill1;
    let resumeskill2 = document.getElementById('resumeskill2');
    resumeskill2.textContent = skill2;
    let resumeskill3 = document.getElementById('resumeskill3');
    resumeskill3.textContent = skill3;
    let resumeskill4 = document.getElementById('resumeskill4');
    resumeskill4.textContent = skill4;
    let resumeskill5 = document.getElementById('resumeskill5');
    resumeskill5.textContent = skill5;
    let resumestrarty = document.getElementById('resumestrarty');
    resumestrarty.textContent = styear;
    let resumeendy = document.getElementById('resumeendy');
    resumeendy.textContent = endyear;
    let resumecompname = document.getElementById('resumecompname');
    resumecompname.textContent = company;
    let resumecompanyloc = document.getElementById('resumecompanyloc');
    resumecompanyloc.textContent = comlocation;
    let resumejobtitle = document.getElementById('resumejobtitle');
    resumejobtitle.textContent = jobtitle;
    let resumeabout = document.getElementById('resumeabout');
    resumeabout.textContent = about;
    let resumeimg = document.getElementById('resumeimg');
    resumeimg.src = picure;
});
///////.................... downbtn...............
let Downloadpdf = document.getElementById('Downloadpdf');
Downloadpdf?.addEventListener("click", () => {
    window.print();
});
//////.....................shareable link........./////////////////
let Shareable_btn = document.getElementById('Shareable_btn');
let ancer = document.getElementById('ancer');
let userName;
if (name) {
    userName = name.toLowerCase().replace(/\s+/g, '-');
}
else {
    userName = "user";
}
let baseUrl = "http://127.0.0.1:5500/Milestone1-2/resume.html";
let uniqueUrl = `${baseUrl}?/${name}`;
Shareable_btn?.addEventListener('click', () => {
    ancer?.setAttribute('href', uniqueUrl);
});
//////.......copy link......//////
let copy_btn = document.getElementById('copy_btn');
copy_btn?.addEventListener("click", () => {
    navigator.clipboard.writeText(uniqueUrl).then(() => {
        alert("copy completed");
    });
});
