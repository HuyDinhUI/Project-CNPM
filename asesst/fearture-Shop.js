Elementlogo=document.getElementById('logo')
Elementlogo.onclick=function changepage_home(){
    location.href="http://127.0.0.1:5500/cosmetic.html"
}

// ======================================== GET PRODUCT ================================= //

var ProductApi='http://localhost:3000/product'
function start(){
    getProduct(renderProduct)
}

start()

function getProduct(callback){
    fetch(ProductApi)
    .then(function(response){
        return response.json()
    })
    .then(callback)
    .finally(function(){
        Active_like()
        Active_star()
    })
    
}

function renderProduct(Product){
    var main=document.querySelector(".grid")
    var htmls=Product.map(function(Product){
        return `
        <div class="container_product">
           <div class="home_product">
               <div class="img_product">
                <img class="img_product" src=${Product.img}>
                
               </div>
               <h3 class="name_product">${Product.name}</h3>
            </div>
            <div class="price_product">
               <span class="price_old--product">${Product.priceOld +"$"}</span>
               <span class="price_new--product">${Product.priceNew +"$"}</span>
            </div>
            <div  class="action">
            <span class="action_like">
                <i  class="fa-regular fa-heart"></i>
            </span>
            <span class="action_rank">
                <div class="icon_rank1 rank"><i class="fa-solid fa-star"></i></div>
                <div class="icon_rank2 rank"><i class="fa-solid fa-star"></i></div>
                <div class="icon_rank3 rank"><i class="fa-solid fa-star"></i></div>
                <div class="icon_rank4 rank"><i class="fa-solid fa-star"></i></div>
                <div class="icon_rank5 rank"><i class="fa-solid fa-star"></i></div>
            </span>
        </div>
    </div>
        
        `
    })
    main.innerHTML=htmls.join('')
}



// =============================== FEATURE ================================= //


function Active_like(){
    var ElementContainerHeart=document.querySelectorAll('.action_like')

    ElementContainerHeart.forEach(function(e){
        e.onclick=function(){
            if (!this.querySelector('.fa-solid.fa-heart'))
            {
                this.querySelector('.fa-regular.fa-heart').classList.remove('fa-regular')
                this.querySelector('.fa-heart').classList.add('fa-solid')

            } else{
                
                this.querySelector('.fa-solid.fa-heart').classList.remove('fa-solid')
                this.querySelector('.fa-heart').classList.add('fa-regular')
            } 
        }
    })
}

