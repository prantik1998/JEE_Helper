var auth2;
var check;
var profile;

window.onLoad=function() 
{

	//This function is used to load google signin api and initialise the gapi
	//We are using the Oauth2 client Id for authentication
	//The client Id is provided by google

    gapi.load('auth2', function()
    {
        gapi.auth2.init(
        {
			client_id:"396242970984-rbm8g6jlld6irfg0q6rsf2vm6tpcrk39.apps.googleusercontent.com"					
        });
    });
}

gapi.load('auth2', function() {	

	//This function is used to find out whether the user is logged in or not
	//This function also puts the users picture in the navbar make sure to name the img element tag as 'image'

	gapi.auth2.init().then(()=>{
		auth2 = gapi.auth2.getAuthInstance();
		check=auth2.isSignedIn.get();
		if(check)
		{
				console.log("True")
		}
		else
		{
			window.location.href="https://www.autonise.com/signin"	
			// window.location.href="https://localhost/signin.html"
		}
		profile = auth2.currentUser.get().getBasicProfile();
		console.log(profile);
		if (document.getElementById('image'))
		{		
			document.getElementById('image').src= profile.getImageUrl();
		}
		if (document.getElementById('name'))
		{
			document.getElementById('name').value=profile.getName();   
		}
		if (document.getElementById('pic'))
		{
			document.getElementById('pic').src= profile.getImageUrl();   
		}
		if (document.getElementById('People'))
		{
			get_people(profile.getEmail());
		}
		fetch("https://"+ip_address+"/get_information?name="+profile.getEmail()).then(response=>
		{
			return response.json();

		}).then(data=>
		{
			document.getElementById("BboxAnnotated").value=data['MoneyEarned'];
			document.getElementById("MoneyEarned").value=data['MoneyEarned']/400*120;

		}).catch(err=>
		{

		});
	});
});

function signOut()
{	

	//The signOut() function is used by the user to logout from the page and go to the website

	gapi.load('auth2', function()
	{								
		gapi.auth2.init().then(()=>{
			var auth2 = gapi.auth2.getAuthInstance();
				auth2.signOut().then(function () 
				{
				// window.location.href="https://www.autonise.com/signin.html"
				window.location.href="https://www.autonise.com"
				});
		});
	});
}
function onLoad() {

	//This function loads the google api of Auth2 
	
		gapi.load('auth2', function() {
			gapi.auth2.init();
		});
	}