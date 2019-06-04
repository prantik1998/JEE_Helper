var dummy_dict = {

    'First_Paper_Heading': 'October PMT',
    'header' : 'This is a Question Paper', // Done
    'footer': 'Prime Viman Nagar Pune - 411014', // Done
    'Instructions_Header': 'This is strict and serious and you have to follow it',
    'Instructions': ['Instruction_1', 'Instruction_2', 'Instruction_3'],
    'Total Marks': 360,
    'Total Time (mins)': 180,
    'Relaxation Quote': 'Lets Rock',
    'Paper': 
    {
        'Physics' : 
        {
            'Marking Scheme': {10: [4, -2], 20: [5, -3]},
            'Some Key Equations and Values': 'E=mc^2, E = hf',
            1: 
            {
                'Text': 'This is a question based on rotational Mechanics. This is supposed to be very \{Some Equation in latex style} hard and you won\'t be able to solve it. So Leave this question as it is. Go to your hometown and start farming. Or take Bio-Technology.',
                'Question_Diagram': '',
                'Answer_Type': 'MCQ',
                'Answer': ['OptionA', 'OptionB', 'OptionC', 'OptionD'],
            },
            2: 
            {
                'Text': 'This is a question based on rotational Mechanics. This is supposed to be very \{Some Equation in latex style} hard and you won\'t be able to solve it. So Leave this question as it is. Go to your hometown and start farming. Or take Bio-Technology.',
                'Answer_Type': 'Integer Type',
                'Range': [[0, 100], [1000, 10000]],
                'Question_Diagram': null,
            },
        },
        'Chemistry' : 
        {
            'Marking Scheme': {10: [4, -2], 20: [5, -3]},
            'Some Key Equations and Values': 'E=mc^2, E = hf',
            1: 
            {
                'Text': 'This is a question based on rotational Mechanics. This is supposed to be very \{Some Equation in latex style} hard and you won\'t be able to solve it. So Leave this question as it is. Go to your hometown and start farming. Or take Bio-Technology.',
                'Question_Diagram': '',
                'Answer_Type': 'MCQ',
                'Answer': ['OptionA', 'OptionB', 'OptionC', 'OptionD'],
            },
            2: 
            {
                'Text': 'This is a question based on rotational Mechanics. This is supposed to be very \{Some Equation in latex style} hard and you won\'t be able to solve it. So Leave this question as it is. Go to your hometown and start farming. Or take Bio-Technology.',
                'Answer_Type': 'Integer Type',
                'Range': [[0, 100], [1000, 10000]],
                'Question_Diagram': null,
            },
        },
        'Maths' : 
        {
            'Marking Scheme': {10: [4, -2], 20: [5, -3]},
            'Some Key Equations and Values': 'E=mc^2, E = hf',
            1: 
            {
                'Text': 'This is a question based on rotational Mechanics. This is supposed to be very \{Some Equation in latex style} hard and you won\'t be able to solve it. So Leave this question as it is. Go to your hometown and start farming. Or take Bio-Technology.',
                'Question_Diagram': '',
                'Answer_Type': 'MCQ',
                'Answer': ['OptionA', 'OptionB', 'OptionC', 'OptionD'],
            },
            2: 
            {
                'Text': 'This is a question based on rotational Mechanics. This is supposed to be very \{Some Equation in latex style} hard and you won\'t be able to solve it. So Leave this question as it is. Go to your hometown and start farming. Or take Bio-Technology.',
                'Answer_Type': 'Integer Type',
                'Range': [[0, 100], [1000, 10000]],
                'Question_Diagram': null,
            },
        },
    },
    
}
var doc = new jsPDF();
doc.setFont('arial');
doc.setFontSize(10)
doc.setFontType("normal");
doc.right_margin=20;
doc.left_margin = 20;
doc.top_margin = 30;
doc.bottom_margin = 30;
doc.spacing = 5;

function addQuestion(question)
{
	return;
}
function addFirstPageHead(text='October PMT')
{
    doc.setPage(1);
    
}
function addHeaders(text='This is a Question Paper')
{
	const pageCount = doc.internal.getNumberOfPages();
    for(var i = 1; i < pageCount; i++) {
    	doc.setPage(i+1);
        doc.text(text, doc.left_margin, 10);
    }
}
function addFooters(text='Prime Viman Nagar Pune - 411014') {
    const pageCount = doc.internal.getNumberOfPages();
    for(var i = 0; i < pageCount; i++) {
    	doc.setPage(i+1);
        doc.text(String(i+1),196,285);
        doc.text(text, doc.left_margin, 285);
    }
}

function writeText(text, start_x, start_y, spacing=null, fontSize=null, page=null)
{
	if (spacing != null)
	{
		doc.spacing = spacing;
	}
	if (fontSize != null)
	{
		doc.setFontSize(7);
	}	
	if (page != null)
	{
		doc.page=page; // use this as a counter.
		doc.setPage(page);
	}

	var splitTitle = doc.splitTextToSize(text, doc.internal.pageSize.width - doc.right_margin - start_x)
	var pageHeight = doc.internal.pageSize.height;
	
	for( var i=0; i< splitTitle.length; i++){
		if(start_y > doc.internal.pageSize.height - doc.bottom_margin)
		{
			start_y = doc.top_margin;
			doc.addPage();
		}
		doc.text(start_x, start_y, splitTitle[i]);
		start_y = start_y + doc.spacing
	}
}

function create_pdf(dictionary, show=false)
{
	
	var y = doc.internal.pageSize.height - 20;
	var string = 'Hello world.Hello world.Hello world. \nHello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.Hello world.';
	writeText(string, 20, y)
	
	if (show)
	{
		addFooters();
		addHeaders();
		var string = doc.output('datauristring');
		document.getElementById('pdf_viewer').src = string;
		document.getElementById('pdf_viewer').download = "TestPaper.pdf";
	}
}

render();
create_pdf(dummy_dict, show=true);
