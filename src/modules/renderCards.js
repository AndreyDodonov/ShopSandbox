
const renderCards = (data) => {
    const goodsWrapper = document.querySelector('.goods');
    data.goods.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'col-12 col-md-6 col-lg-4 col-xl-3';
        card.innerHTML = `                
				<div class="card" data-category="${item.category}">
					${item.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
					<div class="card-img-wrapper">
						<span class="card-img-top"
							style="background-image: url('${item.img}')"></span>
					</div>
					<div class="card-body justify-content-between">
						<div class="card-price" style="${item.sale ? 'color:red;' : ''}">${item.price} ₽</div>
						<h5 class="card-title">${item.title}</h5>
						<button class="btn btn-primary">В корзину</button>
					</div>
				</div>				
        `;
        goodsWrapper.appendChild(card);
    });
};

export default renderCards;