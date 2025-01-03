const main = document.getElementById('main');

window.addEventListener('keydown', function(e){
    main.innerHTML = `
           <table border=1px>
        <tr>
            <td>KEY</td>
            <td>CODE</td>
        </tr>
        <tr>
            <td>${e.key === " "?"space":e.key}</td>
            <td>${e.code}</td>
        </tr>
    </table>
    `
} )