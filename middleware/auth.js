import router from 'vue'

export default function auth({next,router,redirect,store}){
    console.log('middle ware test')
    // return next()
    var dt = new Date();
    var tokenExpiry= dt.setSeconds( dt.getSeconds() )
    if(process.client){
        var details = store.getters['authenticated/auth']
        if(details==null){
            redirect('/login')
        }else if(tokenExpiry>=details.timeOut){
            redirect('/login')
        }
    }
}