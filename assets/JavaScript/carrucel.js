document.addEventListener('DOMContentLoaded', function () {
  const cat25Btn = document.getElementById('cat25');
  const cat50Btn = document.getElementById('cat50');
  const cat100Btn = document.getElementById('cat100');
  const cat200Btn = document.getElementById('cat200');
  const cat300Btn = document.getElementById('cat300');
  const cat25Line = document.getElementById('cat25Line');
  const cat50Line = document.getElementById('cat50Line');
  const cat100Line = document.getElementById('cat100Line');
  const cat200Line = document.getElementById('cat200Line');
  const cat300Line = document.getElementById('cat300Line');
  const categoryContent = document.getElementById('categoryContent');

  const showCategoryContent = (category) => {
    categoryContent.innerHTML = "";

    [cat25Btn, cat50Btn, cat100Btn, cat200Btn, cat300Btn].forEach(btn => {
      btn.classList.remove('active');
    });
    [cat25Line, cat50Line, cat100Line, cat200Line, cat300Line].forEach(line => {
      line.classList.remove('active');
    });

    switch (category) {
      case '25':
        categoryContent.innerHTML = `
          <div class="category-card">
            <div class="card-image">
              <img src="https://www.starbucks.pe/icons/UI/24/milkwithcoffee.svg" alt="Gatitos">
            </div>
            <div class="card-content">
              <div class="title">
                <h3>Personaliza tu bebida</h3>
              </div>
              <div class="description">
                <p>Añádele a tu bebida un shot de café, un topping o un syrup, o cambia de leche animal por bebida vegetal</p>
              </div>
            </div>
          </div>`;
        cat25Btn.classList.add('active');
        cat25Line.classList.add('active');
        break;
      case '50':
        categoryContent.innerHTML = `
          <div class="category-card">
            <div class="card-image">
              <img src="https://www.starbucks.pe/icons/UI/24/coffeandcheese.svg" alt="Gatitos">
            </div>
            <div class="card-content">
              <div class="title">
                <h3>Desde café del día hasta croissants</h3>
              </div>
              <div class="description">
                <p>Disfruta de café del día, galletas, muffins, kekes, croissants de mantequilla y más</p>
              </div>
            </div>
          </div>`;
        cat50Btn.classList.add('active');
        cat50Line.classList.add('active');
        break;
      case '100':
        categoryContent.innerHTML = `
          <div class="category-card">
            <div class="card-image">
              <img src="https://www.starbucks.pe/icons/UI/24/freshjuice.svg" alt="Gatitos">
            </div>
            <div class="card-content">
              <div class="title">
                <h3>Tu bebida favorita te espera</h3>
              </div>
              <div class="description">
                <p>Comienza tu mañana con tu bebida favorita, Refresher, Cold Brew o hasta un delicioso Frappuccino</p>
              </div>
            </div>
          </div>`;
        cat100Btn.classList.add('active');
        cat100Line.classList.add('active');
        break;
      case '200':
        categoryContent.innerHTML = `
          <div class="category-card">
            <div class="card-image">
              <img src="https://www.starbucks.pe/icons/UI/24/sandwich.svg" alt="Gatitos">
            </div>
            <div class="card-content">
              <div class="title">
                <h3>Sándwiches, wraps, postres y más</h3>
              </div>
              <div class="description">
                <p>Nutre tu día junto a un sandwich, wrap o postre de tu elección</p>
              </div>
            </div>
          </div>`;
        cat200Btn.classList.add('active');
        cat200Line.classList.add('active');
        break;
      case '300':
        categoryContent.innerHTML = `
          <div class="category-card">
            <div class="card-image">
              <img src="https://www.starbucks.pe/icons/UI/24/sellcoffee.svg" alt="Gatitos">
            </div>
            <div class="card-content">
              <div class="title">
                <h3>Tu merch favorito o café en grano</h3>
              </div>
              <div class="description">
                <p>Llévate a casa la taza o tumbler que siempre quisiste o el café en grano que más te gusta.<br>
                * Canje válido para modelos de merchandising seleccionados. <br>No válido para artículos de filtrado de café ni tazas de edición Collector.</p>
              </div>
            </div>
          </div>`;
        cat300Btn.classList.add('active');
        cat300Line.classList.add('active');
        break;
      default:
        break;
    }
  };

  cat25Btn.addEventListener('click', () => {
    showCategoryContent('25');
  });

  cat50Btn.addEventListener('click', () => {
    showCategoryContent('50');
  });

  cat100Btn.addEventListener('click', () => {
    showCategoryContent('100');
  });

  cat200Btn.addEventListener('click', () => {
    showCategoryContent('200');
  });

  cat300Btn.addEventListener('click', () => {
    showCategoryContent('300');
  });

  showCategoryContent('25');
});
