// const { response } = require("express");

//so here we gonna make sure how js will be change in front-end
let tbody=document.getElementById("tbody");
//tbody.append(td_fun());

fetch("http://localhost:3000/user")
    .then(res => res.json())
    .then(json => {
        json.map(data => {
            console.log(data)
            tbody.append(td_fun(data.profile,data.name,data.email));
        })
    })

function td_fun(img,name,email) {
    let td = document.createElement('tr');
    td.innerHTML = `
    <td class="px-6 py-4 whitespace-nowrap">
        <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                    <img src=${img} class="h-10 w-10 rounded-full" alt="">
                </div>
                <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                        ${name}
                    </div>
                    <div class="text-sm text-gray-500">
                        ${email}
                    </div>
                </div>
            </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
        <span class="px-6 inline-flex text-xs leading-5 font-semibold rounded bg-green-100 text-green-800">
           Active
        </span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
        <span class="text-sm text-gray-500">Admin</span>
    </td>
    `;
    return td;
}