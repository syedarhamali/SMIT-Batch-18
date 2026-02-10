function changeText() {
    var element = document.getElementById('heading')
    element.style.backgroundColor = 'yellow'
    element.style.border = '1px solid black '
    element.innerText = 'Sameer Ali'
}


function getInputValue() {
    var inputValue = document.getElementById("form-input")
    console.log(inputValue.value)
    inputValue.value = ''
}

var bakiPara = `Eius beatae cupiditate nihil voluptatibus, asperiores quae, ipsam repudiandae recusandae eum a, itaque ex modi?
        Ratione tempore tenetur accusantium adipisci amet at ipsa culpa. Blanditiis commodi animi maxime odio culpa.
        Eos et excepturi quas molestiae autem earum harum, ipsum porro exercitationem dolorem minima laborum aliquid
        obcaecati! Expedita labore nulla velit culpa enim, incidunt exercitationem numquam recusandae magni laudantium
        obcaecati eveniet.
        Iure recusandae doloremque repellat, quibusdam debitis, cupiditate et fugit quis esse necessitatibus doloribus
        sapiente similique iste, ad consequatur delectus fugiat quod accusamus non perferendis! Dolorem aperiam fugit
        voluptates ipsam numquam?
        Tempore quaerat repudiandae placeat at ullam. Atque quaerat doloribus nulla, iste voluptas molestias quidem vero
        nihil ipsum harum quae similique, quod perspiciatis expedita officia, dolore ut sit voluptatem magni veniam.
        Recusandae, modi? Fugiat quaerat culpa expedita est! Quos, laudantium? In voluptas alias pariatur rerum porro
        reprehenderit perspiciatis soluta dicta voluptates nulla ullam laboriosam obcaecati ea sunt cumque perferendis,
        magni quas?
        Voluptatum, explicabo ullam ab sed soluta vel aliquid fuga totam? Quasi ut commodi possimus nisi asperiores
        voluptatum eveniet assumenda in, laborum doloremque quis deserunt dicta cum optio! Provident, autem laudantium.
        Commodi suscipit, a veniam dicta voluptates hic earum fugit ducimus debitis similique assumenda. Illum
        consectetur velit, laboriosam et esse sapiente iusto quaerat? Obcaecati praesentium eaque dolor corporis,
        perferendis vel repellendus`


function expandPara() {
    var para = document.getElementById("paragraph")

    para.innerText += bakiPara
}

