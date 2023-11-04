window.onload = function(){

    //let contentElement = document.getElementsByClassName("flexboxI");

    fetch('res/json/data.json')//, {mode: 'no-cors'} https://jsonplaceholder.typicode.com/posts "https://jsonkeeper.com/b/L00F"
        .then((response) => response.json())
        .then(postsObjects => {
            console.log(postsObjects)
            for(const onePostObject of postsObjects){
                let newPostDiv = document.createElement("div");

                //profile pic + username + date
                let newAndmedDiv = document.createElement("div");
                let andmedUl = document.createElement("ul");
                let andmedUserPhotoLi = document.createElement("li");
                let andmedUserPhotoImg = document.createElement("img");
                let andmedDateLi = document.createElement("li");
                let andmedUserLi = document.createElement("li");
                andmedUserPhotoImg.src = onePostObject.profilePicture;
                andmedUserPhotoImg.alt = "User photo";
                andmedUserPhotoImg.addEventListener("error", function(){
                    andmedUserPhotoImg.src = "https://images.wondershare.com/repairit/aticle/2021/07/resolve-images-not-showing-problem-1.jpg"
                });
                andmedUserPhotoLi.appendChild(andmedUserPhotoImg);
                andmedDateLi.innerText = onePostObject.time;
                andmedUserLi.innerText = onePostObject.username;
                andmedUl.appendChild(andmedUserPhotoLi);
                andmedUl.appendChild(andmedUserLi);
                andmedUl.appendChild(andmedDateLi);
                newAndmedDiv.appendChild(andmedUl);
                newAndmedDiv.className = "andmed";
                newPostDiv.appendChild(newAndmedDiv);
                
                //header + text + picture
                let postHeader = document.createElement("p");
                let postBody = document.createElement("p");
                let postImg = document.createElement("img");
                postImg.src = onePostObject.imageLink;
                postImg.alt = onePostObject.title;
                postImg.addEventListener("error", function(){
                    postImg.src = "https://images.wondershare.com/repairit/aticle/2021/07/resolve-images-not-showing-problem-1.jpg"
                });
                postHeader.innerText = onePostObject.title;
                postBody.innerText = onePostObject.body;
                newPostDiv.appendChild(postHeader);
                newPostDiv.appendChild(postBody);
                newPostDiv.appendChild(postImg);

                //where to put element and what class to assign for css
                newPostDiv.className = "post";

                document.querySelector(".flexboxI").appendChild(newPostDiv);

            }
        })
        .catch(err => {
            let errDiv = document.createElement("div");
            errDiv.className = 'post';
            errDiv.innerText = err;
            document.body.appendChild(errDiv);
            });
        
        
       


}; 