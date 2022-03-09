export default function auth({next,router}){
    console.log('middle ware test')
    // return next()
    if(process.client){
        userdata = JSON.parse(localStorage.getItem('demoApp'))
        console.log(userdata)
    }
}