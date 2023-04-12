$("#adminlgbtn").click(function(event){
    event.preventDefault()

    let adname = $("input[name=email]").val();
    let adpass = $("input[name=password]").val();


    console.log(adname + adpass)

    $.ajax({
        url: "",
        // headers: { "Content-type": "application/json; charset=UTF-8" },
        method: "get",
        adname: adname,
        adpass: adpass,    
        success: function(data, value) {
        console.log(data)
        }
      });

})