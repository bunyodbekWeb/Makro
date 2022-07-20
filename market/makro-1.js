if (sessionStorage.getItem("ism")) {
  const products = [
    {
      id: 1,
      kategoriya: "Top",
      nom: 'Черный чай "Lipton" малина, 1',
      narx: 7490,
      davlat: "Узбекистан",
      hajm: "1000 мл",
      tarkib: `Очищенная питьевая вода, сaхaр, регуляторы кислотности (лимонная кислота, цитрат натрия 3-замещенный), экстракт черного сок малины (из концентрата), ароматизатор, консерванты, антиокислитель аскорбиновая кислота.`,
      tarif: `Черный чай "Lipton" малина — это уникальный напиток, который подарит вам хорошее настроение в течение всего дня. Более того, он отлично утоляет жажду и его замечательный вкус запомнится на долгое время. Вы можете купить черный чай "Lipton" малина в Ташкенте в сети супермаркетов “Makro” по выгодной цене или можете заказать доставку на дом через наш онлайн-магазин.`,
      oziqlanish: {
        kaloriya: 38,
        uglevod: 8,
      },
      surat: `https://makromarket.uz/storage/13610/1000017503.jpg`,
    },
    {
      id: 2,
      kategoriya: "Top",
      nom: 'Йогурт "ESSI" персик, 280 г',
      narx: 5790,
      davlat: "Узбекистан",
      hajm: "0.28 кг",
      tarkib: `Персик, творог, сахар -песок, глазурь шоколадная (масло сливочное, сахар - песок, какао - масло, какао - порошок), экстрат ванильный натуральный.`,
      tarif: `Йогурт "ESSI" - это йогурт со свежим составом, сделанный из молока, сливок и йогуртовой закваски. Бифидобактерии, содержащиеся в составе йогурта, улучшают пищеварение и микрофлору кишечника. В сети супермаркетов “Makro” вы всегда можете найти свежие молочные изделия по выгодной цене. Успейте купить йогурт "ESSI" с доставкой в Ташкенте.`,
      oziqlanish: {
        kaloriya: 70,
        belok: 2.5,
        yog: 3,
        uglevod: 14,
      },
      surat: `https://makromarket.uz/storage/12627/1000051537.jpg`,
    },
    {
      id: 3,
      kategoriya: "Top",
      nom: 'Яблоки "Голден", кг',
      narx: 16690,
      davlat: "Узбекистан",
      tarkib: `В яблоке главным образом ценится присутствие железа и витамина С, но плод содержит: бета-каротин, витамины А, В1, В2, В5, В6, В9, Н и РР, а также необходимые организму человека минеральные вещества: калий, кальций, магний, никель, молибден, фосфор и натрий.`,
      tarif: `Яблоки содержат в себе много полезных витаминов и полезных веществ, а также употребив их в качестве перекуса, вы зарядитесь энергией на весь оставшийся день! Яблоки "Голден" - всегда доступны для вас и в сети супермаркетов “Makro". У нас вы всегда можете найти и купить их по выгодной цене и заказать с доставкой.`,
      oziqlanish: {
        kaloriya: 52,
        belok: 0.26,
        yog: 17,
        uglevod: 14,
      },
      surat: `https://makromarket.uz/storage/21220/625966f8e08df_%D1%8F%D0%B1%D0%BB%D0%BE%D0%BA%D0%B8-%D0%B3%D0%BE%D0%BB%D0%B4%D0%B5%D0%BD-3.jpg`,
    },
    {
      id: 4,
      kategoriya: "Top",
      nom: 'Конфеты "Toffifee" лесной орех, 125 г',
      narx: 34990,
      davlat: "Германия",
      hajm: 0.125,
      tarkib: `растительный жир, сахар, лесные орехи цельные, сироп глюкозы, сухое обезжиренное молоко, агент влагоудерживающий сорбитовый сироп, какао тертое, сгущенное обезжиренное молоко, концентрированная молочная подсырная сыворотка, лактоза, какао-порошок, какао-масло, сливочное масло, сироп из тростникового сахара, сухая молочная подсырная сыворотка, эмульгатор (соевый лецитин), соль, ароматизаторы.`,
      tarif: `Превосходные и известные конфеты от бренда "Toffifee" из темного шоколада со вкусом лесного ореха полюбились не только сладкоежкам. Лакомство в форме шариков очень удобно употреблять. Цельные лесные орехи полностью покрыты сладкой нугой и вкусным шоколадом. Сладость дарит неповторимый вкус и аромат. Вы можете купить конфеты "Toffifee" (лесной орех) в любом филиале супермаркетов “Makro”. А также, благодаря нашей быстрой доставке, можно заказать их, не выходя из дома, через наш удобный интернет-магазин “Makro”`,
      oziqlanish: {
        kaloriya: 516,
        belok: 12,
        yog: 24,
        uglevod: 58.5,
      },
      surat: `https://makromarket.uz/storage/15632/1000019857.jpg`,
    },
    {
      id: 5,
      kategoriya: "MBrand",
      nom: "Колбасно-копченый плавленый сыр М, 500 г",
      narx: 19990,
      davlat: "Узбекистан",
      tarkib: `Сыр нежирный для плавления, сыр полутвердый, вода, масло сливочное, молоко сухое обезжиренное, соли-плавители ("фонакон", натрий фосфорнокислый двузамещенный), соль поваренная пищевая.`,
      tarif: `Колбасно-копченый плавленый сыр от M Brand подходит, как для завтраков и быстрых перекусов (приготовление бутербродов), так и для праздничного стола (сырное ассорти). Изготавливается из твердых и мягких сортов сыра. В интернет-магазине Makro легко и просто купить колбасно-копченый плавленый сыр М по выгодной цене всего за пару минут.`,
      oziqlanish: {
        kaloriya: 271,
        belok: 23,
        yog: 19,
      },
      surat: `https://makromarket.uz/storage/18916/1000077283.jpg`,
    },
    {
      id: 6,
      kategoriya: "MBrand",
      nom: "Губки для эмали и тефлона М, 3 шт.",
      narx: 2590,
      davlat: "Узбекистан",
      tarkib: `Полимерная нить, поролон.`,
      tarif: `Губки для эмали и тефлона используются для очистки жира/грязи/копоти на посуде, сантехнике, кафельной плитке с эмалированным и тефлоновым покрытием. Не оставляют царапин на этих деликатных поверхностей, прекрасно справляясь со своей главной задачей. Купить губки для эмали и тефлона от M-Brand всего за пару минут – простая задача для покупателей интернет-магазина Makro.`,
      surat: `https://makromarket.uz/storage/18928/1000082332.jpg`,
    },
    {
      id: 7,
      kategoriya: "Molochnaya",
      nom: `Маргарин "Сливочный вкус" от "Щедрое лето" 72% 200гр`,
      narx: 9290,
      hajm: 0.2,
      davlat: "Узбекистан",
      tarkib: `Маргарин — эмульсионный продукт из воды и растительного масла. Содержит в себе животный или рыбий жир, молоко, ароматизаторы, красители, соль, сахар и другие пищевые добавки.`,
      tarif: `Маргарин "Сливочный вкус" от "Щедрое лето" – это пищевой продукт, который как правило изготавливается из различных растительных масел. Придаст вашей выпечке ароматный и нежный вкус. Успейте купить маргарин "Сливочный вкус" от "Щедрое лето" в Ташкенте с доставкой и по выгодной цене, просто заказав его в нашем онлайн-магазине сети супермаркетов "Makro" и получите его в кратчайшие сроки.`,
      oziqlanish: {
        kaloriya: 611,
        belok: 0.8,
        yog: 57,
        uglevod: 0.7,
      },
      surat: `https://makromarket.uz/storage/11691/1000025340.jpg`,
    },
    {
      id: 8,
      kategoriya: "Molochnaya",
      nom: `Кефир от "MUSAFFO" 2.5% 1000гр`,
      narx: 12590,
      hajm: 1,
      davlat: "Узбекистан",
      oziqlanish: {
        kaloriya: 50,
        belok: 2.8,
        yog: 2.5,
        uglevod: 4,
      },
      tarkib: `молоко коровье нормализованное, бактериальная закваска.`,
      tarif: `Кефир от "MUSAFFO" обладает приятным вкусом, который никого не оставит равнодушным. Выпив чашку кефира на завтрак, можно получить заряд бодрости и энергии на целый день, ведь в нем находится много белка и витаминов. В интернет-магазине сети супермаркетов “Makro” вы всегда сможете найти и купить свежий кефир от "MUSAFFO" и по выгодной цене! Успейте приобрести молочную продукцию в большом ассортименте с доставкой в Ташкенте.`,
      surat: `https://makromarket.uz/storage/12001/1000064821.jpg`,
    },
    {
      id: 9,
      kategoriya: "Molochnaya",
      nom: `Кефир от "MUSAFFO" 2.5% 500гр`,
      narx: 6990,
      hajm: 0.5,
      davlat: "Узбекистан",
      oziqlanish: {
        kaloriya: 52,
        belok: 3,
        yog: 2.5,
      },
      tarkib: `молоко коровье нормализованное, бактериальная закваска.`,
      tarif: `Кефир от "MUSAFFO" - это свежий кефир вкус которого никого не оставит равнодушным. Выпив чашку кефира на завтрак, можно получить заряд бодрости и энергии на целый день, ведь в нем находится много белка и витаминов. В интернет-магазине сети супермаркетов “Makro” вы всегда сможете найти и купить свежий кефир от "MUSAFFO" и по выгодной цене! Успейте приобрести молочную продукцию в большом ассортименте с доставкой в Ташкенте.`,
      surat: `https://makromarket.uz/storage/12004/1000064820.jpg`,
    },
    {
      id: 10,
      kategoriya: "Molochnaya",
      nom: `Катык "Доброе утро" 3.5% 900гр`,
      narx: 13590,
      hajm: 0.9,
      davlat: "Узбекистан",
      oziqlanish: {
        kaloriya: 56,
        belok: 2.8,
        yog: 3.2,
        uglevod: 4.2,
      },
      tarkib: `Молоко коровье цельное пастеризованное, сливки пастеризованные, закваска.`,
      tarif: `Катык "Доброе утро" - это свежий катык, свежий вкус которого запомнится надолго. Катык отлично подойдет в качестве перекуса и даст заряд бодрости и энергии на целый день. Его часто используют как добавку к салатам и блюдам. В интернет-магазине сети супермаркетов “Makro” вы всегда сможете найти свежий катык "Доброе утро" и по выгодной цене! Успейте купить кефир в большом ассортименте с доставкой в Ташкенте.`,
      surat: `https://makromarket.uz/storage/12164/1000070783.jpg`,
    },
    {
      id: 11,
      kategoriya: "Futbol",
      nom: `"Coca-cola", 1 л, пэт`,
      narx: 7990,
      hajm: 1,
      davlat: "Узбекистан",
      oziqlanish: {
        kaloriya: 42,
        uglevod: 10.6,
      },
      tarkib: `вода, сахар, углерод диоксида, краситель, ортофосфорная кислота, натуральный ароматизатор и кофеин.`,
      tarif: `"Coca-Cola" — это уникальный напиток, который подарит вам хорошее настроение и бодрость в течение всего дня. Более того, он отлично утоляет жажду и его замечательный вкус запомнится на долгое время. Вы можете купить "Coca-cola" в Ташкенте в сети супермаркетов “Makro” по выгодной цене или можете заказать доставку на дом через наш онлайн-магазин.`,
      surat: `https://makromarket.uz/storage/13339/1000002527.jpg`,
    },
    {
      id: 12,
      kategoriya: "Futbol",
      nom: `"Pepsi", 1.5 л, пэт`,
      narx: 9990,
      hajm: 1.5,
      davlat: "Узбекистан",
      oziqlanish: {
        kaloriya: 43,
        uglevod: 10.8,
      },
      tarkib: `вода очищенная, СО2, сахар, подкислитель Пепси, карамельный Пепси, ортофосфорная кислота, кофеин, натуральный ароматизатор Пепси.`,
      tarif: `"Pepsi" — это уникальный напиток, который подарит вам хорошее настроение в течение всего дня. Более того, он отлично утоляет жажду и его замечательный вкус запомнится на долгое время. Вы можете купить "Pepsi" в Ташкенте в сети супермаркетов “Makro” по выгодной цене или можете заказать доставку на дом через наш онлайн-магазин.`,
      surat: `https://makromarket.uz/storage/13349/1000017469.jpg`,
    },
    {
      id: 13,
      kategoriya: "Futbol",
      nom: `Картофельные чипсы "Lay's" со вкусом сметаны и лука, 225 г`,
      narx: 23790,
      hajm: 0.225,
      davlat: "Узбекистан",
      oziqlanish: {
        kaloriya: 510,
        yog: 30,
        uglevod: 53,
        belok: 6,
      },
      tarkib: `картофель, растительное масло, идентичный натуральному ароматизатор «сметана и лук» [соль, натуральные и идентичные натуральным вкусоароматические вещества, сухая молочная сыворотки, сахар, усилитель вкуса и аромата (глутамат натрия), регулятор кислотности (лимонная кислота).`,
      tarif: `Картофельные чипсы "Lay's" со вкусом сметаны и свежего зелёного лука поднимут настроение каждого и помогут несомненно утолить голод. Тонкие и аппетитные ломтики картофеля с нежным вкусом - лучший выбор для вас и ваших друзей во время просмотра нового фильма или весёлой вечеринки. Имеют полезные и ароматные свойства, которые несомненно повысят аппетит всем желающим. Удобная упаковка может надолго и качественно сохранить продукт. Чипсы "Lay's" со вкусом сметаны и лука - замечательный выбор, который принесет радость всем вашим близким! Заказать чипсы на дом можно через удобный интернет-магазин "Makro".`,
      surat: `https://makromarket.uz/storage/14854/1000048941.jpg`,
    },
    {
      id: 14,
      kategoriya: "Futbol",
      nom: `Соленые семечки "ChаCha", 130 г`,
      narx: 8790,
      hajm: 0.13,
      davlat: "Малайзия",
      oziqlanish: {
        kaloriya: 571,
        yog: 50,
        uglevod: 6,
        belok: 14,
      },
      tarkib: `соленые семечки.`,
      tarif: `Соленые семечки "ChаCha" - не только вкусные, но и полезные для организма человека. Достаточное количество употребления семян может обеспечить силу и энергию на долгое время. Из семечек изготавливают питательные масла, иногда добавляют в выпечку, а также готовят сладкую халву. Купить соленые семечки "ChаCha" просто в супермаркетах "Makro". А еще проще их заказать с доставкой на дом в Ташкенте, не выходя из дома, через наш надежный интернет-магазин.`,
      surat: `https://makromarket.uz/storage/15015/1000050917.jpg`,
    },
  ];
  let mahsulotlar = [];
  if(JSON.parse(localStorage.getItem('barchaMahsulotlar'))){
    mahsulotlar = JSON.parse(localStorage.getItem('barchaMahsulotlar'));
    mahsulotlar.forEach(product =>{
      console.log(typeof product.narx);
    })
  }else{
    localStorage.setItem('barchaMahsulotlar',JSON.stringify(products));
    mahsulotlar += products;
  }
  console.log(mahsulotlar); 
  

  ekrangaChiqarish(mahsulotlar);
  function ekrangaChiqarish(array) {
    const top = document.querySelector(".top");
    const mBrand = document.querySelector(".m_brand");
    const milk_product = document.querySelector(".milk_product");
    const football = document.querySelector(".football");
    top.innerHTML = "";
    mBrand.innerHTML = "";
    milk_product.innerHTML = "";
    football.innerHTML = "";

    array.forEach((products, index, array) => {
      console.log(products.kategoriya);
      if (products.kategoriya === "Top")
        top.innerHTML += `
      <div class="swiper-slide"> 
      <a onclick='linkToProduct(${products.id})'>
        <div class="card"  style="width: 18rem;">
  <img src="${products.surat}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${products.nom}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${products.narx} <span class="som"> So'm </span></li>
  </ul>
  <div class="card-body">

  <a class="buttonForKarzina" onclick='karzina(${products.id})'>

  Qo'shish
  </a>
  </div>
  </a>
</div>
</div>
        `;
    });

    array.forEach((products, index, array) => {
      if (products.kategoriya === "MBrand")
        mBrand.innerHTML += `
      <div class="swiper-slide"> 
      <a onclick='linkToProduct(${products.id})'>
        <div class="card"  style="width: 18rem;">
  <img src="${products.surat}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${products.nom}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${products.narx} <span class="som"> So'm </span></li>
  </ul>
  <div class="card-body">

  <a class="buttonForKarzina" onclick='karzina(${products.id})'>

  Qo'shish
  </a>
  </div>
  </a>
</div>
</div>
        `;
    });

    array.forEach((products, index, array) => {
      if (products.kategoriya === "Molochnaya")
        milk_product.innerHTML += `
      <div class="swiper-slide"> 
      <a onclick='linkToProduct(${products.id})'>
        <div class="card"  style="width: 18rem;">
  <img src="${products.surat}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${products.nom}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${products.narx} <span class="som"> So'm </span></li>
  </ul>
  <div class="card-body">

  <a class="buttonForKarzina" onclick='karzina(${products.id})'>

  Qo'shish
  </a>
  </div>
  </a>
</div>
</div>
        `;
    });

    array.forEach((products, index, array) => {
      if (products.kategoriya === "Futbol")
        football.innerHTML += `
      <div class="swiper-slide"> 
      <a onclick='linkToProduct(${products.id})'>
        <div class="card"  style="width: 18rem;">
  <img src="${products.surat}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${products.nom}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${products.narx} <span class="som"> So'm </span></li>
  </ul>
  <div class="card-body">

  <a class="buttonForKarzina" onclick='karzina(${products.id})'>

  Qo'shish
  </a>
  </div>
  </a>
</div>
</div>
        `;
    });
  }

  const karzinaSum = document.getElementById("karzinaSum");
  let sum = 0;

  if (JSON.parse(localStorage.getItem("mahsulotNarx"))) {
    sum = JSON.parse(localStorage.getItem("mahsulotNarx"));
    karzinaSum.innerText += sum;
  } else {
    karzinaSum.innerText = 0;
  }

  const arrayKarzina = [];
  if(JSON.parse(localStorage.getItem("karzina"))){
      let arr = JSON.parse(localStorage.getItem("karzina"))
      arr.forEach((value,index,array)=>{
        arrayKarzina.push(value)
      })
  }else{
    localStorage.setItem('karzina', JSON.stringify(arrayKarzina))
  }

  function karzina(idOfProduct) {

    mahsulotlar.forEach((product, index, array) => {
      if (idOfProduct === product.id) {
        arrayKarzina.push(product)
        sum += product.narx;
      }

      karzinaSum.innerText = sum;
      localStorage.setItem("mahsulotNarx", JSON.stringify(sum));
    });
      localStorage.setItem('karzina', JSON.stringify(arrayKarzina));
  }

  function linkToProduct(productId) {
    let productArray = [];
    mahsulotlar.forEach((product, index, array) => {
      if (productId === product.id) {
        productArray.push(mahsulotlar[index]);
      }
    });

    console.log(productArray);
    sessionStorage.setItem('aboutProduct',(JSON.stringify(productArray)));
        window.location.href ='./mahsulot.html'
  }

  function searchProduct() {
    const qidiruvMatni = document.getElementById("search").value;
    let searchedArray = [];
    let name = "";

    mahsulotlar.forEach((value, index) => {
      let searchString = new RegExp(`${qidiruvMatni}`, "gi");
      name = value.nom.toString();
      if (searchString.test(name)) {
        searchedArray.push(products[index]);
      }
    });
    console.log(searchedArray);
    ekrangaChiqarish(searchedArray);
  }

  /**
   * Saytga kirgandagi animatsiya
   */

  window.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".loader");

    setTimeout(function () {
      loader.style.opacity = 0;
      setTimeout(function () {
        loader.style.display = "none";
      }, 2000);
    }, 1500);
  });
} else {
  window.location.href = "./sessionStorage.html";
}
