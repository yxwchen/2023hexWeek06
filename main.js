// LV2============================
const elList = document.querySelector('.ticketCard-area');
let data = [];

axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelApi11.json')
    .then(function (response) {
        data = response.data.data
        render();
    })
    // 第六週修正，補上.catch error錯誤提示
    .catch(function (error) {
        console.log(error);
    })

function render() {
    let str = '';
    data.forEach(function (item) {
        str += `
                <li class="ticketCard">
                    <div class="ticketCard-img">
                        <a href="#">
                            <img src="${item.imgUrl}" alt="">
                        </a>
                        <div class="ticketCard-region">${item.area}</div>
                        <div class="ticketCard-rank">${item.rate}</div>
                    </div>
                    <div class="ticketCard-content">
                        <div>
                            <h3>
                                <a href="#" class="ticketCard-name">${item.name}</a>
                            </h3>
                            <p class="ticketCard-description">
                            ${item.description}
                            </p>
                        </div>
                        <div class="ticketCard-info">
                            <p class="ticketCard-num">
                                <span><i class="fas fa-exclamation-circle"></i></span>
                                剩下最後 <span id="ticketCard-num">${item.group} </span> 組
                            </p>
                            <p class="ticketCard-price">
                                TWD <span id="ticketCard-price">$${item.price}</span>
                            </p>
                        </div>
                    </div>
                </li>
`
    });
    elList.innerHTML = str;
}