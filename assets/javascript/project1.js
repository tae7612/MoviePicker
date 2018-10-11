// Name: Tiffany Ellis
// Program: project1.js
// Date: October 4, 2017
// Update: Edited Create Levels to print out results
//			Added startUp function
// ISTE -340 project 1



// builds the page layout
function startUp()
{	
	checkCookie();	
	LevelOne();
	setImg();
}


// This dynamically creates the the level of the question dependent 
// on the selected choice give.
function createLevels(choice)
{
	// list of options for user to choose
	var info = data[choice];
	
	// Prints results when the array list is done and becomes undefined
	if( info == undefined)
	{
		getResults();
	}
	else
	{
	
		// Creates the Div container to hold next level
		var node = document.createElement('div');
		
		// Loads title message if it has not been done 
		if( load == false)
		{
			var heading = document.createElement('h1');
			var h_text = document.createTextNode(load_message);
			heading.appendChild(h_text);
			node.appendChild(heading);
			load = true;
		}
	
		// Create prompt for choice
		var prompt = document.createElement('h2');
		var text = document.createTextNode(info[0]);
		prompt.appendChild(text); 
	
		node.appendChild(prompt);
	
		// Create the list of options 
		var selectnode = document.createElement('select');
		selectnode.setAttribute('onchange','selectChoice(this, this.selectedIndex)');
	
		for( var i =1; i < info.length; i++)
		{
			var option = document.createElement('option');
			// Set value of option
			option.setAttribute('value', info[i]);
			// Set label of option
			var label = document.createTextNode(info[i]);
			option.appendChild(label);
			
			//Set the pre-selected option
			if( info[i] == 'Choose an option' )
			{
				option.setAttribute('selected', true);
			}	
		
			selectnode.appendChild(option);
		} 
		node.appendChild(selectnode);
		
		// Div has been created
		document.getElementById('container').appendChild(node);
	
	}
}

// Checks to see if any of the previous choice were changed
// and then set them accordingly
function RemoveLevels(option)
{
	var choice = option;
	
	while (choice.parentNode != choice.parentNode.parentNode.lastChild)
	{
		choice.parentNode.parentNode.removeChild(choice.parentNode.parentNode.lastChild);	
	}
}


// Creates the First Choice Level, Movies
function LevelOne()
{
	
	createLevels(firstchoice);	
}

// Runs the appropriate function when a valid option
// is selected
function selectChoice(option,index)
{
	RemoveLevels(option);
	
	var choice = option[index].value;
	// Checks if a valid option was chosen
	if( choice != 'Choose an option' )
	{
		createLevels(choice);
	}	
}

// Displays the choices the user selected 
function getResults()
{
	var res = document.createElement('div');	
	var poster_chosen = document.createElement('img');	
	var para_chosen = document.createElement('h3');
	
	// List of select which contain the chosen value
	var chosen_sel = document.getElementsByTagName('select'); 
	var t = document.createTextNode("You chose " + chosen_sel[0].value + " to watch a " + 
							chosen_sel[1].value + " called " + chosen_sel[2].value );
	para_chosen.appendChild(t);
	
	//Retrieves selected movie poster and set Attributes
	var poster = FindPoster(chosen_sel);
	poster_chosen.setAttribute('src', poster);
	res.setAttribute('class', 'slide post_fade');
	
	//Appends movie poster and paragraph to slideshow
	res.appendChild(poster_chosen);
	res.appendChild(para_chosen);
	document.getElementById('slideshow').appendChild(res);
	
	//Alerts slideshow of the new slide
	newSlide();
	
}

