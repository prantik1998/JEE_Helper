var dummy_dict = {

    'First_Paper_Heading': 'October PMT',
    'header' : 'This is a Question Paper',
    'footer': 'Prime Viman Nagar Pune - 411014',
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
doc.setFontSize(8);


function addQuestion(question)
{
	return;
}
function addHeader(header)
{
	return;
}
function addFooters() {
    const pageCount = doc.internal.getNumberOfPages();
    for(var i = 0; i < pageCount; i++) {
        doc.text(String(i),196,285);
    }
}

function create_pdf(dictionary, show=false)
{
	doc.page=1; // use this as a counter.
	doc.text(20, 20, 'Hello world. I am ready to destroy.');
	doc.addPage();
	if (show)
	{
		addFooters();
		var string = doc.output('datauristring');
		document.getElementById('pdf_viewer').src = string;
		document.getElementById('pdf_viewer').download = "TestPaper.pdf";
	}
}

render();
create_pdf(dummy_dict, show=true);
