$(document).ready(function()
{  

        $.ajax({
            type:"GET",
            url:"https://newsapi.org/v2/everything?q=bitcoin&from=2019-06-30&sortBy=publishedAt&apiKey=ed023e439dde4269a688277a494cd8be",

            beforeSend: function()
               { $("#loader").show();},
            
           success:function(data)
            { 
                console.log(data);
                var output='<div class="card container" style="margin-top: 30px">';
                for(var i in 70)
                    {
                        $("#loader").hide();
                        output+='<h5 class="card-header" id="head">'+data.article[i].title+'</h5>';
                        output+='<div class="card-body"> <img src="'+article[i].urlToImage+'>';
                        output+='<p class="card-text">'+article[i].description+'</p>';
                        output+='<a href="'+article[i].urlToImage+'" class="btn btn-primary">Read More</a></div></div>';
                        
                    }
                $("#result").html(output);
            }
        });

});