if(JSON.parse(localStorage.getItem('karzina'))){
    let productArray = []
    productArray = JSON.parse(localStorage.getItem('karzina'));
    const foydalanuchi = JSON.parse(localStorage.getItem('foydalanuchi'));
    const iteam3 = document.getElementById('iteam3');
    const mahsulotNarxi = document.getElementById('mahsulotNarxi');
    const mahsulotJamiNarxi = document.getElementById('mahsulotJamiNarxi');
    const userName = document.getElementById('userName');


    console.log(productArray);
    ekrangaCardlarniChiqarish(productArray)
    function ekrangaCardlarniChiqarish(array){
        let sum = 0;

        iteam3.innerHTML = '';
        array.forEach(element => {
            if(element){
                sum += element.narx;

                iteam3.innerHTML +=` 
                  <div class="main-products">
      
                      <div><span><img
                                  src="${element.surat}"
                                  width="70px" alt=""></span></div>
                      <div class="aboutProducts">
                          <p>${element.nom}</p>
                          <div class="buttonPlus"><button class="minus">-</button>
                              <div class="numberProducts">1</div>
                              <button class="plus">+</button>
                          </div>
      
                      </div>
                      <p class="narx-product">${element.narx}<span> so'm</span></p>
                      <p class="kopayib-borish">${element.narx}<span> so'm </span></p>
      
                  </div>
                  <hr>`

            }
         
        });
        mahsulotNarxi.innerText = sum;
        mahsulotJamiNarxi.innerText = sum + 12000
        userName.innerHTML = foydalanuchi;
    }
}

