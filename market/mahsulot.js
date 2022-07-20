let sum = JSON.parse(localStorage.getItem("mahsulotNarx"));
let a = document.getElementById("karzinaSum");
    a.innerHTML = sum;
if (JSON.parse(sessionStorage.getItem("aboutProduct"))) {
  const product = JSON.parse(sessionStorage.getItem("aboutProduct"));

  const importProduct = document.getElementById("importProduct");
  console.log(product);
  const mahsulot = product[0];
  const oziqlanish = mahsulot.oziqlanish;
  let arr = [];
  arr = mahsulot.nom.split('"');
  let nom = arr[1];
  if(oziqlanish){
    importProduct.innerHTML = `
    <div class="karzinka-div">

    <!--  card bolgan holdagi rasmi -->
    <div class="card-malumot">
        <div class="div-card-karzinka">
        <img src="${mahsulot.surat}" alt="">
        </div>
        <div class="card-icons">
            <img id="fa-user" src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png" alt="" width="19px">
            <h5 id="foo-h5">Sevimlilarga</h5>
            <span id="fa-user" class="fa-solid fa-user" style="color: rgb(200, 196, 196);width:19px"></span>
            <h5 id="foo-h5">Ulashish</h5>
        </div>

        <div class="tavsif-card">
            <h2>Tavsif</h2>
            <span class="tavsif-card-malumot">
                ${mahsulot.tarif}
            </span>
        </div>


    </div>


    <!--   card to'g'risida to'liq malumoti -->
    <div class="div-card-malumot">
        <h2 class="mah-soni"> <span class="modda">10282 -MODDA</span> <br> <span>${mahsulot.nom} </span></h2>


        <!-- plus - minus   -->
        <div class="card-xisobot">
            <div class="plus-minus">
                <button class="btnm">
                    <i style='font-size:24px; color: white;' class='fas' id="minus">&#xf068;</i>
                </button>
                <p class="paragrf"><span class="qoshish">0</span>
                    PCS</p>
                <button class="btnm-plus">
                    <i style='font-size:24px; color: rgb(42, 41, 41);' class='fas'>&#xf067;</i>
                </button>

            </div>


            <div class="sum-add">
                <h5 class="narx-sum"> <span id="mah-qiymati">${mahsulot.narx}</span> So'm</h5>
                <button class="btn-karzinka"  style="color:white; font-size: 17px;">Qo'shish
                    <span><i style="font-size:15px; color: white; margin-left: 40px; font-size: 23px;"
                            class="fa">&#xf07a;</i></span>
                </button>
            </div>
        </div> <br>
        <hr>

        <div>
            <p class="oziqlanshmatn">Oziqlanish qiymati</p>

            <!--  kaloriyalar -->
            <div class="types">
                <p>Kaloriya <br>
                    <span>${oziqlanish.kaloriya} kkal</span>
                </p>
                <p>Oqsil <br>
                    <span>${oziqlanish.belok} gr</span>
                </p>
                <p>Yog' <br>
                    <span>${oziqlanish.yog} gr</span>
                </p> <br> <br>
            </div> <br> <br>

            <h3 class="maxsulotMatn">Maxsulot Tavsifi</h3>

            <table class="table-class" cellpadding="12px">
                <tbody>
                    <tr>
                        <td>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Ishlab chiqaruvchi</font>
                            </font>
                        </td>
                        <td>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">${nom}</font>
                            </font>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Mamlakat</font>
                            </font>
                        </td>
                        <td>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">${mahsulot.davlat}</font>
                            </font>
                        </td>
                    </tr>
            </table>

            <div class="maxtarkibi">
                <p class="maxsulot-matn">Mahsulot tarkibi</p>
                <span class="maxsulotTarkibi">${mahsulot.tarkib}</span>
            </div>

        </div>


    </div>






</div>
    `;
  }else{

    importProduct.innerHTML = `
    <div class="karzinka-div">

    <!--  card bolgan holdagi rasmi -->
    <div class="card-malumot">
        <div class="div-card-karzinka">
        <img src="${mahsulot.surat}" alt="">
        </div>
        <div class="card-icons">
            <img id="fa-user" src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png" alt="" width="19px">
            <h5 id="foo-h5">Sevimlilarga</h5>
            <span id="fa-user" class="fa-solid fa-user" style="color: rgb(200, 196, 196);width:19px"></span>
            <h5 id="foo-h5">Ulashish</h5>
        </div>

        <div class="tavsif-card">
            <h2>Tavsif</h2>
            <span class="tavsif-card-malumot">
                ${mahsulot.tarif}
            </span>
        </div>


    </div>


    <!--   card to'g'risida to'liq malumoti -->
    <div class="div-card-malumot">
        <h2 class="mah-soni"> <span class="modda">10282 -MODDA</span> <br> <span>${mahsulot.nom} </span></h2>


        <!-- plus - minus   -->
        <div class="card-xisobot">
            <div class="plus-minus">
                <button class="btnm">
                    <i style='font-size:24px; color: white;' class='fas' id="minus">&#xf068;</i>
                </button>
                <p class="paragrf"><span class="qoshish">0</span>
                    PCS</p>
                <button class="btnm-plus">
                    <i style='font-size:24px; color: rgb(42, 41, 41);' class='fas'>&#xf067;</i>
                </button>

            </div>


            <div class="sum-add">
                <h5 class="narx-sum"> <span id="mah-qiymati">${mahsulot.narx}</span> So'm</h5>
                <button class="btn-karzinka"  style="color:white; font-size: 17px;">Qo'shish
                    <span><i style="font-size:15px; color: white; margin-left: 40px; font-size: 23px;"
                            class="fa">&#xf07a;</i></span>
                </button>
            </div>
        </div> <br>
        <hr>

        <div>
            <p class="oziqlanshmatn">Oziqlanish qiymati</p>

            <!--  kaloriyalar -->
            <div class="types">
                <p>Kaloriya <br>
                    <span>${0} kkal</span>
                </p>
                <p>Oqsil <br>
                    <span>${0} gr</span>
                </p>
                <p>Yog' <br>
                    <span>${0} gr</span>
                </p> <br> <br>
            </div> <br> <br>

            <h3 class="maxsulotMatn">Maxsulot Tavsifi</h3>

            <table class="table-class" cellpadding="12px">
                <tbody>
                    <tr>
                        <td>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Ishlab chiqaruvchi</font>
                            </font>
                        </td>
                        <td>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">${nom}</font>
                            </font>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Mamlakat</font>
                            </font>
                        </td>
                        <td>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">${mahsulot.davlat}</font>
                            </font>
                        </td>
                    </tr>
            </table>

            <div class="maxtarkibi">
                <p class="maxsulot-matn">Mahsulot tarkibi</p>
                <span class="maxsulotTarkibi">${mahsulot.tarkib}</span>
            </div>

        </div>


    </div>






</div>
    `;
  }

 
}
