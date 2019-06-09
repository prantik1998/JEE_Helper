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

class Creator {
    constructor() {
        this.doc = new jsPDF();
        this.doc.setFont('arial');
        this.doc.setFontSize(10)
        this.doc.setFontType("normal");
        this.doc.right_margin=20;
        this.doc.left_margin = 20;
        this.doc.top_margin = 30;
        this.doc.bottom_margin = 30;
        this.doc.spacing = 5;
        console.log(this.doc.internal.pageSize.height);
        console.log(this.doc.internal.pageSize.width);
        this.questions = [];
    }
    convertToVisibleLines(parents)
    {
        for(var i=0; i<parents.childNodes.length;++i)
        {
            this.convertToVisibleLines(parents.childNodes[i]);
        }
        if (parents.textContent != '')
        {
            if (parents.childNodes.length==0)
            {
                // Write logic here to break a big sentence into continuous smaller lines
            }
        }
    }

    // Adding a method to the constructor
    greet() {
        return `${this.name} says hello.`;
    }
    addQuestion(question)
    {
        return;
    }
    addFirstPageHead(text='October PMT')
    {
        this.doc.setPage(1);

    }
    addHeaders(text='This is a Question Paper')
    {
        const pageCount = this.doc.internal.getNumberOfPages();
        for(var i = 1; i < pageCount; i++) {
            this.doc.setPage(i+1);
            this.doc.text(text, this.doc.left_margin, 10);
        }
    }
    addFooters(text='Prime Viman Nagar Pune - 411014') {
        const pageCount = this.doc.internal.getNumberOfPages();
        for(var i = 0; i < pageCount; i++) {
            this.doc.setPage(i+1);
            this.doc.text(String(i+1),196,285);
            this.doc.text(text, this.doc.left_margin, 285);
        }
    }
    create_pdf(dictionary, show=false)
    {
        var div = document.getElementById("form_viewer")
        div.style.visibility = 'visible';
        div.innerHTML = "Q1. Hello this is going to be a page for easy creation of test papers. "+
        "asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdf hellow asdf asdf asdf asdfasdf asdf asdf asdf asdfasdf asdf asdf asdf asdf"+
        "asdf asdf asfd asfd asdf asdf asdf<br><br>"+
        "Please Choose the correct answer -<br>"+
        "Option1. Hello &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Option3. Bye<br>"+
        "Option2. Hi &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Option4. TakeCare<br>"+
        '<div align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/2/22/An_Experiment_on_a_Bird_in_an_Air_Pump_by_Joseph_Wright_of_Derby%2C_1768.jpg" height="250" width="260"></div>'
        html2canvas(div, { useCORS: true, allowTaint : true}).then(
            canvas =>
            {
                var img = canvas.toDataURL("image/jpeg,1.0");
                var string = this.doc.output('datauristring');
                console.log(string);
                this.doc.addImage(img, 'JPEG', 1, 2);
                this.doc.addPage();
                this.doc.setPage(2);
                var img = canvas.toDataURL("image/jpeg,1.0");
                this.doc.addImage(img, 'PNG', 2, 3);
                document.getElementById('pdf_viewer').src = this.doc.output('bloburl');
                document.getElementById('pdf_viewer').download = "TestPaper.pdf";
            }
        );
        div.style.visibility = 'hidden';
        div.style.height = "0"
        div.style.width = "0"
    }
    convert()
    {

        this.addFooters();
        this.addHeaders();
        var string = this.doc.output('datauristring');
        document.getElementById('pdf_viewer').src = string;
        document.getElementById('pdf_viewer').download = "TestPaper.pdf";


        this.convertToVisibleLines(document.getElementById('form_viewer'));
        html2canvas(document.querySelector("#form_viewer")).then(
            canvas =>
            {
                var img = canvas.toDataURL("image/jpeg,1.0");
                var string = this.doc.output('datauristring');
                console.log(string);
                this.doc.addImage(img, 'PNG', 1, 2);
                document.getElementById('pdf_viewer').src = this.doc.output('bloburl');
                document.getElementById('pdf_viewer').download = "TestPaper.pdf";
            }
        );
    }

}

render();
var doc = new Creator();
doc.create_pdf(dummy_dict, show=true);
//doc.convert();
//console.log(document.getElementById('form_viewer').textContent)



