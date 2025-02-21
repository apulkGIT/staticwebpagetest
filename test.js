fetch("http://87.92.70.41:3000/log",{
      method: "POST",
      headers: new Headers({"Content-Type": "application/json"}),
      body: JSON.stringify({name:"Mina"}),
      referrerPolicy: "unsafe-url" 
    }).then(response => response.json())
      .then(responsejson => {
      console.log(responsejson);
     }); 
