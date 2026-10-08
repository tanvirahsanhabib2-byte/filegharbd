const products=[
{name:"Windows 11 Pro",cat:"Windows",icon:"W",price:350},
{name:"Adobe Photoshop 2024",cat:"Adobe",icon:"Ps",price:690},
{name:"Microsoft Office 2021",cat:"Office",icon:"O",price:590},
{name:"Canva Pro",cat:"Subscriptions",icon:"C",price:320},
{name:"CapCut Pro",cat:"Video",icon:"C",price:320},
{name:"Spotify Premium",cat:"Subscriptions",icon:"S",price:320},
{name:"Adobe Premiere Pro",cat:"Adobe",icon:"Pr",price:690},
{name:"ChatGPT Plus",cat:"AI",icon:"AI",price:550}
];
let cart=[];
const grid=document.getElementById("productGrid");
function render(filter="All",query=""){
 const q=query.toLowerCase();
 const list=products.filter(p=>(filter==="All"||p.cat===filter)&&(!q||p.name.toLowerCase().includes(q)||p.cat.toLowerCase().includes(q)));
 grid.innerHTML=list.map((p,i)=>`<article class="product"><div class="product-img">${p.icon}</div><h3>${p.name}</h3><small>${p.cat}</small><div class="stars">★★★★★ <span style="color:#7a8792">4.9</span></div><div class="price">৳ ${p.price}</div><button class="add" onclick="addToCart(${products.indexOf(p)})">Add to Cart</button></article>`).join("")||"<p>No products found.</p>";
}
function addToCart(i){cart.push(products[i]);document.getElementById("cartCount").textContent=cart.length}
function openCart(){
 const modal=document.getElementById("cartModal");modal.classList.add("show");
 const items=document.getElementById("cartItems");
 items.innerHTML=cart.length?cart.map(p=>`<div class="modal-item"><span>${p.name}</span><b>৳ ${p.price}</b></div>`).join(""):"<p>Your cart is empty.</p>";
 document.getElementById("cartTotal").textContent="৳ "+cart.reduce((s,p)=>s+p.price,0);
}
function closeCart(){document.getElementById("cartModal").classList.remove("show")}
function searchProducts(){render("All",document.getElementById("heroSearch").value);document.getElementById("products").scrollIntoView({behavior:"smooth"})}
document.querySelectorAll(".filter-tabs button").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filter-tabs button").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");render(b.dataset.filter)});
document.querySelectorAll(".cat").forEach(b=>b.onclick=()=>{render(b.dataset.filter);document.getElementById("products").scrollIntoView({behavior:"smooth"})});
document.getElementById("cartBtn").onclick=openCart;
document.getElementById("menuBtn").onclick=()=>document.getElementById("mobileNav").classList.toggle("show");
document.getElementById("searchBtn").onclick=()=>document.getElementById("heroSearch").focus();
document.getElementById("heroSearch").addEventListener("keydown",e=>{if(e.key==="Enter")searchProducts()});
render();
