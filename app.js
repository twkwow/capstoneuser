//good fucking lord do not touch this variable
const apiLink = "https://securehold-api.onrender.com/"
// const apiLink = "http://localhost:3000/"
const refreshTime = 5000

//changing pages
function pageRouting(link) {
    window.location.href = link
}

async function checkToken() {
    await axios.get(apiLink + "checkToken" , {withCredentials: true})
    .then((resp) => {
        if (resp.data.status == 200) {
            if(window.location.pathname != "/"){ 
                return null
            }
            return pageRouting("pages/dashboard.html") 
        }
        return pageRouting( (window.location.pathname == "/") ? "/pages/login.html" : "/pages/login.html?event=sessionLost")
    })
    .catch((error) => {
        return pageRouting("/pages/login.html?event=apiError")
        
    });
}