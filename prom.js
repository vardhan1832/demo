let posts = [];
    let userActivityTime ;
    function updateUserActivityTime(){
         return new Promise((resolve,reject)=>{
             setTimeout(() => {
                userActivityTime = new Date().getTime();
                console.log('new user time is: ')
                resolve(userActivityTime);
             }, 1000);
         })
    }
    function createPosts(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                posts.push({title : 'post1'});
                resolve(posts);
            },1000)
        })
    }
    function createPost2(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                posts.push({title : 'post2'});
                resolve(posts);
            },1000)
        })
    }
    function createPost3(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                posts.push({title : 'post3'});
                resolve(posts);
            },1000)
        })
    }
    function delPosts(){
        return new Promise((resolve,reject)=>{
                setTimeout(()=>{

                    posts.pop();
                    console.log('posts after deletion: ')
                   resolve(posts);
                })
        })
    }
    Promise.all([updateUserActivityTime(),createPosts(),createPost2(),createPost3(),updateUserActivityTime()]).then((values)=>{
       console.log(values)
      
    }).then(()=>{
        delPosts().then(value=>{
        console.log(value)
       })

    })
    