# Test Papers Design and ToDo

So I(credits - Prantik) suggested that we make a Google Form kind of interface for creating question papers.

Question Papers have usually only these components - 

1) Question (Text)
2) Question (Diagram, which can have graphs or Drawings but we are ignoring that for now)
3) Answer (Type - MCQ, multiple answer, integer type, subjective)
4) Answer (Choices(If applicable))
5) Subject
6) Marks
7) Equations

We can provide a real-time rendering mechanism for the papers, everytime a new question is created.
A real-time rendering of the OMR can also be done

This will have an interface similar to latex with the rendered view on the right and the editable questions on the left

Replicate the Google Form view exactly. They have done a good job, we can just try to copy.

Functionalities which will be provided will be-

- [ ] Download as pdf
- [ ] Download as docx
- [ ] Automatic Clubbing of subject questions
- [ ] Automatic Clubbing of Answer on the basis of Type
- [ ] Automatic same marks for same type questions but should be editable
- [ ] Automatic new question should have same subject, marks, answer(Type) as previous question
- [ ] Should be saved and be editable
- [ ] Should be sharable between multiple users
- [ ] ``` Codes written inside these enclosing should be rendered. For ex. in text field a person can put <put image here> and while rendering this should be given the priority. This feature should also be there as a functionality.```

Form should return

{

    'First_Paper_Heading': 'October PMT'
    'header' : 'This is a Question Paper',
    'footer': 'Prime Viman Nagar Pune - 411014'
    'Instructions_Header': 'This is strict and serious and you have to follow it',
    'Instructions': ['Instruction_1', 'Instruction_2', 'Instruction_3'],
    'Total Marks': 360,
    'Total Time (mins)': 180,
    'Relaxation Quote': 'Lets Rock',
    # Keys denote till which question the marking scheme is valid. 
    # Like in this example Qns 1-10 have marking scheme [+4, -2] and for Qns 11-20 marking scheme is [+5, -2]
    'Paper': 
    {
        'Physics' : 
        {
            'Marking Scheme': {10: [4, -2], 20: [5, -3]},
            'Some Key Equations and Values': 'E=mc^2, E = hf',
            1: 
            {
                'Text': 'This is a question based on rotational Mechanics. 
                         This is supposed to be very \{Some Equation in latex style} hard and you won't be able to solve it. So Leave this question as it is.
                         Go to your hometown and start farming. Or take Bio-Technology.',
                'Question_Diagram': ImageInstance,
                'Answer_Type': 'MCQ',
                'Answer': ['OptionA', 'OptionB', 'OptionC', 'OptionD'],
            },
            2: 
            {
                'Text': 'This is a question based on rotational Mechanics. 
                         This is supposed to be very \{Some Equation in latex style} hard and you won't be able to solve it. So Leave this question as it is.
                         Go to your hometown and start farming. Or take Bio-Technology.',
                'Answer_Type': 'Integer Type',
                'Range': [[0, 100], [1000, 10000]],
                'Question_Diagram': None,
            },
        },
        'Chemistry' : 
        {
            'Marking Scheme': {10: [4, -2], 20: [5, -3]},
            'Some Key Equations and Values': 'E=mc^2, E = hf',
            1: 
            {
                'Text': 'This is a question based on rotational Mechanics. 
                         This is supposed to be very \{Some Equation in latex style} hard and you won't be able to solve it. So Leave this question as it is.
                         Go to your hometown and start farming. Or take Bio-Technology.',
                'Question_Diagram': ImageInstance,
                'Answer_Type': 'MCQ',
                'Answer': ['OptionA', 'OptionB', 'OptionC', 'OptionD'],
            },
            2: 
            {
                'Text': 'This is a question based on rotational Mechanics. 
                         This is supposed to be very \{Some Equation in latex style} hard and you won't be able to solve it. So Leave this question as it is.
                         Go to your hometown and start farming. Or take Bio-Technology.',
                'Answer_Type': 'Integer Type',
                'Range': [[0, 100], [1000, 10000]],
                'Question_Diagram': None,
            },
        },
        'Maths' : 
        {
            'Marking Scheme': {10: [4, -2], 20: [5, -3]},
            'Some Key Equations and Values': 'E=mc^2, E = hf',
            1: 
            {
                'Text': 'This is a question based on rotational Mechanics. 
                         This is supposed to be very \{Some Equation in latex style} hard and you won't be able to solve it. So Leave this question as it is.
                         Go to your hometown and start farming. Or take Bio-Technology.',
                'Question_Diagram': ImageInstance,
                'Answer_Type': 'MCQ',
                'Answer': ['OptionA', 'OptionB', 'OptionC', 'OptionD'],
            },
            2: 
            {
                'Text': 'This is a question based on rotational Mechanics. 
                         This is supposed to be very \{Some Equation in latex style} hard and you won't be able to solve it. So Leave this question as it is.
                         Go to your hometown and start farming. Or take Bio-Technology.',
                'Answer_Type': 'Integer Type',
                'Range': [[0, 100], [1000, 10000]],
                'Question_Diagram': None,
            },
        },
    },
    
}