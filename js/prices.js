const pricesCategories = document.getElementsByClassName("price-category-item");
const pricesContainer = document.querySelector(".prices-content-container");
let active = 0;

const content = [
    `
    <p class="prices-content-info">Portflix MMC şirkəti internet xidməti ilə yanaşı eyni zamanda bir çox digər
        telekommunikasiya xidmətləri də göstərir</p>

    <h2 class="prices-section-header">İnternet paketləri</h2>

    <div class="prices-list">
        <div class="price-single-container">
            <h1 class="service">9 mb/s</h1>
            <p class="price">15 AZN</p>
        </div>

        <div class="price-single-container">
            <h1 class="service">36 mb/s</h1>
            <p class="price">18 AZN</p>
        </div>

        <div class="price-single-container">
            <h1 class="service">60 mb/s</h1>
            <p class="price">28 AZN</p>
        </div>

        <div class="price-single-container">
            <h1 class="service">80 mb/s</h1>
            <p class="price">38 AZN</p>
        </div>
        
        <div class="price-single-container">
            <h1 class="service">100 mb/s</h1>
            <p class="price">48 AZN</p>
        </div>
    </div>

    <h2 class="prices-section-header">Digər xidmətlər</h2>

    <div class="prices-list">
        <div class="price-single-container">
            <h1 class="service">Statik İP</h1>
            <p class="price">5 AZN</p>
        </div>

        <div class="price-single-container">
            <h1 class="service">İP Telefon</h1>
            <p class="price">2.5 AZN</p>
        </div>
    </div>
`,

`
<p class="prices-content-info">Yayımlanan müəyyən kanalların dil seçimi xidmətindən istifadə edərək, eyni kanalı bir-neçə müxtəlif dildə izləmək imkanı da mövcuddur.</p>

<h2 class="prices-section-header">Kabel TV</h2>

<div class="prices-list">
    <div class="price-single-container">
        <h1 class="service">100+ kanal</h1>
        <p class="price">10 AZN</p>
    </div>
</div>

<h2 class="prices-section-header">İP TV </h2>

<div class="prices-list">
    <div class="price-single-container">
        <h1 class="service">300+ kanal</h1>
        <p class="price">10 AZN</p>
    </div>

</div>
`,

`
<p class="prices-content-info">Portflix MMC şirkətinin təmin etdiyi Optik lifli xətt üzərindən İnternet xidməti müxtəlif korporativləri yüksək sürətli və keyfiyyətli, tam dayanıqlı beynəlxalq internet şəbəkəsinə çıxışı təmin edir.</p>

<h2 class="prices-section-header">İnternet paketləri</h2>

<div class="prices-list">
    <div class="price-single-container">
        <h1 class="service">3 mb/s</h1>
        <p class="price">19 AZN</p>
    </div>

    <div class="price-single-container">
        <h1 class="service">5 mb/s</h1>
        <p class="price">29 AZN</p>
    </div>

    <div class="price-single-container">
        <h1 class="service">10 mb/s</h1>
        <p class="price">39 AZN</p>
    </div>

    <div class="price-single-container">
        <h1 class="service">15 mb/s</h1>
        <p class="price">49 AZN</p>
    </div>

    <div class="price-single-container">
        <h1 class="service">20 mb/s</h1>
        <p class="price">59 AZN</p>
    </div>
</div>

<h2 class="prices-section-header">Digər xidmətlər</h2>

<div class="prices-list">
    <div class="price-single-container">
        <h1 class="service">Statik İP</h1>
        <p class="price">10 AZN</p>
    </div>

    <div class="price-single-container">
        <h1 class="service">İP Telefon</h1>
        <p class="price">2.5 AZN</p>
    </div>
</div>
`,

`
<p class="prices-content-info">GPON sistemi ilə artıq həyət evləri də sürətli internetdən faydalanacaq. Bu texnologiya vasitəsi ilə həyət evlərinə də sürətli Fiber Optik internet xidməti göstəririk</p>

<h2 class="prices-section-header">İnternet paketləri</h2>

<div class="prices-list">
    <div class="price-single-container">
        <h1 class="service">10 mb/s</h1>
        <p class="price">18 AZN</p>
    </div>

    <div class="price-single-container">
        <h1 class="service">15 mb/s</h1>
        <p class="price">20 AZN</p>
    </div>

    <div class="price-single-container">
        <h1 class="service">25 mb/s</h1>
        <p class="price">25 AZN</p>
    </div>

    <div class="price-single-container">
        <h1 class="service">30 mb/s</h1>
        <p class="price">28 AZN</p>
    </div>
</div>

<h2 class="prices-section-header">Digər xidmətlər</h2>

<div class="prices-list">
    <div class="price-single-container">
        <h1 class="service">Statik İP</h1>
        <p class="price">5 AZN</p>
    </div>

    <div class="price-single-container">
        <h1 class="service">İP Telefon</h1>
        <p class="price">2.5 AZN</p>
    </div>
</div>
`
]
for (let i = 0; i < pricesCategories.length; i++) {
    pricesCategories[i].addEventListener("click", (e) => {
        for (let z = 0; z < pricesCategories.length; z++) {
            pricesCategories[z].classList.remove("active-item")
        }
        active = i;
        pricesContainer.style.opacity = "0";
        
        e.target.classList.add("active-item")
        setTimeout(()=>{
            pricesContainer.innerHTML = content[active];
            pricesContainer.style.opacity = "1";
        }, 300)
    })
}