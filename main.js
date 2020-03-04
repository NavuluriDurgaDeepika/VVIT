fetch("data.json")
.then((response)=>{
    return response.json();
}).then((data)=>{
    //console.log(data);
    display_info(data.basics);
    //create function for educational data
    education_data(data.basics.education);
})
 var bodyElement=document.querySelector("#root");
 function display_info(info){
     //card view
     let card=document.createElement("div");
     card.classList.add("card");
     // heading
     let heading=document.createElement("h2");
     heading.textContent=info.name;
     // bodyElement.append(heading);

      bodyElement.append(card);
      card.append(heading);

      let line=document.createElement("hr");
      card.append(line);
      //role
      let role=document.createElement("h1");
      role.textContent=info.role;
      card.append(role);
      //email
      //let email=document.createElement("h1");
      //email.textContent=info.email;
      //card.append(email);
      //email
       let email=document.createElement("a");
       email.href="mailto:"+info.email;
       email.textContent=info.email;
       card.append(email);
       let br=document.createElement("br");
       let br1=document.createElement("br");
       card.append(br);
       card.append(br1);
      //mobile
      let mobile=document.createElement("a");
      mobile.href="tel:"+info.mobile;
      mobile.textContent=info.mobile;
      card.append(mobile);

      var button=document.createElement("a");
      button.textContent="View Profile";
      button.classList.add("btn");
      card.append(button);
 }
 //educational  data
 function education_data(edu_details){
     for(i in edu_details)
     {
     //created section with classname
     let sec=document.createElement("section");
     sec.classList.add("education");
     //getting degree name
     let deg=document.createElement("h4");
     deg.textContent=edu_details[i].degree;
     sec.appendChild(deg);
     //getting %
     let p=document.createElement("p");
     p.textContent="My percentege is:" +edu_details[i].percentage;
     sec.appendChild(p);
     // append the data into body
     bodyElement.appendChild(sec);
     }

     
 }