// Finds the movie poster according to the options selected
// by the user
function FindPoster (sel_arr)
{
	var pic;
	
	switch(sel_arr[0].value)
	{
		case 'Cinema':
			switch(sel_arr[1].value)
			{
				case 'Comedy':
					pic = slide['Comedy'];
					switch(sel_arr[2].value)
					{
						case 'Girls Trip':
						 	return "assets/media/images/cinema/comedy/"+pic[0];
						case 'Emoji Movie': 
						 	return "assets/media/images/cinema/comedy/"+pic[1];
						case 'Spider-Man: Homecoming':
							return "assets/media/images/cinema/comedy/"+pic[2];
					}
					break;
				case 'Action':
					pic = slide['Action'];
					switch(sel_arr[2].value)
					{
						case 'Guardian of the Galaxy':
							return "assets/media/images/cinema/action/"+pic[0];
						case 'Pirates of the Caribbean':
							return "assets/media/images/cinema/action/"+pic[1];
						case 'Wonder Woman':
							return "assets/media/images/cinema/action/"+pic[2];
					}
					break;
				case 'Thriller':
					pic = slide['Thriller'];
					switch(sel_arr[2].value)
					{
						case 'The Dark Tower':
							return "assets/media/images/cinema/thriller/"+pic[0];
						case 'It':
							return "assets/media/images/cinema/thriller/"+pic[1];
						case ' Annabelle Creation':
							return "assets/media/images/cinema/thriller/"+pic[2];
					}
					break;
				default:
					break;
			}
			break;
		case 'Netflix':
			switch(sel_arr[1].value)
			{
				case 'Original Movie':
					pic = slide['Original Movie'];
					switch(sel_arr[2].value)
					{
						case 'Burning Sands':
							return "assets/media/images/netflix/original/"+pic[0];
						case 'Coin Heist':
							return "assets/media/images/netflix/original/"+pic[1];
						case 'XOXO':
							return "assets/media/images/netflix/original/"+pic[2];
						case 'BLAME!':
							return "assets/media/images/netflix/original/"+pic[3];
					}
					break;
				case 'TV Series':
					pic = slide['TV Series'];
					switch(sel_arr[2].value)
					{
						case 'Dear White People':
							return "assets/media/images/netflix/series/"+pic[0];
						case 'Jessica Jones':
							return "assets/media/images/netflix/series/"+pic[1];
						case 'Stranger Things':
							return "assets/media/images/netflix/series/"+pic[2];
						case 'Voltron: The Legendary Defender':
							return "assets/media/images/netflix/series/"+pic[3];
					}
					break;
				default:
					break;
			}
			break;
		case 'Rent':
			switch(sel_arr[1].value)
			{
				case 'Classic':
					pic = slide['Classic'];
					switch(sel_arr[2].value)
					{
						case 'Casablanca':
							return "assets/media/images/rent/classic/"+pic[0];
						case 'All about Eve':
							return "assets/media/images/rent/classic/"+pic[1];
						case 'Jaws':
							return "assets/media/images/rent/classic/"+pic[2];
						case 'Psycho':
							return "assets/media/images/rent/classic/"+pic[3];
						case 'Titanic':
							return "assets/media/images/rent/classic/"+pic[4];
					}
					break;
				case 'Recent':
					pic = slide['Recent'];
					switch(sel_arr[2].value)
					{
						case 'Ratatouille':
							return "assets/media/images/rent/recent/"+pic[0];
						case 'Inception':
							return "assets/media/images/rent/recent/"+pic[1];
						case 'Gladiator':
							return "assets/media/images/rent/recent/"+pic[2];
						case 'Ghost Rider':
							return "assets/media/images/rent/recent/"+pic[3];
					}
					break;
				default:
					break;
			}
			break;
		default:
			break;
	}

}

// Check to see if the user has visited the site before
function checkCookie()
{
	var greeting; // The message to be printed
	var greet_message = document.createElement('h1');
		
	// If user has not visited function will prompt user for name 
	// and creates a cookie
	if( GetCookie('user_id') == null )
	{
		// null means the cookie does not exist, first time here
		var getName = prompt('Hey there first timer, Tell us your name!','');
		while ( getName == "")
		{
			getName = prompt('Name was not entered. Please try again!','');
		}
		
		greeting = document.createTextNode('Welcome, '+getName+ '! This is your first time here.');
		greet_message.appendChild(greeting);
		document.getElementById('greet').appendChild(greet_message);
			
		SetCookie('user_id',getName); // Sets cookie
		SetCookie('hit_count','1');
	}
	// If the user has already visited function will retrieve the 
	// cookie and print out name and number of times user has
	// visited the site
	 else 
	{
		var getName = GetCookie('user_id'); // Name of user
		var getHits = GetCookie('hit_count'); // Number of times user has visited page
		getHits = parseInt(getHits) + 1;
		
		greeting = document.createTextNode('Welcome back ' +getName+ ' you have visited '+getHits+' times.');
		greet_message.appendChild(greeting);
		document.getElementById('greet').appendChild(greet_message);
		
		SetCookie('hit_count',getHits);	
							
	} // end if

}



var slideIndex = 0;


// Sends slideshow back a slide
function prev()
{
	slideIndex--;
	slideShow(); 
}

// Moves on the next slide in slide show
function next()
{
	slideIndex++;
	slideShow(); 
}

// Displays the new slide added to the slideshow
function newSlide()
{
	var slides = document.querySelectorAll('.slide');
	var slideIndex = slides.length - 1;
	for(i =0; i < slides.length; i++)
	{
		slides[i].style.display ="none";
	}
	slides[slideIndex].style.display = "block";  
	
}

// Changes the slide in the slideshow
function slideShow()
{
	var slides = document.querySelectorAll('.slide');
	// Resets the slideshow to the beginning when use tries 
	// to go forward at the end
	if (slideIndex >= slides.length) 
	{
		slideIndex = 0;
	}
	// Sets slideshow to the end when user tries to back 
	// from the beginning
	else if(slideIndex < 0)
	{
		slideIndex = slides.length - 1;
	} 
	// Set all other slides to not display
	for(i =0; i < slides.length; i++)
	{
		slides[i].style.display ="none";
	}
	// Display chosen slide
	slides[slideIndex].style.display = "block";  
	  
}

// Creates popcorn mage a bottom of the screen
function setImg()
{
	var pop = document.createElement('img');
	pop.setAttribute('src', 'assets/media/images/giphy.gif');
	pop.setAttribute('id', 'popcorn');
	document.body.appendChild(pop);
		
}
