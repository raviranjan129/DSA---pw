
const simplifypath = function(path){
    const st= [];

    path= path.split("/"); // tokenization ;    split the string on the basis of "/";

    for(let i=0;i<path.length;i++){
        if(path[i] == "." || path[i]==""){
            continue;
        }else if(path[i] == ".."){
            st.pop();
        }
        else{
            st.push(path[i]);
        }
    }
    return "/"+ st.join("/");
}

// const path = "/home/";
const path = "/home//foo/";
console.log(simplifypath(path));