function Active_star(){
    ElementRank=document.querySelectorAll('.action_rank')
    console.log(ElementRank)
    ElementRank.forEach(function(r){
        ElementStar=r.querySelectorAll('.rank')
        ElementStar.forEach(function(e){
            e.onclick=function()
            {   if (this.classList[2]==undefined)
                {
                    
                    if (this.classList=='icon_rank1 rank')
                    {
                            this.querySelector('i').classList.add('active_rank') 
                    } 
                    else 
                    {
                        if (this.classList=='icon_rank2 rank') 
                        {
                                this.parentElement.querySelector('.icon_rank1').classList.add('active_rank')
                                this.parentElement.querySelector('.icon_rank2').classList.add('active_rank')
                        }
                        else 
                        {
                            if (this.classList=='icon_rank3 rank') 
                            {
                                this.parentElement.querySelector('.icon_rank1').classList.add('active_rank')
                                this.parentElement.querySelector('.icon_rank2').classList.add('active_rank')
                                this.parentElement.querySelector('.icon_rank3').classList.add('active_rank')
                                    
                            }
                            else 
                            {
                                if (this.classList=='icon_rank4 rank') 
                                {
                                    this.parentElement.querySelector('.icon_rank1').classList.add('active_rank')
                                    this.parentElement.querySelector('.icon_rank2').classList.add('active_rank')
                                    this.parentElement.querySelector('.icon_rank3').classList.add('active_rank')
                                    this.parentElement.querySelector('.icon_rank4').classList.add('active_rank')
                                    
                                }
                                else 
                                {
                                    this.parentElement.querySelector('.icon_rank1').classList.add('active_rank')
                                    this.parentElement.querySelector('.icon_rank2').classList.add('active_rank')
                                    this.parentElement.querySelector('.icon_rank3').classList.add('active_rank')
                                    this.parentElement.querySelector('.icon_rank4').classList.add('active_rank')
                                    this.parentElement.querySelector('.icon_rank5').classList.add('active_rank')
                                }
                            }
                        }
                    }
                }
                else 
                {
                    if (this.classList=='icon_rank1 rank active_rank')
                    {
                            console.log(this.classList)
                            
                            this.parentElement.querySelector('.icon_rank2').classList.remove('active_rank')
                            this.parentElement.querySelector('.icon_rank3').classList.remove('active_rank')
                            this.parentElement.querySelector('.icon_rank4').classList.remove('active_rank')
                            this.parentElement.querySelector('.icon_rank5').classList.remove('active_rank')
                            
                    } 
                    else 
                    {
                        if (this.classList=='icon_rank2 rank active_rank') 
                        {
                            console.log(this.classList)
                            
                            this.parentElement.querySelector('.icon_rank3').classList.remove('active_rank')
                            this.parentElement.querySelector('.icon_rank4').classList.remove('active_rank')
                            this.parentElement.querySelector('.icon_rank5').classList.remove('active_rank') 
                        }
                        else 
                        {
                            if (this.classList=='icon_rank3 rank active_rank') 
                            {
                                
                                this.parentElement.querySelector('.icon_rank4').classList.remove('active_rank')
                                this.parentElement.querySelector('.icon_rank5').classList.remove('active_rank')
                                    
                            }
                            else 
                            {
                                if (this.classList=='icon_rank4 rank active_rank') 
                                {
                                    
                                    this.parentElement.querySelector('.icon_rank5').classList.remove('active_rank')
                                    
                                }
                                
                            }
                        }
                    }
                }

            }
            
        })
    })
        

}


function sort_price(){
    getProduct(function(pr){
        pr.sort(function(a,b){
            var a1=a.priceNew, b1=b.priceNew
            if (a1==b1) return 0
            return a1>b1? 1: -1
        })
        renderProduct(pr)
       
    })
    
}

function resers_price(){
    getProduct(function(pr){
        pr.sort(function(a,b){
            var a1=a.priceNew, b1=b.priceNew
            if (a1==b1) return 0
            return a1<b1? 1: -1
        })
        renderProduct(pr)
       
    })
    
}

function Max_Price(){
    getProduct(function(pr){
        var max=Math.max(...pr.map(n=>{
            return n.priceNew
        }))
        console.log(max)
        let MaxProduct=pr.filter(pr => {
            return pr.priceNew==max
        })
        document.querySelector('.grid').innerHTML=""
        renderProduct(MaxProduct)
    })
}

function Max_Sale(){
    getProduct(function(pr){
        var max=Math.max(...pr.map(n=>{
            return n.priceOld-n.priceNew
        }))
        console.log(max)
        let MaxProduct=pr.filter(pr => {
            return pr.priceOld-pr.priceNew==max
        })
        document.querySelector('.grid').innerHTML=""
        renderProduct(MaxProduct)
    })
}

function Min_Price(){
    getProduct(function(pr){
        var min=Math.min(...pr.map(n=>{
            return n.priceNew
        }))
        console.log(min)
        let MaxProduct=pr.filter(pr => {
            return pr.priceNew==min
        })
        document.querySelector('.grid').innerHTML=""
        renderProduct(MaxProduct)
    })
}

function SearchProduct(){
    var ValueInput=document.getElementById("ips").value
    getProduct(function(pr){
       console.log(pr)
       let ProductSearch=pr.filter(pr => {
        return pr.name.toLowerCase().includes(ValueInput)
       })
    document.querySelector('.grid').innerHTML=""
    renderProduct(ProductSearch)

    })
}
 

 
