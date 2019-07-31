$(document).ready(function()
{   var output="";
    
        $.ajax({
            type:"GET",
            url:"https://newsapi.org/v2/top-headlines?country=in&category=&apiKey=b10e2e754b6c4f658f64feeb789d2c3b",

            beforeSend: function()
               { $("#loader").show();},
            
           success:function(data)
            {   $("#loader").hide();
                //console.log(data);
                //alert(data['articles'][1].title);

                for(var i in data['articles'])
                    {   //alert(data['articles'][i].title);
                        //console.log(data['articles'][i].title);
                        output+='<div class="card container" style="margin-top: 30px">';
                        output+='<h5 class="card-header" id="head">'+data['articles'][i].title+'</h5>';
                        output+='<div class="card-body"> <img src="'+data['articles'][i].urlToImage+'" height="300" width="600">';
                        output+='<p class="card-text">'+data['articles'][i].description+'</p>';
                        output+='<a href="'+data['articles'][i].url+'" class="btn btn-primary">Read More</a></div></div>';
                        
                    }
                    console.log(output);
                $("#result").html(output);
            }
        });

});