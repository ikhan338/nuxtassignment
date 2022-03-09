import router from 'vue'

export default function auth({next,router,redirect,store}){
    console.log('middle ware test')
    // return next()
    if(process.client){
        var details = store.getters['authenticated/auth']
        if(details==null){
            redirect('/login')
        }
    }
}