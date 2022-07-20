
 const products = JSON.parse(localStorage.getItem('barchaMahsulotlar'))
   
//  let productId = products[length];
//  console.log(productId);
function MahsulotQoshish(idParam,
    kategoriyaParam,
    nomParam,
    narxParam,
    hajmParam,
     davlatParam,
     tarkibParam,
     tarifParam,
    suratParam)
    
    {
    this.id = idParam;
    this.kategoriya = kategoriyaParam;
    this.nom = nomParam;
    this.narx = narxParam;
    this.hajm = hajmParam;
    this.davlat = davlatParam;
    this.tarkib = tarkibParam;
    this.tarif = tarifParam;
    this.surat = suratParam;
}
// id: 14,
// kategoriya: "Futbol",
// nom: `Соленые семечки "ChаCha", 130 г`,
// narx: 8790,
// hajm: 0.13,
// davlat: "Малайзия",
// oziqlanish: {
//   kaloriya: 571,
//   yog: 50,
//   uglevod: 6,
//   belok: 14,
// },
// tarkib: `соленые семечки.`,
// tarif: `Соленые семечки "ChаCha" - не только вкусные, но и полезные для организма человека. Достаточное количество употребления семян может обеспечить силу и энергию на долгое время. Из семечек изготавливают питательные масла, иногда добавляют в выпечку, а также готовят сладкую халву. Купить соленые семечки "ChаCha" просто в супермаркетах "Makro". А еще проще их заказать с доставкой на дом в Ташкенте, не выходя из дома, через наш надежный интернет-магазин.`,
// surat: `https://makromarket.uz/storage/15015/1000050917.jpg`,

function yangiMahsulotQoshish(){
    const id =  products.length + 1;
    const  kategoriya = document.getElementById('mahsulotKate').value;
    const  nom = document.getElementById('nameProduct').value;x`x`
    const  narx = parseFloat(document.getElementById('mahsulotNarxi').value);
    const  davlat = document.getElementById('mahsulotDavlat').value;
    const  hajm = document.getElementById('mahsulotHajmi').value;
    const  tarkib = document.getElementById('mahsolotTarkibi').value;
    const  tarif = document.getElementById('mahsulotTarifi').value;
    const  surat = document.getElementById('mahsulotSurat').value;


    if(id && kategoriya && nom && narx && davlat && hajm && tarkib && tarif && surat){
        const product = new MahsulotQoshish(id,kategoriya,nom,narx,davlat,hajm,tarif,tarkib,surat)
        products.push(product)
        document.getElementById('nomi').innerHTML =  nom;
        document.getElementById('narxi').innerHTML = narx;
        document.getElementById('kate').innerHTML = kategoriya;
        document.getElementById('dav').innerHTML = davlat;
        localStorage.setItem('barchaMahsulotlar', JSON.stringify(products))
        alert('Mahsulot qo`shildi');
    }else{
        alert('Mahsulotni to`liq qo`shmadingiz');
    }
    
}


 



// id: 1,
// kategoriya: "Top",
// nom: 'Черный чай "Lipton" малина, 1',
// narx: 7490,
// davlat: "Узбекистан",
// hajm: "1000 мл",
// tarkib: `Очищенная питьевая вода, сaхaр, регуляторы кислотности (лимонная кислота, цитрат натрия 3-замещенный), экстракт черного сок малины (из концентрата), ароматизатор, консерванты, антиокислитель аскорбиновая кислота.`,
// tarif: `Черный чай "Lipton" малина — это уникальный напиток, который подарит вам хорошее настроение в течение всего дня. Более того, он отлично утоляет жажду и его замечательный вкус запомнится на долгое время. Вы можете купить черный чай "Lipton" малина в Ташкенте в сети супермаркетов “Makro” по выгодной цене или можете заказать доставку на дом через наш онлайн-магазин.`,
// oziqlanish: {
//   kaloriya: 38,
//   uglevod: 8,
// },
// surat: `https://makromarket.uz/storage/13610/1000017503.jpg`,

