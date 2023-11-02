var myImage= document.querySelector("#imageid");
var toptext= document.querySelector("#top_text")
var bottomtext = document.querySelector("#bottom_text")

function FirstImage()
{
    myImage.src="https://imgs.search.brave.com/rphJoAd006-Yex_5wSTleYkd0SxJ5WTl94se30--1gI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmlt/Z2ZsaXAuY29tLzQv/YzhiZHQuanBn";
}

function SecondImage()
{
    myImage.src="https://imgs.search.brave.com/EikMz6krzvEKatLqHog80d-FE7eAu4ku4fQEP4i0wJM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmlt/Z2ZsaXAuY29tLzQv/MWZ3MGZ6LmpwZw"
}
function ThirdImage()
{
    myImage.src='https://imgs.search.brave.com/WtGpoGB1JAf-GtoIcveuZdTJevkHGFWvMq2vXGd9xO4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2YxL2Uz/LzNmL2YxZTMzZjgy/ZjcyYTI0ZTEwOGJl/YzA1Njg5ZDhlNjk3/LmpwZw'
}
function FourthImage()
{
    myImage.src="https://imgs.search.brave.com/O8Ql23wrmhLWRloIg1mI1AEENVo9jGEau2-OJ5XrD1E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pY2hl/Zi5iYmNpLmNvLnVr/L25ld3MvOTc2L2Nw/c3Byb2RwYi9GMUYy/L3Byb2R1Y3Rpb24v/XzExODI4MzkxNl9i/MTljNWExZi0xNjJi/LTQxMGItODE2OS1m/NThmMGQxNTM3NTIu/anBn"
}
function Top_Text(){
    toptext.innerText= document.getElementById("txtbox_top").value
}
function Bottom_Text(){
    bottomtext.innerText=document.getElementById("txtbox_bottom").value
}


function ChangeColorbottom(){
    let color= document.getElementById('colorpicker').value;
    document.getElementById("bottom_text").style.color = color;
    document.getElementById("top_text").style.color = color;
    
}
function changefontsize(){
    let size= document.getElementById('font_size').value;
    document.getElementById('bottom_text').style.size = size;
    document.getElementById('top_text').style.fontSize = size;
}
